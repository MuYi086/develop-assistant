# Buy Goods 组件使用说明

## 快速开始

### 1. 基础用法

```vue
<template>
  <BuyGoodsPage />
</template>

<script setup lang="ts">
import BuyGoodsPage from './views/BuyGoodsPage.vue'
</script>
```

### 2. 独立使用组件

```vue
<template>
  <div class="custom-page">
    <!-- 只使用商品卡片 -->
    <GoodsCard
      v-for="goods in goodsList"
      :key="goods.id"
      :goods="goods"
      @click="handleGoodsClick"
    />

    <!-- 只使用购物车 -->
    <ShoppingCart
      @clear="handleClear"
      @checkout="handleCheckout"
    />
  </div>
</template>

<script setup lang="ts">
import { GoodsCard, ShoppingCart } from './components'
import { useGoodsStore, useCartStore } from './stores'

const goodsStore = useGoodsStore()
const cartStore = useCartStore()

const goodsList = computed(() => goodsStore.filteredGoodsList)
</script>
```

---

## 组件 API

### GoodsCard 商品卡片

**Props**

| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| goods | `GoodsItem` | 是 | 商品数据 |

**Events**

| 事件 | 参数 | 说明 |
|------|------|------|
| click | `(goods: GoodsItem)` | 点击商品时触发 |

**GoodsItem 类型**

```typescript
interface GoodsItem {
  id: number
  goodsId: number
  name: string
  price: number
  originalPrice: number
  discountPrice?: number
  image: string
  stock: number
  isSoldOut: boolean
  type: 'SINGLE' | 'COMB'
  defaultSku: SkuInfo | null
}
```

---

### ShoppingCart 购物车面板

**Props**: 无

**Events**

| 事件 | 参数 | 说明 |
|------|------|------|
| clear | - | 清空购物车 |
| checkout | - | 去收款 |

**状态依赖**

```typescript
const cartStore = useCartStore()
const items = cartStore.items
const totalCount = cartStore.totalCount
const totalAmount = cartStore.totalAmount
```

---

### SpecSelector 规格选择弹窗

**Props**

| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| modelValue | `boolean` | 是 | 弹窗显示状态 |
| goods | `GoodsItem \| null` | 是 | 当前商品 |

**Events**

| 事件 | 参数 | 说明 |
|------|------|------|
| update:modelValue | `(value: boolean)` | 更新显示状态 |
| confirm | `(goodsId: number, skuId: number \| undefined, quantity: number)` | 确认选择 |

---

### CategoryNav 分类导航

**Props**

| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| categories | `CategoryItem[]` | 是 | 分类列表 |
| currentCategory | `string` | 是 | 当前分类key |
| diningWay | `'IN' \| 'OUT'` | 是 | 用餐方式 |

**Events**

| 事件 | 参数 | 说明 |
|------|------|------|
| update:currentCategory | `(key: string)` | 更新当前分类 |
| update:diningWay | `(way: 'IN' \| 'OUT')` | 更新用餐方式 |
| category-change | `(key: string)` | 分类切换 |
| dining-way-change | `(way: 'IN' \| 'OUT', incompatibleItems: string[])` | 用餐方式切换 |
| search | - | 搜索 |
| more | - | 更多菜单 |

---

## Store API

### useGoodsStore 商品 Store

**State**

```typescript
const store = useGoodsStore()

store.goodsList      // 商品列表
store.categoryList   // 分类列表
store.currentCategory // 当前分类
store.diningWay      // 用餐方式
store.showSoldOut    // 显示售罄
store.loading        // 加载状态
```

**Actions**

```typescript
// 加载商品列表
await store.fetchGoodsList(siteId: string)

// 加载分类列表
await store.fetchCategoryList(siteId: string)

// 设置分类
store.setCategory(key: string)

// 设置用餐方式
store.setDiningWay(way: 'IN' | 'OUT')

// 切换售罄显示
store.toggleShowSoldOut()

// 设置搜索关键词
store.setSearchKeyword(keyword: string)
```

---

### useCartStore 购物车 Store

**State**

```typescript
const store = useCartStore()

store.items      // 购物车商品
store.diningWay  // 用餐方式
store.submitting // 提交中
```

**Getters**

```typescript
store.totalCount   // 商品总数
store.totalAmount  // 商品总价
store.isEmpty      // 是否为空
store.canSubmit    // 是否可提交
```

**Actions**

