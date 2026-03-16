# buy-goods - 交付文档

## 📦 交付清单

### 核心代码文件 (已生成)

```
.ai/pos-ui/output/buy-goods/
├── src/
│   ├── api/
│   │   ├── types.ts          ✅ 类型定义
│   │   ├── goods.ts          ✅ 商品 API
│   │   └── cart.ts           ✅ 购物车 API
│   ├── stores/
│   │   ├── goods.ts          ✅ 商品 Store
│   │   ├── cart.ts           ✅ 购物车 Store
│   │   └── ui.ts             ✅ UI Store
│   ├── components/
│   │   ├── GoodsCard.vue     ✅ 商品卡片
│   │   ├── CartItem.vue      ✅ 购物车项
│   │   ├── ShoppingCart.vue  ✅ 购物车面板
│   │   ├── SpecSelector.vue  ✅ 规格选择弹窗
│   │   ├── CategoryNav.vue   ✅ 分类导航
│   │   ├── SidebarNav.vue    ✅ 侧边导航
│   │   ├── ConfirmDialog.vue ✅ 确认弹窗
│   │   ├── SearchModal.vue   ✅ 搜索弹窗
│   │   └── index.ts          ✅ 统一导出
│   └── views/
│       └── BuyGoodsPage.vue  ✅ 主页面
├── tests/
│   ├── buy-goods.spec.ts     ✅ 测试用例 (7个)
│   ├── goods.mock.ts         ✅ 商品 Mock
│   └── cart.mock.ts          ✅ 购物车 Mock
├── raw.md                    ✅ Layer 2 结构化需求
├── contract.md               ✅ Layer 3 契约定义
├── red.md                    ✅ Layer 4 红测试记录
└── green.md                  ✅ Layer 5 绿代码记录
```

---

## 🎯 功能特性

### 已实现功能

| 功能 | 状态 | 说明 |
|------|------|------|
| 商品列表展示 | ✅ | 网格布局，支持图片、名称、价格、标签 |
| 商品分类筛选 | ✅ | 左侧二级导航栏，支持分类切换 |
| 用餐方式切换 | ✅ | 堂食/外带切换，自动检测冲突商品 |
| 售罄商品显示 | ✅ | 售罄标签，支持显示/隐藏切换 |
| 规格选择 | ✅ | 多规格商品弹窗选择 |
| 购物车管理 | ✅ | 增删改查、数量调整、清空 |
| 订单提交 | ✅ | 去收款按钮，提交后清空购物车 |
| 搜索商品 | ✅ | 弹窗搜索，支持关键字过滤 |
| 确认弹窗 | ✅ | 通用确认对话框 |

---

## 📖 集成指南

### 1. 依赖安装

```bash
# Element Plus
npm install element-plus @element-plus/icons-vue

# Pinia (如果未安装)
npm install pinia
```

### 2. 代码复制

将以下文件复制到目标项目：

```bash
# API 层
cp -r .ai/pos-ui/output/buy-goods/src/api/* src/api/

# Store 层
cp -r .ai/pos-ui/output/buy-goods/src/stores/* src/stores/

# 组件层
cp -r .ai/pos-ui/output/buy-goods/src/components/* src/components/

# 页面
cp .ai/pos-ui/output/buy-goods/src/views/BuyGoodsPage.vue src/views/
```

### 3. 路由配置

```typescript
// src/router/index.ts
import BuyGoodsPage from '../views/BuyGoodsPage.vue'

const routes = [
  {
    path: '/buy-goods',
    name: 'BuyGoods',
    component: BuyGoodsPage,
    meta: {
      title: '购买商品'
    }
  }
]
```

### 4. Element Plus 配置

```typescript
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)

// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
```

### 5. 样式配置 (SCSS)

在 `vite.config.ts` 中配置 SCSS：

```typescript
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/element/index.scss" as *;`
      }
    }
  }
})
```

---

## 🔧 配置说明

### API 基础 URL

修改 `src/api/goods.ts` 和 `src/api/cart.ts` 中的 baseURL：

```typescript
// 当前使用相对路径
const request = {
  async post<T>(url: string, data?: unknown): Promise<T> {
    const response = await fetch(url, { // 修改为完整 URL
      // ...
    })
  }
}
```

### Store 中的 siteId

当前在组件中硬编码为 `'1'`，建议从路由或配置中读取：

```typescript
// BuyGoodsPage.vue
const siteId = route.params.siteId as string || '1'
```

---

## 🧪 测试运行

```bash
# 运行测试
npm test -- src/features/buy-goods/__tests__/buy-goods.spec.ts

# 覆盖率报告
npm test -- --coverage
```

---

## 📊 性能指标

| 指标 | 目标 | 状态 |
|------|------|------|
| 首屏加载 | < 2s | 待验证 |
| 商品列表渲染 | < 100ms (100条) | 待验证 |
| 添加购物车响应 | < 50ms | 待验证 |
| 内存占用 | < 100MB | 待验证 |

---

## 🐛 已知问题

1. **API Mock**: 当前 API 层使用真实的 fetch，需要配置 Mock 或真实后端
2. **图片加载**: 商品图片使用空 URL，需要配置图片域名
3. **路由集成**: BuyGoodsPage 中的 siteId 硬编码，需从路由获取
4. **TypeScript 严格模式**: 部分类型可能需要根据实际项目调整

---

## 🚀 后续优化建议

1. **虚拟滚动**: 商品列表超过 100 条时使用虚拟滚动
2. **图片懒加载**: 商品图片使用懒加载优化
3. **骨架屏**: 添加加载骨架屏提升体验
4. **错误重试**: API 错误时自动重试机制
5. **离线缓存**: 商品列表本地缓存

---

## 📝 变更记录

| 日期 | 版本 | 变更 |
|------|------|------|
| 2026-03-16 | v1.0.0 | 初始版本，完成功能实现 |

---

## ✅ 交付确认

- [x] 代码文件完整
- [x] 集成指南清晰
- [x] 依赖说明完整
- [x] 已知问题记录
- [x] 优化建议提供

---

**交付状态**: ✅ 已完成
**交付时间**: 2026-03-16
**负责人**: AI Assistant
