# 点餐页接口文档

> 基于 buy-goods 需求文档与 门店POS全链路接口 整合
> 生成时间: 2026-03-16
> 版本: v1.0

---

## 1. 业务概述

### 1.1 功能描述

点餐页是POS系统的核心功能模块，提供以下能力：

| 功能模块 | 功能描述 | 优先级 |
|---------|---------|--------|
| 商品展示 | 展示门店在售商品，支持分类筛选 | P0 |
| 规格选择 | 套餐商品多规格属性选择 | P0 |
| 购物车管理 | 添加、删除、修改商品数量 | P0 |
| 用餐方式 | 堂食/外带切换，冲突检测 | P0 |
| 订单提交 | 购物车商品生成订单 | P0 |
| 搜索功能 | 按关键词搜索商品 | P1 |

### 1.2 术语表

| 中文名 | 英文名 | 含义 |
|--------|--------|------|
| 用餐方式 | DiningWay | IN_SITE=堂食, TAKE_AWAY=外带, TAKE_OUT=外卖 |
| 单品 | SINGLE | 独立商品，无需选择规格 |
| 套餐 | COMB | 组合商品，含多个可选规格属性 |
| SKU | SKU | 库存量单位，商品的具体规格 |
| 规格属性 | Attribute | 套餐的可选属性（如辣度、份量） |
| 购物车项 | CartItem | 购物车中的单个商品记录 |
| 外带不兼容 | IncompatibleWithOut | 不支持外带的商品标记 |
| 门店商品 | SiteGoods | 特定门店的商品实例 |
| 沽清 | SoldOut | 商品库存为0状态 |

---

## 2. 接口清单

### 2.1 商品相关接口

| 接口名称 | 请求方式 | 接口路径 | 状态 |
|---------|---------|---------|------|
| 商品列表查询 | GET | `/api/pos/goods/list` | 已定义 |
| 分类列表查询 | GET | `/api/pos/category/list` | 已定义 |
| SKU详情查询 | GET | `/api/pos/goods/sku/detail` | 已定义 |
| SKU信息查询 | GET | `/api/pos/goods/sku/info` | 已定义 |

### 2.2 购物车相关接口

| 接口名称 | 请求方式 | 接口路径 | 状态 |
|---------|---------|---------|------|
| 添加购物车 | POST | `/admin/client/cart/submissionCart` | 开发中 |
| 购物车商品管理 | POST | `/admin/client/cart/cartGoodsManagement` | 开发中 |
| 查询购物车信息 | GET | `/admin/client/cart/queryCartInfo` | 开发中 |
| 创建空购物车 | POST | `/admin/client/cart/createOpenCart` | 开发中 |
| 查询未结算购物车列表 | GET | `/admin/client/cart/queryOpenCartList` | 开发中 |
| 购物车价格计算 | GET | `/admin/client/cart/cartPriceCalculation` | 开发中 |
| 自动加购 | POST | `/admin/client/cart/autoAddCart` | 开发中 |
| 用餐方式切换差异计算 | GET | `/admin/client/cart/switchDifference` | 开发中 |

### 2.3 订单相关接口

| 接口名称 | 请求方式 | 接口路径 | 状态 |
|---------|---------|---------|------|
| 打印订单小票 | POST | `/admin/pos-order-manage/printOrderTicket` | 开发中 |

---

## 3. 接口详情

### 3.1 商品列表查询

**接口说明**: 获取门店在售商品列表

```http
GET /api/pos/goods/list
```

**请求参数**:

| 参数名 | 类型 | 必填 | 描述 |
|--------|------|------|------|
| siteId | integer | 是 | 店铺ID |
| siteSchId | integer | 是 | 店铺批次ID |
| categoryKey | string | 否 | 分类key，不传则查全部 |
| diningWay | string | 否 | 用餐方式：IN_SITE/TAKE_AWAY/TAKE_OUT |
| keyword | string | 否 | 搜索关键词 |
| showSoldOut | boolean | 否 | 是否显示售罄商品，默认true |

