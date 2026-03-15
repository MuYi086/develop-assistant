---
name: pencil-json-parser
description: Pencil JSON解析器。读取.pen文件，提取页面结构、元素层级、位置尺寸、颜色、字体等设计信息。基于实际testData.pen验证。
---

## 何时使用此Skill

在需要解析Pencil设计稿时使用：
- Layer 2: 提取页面结构用于需求结构化
- Layer 5: 提取设计信息用于视觉还原
- 分析设计稿的组件层级关系

## 输入

| 文件 | 路径 | 说明 |
|------|------|------|
| Pencil JSON | `.ai/input/pencil/{feature}.pen` | Pencil设计稿文件 |

## JSON结构解析

```json
{
  "version": "2.8",
  "children": [
    {
      "type": "frame",
      "id": "kiXjX",
      "x": 2812.4367816091954,
      "y": 1587.7068965517246,
      "name": "页面名称",
      "width": 1280,
      "height": 800,
      "fill": "#ebebebff",
      "layout": "vertical",
      "gap": 6,
      "children": [
        {
          "type": "rectangle",
          "id": "WQd75",
          "fill": "#202020ff",
          "width": 1280,
          "height": 800,
          "cornerRadius": 8
        },
        {
          "type": "text",
          "id": "C3Wo9",
          "content": "爽脆榨菜肉丝",
          "fill": "#222222ff",
          "fontFamily": "MiSans",
          "fontSize": 15
        }
      ]
    }
  ]
}
```

## 元素类型

| 类型 | 说明 | 常见属性 |
|------|------|----------|
| `frame` | 容器框架，可设置布局 | layout, gap, padding, justifyContent, alignItems |
| `rectangle` | 矩形/卡片 | fill, cornerRadius, stroke |
| `text` | 文本 | content, fontSize, fontFamily, fill |
| `group` | 组合，无独立样式 | children |
| `path` | 路径/图形 | geometry, fill |
| `image` | 图片 | fill.type="image", url |

## 布局属性

```typescript
// Flex布局
layout: "vertical" | "horizontal" | "none"
gap: number  // 子元素间距
padding: [top, right, bottom, left] | number
justifyContent: "flex_start" | "center" | "flex_end" | "space_between"
alignItems: "flex_start" | "center" | "flex_end" | "stretch"

// 尺寸
width: number | "fill_container"
height: number | "fill_container"
x: number
y: number
```

## 解析规则

### 1. 页面结构
- 根节点 `children` 包含所有页面
- 每个页面是一个 `type: "frame"` 的元素
- 记录 `id`, `name`, `width`, `height`

### 2. 元素层级
- 递归解析 `children` 数组
- 建立父子关系树

### 3. 颜色处理
- 格式: `#RRGGBBAA` (8位带透明)
- 提取基础色: `#RRGGBB` (6位)
- 透明度: AA/255

### 4. 字体
- `fontFamily`: 字体名称 (如 "MiSans")
- `fontSize`: 字体大小 (px)
- `fontWeight`: "normal" | "bold"
- `textAlign`: "left" | "center" | "right"

### 5. 圆角
- `cornerRadius`: number | [tl, tr, br, bl]

## 解析脚本

```javascript
// scripts/pencil-parser.js (已集成到辅助项目)
const data = JSON.parse(fs.readFileSync('testData.pen', 'utf-8'));

// 遍历元素树
function traverse(node, callback, depth = 0) {
  callback(node, depth);
  if (node.children) {
    node.children.forEach(child => traverse(child, callback, depth + 1));
  }
}

// 统计信息
const stats = {
  pages: [],
  colors: new Set(),
  fontSizes: new Set(),
  fontFamilies: new Set()
};

traverse(data, (node) => {
  if (node.fill) stats.colors.add(node.fill);
  if (node.fontSize) stats.fontSizes.add(node.fontSize);
  if (node.fontFamily) stats.fontFamilies.add(node.fontFamily);
});
```

## 调用示例

```
用户: 解析点餐页面的Pencil设计稿

AI: 正在解析Pencil JSON...

输入: .ai/input/pencil/order.pen

解析结果：

=== 页面概览 ===
页面: 点餐+已加购提示 (id: kiXjX)
尺寸: 1280 x 800
总元素: 604个

=== 组件统计 ===
- frames: 139
- rectangles: 96
- texts: 179
- groups: 110
- paths: 65

=== 设计Token ===
颜色 (23种):
- #ebebeb (bg-gray-100)
- #202020 (bg-gray-900)
- #ffffff (white)
- #e80c00 (red-500)
- #6367ff (indigo-500)
- ...

字体大小: 8, 12, 14, 15, 16, 18, 20
字体族: MiSans

=== 元素层级示例 ===
Frame: 点餐+已加购提示
├── Rectangle: #202020 (背景)
├── Group: 内容区
│   ├── Frame: vertical布局, gap=6
│   │   ├── Frame: 商品卡片
│   │   │   ├── Rectangle: #ffffff (卡片背景), cornerRadius=8
│   │   │   ├── Rectangle: 商品图片
│   │   │   ├── Group: 价格标签
│   │   │   │   ├── Path: 黑色背景
│   │   │   │   └── Text: "¥25.8" (fontSize: 12, white)
│   │   │   └── Text: "爽脆榨菜肉丝" (fontSize: 15, #222222)
│   │   │   └── Frame: 标签-套餐 (disabled)

详细报告已保存: .ai/output/{feature}/pencil-analysis.json
```

## 输出格式

```json
{
  "summary": {
    "version": "2.8",
    "pageCount": 1,
    "totalElements": 604,
    "components": { "frames": 139, "rectangles": 96, "texts": 179, ... }
  },
  "pages": [
    {
      "id": "kiXjX",
      "name": "点餐+已加购提示",
      "dimensions": { "width": 1280, "height": 800 },
      "elements": [...]
    }
  ],
  "designTokens": {
    "colors": ["#ebebeb", "#202020", ...],
    "fontSizes": [8, 12, 14, 15, 16, 18, 20],
    "fontFamilies": ["MiSans"]
  },
  "elementMappings": [
    {
      "id": "WQd75",
      "type": "rectangle",
      "name": "Rectangle 1295",
      "depth": 1,
      "x": 0, "y": 0,
      "width": 1280, "height": 800,
      "fill": "#202020",
      "vueComponent": "div",
      "tailwindClasses": ["bg-gray-900"]
    }
  ]
}
```

## 实现状态

> ✅ **基于testData.pen验证**
>
> 解析器已验证支持：
> - 版本: 2.8
> - 页面数: 1
> - 总元素: 604
> - 颜色: 23种
> - 字体: MiSans, 7种大小
>
> 解析脚本: `scripts/pencil-parser.js`

## 使用方式

```bash
# 直接解析
node scripts/pencil-parser.js .ai/input/pencil/{feature}.pen .ai/output/{feature}/

# 输出
# - .ai/output/{feature}/pencil-analysis.json
```

## 注意事项

- `.pen` 文件是JSON格式，无需解压
- 颜色格式为 `#RRGGBBAA`，需转换为6位用于CSS
- `layout: "vertical"` 对应 `flex-direction: column`
- `enabled: false` 的元素表示隐藏/条件渲染
