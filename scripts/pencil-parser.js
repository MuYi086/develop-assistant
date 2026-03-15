#!/usr/bin/env node
/**
 * Pencil JSON 解析器
 * 解析.pen文件，提取设计信息用于Vue代码生成
 */

const fs = require('fs');
const path = require('path');

// 解析命令行参数
const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('用法: node pencil-parser.js <pen-file> [output-dir]');
  process.exit(1);
}

const penFile = args[0];
const outputDir = args[1] || '.';

// 读取并解析.pen文件
function parsePencilFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(content);
  return data;
}

// 提取颜色（去除alpha通道用于Tailwind匹配）
function extractColor(fill) {
  if (!fill || typeof fill !== 'string') return null;
  // #RRGGBBAA -> #RRGGBB
  if (fill.match(/^#[0-9a-fA-F]{8}$/)) {
    return fill.substring(0, 7);
  }
  if (fill.match(/^#[0-9a-fA-F]{6}$/)) {
    return fill;
  }
  return fill;
}

// 提取字体大小分类
function categorizeFontSize(fontSize) {
  const sizes = [
    { max: 12, name: 'xs' },      // 12px
    { max: 14, name: 'sm' },      // 14px
    { max: 16, name: 'base' },    // 16px
    { max: 18, name: 'lg' },      // 18px
    { max: 20, name: 'xl' },      // 20px
    { max: 24, name: '2xl' },     // 24px
    { max: 30, name: '3xl' },     // 30px
    { max: 36, name: '4xl' },     // 36px
  ];

  for (const size of sizes) {
    if (fontSize <= size.max) return size.name;
  }
  return '5xl';
}

// 遍历元素树
function traverseElements(node, callback, depth = 0) {
  callback(node, depth);
  if (node.children && Array.isArray(node.children)) {
    node.children.forEach(child => traverseElements(child, callback, depth + 1));
  }
}

// 统计信息
function analyzeDesign(data) {
  const stats = {
    pages: [],
    colors: new Set(),
    fontSizes: new Set(),
    fontFamilies: new Set(),
    components: {
      frames: 0,
      rectangles: 0,
      texts: 0,
      groups: 0,
      images: 0,
      paths: 0
    }
  };

  data.children.forEach(page => {
    const pageInfo = {
      id: page.id,
      name: page.name,
      width: page.width,
      height: page.height,
      elements: []
    };

    traverseElements(page, (node, depth) => {
      // 统计组件类型
      if (node.type) {
        const type = node.type;
        if (stats.components.hasOwnProperty(type + 's')) {
          stats.components[type + 's']++;
        }
      }

      // 提取颜色
      if (node.fill) {
        const color = extractColor(node.fill);
        if (color) stats.colors.add(color);
      }
      if (node.stroke && node.stroke.fill) {
        const color = extractColor(node.stroke.fill);
        if (color) stats.colors.add(color);
      }

      // 提取字体信息
      if (node.type === 'text') {
        if (node.fontSize) stats.fontSizes.add(node.fontSize);
        if (node.fontFamily) stats.fontFamilies.add(node.fontFamily);
      }

      // 收集元素信息
      if (depth > 0) { // 跳过根页面
        pageInfo.elements.push({
          id: node.id,
          type: node.type,
          name: node.name,
          depth: depth,
          x: node.x,
          y: node.y,
          width: node.width,
          height: node.height,
          fill: extractColor(node.fill),
          fontSize: node.fontSize,
          fontFamily: node.fontFamily,
          content: node.content,
          layout: node.layout,
          gap: node.gap,
          cornerRadius: node.cornerRadius
        });
      }
    });

    stats.pages.push(pageInfo);
  });

  return {
    ...stats,
    colors: Array.from(stats.colors),
    fontSizes: Array.from(stats.fontSizes).sort((a, b) => a - b),
    fontFamilies: Array.from(stats.fontFamilies)
  };
}

// 生成Vue组件映射
function generateVueMapping(stats) {
  const mappings = [];

  stats.pages.forEach(page => {
    page.elements.forEach(el => {
      let vueComponent = 'div';
      let tailwindClasses = [];
      let elementPlusComponent = null;

      // 基于类型映射
      switch (el.type) {
        case 'text':
          vueComponent = 'span';
          if (el.fontSize) {
            const sizeClass = categorizeFontSize(el.fontSize);
            tailwindClasses.push(`text-${sizeClass}`);
          }
          break;
        case 'rectangle':
          if (el.cornerRadius) {
            if (Array.isArray(el.cornerRadius)) {
              tailwindClasses.push('rounded-lg');
            } else {
              const radius = el.cornerRadius;
              if (radius >= 8) tailwindClasses.push('rounded-lg');
              else if (radius >= 4) tailwindClasses.push('rounded');
              else tailwindClasses.push('rounded-sm');
            }
          }
          break;
        case 'frame':
          vueComponent = 'div';
          if (el.layout === 'vertical') {
            tailwindClasses.push('flex', 'flex-col');
          } else if (el.layout === 'horizontal') {
            tailwindClasses.push('flex', 'flex-row');
          }
          if (el.gap) {
            const gapMap = { 4: '1', 6: '1.5', 8: '2', 10: '2.5', 12: '3', 16: '4', 20: '5', 24: '6' };
            const gapClass = gapMap[el.gap] || Math.round(el.gap / 4);
            tailwindClasses.push(`gap-${gapClass}`);
          }
          break;
      }

      // 颜色映射到Tailwind
      if (el.fill) {
        const colorMap = {
          '#202020': 'bg-gray-900',
          '#ffffff': 'bg-white',
          '#ebebeb': 'bg-gray-100',
          '#e80c00': 'bg-red-500',
          '#6367ff': 'bg-indigo-500',
        };
        const baseColor = el.fill.substring(0, 7).toLowerCase();
        if (colorMap[baseColor]) {
          tailwindClasses.push(colorMap[baseColor]);
        }
      }

      mappings.push({
        ...el,
        vueComponent,
        elementPlusComponent,
        tailwindClasses
      });
    });
  });

  return mappings;
}

// 生成Tailwind配置
function generateTailwindConfig(stats) {
  const colorTokens = {};
  stats.colors.forEach(color => {
    const baseColor = color.toLowerCase();
    // 这里可以映射到语义化名称
    if (baseColor === '#202020') colorTokens['primary-bg'] = color;
    if (baseColor === '#6367ff') colorTokens['accent'] = color;
    if (baseColor === '#e80c00') colorTokens['danger'] = color;
  });

  return {
    theme: {
      extend: {
        colors: colorTokens,
        fontFamily: {
          sans: Array.from(stats.fontFamilies).join(', ')
        }
      }
    }
  };
}

// 主函数
function main() {
  try {
    console.log(`解析文件: ${penFile}`);
    const data = parsePencilFile(penFile);

    console.log('分析设计...');
    const stats = analyzeDesign(data);

    console.log('生成映射...');
    const mappings = generateVueMapping(stats);

    // 生成报告
    const report = {
      summary: {
        version: data.version,
        pageCount: stats.pages.length,
        totalElements: stats.pages.reduce((sum, p) => sum + p.elements.length, 0),
        components: stats.components
      },
      pages: stats.pages.map(p => ({
        id: p.id,
        name: p.name,
        dimensions: { width: p.width, height: p.height },
        elementCount: p.elements.length
      })),
      designTokens: {
        colors: stats.colors,
        fontSizes: stats.fontSizes,
        fontFamilies: stats.fontFamilies
      },
      tailwindConfig: generateTailwindConfig(stats),
      elementMappings: mappings.slice(0, 20) // 只显示前20个作为示例
    };

    // 输出报告
    const outputFile = path.join(outputDir, 'pencil-analysis.json');
    fs.writeFileSync(outputFile, JSON.stringify(report, null, 2));

    console.log('\n=== 解析报告 ===');
    console.log(`版本: ${report.summary.version}`);
    console.log(`页面数: ${report.summary.pageCount}`);
    console.log(`总元素: ${report.summary.totalElements}`);
    console.log('\n组件统计:', report.summary.components);
    console.log('\n颜色:', stats.colors.slice(0, 10).join(', '), stats.colors.length > 10 ? `...等${stats.colors.length}种` : '');
    console.log('字体大小:', stats.fontSizes.join(', '));
    console.log('字体族:', Array.from(stats.fontFamilies).join(', '));
    console.log(`\n详细报告已保存: ${outputFile}`);

  } catch (error) {
    console.error('解析失败:', error.message);
    process.exit(1);
  }
}

main();
