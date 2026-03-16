# 统一语言表 (Glossary)

## POS点单领域术语

| 术语 | 英文 | 定义 | 代码中使用 |
|------|------|------|-----------|
| 店铺商品 | SiteGoods | 店铺下的商品实例 | `siteGoodsId` |
| 单品 | SINGLE | 普通商品类型 | `goodsTypeFlag: 'SINGLE'` |
| 套餐 | COMB | 套餐商品类型 | `goodsTypeFlag: 'COMB'` |
| SKU | SKU | 库存量单位（规格） | `siteGoodsSkuId`, `skuId` |
| 属性 | Attr | 套餐的可选规格维度 | `attrList` |
| 属性值 | AttrVal | 规格的具体选项 | `attrValList` |
| 在售 | not soldOut | 商品可购买状态 | `soldOut: false` |
| 已售罄 | Sold Out | 商品库存为0 | `soldOut: true` |
| 加购 | Add to Cart | 将商品加入购物车 | `addToCart()` |
| 购物车 | Shopping Cart | 存放待结算商品 | `CartStore` |
| 用餐方式 | Dining Way | 堂食/外带模式 | `diningWay` |
| 沽清 | Stock Out | 商品库存管理 | `posStockNumber` |
| 缺省图 | Placeholder Image | 图片加载失败显示 | `defaultImage` |

## buy-goods 功能术语

| 业务词 | 英文名 | 含义 | 所属领域 |
|--------|--------|------|----------|
| 商品 | Goods | 门店销售的商品，含单品和套餐 | POS |
| 单品 | SingleGoods | 单一商品，无需选择规格 | POS |
| 套餐 | ComboGoods | 组合商品，含多个可选规格 | POS |
| 规格属性 | Attribute | 套餐的可选属性（如辣度、份量） | POS |
| 规格属性值 | AttributeValue | 属性的具体选项 | POS |
| 购物车项 | CartItem | 购物车中的单个商品记录 | POS |
| 用餐方式 | DiningWay | 堂食(IN)/外带(OUT) | POS |
| 外带不兼容 | IncompatibleWithOut | 不支持外带的商品标记 | POS |
| 去收款 | Checkout | 提交购物车生成订单 | POS |
| 在售数量 | OnSaleNumber | 当前可售库存数量 | POS |
| 分类 | Category | 商品分类，用于筛选 | POS |
| 门店 | Site | 门店/店铺实体 | POS |
| 订单 | Order | 待支付/已支付的订单 | POS |

## 技术术语

| 术语 | 英文 | 定义 | 代码中使用 |
|------|------|------|-----------|
| DTO | Data Transfer Object | 数据传输对象 | `CartItemDTO` |
| 适配器 | Adapter | 数据转换函数 | `adaptCartItem()` |
| 确认弹窗 | Confirm Dialog | Promise 封装的确认框 | `showConfirm()` |
| Store | Pinia Store | 状态管理容器 | `useGoodsStore` |
| Computed | Computed Property | 计算属性 | `totalCount` |
| Getter | Store Getter | Store 计算属性 | `isEmpty`, `canSubmit` |

---

**最后更新**: 2026-03-16 (Layer 7 知识沉淀完成)