```typescript
// 加载购物车
await store.fetchCart(siteId: string)

// 添加商品
await store.addToCart(siteGoodsId: number, skuId?: number, quantity?: number)

// 增加数量
await store.increaseQuantity(itemId: string)

// 减少数量
await store.decreaseQuantity(itemId: string)

// 删除商品
await store.removeItem(itemId: string)

// 清空购物车
await store.clearCart()

// 提交订单
await store.submitCart(): Promise<CartSubmitResult>

// 切换用餐方式
await store.switchDiningWay(newDiningWay: 'IN' | 'OUT', removeIncompatible?: boolean)

// 获取冲突商品
store.getIncompatibleItems(newDiningWay: 'IN' | 'OUT'): CartItem[]
```

---

### useUIStore UI Store

**弹窗控制**

```typescript
const uiStore = useUIStore()

// 规格选择弹窗
uiStore.openSpecSelector(goods: GoodsItem)
uiStore.closeSpecSelector()

// 确认弹窗 (返回 Promise)
const confirmed = await uiStore.showConfirm({
  title?: string
  message: string
  type?: 'warning' | 'info'
  confirmText?: string
  cancelText?: string
})

// 搜索弹窗
uiStore.openSearch()
uiStore.closeSearch()

// 更多菜单
uiStore.openMoreMenu()
uiStore.closeMoreMenu()
```

---

## 类型定义

```typescript
// src/api/types.ts

// 商品相关
export interface GoodsItem {
  id: number
  goodsId: number
  name: string
  price: number
  originalPrice: number
  image: string
  isSoldOut: boolean
  type: 'SINGLE' | 'COMB'
  defaultSku: SkuInfo | null
}

export interface CategoryItem {
  key: string
  name: string
}

export interface SkuAttribute {
  attrId: number
  mustFlag: boolean
  name: string
  values: SkuAttributeValue[]
}

export interface SkuAttributeValue {
  attrValId: number
  name: string
  stock: number
}

export interface SkuInfo {
  skuId: number
  name: string
  price: number
  image: string
}

// 购物车相关
export interface CartItem {
  id: string
  goodsName: string
  skuName: string
  price: number
  quantity: number
  image: string
  incompatibleWithOut: boolean
}

export interface CartSubmitResult {
  orderId: string
  orderNo: string
  totalAmount: number
  status: string
}
```

---

## 事件流程

### 添加商品到购物车

```
1. 用户点击商品卡片
   ↓
2. BuyGoodsPage.handleGoodsClick
   ↓
3. 判断商品类型
   - 普通商品 → 直接调用 addToCart
   - 套餐/多规格 → 打开 SpecSelector
     ↓
4. 用户选择规格，点击"加入购物车"
   ↓
5. cartStore.addToCart
   ↓
6. API 调用 /api/cart/add
   ↓
7. 成功后重新加载购物车列表
   ↓
8. ShoppingCart 自动更新显示
```

### 切换用餐方式

```
1. 用户点击用餐方式切换按钮
   ↓
2. CategoryNav 触发 dining-way-change
   ↓
3. BuyGoodsPage.handleDiningWayChange
   ↓
4. 检查冲突商品 cartStore.getIncompatibleItems
   ↓
5. 如有冲突 → 显示确认弹窗
   ↓
6. 用户确认后 → cartStore.switchDiningWay
   ↓
7. 重新加载商品列表
```

---

## 样式变量

```scss
// 主要颜色
$primary: #00a384;      // 主按钮
$danger: #e80c00;       // 价格/售罄
$warning: #eb8500;      // 提示
$combo: #6367ff;        // 套餐标签

// 背景色
$sidebar-bg: #202020;   // 侧边栏
$page-bg: #ebebeb;      // 页面背景
$card-bg: #ffffff;      // 卡片

// 文字色
$text-primary: #222222;
$text-secondary: #666666;
$text-muted: #999999;
```

---

## FAQ

**Q: 如何自定义商品卡片样式?**
A: 覆盖 `.goods-card` 类的 CSS 变量或覆盖组件样式。

**Q: 如何添加新的分类?**
A: 修改 `goodsStore.fetchCategoryList` 方法，添加新的分类数据。

**Q: 如何修改 API 地址?**
A: 修改 `src/api/goods.ts` 和 `src/api/cart.ts` 中的请求地址。

**Q: 如何添加商品点击事件?**
A: 监听 `GoodsCard` 的 `click` 事件。

---

## 更新日志

| 版本 | 日期 | 更新内容 |
|------|------|----------|
| 1.0.0 | 2026-03-16 | 初始版本 |
