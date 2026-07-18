#!/usr/bin/env node
import fs from 'node:fs/promises'
import path from 'node:path'

const args = parseArgs(process.argv.slice(2))

if (args.help) {
  printHelp()
  process.exit(0)
}

const projectRoot = path.resolve(args.project || process.cwd())
const packageFile = path.join(projectRoot, 'package.json')
const packageJson = await readJson(packageFile, true)
const files = await walk(projectRoot)
const relativeFiles = files.map(file => slash(path.relative(projectRoot, file)))
const vueFiles = files.filter(file => file.endsWith('.vue'))
const samples = await inspectVueFiles(vueFiles.slice(0, 40))

const report = {
  projectRoot,
  stack: {
    packageName: packageJson.name || null,
    vue: findDependency(packageJson, 'vue'),
    vuex: findDependency(packageJson, 'vuex'),
    uniApp: findDependency(packageJson, '@dcloudio/uni-app'),
    scripts: Object.keys(packageJson.scripts || {}).filter(name => /build|dev|serve|lint|test|manifest|pages/i.test(name))
  },
  configFiles: {
    pages: pickExisting(relativeFiles, ['src/pages.json', 'pages.json']),
    manifest: pickExisting(relativeFiles, ['src/manifest.json', 'manifest.json']),
    vueConfig: pickExisting(relativeFiles, ['vue.config.js', 'vue.config.cjs']),
    environmentCandidates: relativeFiles.filter(file => /(^|\/)(env|config)(\.|\/)/i.test(file)).slice(0, 30)
  },
  conventions: {
    vueFileCount: vueFiles.length,
    optionsApiSamples: samples.filter(item => item.optionsApi).length,
    scriptSetupSamples: samples.filter(item => item.scriptSetup).length,
    sectionOrders: countBy(samples.map(item => item.sectionOrder)),
    pageRoots: detectPageRoots(relativeFiles),
    componentRoots: detectNamedRoots(relativeFiles, 'components'),
    storeCandidates: relativeFiles.filter(file => /(^|\/)(store|vuex)(\/|\.)/i.test(file)).slice(0, 40),
    requestCandidates: relativeFiles.filter(file => /(^|\/)(api|apis|service|services|request|http)(\/|\.|-)/i.test(file)).slice(0, 60)
  },
  warnings: buildWarnings(packageJson, relativeFiles, samples)
}

console.log(JSON.stringify(report, null, args.pretty ? 2 : 0))

function parseArgs (argv) {
  const result = {}
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index]
    if (token === '--help' || token === '-h') result.help = true
    if (token === '--pretty') result.pretty = true
    if (token === '--project') {
      result.project = argv[index + 1]
      index += 1
    }
  }
  return result
}

function printHelp () {
  console.log('用法: node inspect-uniapp-vue2.mjs [--project <目录>] [--pretty]')
  console.log('只读输出项目约定候选，不创建或修改业务文件。')
}

async function walk (root) {
  const ignored = new Set(['.git', 'node_modules', 'dist', 'unpackage', 'coverage', 'generated-skills'])
  const result = []

  async function visit (directory) {
    const entries = await fs.readdir(directory, { withFileTypes: true })
    for (const entry of entries) {
      if ((entry.isDirectory() && entry.name.startsWith('.')) || ignored.has(entry.name) || entry.isSymbolicLink()) continue
      const absolute = path.join(directory, entry.name)
      if (entry.isDirectory()) {
        await visit(absolute)
      } else if (entry.isFile()) {
        result.push(absolute)
      }
    }
  }

  await visit(root)
  return result
}

async function inspectVueFiles (files) {
  return Promise.all(files.map(async file => {
    const content = await fs.readFile(file, 'utf8')
    const sections = ['template', 'script', 'style']
      .map(name => ({ name, index: content.search(new RegExp(`<${name}(\\s|>)`, 'i')) }))
      .filter(item => item.index >= 0)
      .sort((a, b) => a.index - b.index)
      .map(item => item.name)
    return {
      optionsApi: /export\s+default\s*\{/.test(content),
      scriptSetup: /<script[^>]*\bsetup\b/i.test(content),
      sectionOrder: sections.join('-') || 'unknown'
    }
  }))
}

async function readJson (file, required = false) {
  try {
    return JSON.parse(await fs.readFile(file, 'utf8'))
  } catch (error) {
    if (!required && error.code === 'ENOENT') return {}
    throw new Error(`无法读取 ${file}: ${error.message}`)
  }
}

function findDependency (packageJson, name) {
  return (packageJson.dependencies && packageJson.dependencies[name]) ||
    (packageJson.devDependencies && packageJson.devDependencies[name]) || null
}

function pickExisting (files, candidates) {
  return candidates.find(candidate => files.includes(candidate)) || null
}

function detectPageRoots (files) {
  return [...new Set(files.map(file => {
    const match = file.match(/^((?:src\/)?pages[^/]*)(?:\/|$)/)
    return match ? match[1] : null
  }).filter(Boolean))].sort()
}

function detectNamedRoots (files, directoryName) {
  const pattern = new RegExp(`^(.+?\/${directoryName})(?:\/|$)`)
  return [...new Set(files.map(file => {
    const match = file.match(pattern)
    return match ? match[1] : null
  }).filter(Boolean))].sort((left, right) => {
    const leftScore = left.startsWith('src/') ? 0 : 1
    const rightScore = right.startsWith('src/') ? 0 : 1
    return leftScore - rightScore || left.length - right.length || left.localeCompare(right)
  }).slice(0, 60)
}

function countBy (values) {
  return values.reduce((result, value) => {
    result[value] = (result[value] || 0) + 1
    return result
  }, {})
}

function buildWarnings (packageJson, files, samples) {
  const warnings = []
  const vueVersion = findDependency(packageJson, 'vue') || ''
  if (!/^\D*2\./.test(vueVersion) && !vueVersion.includes('< 2.7')) warnings.push('未明确识别到 Vue 2 版本，请人工核对。')
  if (!findDependency(packageJson, '@dcloudio/uni-app')) warnings.push('未识别到 @dcloudio/uni-app 依赖，请确认是否为 HBuilderX 管理项目。')
  if (!pickExisting(files, ['src/pages.json', 'pages.json'])) warnings.push('未找到常见 pages.json，需定位路由生成源。')
  if (samples.some(item => item.scriptSetup)) warnings.push('抽样文件包含 script setup，需确认是否混合 Vue 版本。')
  return warnings
}

function slash (value) {
  return String(value).replace(/\\/g, '/')
}