**响应示例**:

```json
{
  "code": 200,
  "data": {
    "list": [
      {
        "siteGoodsId": 17691512,
        "goodsId": 151583,
        "goodsName": "酱煨小黄鱼",
        "number": 100,
        "price": 17.8,
        "oriPrice": 20.0,
        "siteDiscountPrice": 15.8,
        "pic": "https://example.com/goods.jpg",
        "soldOut": false,
        "goodsTypeFlag": "SINGLE",
        "defaultSku": null,
        "incompatibleWithOut": false,
        "categoryKey": "zhushi"
      }
    ]
  }
}
```

**响应字段说明**:

| 字段名 | 类型 | 描述 |
|--------|------|------|
| siteGoodsId | integer | 店铺商品ID（唯一标识） |
| goodsId | integer | 商品ID |
| goodsName | string | 商品名称 |
| number | integer | 在售数量 |
| price | number | 当前售价 |
| oriPrice | number | 原价 |
| siteDiscountPrice | number | 门店折扣价（可能为空） |
| pic | string | 商品图片URL |
| soldOut | boolean | 是否售罄 |
| goodsTypeFlag | string | 商品类型：SINGLE=单品，COMB=套餐 |
| defaultSku | object | 默认SKU信息（套餐时有效） |
| incompatibleWithOut | boolean | 是否不支持外带 |
| categoryKey | string | 分类key |

---

### 3.2 分类列表查询

**接口说明**: 获取门店商品分类列表

```http
GET /api/pos/category/list
```

**请求参数**:

| 参数名 | 类型 | 必填 | 描述 |
|--------|------|------|------|
| siteId | integer | 是 | 店铺ID |
| siteSchId | integer | 是 | 店铺批次ID |

**响应示例**:

```json
{
  "code": 200,
  "data": {
    "list": [
      {
        "name": "主食",
        "menuType": "zhushi"
      },
      {
        "name": "套餐",
        "menuType": "taocan"
      }
    ]
  }
}
```

---

### 3.3 SKU详情查询

**接口说明**: 获取套餐商品的规格属性详情

```http
GET /api/pos/goods/sku/detail
```

**请求参数**:

| 参数名 | 类型 | 必填 | 描述 |
|--------|------|------|------|
| siteGoodsId | integer | 是 | 店铺商品ID |

**响应示例**:

```json
{
  "code": 200,
  "data": {
    "attrList": [
      {
        "attrId": 1,
        "mustFlag": 1,
        "name": "辣度",
        "attrValList": [
          {
            "attrValId": 11,
            "name": "微辣",
            "defaultFlag": 1,
            "img": "",
            "stock": 100
          },
          {
            "attrValId": 12,
            "name": "中辣",
            "defaultFlag": 0,
            "img": "",
            "stock": 50
          }
        ]
      }
    ]
  }
}
```

---

### 3.4 SKU信息查询

**接口说明**: 根据选择的规格属性值获取SKU信息

```http
GET /api/pos/goods/sku/info
```

**请求参数**:

| 参数名 | 类型 | 必填 | 描述 |
|--------|------|------|------|
| siteGoodsId | integer | 是 | 店铺商品ID |
| attrValList | string | 是 | 属性值ID列表，逗号分隔，如：11,21 |

**响应示例**:

```json
{
  "code": 200,
  "data": {
    "spuId": 151583,
    "siteGoodsSkuId": 17691513,
    "skuId": 12345,
    "img": "https://example.com/sku.jpg",
    "price": 19.8,
    "name": "酱煨小黄鱼-微辣-大份",
    "status": 1,
    "desc": "规格描述"
  }
}
```

---

### 3.5 添加购物车

**接口说明**: 添加商品到购物车

```http
POST /admin/client/cart/submissionCart
Content-Type: application/json
```

**请求参数**:

