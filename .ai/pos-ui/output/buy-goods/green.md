# buy-goods - 绿代码+视觉还原记录

## 实现进度

### 阶段 1: API 层 ✅
- [x] `src/api/types.ts` - 类型定义
- [x] `src/api/goods.ts` - 商品 API
- [x] `src/api/cart.ts` - 购物车 API

### 阶段 2: Store 层 ✅
- [x] `src/stores/goods.ts` - 商品状态管理
- [x] `src/stores/cart.ts` - 购物车状态管理
- [x] `src/stores/ui.ts` - UI 状态管理

### 阶段 3: 组件层 ✅
- [x] `src/components/GoodsCard.vue` - 商品卡片
- [x] `src/components/CartItem.vue` - 购物车项
- [x] `src/components/ShoppingCart.vue` - 购物车面板
- [x] `src/components/SpecSelector.vue` - 规格选择弹窗
- [x] `src/components/CategoryNav.vue` - 分类导航
- [x] `src/components/SidebarNav.vue` - 侧边导航
- [x] `src/components/ConfirmDialog.vue` - 确认弹窗
- [x] `src/components/SearchModal.vue` - 搜索弹窗
- [x] `src/components/index.ts` - 组件统一导出

### 阶段 4: 页面层 ✅
- [x] `src/views/BuyGoodsPage.vue` - 购买商品主页面

---

## 视觉还原

### Pencil → Vue 映射

| Pencil 元素 | Vue 实现 | 状态 |
|------------|----------|------|
| 点餐-团购页面 | BuyGoodsPage.vue | ✅ |
| 侧边导航 (80px) | SidebarNav.vue | ✅ |
| 二级导航栏 (164px) | CategoryNav.vue | ✅ |
| 商品网格 | goods-grid CSS Grid | ✅ |
| 商品卡片 (136x122) | GoodsCard.vue | ✅ |
| 购物车面板 (320px) | ShoppingCart.vue | ✅ |
| 规格选择弹窗 | SpecSelector.vue | ✅ |
| 确认弹窗 | ConfirmDialog.vue | ✅ |
| 搜索弹窗 | SearchModal.vue | ✅ |

### 颜色映射 (Pencil → CSS)

| Pencil 颜色 | 用途 | CSS 值 |
|------------|------|--------|
| #202020 | 侧边导航背景 | `--sidebar-bg: #202020` |
| #ebebeb | 页面背景 | `--page-bg: #ebebeb` |
| #ffffff | 卡片背景 | `--card-bg: #fff` |
| #00a384 | 主按钮 | `--primary: #00a384` |
| #e80c00 | 价格/售罄标签 | `--price: #e80c00` |
| #eb8500 | 提示文字 | `--warning: #eb8500` |
| #6367ff | 套餐标签 | `--combo: #6367ff` |
| #ffe9e8 | 售罄标签背景 | `--sold-out-bg: #ffe9e8` |
| #e8e8ff | 套餐标签背景 | `--combo-bg: #e8e8ff` |

### 字体映射

| Pencil 字体 | CSS 字体 |
|------------|----------|
| MiSans | `font-family: 'MiSans', sans-serif` |

---

## 状态管理设计

### goodsStore
- `goodsList` - 商品列表
- `categoryList` - 分类列表
- `currentCategory` - 当前分类
- `diningWay` - 用餐方式 (IN/OUT)
- `showSoldOut` - 是否显示售罄商品
- `searchKeyword` - 搜索关键词

### cartStore
- `items` - 购物车商品
- `diningWay` - 购物车用餐方式
- `submitting` - 提交状态
- `totalCount` - 商品总数 (computed)
- `totalAmount` - 商品总价 (computed)
- `isEmpty` - 是否为空 (computed)
- `canSubmit` - 是否可提交 (computed)

### uiStore
- `specSelectorVisible` - 规格选择弹窗
- `currentSpecGoods` - 当前选择规格的商品
- `confirmDialogVisible` - 确认弹窗
- `searchModalVisible` - 搜索弹窗
- `moreMenuVisible` - 更多菜单

---

## 文件结构

```
src/
├── api/
│   ├── types.ts          # 类型定义
│   ├── goods.ts          # 商品 API
│   └── cart.ts           # 购物车 API
├── stores/
│   ├── goods.ts          # 商品 Store
│   ├── cart.ts           # 购物车 Store
│   └── ui.ts             # UI Store
├── components/
│   ├── GoodsCard.vue     # 商品卡片
│   ├── CartItem.vue      # 购物车项
│   ├── ShoppingCart.vue  # 购物车面板
│   ├── SpecSelector.vue  # 规格选择弹窗
│   ├── CategoryNav.vue   # 分类导航
│   ├── SidebarNav.vue    # 侧边导航
│   ├── ConfirmDialog.vue # 确认弹窗
│   ├── SearchModal.vue   # 搜索弹窗
│   └── index.ts          # 统一导出
└── views/
    └── BuyGoodsPage.vue  # 主页面
```

---

## 自检清单

- [x] 所有测试用例已覆盖（7个）
- [x] Vue 组件已实现
- [x] Store 状态管理已实现
- [x] API 封装已实现
- [x] 视觉还原完成（基于 Pencil 设计）
- [x] 组件统一导出
- [ ] 测试运行（需集成到实际项目）
- [ ] TypeScript 类型检查（需集成到实际项目）

---

## 注意事项

1. **Element Plus 依赖**: 组件使用了 Element Plus 的 Dialog、Button、Input、Avatar 等组件
2. **图标依赖**: 使用了 `@element-plus/icons-vue`
3. **样式**: 使用了 SCSS 预处理器
4. **状态管理**: 使用 Pinia
5. **路由**: 页面需要从路由获取 siteId 参数

---

## 下一步

1. 将代码集成到实际项目中
2. 运行测试验证
3. 进行视觉回归测试
4. 进入 Layer 6: 交付
