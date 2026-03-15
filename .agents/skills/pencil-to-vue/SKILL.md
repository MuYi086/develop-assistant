---
name: pencil-to-vue
description: Pencil转Vue代码生成器。将Pencil设计稿转换为Vue 3 + Element Plus组件代码。
---

## 何时使用此Skill

在Layer 5（绿代码+视觉还原）使用：
- 根据Pencil设计生成Vue组件框架
- 自动映射Element Plus组件
- 生成响应式布局代码

## 输入

| 文件 | 路径 | 说明 |
|------|------|------|
| Pencil解析结果 | `pencil-json-parser`输出 | 页面结构和样式 |
| 组件契约 | `.ai/output/{feature}/contract.md` | Props、State定义 |

## 映射规则

### Pencil元素 → Vue组件

| Pencil类型 | Element Plus组件 | 用途 |
|------------|------------------|------|
| Button | ElButton | 按钮 |
| Input/TextField | ElInput | 输入框 |
| Form/Container | ElForm + ElFormItem | 表单容器 |
| Card/Panel | ElCard | 卡片容器 |
| Table | ElTable | 表格 |
| Dialog/Modal | ElDialog | 弹窗 |
| Select/Dropdown | ElSelect | 下拉选择 |
| Checkbox | ElCheckbox | 复选框 |
| Radio | ElRadio | 单选框 |
| Text | span/div | 纯文本 |
| Image | ElImage | 图片 |

### 布局转换

```
Pencil绝对定位 → Vue Flex/Grid布局

示例:
Pencil:
  Box1: x=100, y=100, w=400, h=600 (容器)
    Box2: x=120, y=120, w=360, h=40 (输入)
    Box3: x=120, y=180, w=360, h=40 (输入)

Vue:
  <div class="form-container">
    <el-input v-model="form.username" />
    <el-input v-model="form.password" />
  </div>

样式:
  .form-container {
    display: flex;
    flex-direction: column;
    gap: 20px;  /* 180 - 120 - 40 = 20 */
    padding: 20px;
  }
```

## 输出代码结构

```vue
<!-- {Component}.vue -->
<template>
  <el-card class="{feature}-container">
    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
      @submit.prevent="handleSubmit"
    >
      <!-- 根据Pencil生成的表单元素 -->
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

// Props - 来自contract.md
interface Props {
  // ...
}

const props = defineProps<Props>()
const emit = defineEmits<{
  // ...
}>()

// State - 来自contract.md
const formRef = ref<FormInstance>()
const form = reactive({
  // ...
})

// Rules - 来自contract.md
const rules: FormRules = {
  // ...
}

// Methods
const handleSubmit = async () => {
  // ...
}
</script>

<style scoped>
/* Tailwind类为主，scoped样式为辅 */
.{feature}-container {
  /* Pencil到Tailwind的样式映射 */
}
</style>
```

## 调用示例

```
用户: 根据点餐页面设计稿生成Vue代码

AI: 正在生成Vue组件代码...

步骤：
1. 解析Pencil JSON (testData.pen格式)
2. 读取组件契约（contract.md）
3. 映射Element Plus组件
4. 生成响应式布局
5. 集成样式

输入分析 (testData.pen):
- 页面: 点餐+已加购提示 (1280x800)
- 布局: vertical flex, gap=6
- 颜色: #ebebeb(bg), #202020(主背景), #ffffff(卡片)
- 字体: MiSans, 12-20px

映射规则:
- Frame + layout=vertical → div.flex.flex-col
- Rectangle + cornerRadius=8 → div.rounded-lg
- Text + fontSize=15 → span.text-base
- Frame + 价格标签样式 → 自定义价格组件

输出文件：
- src/features/order/OrderPage.vue
- src/features/order/components/FoodCard.vue
- src/features/order/components/PriceTag.vue

代码预览:
<template>
  <div class="min-h-screen bg-[#202020]">
    <div class="flex gap-1.5 p-10">
      <!-- 商品卡片 -->
      <div class="w-34 rounded-lg bg-white overflow-hidden">
        <div class="h-22 bg-gray-200 rounded-t-lg">
          <img src="..." class="w-full h-full object-cover" />
        </div>
        <!-- 价格标签 -->
        <div class="absolute bottom-1 right-1">
          <div class="bg-black/80 px-2 py-0.5 rounded">
            <span class="text-white text-xs font-normal">¥25.8</span>
          </div>
        </div>
        <!-- 商品名称 -->
        <div class="p-1.5">
          <span class="text-[15px] text-[#222222] font-normal">爽脆榨菜肉丝</span>
        </div>
        <!-- 标签 -->
        <div class="absolute top-1.5 left-1.5">
          <span class="px-1 py-0.5 rounded bg-[#e8e8ff] text-[#6367ff] text-xs">
            套餐
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 基于contract.md的实现
</script>
```