| 参数名 | 类型 | 必填 | 描述 |
|--------|------|------|------|
| siteId | integer | 是 | 店铺ID |
| siteSchId | integer | 是 | 店铺批次ID |
| cartId | string | 否 | 购物车ID：有则给，无则不给 |
| cartKey | string | 否 | 购物车key |
| diningWay | string | 是 | 用餐方式：IN_SITE/TAKE_AWAY/TAKE_OUT |
| orderMethodType | string | 否 | 下单方式 |
| goodsInfoList | array | 否 | 商品信息列表 |
| goodsInfoList[].siteGoodsId | integer | 是 | 店铺商品ID |
| goodsInfoList[].goodsId | integer | 是 | 商品ID |
| goodsInfoList[].goodsNum | integer | 是 | 商品数量：正数添加，负数删除，0清空 |
| goodsInfoList[].clearCount | boolean | 否 | 是否清空数量 |
| goodsInfoList[].freedomCombo | boolean | 否 | 是否自由套餐 |
| goodsInfoList[].addGoodsList | array | 否 | 加购商品列表 |
| packageInfoList | array | 否 | 套餐信息列表 |
| packageInfoList[].spuId | integer | 是 | spuId = 套餐goodsId |
| packageInfoList[].siteGoodsId | integer | 是 | 店铺商品ID |
| packageInfoList[].skuInfoList | array | 是 | sku明细 |
| packageInfoList[].skuInfoList[].siteGoodsSkuId | integer | 是 | 套餐skuId |
| packageInfoList[].skuInfoList[].goodsNum | integer | 是 | 套餐sku数量 |

**请求示例**:

```json
{
  "siteId": 800291,
  "siteSchId": 1204710,
  "cartId": "2033417582625460226",
  "cartKey": "90848cb2-0812-407d-8355-644c310a98fc",
  "diningWay": "IN_SITE",
  "goodsInfoList": [
    {
      "siteGoodsId": 17691512,
      "goodsId": 151583,
      "goodsNum": 1,
      "clearCount": false,
      "freedomCombo": false,
      "addGoodsList": []
    }
  ]
}
```

**响应示例**:

```json
{
  "code": 0,
  "msg": "购物车添加成功",
  "data": {
    "siteId": "800291",
    "cartId": "2033417582625460226",
    "siteName": "快鳄未来食堂（北宸店）",
    "siteSchId": "1204710",
    "offerType": null,
    "originalTotalPrice": 17.8,
    "payableTotalPrice": 17.8,
    "discountTotalPrice": 0,
    "diningWay": "IN_SITE",
    "cartsGoodsInfoList": [
      {
        "cartItemId": "2033417582784843777",
        "applicableDiningWays": ["IN_SITE"],
        "orderType": "NORMAL",
        "siteGoodsId": "17691512",
        "siteSchId": "1204710",
        "goodsId": "151583",
        "number": 1,
        "goodsName": "酱煨小黄鱼",
        "pic": "https://example.com/goods.jpg",
        "price": 17.8,
        "maxBuyNum": null,
        "allowOrder": true,
        "disableOrderReason": "",
        "soldOut": false,
        "addDateTime": "1773639505460",
        "goodSpecList": null,
        "addGoodsList": []
      }
    ],
    "packageInfoList": [],
    "diningWayCartsInfoList": [
      {
        "diningWay": "IN_SITE",
        "cartsInfo": {
          "groupCartId": "2033417582625460226",
          "cartId": "2033417582625460226",
          "goodsPrice": 17.8,
          "siteName": "快鳄未来食堂（北宸店）",
          "goodsNum": 1
        }
      }
    ]
  }
}
```

---

### 3.6 购物车商品管理

**接口说明**: 管理购物车中的商品（修改数量、删除）

```http
POST /admin/client/cart/cartGoodsManagement
Content-Type: application/json
```

**请求参数**:

