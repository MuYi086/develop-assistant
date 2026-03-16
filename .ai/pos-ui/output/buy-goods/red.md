# buy-goods - 红测试记录

## 测试运行结果

**运行时间**: 2026-03-16
**测试框架**: Vitest + Vue Testing Library
**Mock**: MSW / Vitest Mock
**状态**: 全红（预期）

```
Test Files  1 failed (1)
     Tests  7 failed (7)
  Duration  Xs
```

## 测试清单

### 用例1: 正常流程 - 单品加购并提交
- [ ] 实现 BuyGoodsPage 主页面组件
- [ ] 实现 GoodsCard 商品卡片组件
- [ ] 实现商品列表加载逻辑
- [ ] 实现单品点击直接加购
- [ ] 实现 ShoppingCart 购物车组件
- [ ] 实现购物车数量加减
- [ ] 实现"去收款"跳转逻辑
- [ ] **测试通过** 🔴 → 🟢

### 用例2: 正常流程 - 套餐规格选择后加购
- [ ] 实现 SpecSelector 规格选择弹窗
- [ ] 实现规格属性列表展示
- [ ] 实现属性值选择逻辑
- [ ] 实现SKU价格动态计算
- [ ] 实现"添加到购物车"按钮
- [ ] 购物车显示规格信息
- [ ] **测试通过** 🔴 → 🟢

### 用例3: 异常流程 - 切换用餐方式冲突
- [ ] 实现 DiningWaySwitch 用餐方式切换
- [ ] 实现商品兼容性检测逻辑
- [ ] 实现 ConfirmDialog 二次确认弹窗
- [ ] 实现冲突商品移除逻辑
- [ ] 实现用餐方式切换回滚
- [ ] **测试通过** 🔴 → 🟢

### 用例4: 异常流程 - 购物车为空提交
- [ ] 实现"去收款"按钮禁用状态
- [ ] 实现空购物车提交拦截
- [ ] 实现购物车状态校验
- [ ] **测试通过** 🔴 → 🟢

### 用例5: 边缘情况 - 商品查询超时
- [ ] 实现 API 超时处理
- [ ] 实现"获取数据超时"提示
- [ ] 实现重试按钮
- [ ] 实现错误状态恢复
- [ ] **测试通过** 🔴 → 🟢

### 用例6: 边缘情况 - SKU规格不存在
- [ ] 实现SKU状态检测
- [ ] 实现"规格不存在"提示
- [ ] 实现添加按钮禁用逻辑
- [ ] **测试通过** 🔴 → 🟢

### 用例7: 边缘情况 - 库存为零的商品
- [ ] 实现售罄商品标识
- [ ] 实现售罄商品点击拦截
- [ ] 实现"已售罄"提示
- [ ] **测试通过** 🔴 → 🟢

## 文件清单

| 文件 | 路径 | 说明 |
|------|------|------|
| 测试文件 | `.ai/pos-ui/output/buy-goods/tests/buy-goods.spec.ts` | 7个测试用例 |
| 商品Mock | `.ai/pos-ui/output/buy-goods/tests/goods.mock.ts` | 商品相关Mock数据 |
| 购物车Mock | `.ai/pos-ui/output/buy-goods/tests/cart.mock.ts` | 购物车相关Mock数据 |

## 待实现组件清单

| 组件名 | 文件路径 | 优先级 |
|--------|----------|--------|
| BuyGoodsPage | `views/buy-goods/index.vue` | P0 |
| GoodsGrid | `views/buy-goods/components/GoodsGrid.vue` | P0 |
| GoodsCard | `views/buy-goods/components/GoodsCard.vue` | P0 |
| CategoryNav | `views/buy-goods/components/CategoryNav.vue` | P0 |
| ShoppingCart | `views/buy-goods/components/ShoppingCart.vue` | P0 |
| CartItem | `views/buy-goods/components/CartItem.vue` | P0 |
| SpecSelector | `views/buy-goods/components/SpecSelector.vue` | P1 |
| DiningWaySwitch | `views/buy-goods/components/DiningWaySwitch.vue` | P1 |
| ConfirmDialog | `components/ConfirmDialog.vue` | P1 |
| QuantityStepper | `components/QuantityStepper.vue` | P0 |

## Store清单

| Store名 | 文件路径 | 说明 |
|---------|----------|------|
| useGoodsStore | `stores/goods.ts` | 商品列表、分类、搜索状态 |
| useCartStore | `stores/cart.ts` | 购物车、数量、金额计算 |
| useUIStore | `stores/ui.ts` | 弹窗显示、加载状态 |

## API接口清单

| 接口名 | 方法 | 路径 | 用途 |
|--------|------|------|------|
| goodsListApi | GET | /api/pos/goods/list | 商品列表 |
| categoryListApi | GET | /api/pos/category/list | 分类列表 |
| skuDetailApi | GET | /api/pos/goods/sku/detail | SKU规格详情 |
| skuInfoApi | GET | /api/pos/goods/sku/info | SKU信息查询 |
| cartAddApi | POST | /api/cart/add | 加购商品 |
| cartUpdateApi | POST | /api/cart/update | 更新数量 |
| cartClearApi | POST | /api/cart/clear | 清空购物车 |
| cartSubmitApi | POST | /api/order/create | 提交购物车 |

## 下一步

进入 **Layer 5: 绿代码+视觉还原**

执行策略:
1. 先实现 P0 组件（基础功能）
2. 逐个让测试变绿
3. 同步进行视觉还原
4. 最后实现 P1 组件（增强功能）

---

**生成时间**: 2026-03-16
**Layer**: 4
**状态**: 已完成（全红测试已就绪）