## 基于testData.pen的映射示例

### 实际解析结构
```json
{
  "type": "frame",
  "name": "点餐+已加购提示",
  "width": 1280,
  "height": 800,
  "fill": "#202020ff",
  "children": [
    {
      "type": "rectangle",
      "fill": "#202020ff",
      "width": 1280,
      "height": 800
    },
    {
      "type": "frame",
      "layout": "vertical",
      "gap": 6,
      "children": [
        {
          "type": "rectangle",
          "fill": "#ffffffff",
          "cornerRadius": 8,
          "width": 136,
          "height": 122
        },
        {
          "type": "group",
          "name": "价格",
          "children": [
            { "type": "path", "fill": "#000000ff" },
            { "type": "text", "content": "¥25.8", "fontSize": 12 }
          ]
        },
        {
          "type": "text",
          "content": "爽脆榨菜肉丝",
          "fontSize": 15,
          "fill": "#222222ff"
        },
        {
          "type": "frame",
          "name": "标签-套餐",
          "fill": "#e8e8ffff",
          "cornerRadius": 4,
          "children": [
            { "type": "text", "content": "套餐", "fill": "#6367ffff" }
          ]
        }
      ]
    }
  ]
}
```

### Vue代码生成

```vue
<!-- FoodCard.vue -->
<template>
  <div class="w-34 h-30.5 rounded-lg bg-white relative overflow-hidden">
    <!-- 图片 -->
    <div class="h-21.5 rounded-t-lg bg-gray-200">
      <slot name="image" />
    </div>

    <!-- 价格标签 - 绝对定位 -->
    <div class="absolute bottom-13.5 right-1">
      <div class="bg-black/80 rounded px-2 py-0.5">
        <span class="text-white text-xs">{{ price }}</span>
      </div>
    </div>

    <!-- 商品名 -->
    <div class="px-1.5 pt-1">
      <span class="text-[15px] text-[#222222]">{{ name }}</span>
    </div>

    <!-- 标签 - 绝对定位 -->
    <div v-if="tag" class="absolute top-1.5 left-1.5">
      <span class="px-1 py-0.5 rounded text-xs"
        :class="tagClass">
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string
  price: string
  tag?: string
  tagType?: 'set' | 'soldout'
}

const props = withDefaults(defineProps<Props>(), {
  tagType: 'set'
})

const tagClass = computed(() => {
  return props.tagType === 'set'
    ? 'bg-[#e8e8ff] text-[#6367ff]'  // 套餐
    : 'bg-[#ffe9e8] text-[#e80c00]'  // 已售罄
})
</script>
```

## 实现状态

> ✅ **基于testData.pen验证**
>
> 已验证映射规则：
> - Frame → div.flex (支持vertical/horizontal)
> - Rectangle → div.rounded-lg
> - Text → span (支持fontSize映射)
> - Group → div (组合容器)
> - 颜色 → Tailwind类或内联样式
> - 尺寸 → px或Tailwind spacing
>
> 解析器: `scripts/pencil-parser.js`
> 示例文件: `testData.pen` (点餐页面, 604个元素)

## 注意事项

- 优先使用Element Plus组件
- 布局使用Tailwind类
- 样式优先使用设计Token
- 保持响应式设计
- 遵循Vue 3 Composition API规范