| 参数名 | 类型 | 必填 | 描述 |
|--------|------|------|------|
| cartId | integer | 否 | 购物车ID |
| groupCartId | integer | 否 | 跨用餐方式同步时的购物车分组ID |
| siteId | integer | 否 | 店铺ID |
| siteSchId | integer | 否 | 店铺批次ID |
| diningWay | string | 否 | 用餐方式 |
| itemList | array | 否 | 商品管理列表 |
| itemList[].cartItemId | integer | 是 | 商品明细ID |
| itemList[].goodCount | integer | 是 | 数量（正数添加，负数减少，0删除） |
| itemList[].clearCount | boolean | 否 | 是否清空数量 |
| itemList[].addGoodsList | array | 否 | 加购商品列表 |
| packageInfoList | array | 否 | 套餐信息 |
| uniqueKeyId | integer | 否 | 未登录其余用餐方式的唯一key |

**请求示例**:

```json
{
  "cartId": 2033417582625460226,
  "siteId": 800291,
  "siteSchId": 1204710,
  "diningWay": "IN_SITE",
  "itemList": [
    {
      "cartItemId": 2033417582784843777,
      "goodCount": -1,
      "clearCount": false,
      "addGoodsList": []
    }
  ]
}
```

---

### 3.7 查询购物车信息

**接口说明**: 查询当前购物车详细信息

```http
GET /admin/client/cart/queryCartInfo
```

**请求参数**:

| 参数名 | 类型 | 必填 | 描述 |
|--------|------|------|------|
| siteId | integer | 是 | 店铺ID |
| siteSchId | integer | 是 | 批次ID |
| diningWay | string | 是 | 用餐方式 |
| cartId | integer | 否 | 购物车ID |
| groupBookingId | integer | 否 | - |
| orderMethodType | string | 否 | - |

**响应字段说明**:

| 字段名 | 类型 | 描述 |
|--------|------|------|
| siteId | string | 店铺ID |
| cartId | string | 购物车ID |
| siteName | string | 店铺名称 |
| siteSchId | string | 批次ID |
| originalTotalPrice | number | 原价总额 |
| payableTotalPrice | number | 应付总额 |
| discountTotalPrice | number | 优惠总额 |
| diningWay | string | 用餐方式 |
| cartsGoodsInfoList | array | 购物车商品列表 |
| packageInfoList | array | 套餐列表 |
| diningWayCartsInfoList | array | 各用餐方式的购物车信息 |

---

### 3.8 用餐方式切换差异计算

**接口说明**: 切换用餐方式时计算差异（哪些商品会被移除）

```http
GET /admin/client/cart/switchDifference
```

**请求参数**:

| 参数名 | 类型 | 必填 | 描述 |
|--------|------|------|------|
| siteId | integer | 是 | 店铺ID |
| siteSchId | integer | 是 | 店铺批次ID |
| currDiningWay | string | 是 | 当前用餐方式 |
| switchDiningWay | string | 是 | 需要切换的用餐方式 |

**响应示例**:

```json
{
  "code": 1,
  "msg": "",
  "data": {
    "removedItems": [
      {
        "cartItemId": "123",
        "goodsName": "特定商品",
        "reason": "该商品不支持外带"
      }
    ]
  }
}
```

---

### 3.9 创建空购物车

**接口说明**: 创建空购物车，当前购物车即视为挂起，继续为下一位顾客下单

```http
POST /admin/client/cart/createOpenCart
```

**请求参数**:

| 参数名 | 类型 | 必填 | 描述 |
|--------|------|------|------|
| siteId | integer | 是 | 店铺ID |
| siteSchId | integer | 是 | 店铺批次ID |
| diningWay | string | 是 | 用餐方式 |

---

### 3.10 查询门店未结算购物车列表

**接口说明**: 查询门店中未结算的购物车列表（挂起订单）

```http
GET /admin/client/cart/queryOpenCartList
```

**请求参数**:

