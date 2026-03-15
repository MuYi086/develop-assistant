---
name: pencil-to-tailwind
description: Pencil设计Token转Tailwind配置生成器。提取Pencil设计系统中的颜色、字体、间距等Token，生成Tailwind配置。
---

## 何时使用此Skill

在项目初始化或设计系统更新时使用：
- 初始化项目Tailwind配置
- 同步Pencil设计Token到代码
- 建立设计系统与开发的一致性

## 输入

| 文件 | 路径 | 说明 |
|------|------|------|
| Pencil解析结果 | `pencil-json-parser`输出 | 颜色、字体等样式信息 |

## Token提取规则

### 1. 颜色 (基于testData.pen)

```javascript
// 从Pencil JSON提取的颜色 (testData.pen: 23种颜色)
const pencilColors = {
  // 背景
  '#202020': 'bg-dark',      // 主背景
  '#ebebeb': 'bg-gray',      // 页面背景
  '#ffffff': 'white',        // 卡片背景

  // 文字
  '#222222': 'text-primary', // 主文本
  '#444444': 'text-secondary',
  '#999999': 'text-muted',

  // 功能色
  '#e80c00': 'danger',       // 红色/售罄
  '#6367ff': 'accent',       // 紫色/套餐
  '#00a384': 'success',      // 绿色
  '#ffe866': 'warning',      // 黄色

  // 标签背景
  '#ffe9e8': 'tag-danger-bg',   // 已售罄背景
  '#e8e8ff': 'tag-accent-bg',   // 套餐背景
  '#d6f0eb': 'tag-success-bg',  // 成功背景
}

// 颜色格式处理: #RRGGBBAA -> #RRGGBB
function extractColor(fill) {
  if (!fill || typeof fill !== 'string') return null;
  if (fill.match(/^#[0-9a-fA-F]{8}$/)) {
    return fill.substring(0, 7).toLowerCase();
  }
  return fill.toLowerCase();
}
```

### 2. 字体 (基于testData.pen)

```javascript
// testData.pen 字体数据
const pencilFonts = {
  sizes: {
    '8': '2xs',    // 8px
    '12': 'xs',    // 12px (价格)
    '14': 'sm',    // 14px
    '15': 'base',  // 15px (商品名)
    '16': 'lg',    // 16px
    '18': 'xl',    // 18px
    '20': '2xl',   // 20px
  },
  families: {
    'MiSans': 'mi-sans',  // 小米字体
  }
}

// 映射到Tailwind
// text-xs -> 12px
// text-base -> 15px (自定义)
// 需要在tailwind.config.js中扩展
```

### 3. 间距 (基于testData.pen)

```javascript
// testData.pen 中间距值
const pencilSpacing = {
  '4': 1,     // 4px = 0.25rem (标签padding)
  '6': 1.5,   // 6px = 0.375rem (gap)
  '8': 2,     // 8px = 0.5rem (圆角)
  '10': 2.5,  // 10px
  '16': 4,    // 16px
  '20': 5,    // 20px
  '32': 8,    // 32px
  '40': 10,   // 40px (页面padding)
  '80': 20,   // 80px
}

// 特殊尺寸 (从testData提取)
// 卡片: 136 x 122
// 图片: 136 x 86
// 价格标签: 42 x 20
```

## 输出：tailwind.config.js (基于testData.pen)

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 背景色
        'bg-dark': '#202020',
        'bg-gray': '#ebebeb',

        // 文字色
        'text-primary': '#222222',
        'text-secondary': '#444444',
        'text-muted': '#999999',

        // 功能色
        'danger': '#e80c00',
        'accent': '#6367ff',
        'success': '#00a384',
        'warning': '#ffe866',

        // 标签背景
        'tag-danger': '#ffe9e8',
        'tag-accent': '#e8e8ff',
        'tag-success': '#d6f0eb',
      },
      fontFamily: {
        'mi-sans': ['MiSans', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['8px', { lineHeight: '1' }],
        'xs': ['12px', { lineHeight: '1.5' }],
        'sm': ['14px', { lineHeight: '1.5' }],
        'base': ['15px', { lineHeight: '1.5' }],  // 商品名
        'lg': ['16px', { lineHeight: '1.5' }],
        'xl': ['18px', { lineHeight: '1.5' }],
        '2xl': ['20px', { lineHeight: '1.5' }],
      },
      spacing: {
        '1.5': '0.375rem',  // 6px
        '4.5': '1.125rem',  // 18px
        '21.5': '5.375rem', // 86px (图片高度)
        '22': '5.5rem',     // 88px
        '30.5': '7.625rem', // 122px (卡片高度)
        '34': '8.5rem',     // 136px (卡片宽度)
      },
      borderRadius: {
        'lg': '8px',   // 卡片圆角
        'md': '4px',   // 标签圆角
      },
    },
  },
  plugins: [],
}
```

## 与Element Plus主题同步

生成的Tailwind配置应与Element Plus主题保持一致：

```javascript
// element-plus主题变量
// 在 styles/element-variables.scss 中
$--colors: (
  'primary': (
    'base': #409EFF,
  ),
  // ...
);

// Tailwind配置应匹配
// tailwind.config.js
colors: {
  primary: {
    DEFAULT: '#409EFF',  // 与Element Plus一致
  }
}
```

## 调用示例

```
用户: 从testData.pen生成Tailwind配置

AI: 正在提取设计Token...

步骤：
1. 解析Pencil JSON (testData.pen)
2. 统计颜色使用频率
3. 识别字体层级
4. 提取间距规律
5. 生成Tailwind配置

输入分析 (testData.pen):
- 颜色: 23种
  - 背景: #202020, #ebebeb, #ffffff
  - 功能: #e80c00(红), #6367ff(紫), #00a384(绿)
  - 标签: #ffe9e8(红底), #e8e8ff(紫底)
- 字体: MiSans, 7种大小(8-20px)
- 间距: 4, 6, 8, 10, 16, 20, 40, 80
- 圆角: 4px(标签), 8px(卡片)

输出：tailwind.config.js

配置预览：
colors: {
  'bg-dark': '#202020',
  'bg-gray': '#ebebeb',
  'text-primary': '#222222',
  'danger': '#e80c00',
  'accent': '#6367ff',
  'tag-danger': '#ffe9e8',
  'tag-accent': '#e8e8ff',
},
fontFamily: {
  'mi-sans': ['MiSans', 'PingFang SC', ...],
},
fontSize: {
  '2xs': '8px',
  'xs': '12px',   // 价格
  'base': '15px', // 商品名
  '2xl': '20px',
},
spacing: {
  '21.5': '86px',  // 图片高度
  '30.5': '122px', // 卡片高度
  '34': '136px',   // 卡片宽度
}

提示：
- 已基于testData.pen实际数据生成
- 使用语义化命名而非颜色值
- 已针对点餐场景优化
```

## 实现状态

> ✅ **基于testData.pen验证**
>
> 已提取Token:
> - 颜色: 23种 → 语义化映射
> - 字体: MiSans, 7种大小
> - 间距: 8个常用值
> - 圆角: 4px, 8px
>
> 解析器: `scripts/pencil-parser.js`
> 示例文件: `testData.pen` (点餐页面)

## 最佳实践

1. **命名语义化**
   - 使用 `primary` 而非 `blue`
   - 使用 `text-primary` 而非 `gray-900`

2. **与Element Plus一致**
   - 颜色值保持一致
   - 阴影、圆角等也同步

3. **渐进扩展**
   - 先提取高频使用的Token
   - 后续按需补充
