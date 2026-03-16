# buy-goods - 知识沉淀

> Layer 7: 知识沉淀 - 基于本次 Sprint 产出优化 Prompt、归档术语、提升复用率

---

## 1. 术语归档

### 本次新增术语

| 中文名 | 英文名 | 类型 | 含义 | 首次出现 |
|--------|--------|------|------|----------|
| 用餐方式 | DiningWay | Enum | 堂食(IN)/外带(OUT) | buy-goods |
| 单品 | SINGLE | Enum | 单个商品类型 | buy-goods |
| 套餐 | COMB | Enum | 组合商品类型 | buy-goods |
| 门店商品 | SiteGoods | Entity | 特定门店的商品 | buy-goods |
| 规格 | SKU | Entity | 商品的具体规格选项 | buy-goods |
| 规格属性 | SkuAttribute | Entity | SKU的可选属性(如:温度、甜度) | buy-goods |
| 外带不兼容 | incompatibleWithOut | boolean | 商品是否支持外带 | buy-goods |
| 去收款 | Checkout | Action | 提交购物车生成订单 | buy-goods |

### 命名规范验证

```typescript
// ✅ 正确的命名
interface GoodsItem        // PascalCase
const useGoodsStore       // camelCase, 以 use 开头
const fetchGoodsList      // camelCase, 以动词开头
const totalCount          // camelCase, 计算属性

// ❌ 避免使用
const goods_item          // snake_case
const GetGoodsList        // PascalCase 函数
const goodslist           // 无驼峰
```

---

## 2. 可复用模式

### 模式 1: Store 分层架构

```typescript
// 标准 Store 结构
export const useXXXStore = defineStore('xxx', () => {
  // ============== State ==============
  const items = ref<Item[]>([])
  const loading = ref(false)

  // ============== Getters ==============
  const totalCount = computed(() => items.value.length)
  const isEmpty = computed(() => items.value.length === 0)

  // ============== Actions ==============
  const fetchList = async () => { /* ... */ }
  const addItem = async (item: Item) => { /* ... */ }

  return {
    // State
    items,
    loading,
    // Getters
    totalCount,
    isEmpty,
    // Actions
    fetchList,
    addItem
  }
})
```

**适用场景**: 所有基于列表的状态管理

### 模式 2: 通用确认弹窗封装

```typescript
// UI Store 中的弹窗管理
const showConfirm = (options: {
  title?: string
  message: string
  type?: 'warning' | 'info'
}): Promise<boolean> => {
  // 设置弹窗状态
  confirmDialogTitle.value = options.title ?? '温馨提示'
  confirmDialogMessage.value = options.message
  confirmDialogVisible.value = true

  // 返回 Promise
  return new Promise((resolve) => {
    confirmDialogResolve = resolve
  })
}

// 使用方式
const confirmed = await uiStore.showConfirm({
  title: '确认删除',
  message: '确定要删除吗？',
  type: 'warning'
})
if (confirmed) {
  // 执行删除
}
```

**适用场景**: 需要用户二次确认的操作

### 模式 3: 冲突检测与自动处理

```typescript
// 购物车 Store 中的冲突检测
const getIncompatibleItems = (newDiningWay: 'IN' | 'OUT') => {
  if (newDiningWay === 'IN') return []
  return items.value.filter(item => item.incompatibleWithOut)
}

// 切换用餐方式时的处理流程
const switchDiningWay = async (
  newDiningWay: 'IN' | 'OUT',
  removeIncompatible: boolean = false
) => {
  const conflicts = getIncompatibleItems(newDiningWay)
  if (conflicts.length > 0 && !removeIncompatible) {
    // 显示确认弹窗，让用户决定
    return { success: false, conflicts }
  }
  // 自动移除冲突商品
  await api.switchDiningWay({ diningWay: newDiningWay, removeIncompatible })
}
```

**适用场景**: 业务规则冲突处理(如: 配送范围变更、库存不足等)

### 模式 4: DTO 适配器模式

```typescript
// API 层的数据适配
interface CartItemDTO {
  id: string
  goodsName: string
  pic: string  // DTO 字段名
  goodsTypeFlag: 'SINGLE' | 'COMB'
}

// 适配函数
const adaptCartItem = (dto: CartItemDTO): CartItem => ({
  id: dto.id,
  goodsName: dto.goodsName,
  image: dto.pic,  // 映射为前端字段名
  type: dto.goodsTypeFlag === 'SINGLE' ? 'SINGLE' : 'COMB'
})
```

**适用场景**: 后端 API 字段名与前端不一致时

---

## 3. 踩坑记录

### 问题 1: Pinia Store 循环依赖

**现象**: 两个 Store 互相引用导致初始化错误

```typescript
// ❌ 错误写法
// goods.ts
import { useCartStore } from './cart'
// cart.ts
import { useGoodsStore } from './goods'
```

**解决**: 使用函数参数传递或在组件层组合

