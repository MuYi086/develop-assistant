#!/usr/bin/env node
import fs from 'node:fs/promises'
import path from 'node:path'

const args = parseArgs(process.argv.slice(2))

if (args.help || args.h) {
  printHelp()
  process.exit(0)
}

const cwd = process.cwd()
const root = normalizeRoot(args.root || 'pagesA')
const page = normalizePage(args.page || '')
const title = args.title || '新页面'
const domain = args.domain || inferDomain(page)
const storeModule = toCamel(args.store || domain)
const apiModule = normalizeApiModule(args.apiModule || args['api-module'] || `api_${toSnake(domain)}`)
const includeH5 = Boolean(args.h5 || args['include-h5'])
const dryRun = Boolean(args.dryRun || args['dry-run'])
const endpoints = normalizeEndpoints(args.endpoint, domain)

if (!page) {
  fail('缺少 --page，例如 --page demoFeature/demoFeature')
}

const names = buildNames({ root, page, domain, storeModule, apiModule, title, endpoints })
const writes = []
const updates = []

stageNewFile(names.pageFile, renderPage(names))
stageNewFile(names.componentFile, renderComponent(names))
stageNewFile(names.apiFile, renderApi(names))
stageNewFile(names.storeFile, renderStore(names))
stageUpdate('src/utils/api/index.js', text => insertApiIndex(text, names))
stageUpdate('src/store/getters.js', text => insertGetter(text, names))
stageUpdate('zxScript/basicPages.mjs', text => insertMiniRoute(text, names))

if (includeH5) {
  stageUpdate('zxScript/basicPages.h5.mjs', text => insertH5Route(text, names))
}

await applyOperations()

function parseArgs(argv) {
  const result = { endpoint: [] }
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i]
    if (!token.startsWith('--')) continue
    const rawKey = token.slice(2)
    const next = argv[i + 1]
    const key = rawKey.replace(/-([a-z])/g, (_, char) => char.toUpperCase())
    if (next && !next.startsWith('--')) {
      if (key === 'endpoint') {
        result.endpoint.push(next)
      } else {
        result[key] = next
        result[rawKey] = next
      }
      i += 1
    } else {
      result[key] = true
      result[rawKey] = true
    }
  }
  return result
}

function printHelp() {
  console.log(`
Usage:
  node scripts/scaffold-feature.mjs --root pagesF --page demoFeature/demoFeature --title 示例页面 --domain demoFeature --endpoint apiName=/path [--h5] [--dry-run]

Options:
  --root          分包 root，例如 pagesA、pagesF；主包可填 pages
  --page          root 内页面路径，例如 demoFeature/demoFeature
  --title         navigationBarTitleText
  --domain        领域名，用于 api/store/getter 命名
  --store         store 模块名，默认由 domain 转 camelCase
  --api-module    API 文件名，默认 api_<domain_snake>
  --endpoint      接口常量和路径，可重复传入：name=/wxminiapp/...
  --h5            同步维护 zxScript/basicPages.h5.mjs
  --dry-run       只打印计划，不写文件
`)
}

function normalizeRoot(value) {
  return trimSlash(value || 'pagesA')
}

