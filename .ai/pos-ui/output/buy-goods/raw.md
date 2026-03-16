# buy-goods - 结构化需求

## 1. 业务实体

| 中文名 | 推荐英文名 | 类型 | 来源 |
|--------|-----------|------|------|
| 商品 | Goods | Entity | PRD/API |
| 商品类型 | GoodsType | Enum | API: SINGLE/COMB |
| SKU | Sku | Value Object | API |
| 规格属性 | Attribute | Value Object | API |
| 规格属性值 | AttributeValue | Value Object | API |
| 购物车 | ShoppingCart | Entity | PRD |
| 购物车项 | CartItem | Entity | PRD |
| 用餐方式 | DiningWay | Enum | PRD: 堂食/外带 |
| 分类 | Category | Value Object | PRD/API |
| 门店 | Site | Entity | API |
| 订单 | Order | Entity | PRD |
| 沽清状态 | StockStatus | Enum | API |

## 2. 页面结构（来自Pencil）

### Page: BuyGoods (点餐-团购)
- **Container**: 主容器 (1280x800)
  - **StatusBar**: 状态栏 (高40)
    - Logo区域
    - 店铺名称
    - 时间显示
    - 网络/WIFI/电量
  - **SidebarNav**: 侧边导航 (宽80)
    - 功能图标列表
    - 用户头像
  - **SecondaryNav**: 二级导航栏 (宽164)
    - **DiningWaySwitcher**: 用餐方式切换 (堂食/外带)
    - **CategoryList**: 分类列表
      - 全部套餐(激活状态, #d6f0eb)
      - 快捷推荐、团购上新、小龙虾套餐等
    - **BottomActions**: 底部操作
      - 搜索按钮
      - 更多按钮
  - **MainContent**: 主内容区 (宽704)
    - **GoodsGrid**: 商品网格
      - 6行5列商品卡片
      - 每个卡片: 图片、名称、原价、售价
      - 售罄标记
  - **ShoppingCartPanel**: 购物车面板 (宽320)
    - **CartHeader**: 购物车头部
      - 标题"购物车"
      - 清空按钮
    - **CartTip**: 温馨提示 (#eb8500)
    - **CartContent**: 购物车内容区
      - 商品列表项
      - 商品图片、名称、规格
      - 数量控制(+/-)
      - 单价
    - **CartFooter**: 购物车底部
      - 商品总数
      - 总价
      - 去收款按钮

### Dialog: SwitchDiningWay (切换用餐方式)
- **Overlay**: 遮罩层 (#00000080)
- **Dialog**: 弹窗容器 (392x221, 圆角16)
  - **Title**: 温馨提示
  - **Message**: 确认文案
  - **Actions**: 取消/确认按钮

### Dialog: ClearCart (清空购物车)
- **Overlay**: 遮罩层 (#00000080)
- **Dialog**: 弹窗容器 (392x197, 圆角16)
  - **Title**: 温馨提示
  - **Message**: "是否确认清空购物车？"
  - **Actions**: 取消/确认按钮

### Dialog: SpecSelector (套餐规格选择) - 待确认
- 从PRD推断存在
- 属性列表
- 属性值选择
- 确认加购按钮

## 3. 接口规格（来自API）

### 3.1 商品列表查询
- **URL**: /api/pos/goods/list
- **Method**: GET
- **请求参数**:
  | 字段 | 类型 | 说明 |
  |------|------|------|
  | siteId | string | 店铺id |
  | showSoldOut | number | 0-不显示售罄 1-显示售罄 |
  | goodsName | string | 商品名称模糊搜索 |
  | menuType | string | 左侧栏分类筛选 |
  | diningWay | string | 用餐方式 |
- **响应字段**:
  | 字段 | 类型 | 说明 |
  |------|------|------|
  | siteGoodsId | number | 店铺商品id |
  | goodsId | number | 商品id |
  | goodsName | string | 商品名称 |
  | number | number | 在售数量 |
  | price | number | 售价 |
  | oriPrice | number | 原价 |
  | siteDiscountPrice | number | 店铺优惠价 |
  | pic | string | 商品图片 |
  | soldOut | boolean | 是否售罄 |
  | goodsTypeFlag | string | SINGLE-单品/COMB-套餐 |
  | defaultSku | object | 默认SKU信息 |

### 3.2 左侧栏分类
- **URL**: /api/pos/category/list
- **Method**: GET
- **请求参数**:
  | 字段 | 类型 | 说明 |
  |------|------|------|
  | siteId | string | 店铺id |
  | type | number | 1全部 2单品 3套餐 |
  | diningWay | string | 用餐方式 |
- **响应字段**:
  | 字段 | 类型 | 说明 |
  |------|------|------|
  | name | string | 分类名称 |
  | menuType | string | 分类值 |

### 3.3 SKU详情查询
- **URL**: /api/pos/goods/sku/detail
- **Method**: GET
- **请求参数**:
  | 字段 | 类型 | 说明 |
  |------|------|------|
  | siteGoodsId | number | 店铺商品id |
- **响应字段**:
  | 字段 | 类型 | 说明 |
  |------|------|------|
  | attrList | array | 规格属性列表 |
  | attrId | number | 属性id |
  | mustFlag | number | 是否必选 |
  | name | string | 属性名称 |
  | attrValList | array | 属性值列表 |

### 3.4 SKU信息查询(选择后)
- **URL**: /api/pos/goods/sku/info
- **Method**: GET
- **请求参数**:
  | 字段 | 类型 | 说明 |
  |------|------|------|
  | siteGoodsId | number | 店铺商品id |
  | attrValList | array | 选择的属性值id列表 |
- **响应字段**:
  | 字段 | 类型 | 说明 |
  |------|------|------|
  | spuId | number | 商品id |
  | siteGoodsSkuId | number | 店铺商品SKU id |
  | skuId | number | sku id |
  | img | string | 图片 |
  | price | number | 价格 |
  | name | string | 复合名称 |
  | status | number | -1必选属性缺失 1正常 2规格不存在 3已售罄 |
  | desc | string | 非正常状态显示文案 |

### 3.5 支付相关 (云端pay功能)
- **扫码支付**: /api/pay/scan
- **创建支付单**: /api/pay/order/create
- **支付结果查询**: /api/pay/query
- **支付回调**: 异步通知

## 4. 术语冲突检测

| 术语 | 当前定义 | 已有定义 | 冲突 |
|------|---------|---------|------|
| SKU | 具体规格商品 | - | 无 |
| 单品 | SINGLE类型商品 | - | 无 |
| 套餐 | COMB类型商品,含规格选择 | - | 无 |
| 沽清 | 库存为0或停售 | - | 无 |
| 在售数量 | 当前可售数量 | - | 无 |

**结论**: 无冲突

## 5. 状态流转

### 5.1 单品加购流程
```
点击商品卡片(单品)
  ↓
直接加入购物车
  ↓
购物车数量+1
```

### 5.2 套餐加购流程
```
点击商品卡片(套餐)
  ↓
弹出规格选择弹窗
  ↓
选择规格属性
  ↓
点击"添加到购物车"
  ↓
关闭弹窗,购物车新增记录
```

### 5.3 购物车提交流程
```
点击"去收款"
  ↓
校验购物车非空
  ↓
提交购物车数据
  ↓
创建订单
  ↓
进入确认订单页
```

### 5.4 切换用餐方式流程
```
切换用餐方式
  ↓
检查购物车内商品兼容性
  ↓
存在不兼容商品?
  ├─ 是 → 显示二次确认弹窗
  │         ↓
  │       用户确认?
  │         ├─ 是 → 移除不兼容商品 + 切换
  │         └─ 否 → 取消切换
  └─ 否 → 直接切换
```

## 6. 异常场景

| 场景 | 触发条件 | 处理方案 |
|------|---------|---------|
| 离店云端模式 | 网络模式异常 | 提示"无法使用本功能" |
| 商品列表为空 | 无匹配商品 | 显示"请更换筛选条件" |
| 查询超时 | 接口响应>阈值 | 显示"获取数据超时" |
| 查询失败 | 接口错误 | 显示"查询商品失败" |
| 购物车为空 | 点击去收款 | 按钮置灰不可点击 |
| 提交超时 | 提交接口超时 | Toast提示"提交购物车超时" |
| 提交失败 | 提交接口错误 | 弹窗提示后端错误原因 |
| SKU规格不存在 | 选择无效组合 | 显示对应提示文案 |
| SKU已售罄 | 选中规格售罄 | 显示"已售罄"提示 |

## 7. 待确认问题 (已确认)

| # | 问题 | 确认结果 | 备注 |
|---|------|----------|------|
| 1 | 套餐规格选择弹窗的具体UI设计稿? | 参考Pencil设计稿 | 需从Pencil提取规格弹窗设计 |
| 2 | 搜索框的交互方式(弹窗/内嵌)? | 弹窗式 | 点击搜索按钮弹出搜索对话框 |
| 3 | 隐藏售罄checkbox的位置? | 在'更多'菜单内 | 点击更多后显示选项 |
| 4 | 购物车商品数量上限? | 999件 | 统一上限999 |
| 5 | 是否支持购物车商品排序调整? | 不支持 | 以后端接口返回顺序为准 |
| 6 | 商品图片缺省图使用哪种? | src置空 | 后续用户自行补充 |
| 7 | 重置本机商品的触发位置? | 在'更多'菜单内 | 与隐藏售罄放一起 |

**确认时间**: 2026-03-16

## 8. 设计Token提取

### 颜色
| 名称 | 色值 | 用途 |
|------|------|------|
| primary | #00a384 | 主色调、激活状态 |
| warning | #eb8500 | 温馨提示 |
| background | #ebebeb | 页面背景 |
| surface | #ffffff | 卡片背景 |
| text-primary | #000000 | 主要文字 |
| text-secondary | #666666 | 次要文字 |
| category-active | #d6f0eb | 分类选中背景 |
| category-default | #f4f4f4 | 分类默认背景 |

### 字体
- **FontFamily**: MiSans
- **字号层级**:
  - 标题: 20px (购物车)
  - 正文: 18px (弹窗文案)
  - 辅助: 16px (按钮、分类)
  - 小字: 14px (温馨提示、价格)

### 尺寸
- 分类按钮高度: 44px
- 商品卡片: 固定宽高
- 弹窗宽度: 392px
- 圆角: 8px(按钮/卡片) / 16px(弹窗)

---

**生成时间**: 2026-03-16
**Layer**: 2
**状态**: 待确认