```typescript
// ✅ 正确写法
// goods.ts 不引用 cart.ts
// 在组件中组合使用
const goodsStore = useGoodsStore()
const cartStore = useCartStore()
```

### 问题 2: computed 的 v-model 绑定

**现象**: 无法直接对 computed 使用 v-model

**解决**: 使用 getter/setter 写法

```typescript
// ✅ 正确写法
const currentCategory = computed({
  get: () => goodsStore.currentCategory,
  set: (val) => goodsStore.setCategory(val)
})
```

### 问题 3: Element Plus 图标组件注册

**现象**: 图标无法显示

**解决**: 确保全局注册或单独导入

```typescript
// main.ts 全局注册
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 或组件内单独导入
import { Plus, Minus } from '@element-plus/icons-vue'
```

### 问题 4: SCSS 变量作用域

**现象**: scoped 样式中 ::v-deep 无效

**解决**: 使用 :deep() 选择器

```scss
// ✅ Vue 3 正确写法
.spec-selector-dialog {
  :deep(.el-dialog__body) {
    padding: 20px;
  }
}
```

---

## 4. 性能优化建议

### 已实现优化

1. **Store 按需加载**: 每个 Store 独立，避免不必要的初始化
2. **计算属性缓存**: totalCount、totalAmount 等使用 computed 缓存
3. **条件渲染**: v-if/v-show 合理使用，避免不必要的 DOM 渲染

### 待优化项

| 优化项 | 优先级 | 方案 |
|--------|--------|------|
| 虚拟滚动 | 高 | 商品列表使用 vue-virtual-scroller |
| 图片懒加载 | 高 | 商品图片使用 v-lazy |
| Debounce 搜索 | 中 | 搜索输入 300ms 防抖 |
| KeepAlive | 中 | 页面切换缓存状态 |
| API 缓存 | 低 | 商品列表 5 分钟缓存 |

---

## 5. Prompt 优化建议

### 基于本次开发的 Prompt 改进

**原 Prompt 问题**:
1. 没有明确指定图标库使用方式
2. SCSS 语法版本未说明 (Vue 3 使用 :deep())
3. Store 间依赖关系未明确

**优化后的 Prompt 模板**:

```markdown
## Vue 3 + Element Plus 组件开发规范

### 样式
- 使用 SCSS + scoped
- Element Plus 样式覆盖使用 :deep() 而非 ::v-deep
- 颜色变量从设计 Token 中提取

### 图标
- 统一使用 @element-plus/icons-vue
- 在组件内显式导入图标

### Store
- Store 之间禁止循环依赖
- 组件负责组合多个 Store
- 通用弹窗逻辑封装在 UIStore

### API
- DTO 到模型的转换在 API 层完成
- 统一返回适配后的模型

### 弹窗
- 使用 Promise 方式封装确认弹窗
- 便于 async/await 调用
```

---

## 6. 可复用组件清单

| 组件 | 通用性 | 复用建议 |
|------|--------|----------|
| ConfirmDialog | ⭐⭐⭐⭐⭐ | 所有需要确认的场景 |
| SearchModal | ⭐⭐⭐⭐ | 商品/订单/用户搜索 |
| SidebarNav | ⭐⭐⭐ | 后台管理系统侧边栏 |
| CategoryNav | ⭐⭐⭐ | 商品分类导航 |
| ShoppingCart | ⭐⭐ | POS 类应用购物车 |
| SpecSelector | ⭐⭐ | 多规格商品选择 |

---

## 7. 测试策略沉淀

### 测试金字塔

```
    /\
   /  \     E2E 测试 (Playwright)
  /----\
 /      \   集成测试 (组件 + Store)
/--------\
----------  单元测试 (Store actions)
```

### 关键测试场景

1. **单元测试**: Store actions、API 适配器
2. **集成测试**: 组件交互、Store 联动
3. **E2E 测试**: 完整业务流程(选品->加购->结算)

---

## 8. 归档术语更新

将以下术语添加到 glossary.md:

```markdown
## buy-goods 领域术语

| 业务词 | 英文名 | 含义 | 所属领域 |
|--------|--------|------|----------|
| 用餐方式 | DiningWay | IN=堂食, OUT=外带 | POS |
| 单品 | Single | 独立商品 | Goods |
| 套餐 | Combo | 组合商品 | Goods |
| SKU | Stock Keeping Unit | 商品规格 | Goods |
| 外带不兼容 | IncompatibleWithOut | 不支持外带的商品 | Cart |
```

---

## 9. 下一步行动计划

1. **优化 Prompt**: 将本沉淀中的 Prompt 建议同步到 skills
2. **更新 glossary**: 将术语归档到 .ai/context/glossary.md
3. **组件库建设**: 将 ConfirmDialog、SearchModal 等提取为通用组件
4. **模板项目**: 基于本次结构创建 Vue 3 + Element Plus 模板

---

**沉淀完成时间**: 2026-03-16
**Sprint**: buy-goods 功能开发
**状态**: ✅ 已完成