function normalizePage(value) {
  let pagePath = slash(value || '')
  pagePath = pagePath.replace(/^src\//, '')
  pagePath = pagePath.replace(/\.vue$/, '')
  pagePath = trimSlash(pagePath)
  return pagePath
}

function normalizeApiModule(value) {
  return trimSlash(value).replace(/\.js$/, '')
}

function normalizeEndpoints(value, domainValue) {
  const list = Array.isArray(value) ? value : value ? [value] : []
  const parsed = list.flatMap(item => String(item).split(',')).map(item => item.trim()).filter(Boolean).map(item => {
    const index = item.indexOf('=')
    if (index === -1) {
      return {
        name: item,
        path: `/wxminiapp/wx/client/${toCamel(domainValue)}/query`
      }
    }
    return {
      name: item.slice(0, index).trim(),
      path: item.slice(index + 1).trim()
    }
  })

  if (parsed.length > 0) return parsed

  return [{
    name: `${toCamel(domainValue)}Query`,
    path: `/wxminiapp/wx/client/${toCamel(domainValue)}/query`
  }]
}

function inferDomain(pagePath) {
  const segments = pagePath.split('/')
  return segments[segments.length - 1] || 'demoFeature'
}

function buildNames(input) {
  let routePath = input.page
  if (routePath.startsWith(`${input.root}/`)) {
    routePath = routePath.slice(input.root.length + 1)
  }
  const pageName = path.posix.basename(routePath)
  const pageClass = toKebab(pageName)
  const pascalName = toPascal(input.storeModule)
  const infoKey = `${input.storeModule}Info`
  const actionName = `doGet${pascalName}Info`
  const mutationName = `SET_${toSnake(infoKey).toUpperCase()}`
  const apiVarName = sanitizeIdentifier(input.apiModule)
  const componentName = `${pascalName}Panel`
  const rootPrefix = input.root === 'pages' ? '' : `${input.root}/`
  const fullRoutePath = `${rootPrefix}${routePath}`

  return {
    ...input,
    routePath,
    fullRoutePath,
    pageName,
    pageClass,
    pascalName,
    infoKey,
    actionName,
    mutationName,
    apiVarName,
    componentName,
    firstEndpointName: input.endpoints[0].name,
    pageFile: path.join('src', input.root, `${routePath}.vue`),
    pageDir: path.join('src', input.root, path.posix.dirname(routePath)),
    componentFile: path.join('src', input.root, path.posix.dirname(routePath), 'components', `${componentName}.vue`),
    apiFile: path.join('src', 'utils', 'api', `${input.apiModule}.js`),
    storeFile: path.join('src', 'store', 'modules', `${input.storeModule}.js`)
  }
}

function renderPage(names) {
  return `<template>
  <view class="container ${names.pageClass}">
    <${names.componentName} :info="${names.infoKey}"></${names.componentName}>
  </view>
</template>

<script>
import ${names.componentName} from './components/${names.componentName}'
import { config, util, api } from '@/utils/index'
import { mapGetters } from 'vuex'

export default {
  components: {
    ${names.componentName}
  },
  computed: {
    ...mapGetters([
      '${names.infoKey}'
    ])
  },
  data () {
    return {
      defaultImg: config.defaultImg,
      pageParams: {},
      dataLoading: false
    }
  },
  onLoad (op) {
    this.pageParams = op || {}
    this.getPageInfo()
  },
  onUnload () {
    this.$store.dispatch('${names.storeModule}/reset')
  },
  onShareAppMessage: function (res) {
    const self = this
    if (res.from === 'button') {
      const shareMsg = util.getShareObj(self)
      return util.commonShareAppMessage(shareMsg)
    }
    return util.commonShareAppMessage()
  },
  methods: {
    getParams () {
      return {
        ...this.pageParams
      }
    },
    getPageInfo () {
      this.dataLoading = true
      const url = api.${names.firstEndpointName}
      const params = this.getParams()
      const method = 'POST'
      return this.$store.dispatch('${names.storeModule}/${names.actionName}', { url, params, method }).then(res => {
        this.dataLoading = false
        return res
      }).catch(err => {
        this.dataLoading = false
        uni.showToast({ title: err.data && err.data.msg ? err.data.msg : err.msg || '请求失败', icon: 'none', duration: 1500 })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container.${names.pageClass} {
  min-height: 100vh;
  background: #f7f8fa;
}
</style>
`
}

function renderComponent(names) {
  return `<template>
  <view class="component ${names.pageClass}-panel">
    <view class="${names.pageClass}-panel__title">{{ title }}</view>
  </view>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    title () {
      return this.info.title || this.info.name || '${names.title}'
    }
  }
}
</script>

<style lang="scss" scoped>
.component.${names.pageClass}-panel {
  padding: 24rpx;
}

.${names.pageClass}-panel__title {
  font-size: 32rpx;
  font-weight: 600;
  color: #222;
}
</style>
`
}

function renderApi(names) {
  const lines = names.endpoints.map(endpoint => `  ${endpoint.name}: '${endpoint.path}'`)
  return `module.exports = {
${lines.join(',\n')}
}
`
}

function renderStore(names) {
  return `const { util } = require('@/utils/index')

const initState = {
  ${names.infoKey}: {}
}

const state = {
  ...initState
}

const mutations = {
  ${names.mutationName}: (state, ${names.infoKey}) => {
    state.${names.infoKey} = ${names.infoKey}
  }
}

const actions = {
  ${names.actionName} ({ commit }, requestParams) {
    return new Promise((resolve, reject) => {
      util.postDataPromise(requestParams).then(res => {
        const data = res.data || {}
        commit('${names.mutationName}', data)
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  reset () {
    return util.storeModuleReset(state, initState)
  },
  recover ({ commit }, recoverState) {
    return util.storeModuleReset(state, recoverState)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
`
}

function insertApiIndex(text, names) {
  let nextText = text
  const requireLine = `const ${names.apiVarName} = require('./${names.apiModule}')`
  if (!nextText.includes(requireLine)) {
    const apiObjectIndex = nextText.indexOf('const api = {')
    if (apiObjectIndex === -1) fail('src/utils/api/index.js 未找到 const api = {')
    nextText = `${nextText.slice(0, apiObjectIndex)}${requireLine}\n${nextText.slice(apiObjectIndex)}`
  }

  const spreadLine = `  ...${names.apiVarName},`
  if (!nextText.includes(spreadLine)) {
    const marker = 'const api = {\n'
    const index = nextText.indexOf(marker)
    if (index === -1) fail('src/utils/api/index.js 未找到 api 对象起始位置')
    nextText = `${nextText.slice(0, index + marker.length)}${spreadLine}\n${nextText.slice(index + marker.length)}`
  }
  return nextText
}

function insertGetter(text, names) {
  const getterLine = `  ${names.infoKey}: state => state.${names.storeModule}.${names.infoKey},`
  if (text.includes(getterLine)) return text
  const marker = '\n}\nexport default getters'
  const index = text.indexOf(marker)
  if (index === -1) fail('src/store/getters.js 未找到 getters 结尾')
  return `${text.slice(0, index)}${getterLine}\n${text.slice(index)}`
}

function insertMiniRoute(text, names) {
  if (text.includes(`path: '${names.routePath}'`)) return text
  const routeBlock = renderMiniRouteBlock(names)
  if (names.root === 'pages') {
    const marker = '  pages: [\n'
    const index = text.indexOf(marker)
    if (index === -1) fail('zxScript/basicPages.mjs 未找到主包 pages')
    return `${text.slice(0, index + marker.length)}${routeBlock.main}${text.slice(index + marker.length)}`
  }

  const rootMarker = `root: '${names.root}'`
  const rootIndex = text.indexOf(rootMarker)
  if (rootIndex === -1) fail(`zxScript/basicPages.mjs 未找到分包 root: ${names.root}`)
  const pagesMarker = 'pages: [\n'
  const pagesIndex = text.indexOf(pagesMarker, rootIndex)
  if (pagesIndex === -1) fail(`zxScript/basicPages.mjs 未找到 ${names.root} 的 pages 数组`)
  return `${text.slice(0, pagesIndex + pagesMarker.length)}${routeBlock.sub}${text.slice(pagesIndex + pagesMarker.length)}`
}

function insertH5Route(text, names) {
  if (text.includes(`path: '${names.fullRoutePath}'`)) return text
  const routeBlock = renderH5RouteBlock(names)
  const marker = '  pages: [\n'
  const index = text.indexOf(marker)
  if (index === -1) fail('zxScript/basicPages.h5.mjs 未找到 pages 数组')
  return `${text.slice(0, index + marker.length)}${routeBlock}${text.slice(index + marker.length)}`
}

function renderMiniRouteBlock(names) {
  const style = `        {
          path: '${names.routePath}',
          style: {
            navigationBarTitleText: '${names.title}',
            enablePullDownRefresh: false
          }
        },
`
  const main = `    {
      path: '${names.routePath}',
      style: {
        navigationBarTitleText: '${names.title}',
        enablePullDownRefresh: false
      }
    },
`
  return { sub: style, main }
}

function renderH5RouteBlock(names) {
  return `    {
      path: '${names.fullRoutePath}',
      style: {
        navigationBarTitleText: '${names.title}',
        navigationStyle: 'custom',
        enablePullDownRefresh: false
      }
    },
`
}

function stageNewFile(filePath, content) {
  writes.push({ filePath, content })
}

function stageUpdate(filePath, updater) {
  updates.push({ filePath, updater })
}

async function applyOperations() {
  const plan = []
  for (const item of writes) {
    const absolute = path.resolve(cwd, item.filePath)
    plan.push(`CREATE ${item.filePath}`)
    if (dryRun) continue
    await assertMissing(absolute)
    await fs.mkdir(path.dirname(absolute), { recursive: true })
    await fs.writeFile(absolute, item.content, 'utf8')
  }

  for (const item of updates) {
    const absolute = path.resolve(cwd, item.filePath)
    const current = await fs.readFile(absolute, 'utf8')
    const next = item.updater(current)
    if (current === next) {
      plan.push(`SKIP ${item.filePath}`)
      continue
    }
    plan.push(`UPDATE ${item.filePath}`)
    if (!dryRun) await fs.writeFile(absolute, next, 'utf8')
  }

  console.log(plan.join('\n'))
  console.log('\n完成后运行对应 npm run zx:manifest:<platform>:<env> 生成 src/pages.json。')
}

async function assertMissing(absolute) {
  try {
    await fs.stat(absolute)
    fail(`目标文件已存在，停止覆盖：${path.relative(cwd, absolute)}`)
  } catch (err) {
    if (err.code !== 'ENOENT') throw err
  }
}

function slash(value) {
  return String(value).replace(/\\/g, '/')
}

function trimSlash(value) {
  return slash(value).replace(/^\/+|\/+$/g, '')
}

function toKebab(value) {
  return words(value).join('-').toLowerCase()
}

function toSnake(value) {
  return words(value).join('_').toLowerCase()
}

function toCamel(value) {
  const wordList = words(value)
  return wordList.map((word, index) => {
    const lower = word.toLowerCase()
    return index === 0 ? lower : `${lower.charAt(0).toUpperCase()}${lower.slice(1)}`
  }).join('')
}

function toPascal(value) {
  return words(value).map(word => {
    const lower = word.toLowerCase()
    return `${lower.charAt(0).toUpperCase()}${lower.slice(1)}`
  }).join('')
}

function words(value) {
  return String(value)
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
}

function sanitizeIdentifier(value) {
  const identifier = toSnake(value)
  return identifier.startsWith('api_') ? identifier : `api_${identifier}`
}

function fail(message) {
  console.error(message)
  process.exit(1)
}