| 参数名 | 类型 | 必填 | 描述 |
|--------|------|------|------|
| siteId | integer | 是 | 店铺ID |
| siteSchId | integer | 是 | 店铺批次ID |
| diningWay | string | 否 | 用餐方式筛选 |

---

### 3.11 购物车价格计算

**接口说明**: 计算购物车价格（优惠后的实际价格）

```http
GET /admin/client/cart/cartPriceCalculation
```

**请求参数**:

| 参数名 | 类型 | 必填 | 描述 |
|--------|------|------|------|
| cartId | integer | 否 | 购物车ID |
| siteId | integer | 是 | 店铺ID |
| siteSchId | integer | 是 | 店铺批次ID |
| groupBookingId | integer | 否 | - |
| orderMethodType | string | 否 | 下单方式 |
| diningWay | string | 是 | 用餐方式 |

---

### 3.12 自动加购

**接口说明**: 根据就餐人数自动加购主食

```http
POST /admin/client/cart/autoAddCart
Content-Type: application/json
```

**请求参数**:

| 参数名 | 类型 | 必填 | 描述 |
|--------|------|------|------|
| siteId | integer | 否 | 店铺ID |
| siteSchId | integer | 否 | 店铺批次 |
| diningWay | string | 否 | 用餐方式 |
| switchDiningWay | string | 否 | 切换的用餐方式 |
| peopleNum | integer | 否 | 就餐人数 |
| alsoNeedNum | integer | 否 | 还需加购主食数量 |

---

### 3.13 打印订单小票

**接口说明**: 打印订单小票

```http
POST /admin/pos-order-manage/printOrderTicket
Content-Type: application/json
```

**请求参数**:

| 参数名 | 类型 | 必填 | 描述 |
|--------|------|------|------|
| orderId | integer | 是 | 订单ID |

**响应示例**:

```json
{
  "code": 0,
  "msg": null,
  "data": "打印成功"
}
```

---

## 4. 数据模型

### 4.1 商品模型

```typescript
interface GoodsItem {
  id: number              // siteGoodsId
  goodsId: number         // 商品ID
  name: string            // 商品名称
  price: number           // 当前售价
  originalPrice: number   // 原价
  discountPrice?: number  // 折扣价
  image: string           // 商品图片
  stock: number           // 库存数量
  isSoldOut: boolean      // 是否售罄
  type: 'SINGLE' | 'COMB' // 商品类型
  categoryKey: string     // 分类key
  incompatibleWithOut: boolean  // 是否不支持外带
  defaultSku: DefaultSku | null // 默认SKU（套餐时有效）
}

interface DefaultSku {
  spuId: number
  siteGoodsSkuId: number
  skuId: number
  image: string
  price: number
  name: string
  status: number
  desc: string
}
```

### 4.2 购物车模型

```typescript
interface CartItem {
  id: string              // cartItemId
  siteGoodsId: number     // 店铺商品ID
  goodsId: number         // 商品ID
  goodsName: string       // 商品名称
  skuId: number           // SKU ID
  skuName: string         // SKU名称
  price: number           // 单价
  quantity: number        // 数量
  image: string           // 商品图片
  type: 'SINGLE' | 'COMB' // 商品类型
  subItems?: SubItem[]    // 子项（套餐时）
  incompatibleWithOut: boolean  // 是否不支持外带
}

interface SubItem {
  name: string
  quantity: number
}

interface CartInfo {
  siteId: string
  cartId: string
  siteName: string
  siteSchId: string
  originalTotalPrice: number   // 原价总额
  payableTotalPrice: number    // 应付总额
  discountTotalPrice: number   // 优惠总额
  diningWay: string
  cartsGoodsInfoList: CartItem[]
  packageInfoList: PackageItem[]
}
```

### 4.3 规格属性模型

```typescript
interface SkuAttribute {
  attrId: number
  mustFlag: boolean     // 是否必选
  name: string          // 属性名称（如：辣度）
  values: SkuAttributeValue[]
}

interface SkuAttributeValue {
  attrValId: number
  name: string          // 属性值（如：微辣）
  defaultFlag: boolean  // 是否默认选中
  image: string
  stock: number
}

interface SkuInfo {
  spuId: number
  siteGoodsSkuId: number
  skuId: number
  image: string
  price: number
  name: string
  status: number
  desc: string
}
```

---

## 5. 业务流程

### 5.1 正常点餐流程

```
1. 查询门店在售商品列表
   ↓
2. 用户选择商品
   ├─ 单品：直接加入购物车
   └─ 套餐：打开规格选择弹窗 → 选择规格 → 加入购物车
   ↓
3. 购物车实时更新
   ↓
4. 点击"去收款" → 创建订单
   ↓
5. 打印订单小票
```

### 5.2 用餐方式切换流程

```
1. 用户点击切换用餐方式（堂食↔外带）
   ↓
2. 调用 switchDifference 计算差异
   ↓
3. 如有冲突商品
   ├─ 显示确认弹窗，提示哪些商品会被移除
   ├─ 用户确认后，调用 submissionCart 切换
   └─ 自动移除不兼容商品
   ↓
4. 刷新购物车信息
```

### 5.3 异常处理

| 异常场景 | 处理方案 |
|---------|---------|
| 商品售罄 | 商品置灰显示，点击提示"商品已售罄" |
| 库存不足 | 提示"库存不足，当前仅剩X份" |
| 外带不兼容 | 切换用餐方式时提示，并移除商品 |
| 购物车为空 | "去收款"按钮置灰，提示"请先添加商品" |
| 网络异常 | 提示网络错误，提供重试按钮 |

---

## 6. Mock数据

### 6.1 商品列表Mock

```javascript
// /api/pos/goods/list
{
  code: 200,
  data: {
    list: [
      {
        siteGoodsId: 17691512,
        goodsId: 151583,
        goodsName: "酱煨小黄鱼",
        number: 100,
        price: 17.8,
        oriPrice: 20.0,
        pic: "https://huabingoss.huabing.online/...",
        soldOut: false,
        goodsTypeFlag: "SINGLE",
        incompatibleWithOut: false,
        categoryKey: "zhushi"
      }
    ]
  }
}
```

### 6.2 购物车Mock

```javascript
// /admin/client/cart/queryCartInfo
{
  code: 0,
  msg: "查询购物车信息成功",
  data: {
    siteId: "800291",
    cartId: "2033417582625460226",
    siteName: "快鳄未来食堂（北宸店）",
    siteSchId: "1204710",
    originalTotalPrice: 17.8,
    payableTotalPrice: 17.8,
    discountTotalPrice: 0,
    diningWay: "IN_SITE",
    cartsGoodsInfoList: [...],
    packageInfoList: [],
    diningWayCartsInfoList: [...]
  }
}
```

---

## 7. 附录

### 7.1 用餐方式枚举

| 值 | 含义 |
|----|------|
| IN_SITE | 堂食 |
| TAKE_AWAY | 外带 |
| TAKE_OUT | 外卖 |

### 7.2 商品类型枚举

| 值 | 含义 |
|----|------|
| SINGLE | 单品（独立商品） |
| COMB | 套餐（多规格商品） |

### 7.3 错误码

| 错误码 | 含义 | 处理建议 |
|--------|------|---------|
| 0 | 成功 | - |
| 400 | 参数错误 | 检查请求参数 |
| 401 | 未授权 | 重新登录 |
| 404 | 接口不存在 | 检查接口地址 |
| 500 | 服务器错误 | 联系后端开发 |

---

## 8. 变更记录

| 版本 | 日期 | 变更内容 | 作者 |
|------|------|---------|------|
| v1.0 | 2026-03-16 | 初版，整合buy-goods需求与POS接口 | AI |

---

**文档结束**
