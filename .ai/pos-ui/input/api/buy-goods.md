# pos点单功能设计

### db 

1.site\_goods(小主机)

2.met\_material

### 2.具体工作

1.pos点餐页商品列表（小主机接口）

url：

入参：

| siteId |  | 店铺id |
| --- | --- | --- |
| showSoldOut |  | 显示售罄  0 不显示售罄    1显示售罄 |
| goodsName |  | 商品名称 模糊搜索 |
| menuType |  | 左侧栏分类筛选 |
| diningWay |  |  |

返回:

| siteGoodsId |  |  |
| --- | --- | --- |
| siteId |  |  |
| siteName |  |  |
| siteSchId |  |  |
| goodsId |  |  |
| goodsName |  |  |
| number |  |  |
| price |  | 售价 |
| oriPrice |  | 原价 |
| siteDiscountPrice |  | 店铺优惠价 |
| imageMode |  | 图片类型  xxxxxx |
| pic |  | 商品图片(主图) |
| picHorizontal |  | 商品横图  xxxxx |
| soldOut |  | 是否售罄: true-售罄、false-未售罄 |
| goodsTypeFlag |  | SINGLE 普通商品<br>COMB 套餐商品 |
| defaultSku |  |  |
| {<br>    "spuId": 0, //商品id<br>    "siteGoodsSkuId": 0, <br>    "skuId": 0, <br>    "img": "", //图片<br>    "price": 0.0, //价格<br>    "name": "", //复合名称<br>    "status": 0, //状态  -1必选属性缺失  1正常  2规格不存在  3已售罄<br>    "desc": "" //非正常状态下，的显示文案<br>} |  |  |

2.pos点餐页左侧栏接口（小主机接口）

url：

入参：

| siteId |  | 店铺id |
| --- | --- | --- |
| type |  | 1全部  2单品 3套餐 |
| diningWay |  |  |

返回：

| name |  | 分类名称 |
| --- | --- | --- |
| menuType |  | 分类值 |

3.sku详情页（小主机）

url:

入参：

| siteGoodsId |  | 店铺商品id |
| --- | --- | --- |

返回

| siteId |  | 店铺id |
| --- | --- | --- |
| siteSchId |  | 批次id |
| goodsId |  | 商品id |
| goodsName |  |  |
| attrList |  |  |
| {<br>    "attrId": 0,//属性id<br>    "mustFlag": 0,//是否必选<br>    "name": "",//属性名称<br>    "attrValList": \[<br>        {<br>            "attrValId": 0, //属性值id<br>            "name": "",//名称<br>            "defaultFlag": 0,//是否默认选择<br>            "img": "",//图片<br>            "stock": 0   //库存<br>        }<br>    \]<br>} |  |  |

4.sku选择-获取sku详细信息（小主机）

url:

入参：

| siteGoodsId |  | 店铺商品id |
| --- | --- | --- |
| attrValList |  | 选择的属性值id \[1,2,3,4,5\] |

返回：

| {<br>    "spuId": 0, //商品id<br>    "siteGoodsSkuId": 0, //siteGoodsSkuId<br>    "skuId": 0, //skuid<br>    "img": "", //图片<br>    "price": 0.0, //价格<br>    "name": "", //复合名称<br>    "status": 0, //状态  -1必选属性缺失  1正常  2规格不存在  3已售罄<br>    "desc": "" //非正常状态下，的显示文案<br>} |  |  |
| --- | --- | --- |

5.扫用户条码支付  （云端pay功能）   

url:

入参：

| code |  | 条码code |
| --- | --- | --- |
| total\_amount |  | 支付金额 |
| desc |  | 支付描述 |
| order\_id |  |  |

返回：

| outTradeNo |  | 快鳄订单号 |
| --- | --- | --- |
| tradeNo |  | 三方订单号 |

6.条码支付回调

修改支付单状态

通知订单侧

7.access\_token获取

8.用户扫商家二维码支付  （云端pay功能）   

| total\_amount |  | 支付金额 |
| --- | --- | --- |
| desc |  | 支付描述 |
| orderId |  |  |

返回：

| payUrl |  | 支付的扫码链接 |
| --- | --- | --- |

9.回调功能   支付结果查询

10.支付功能调研   二维火  ，联联  ，收钱吧，哗啦啦，yuncouOs

11.支付平台入驻  前期接入

整体流程和现在的小程序支付没啥区别

12.商品沽清--商品列表（单品）

url:

入参：

| siteId |  | 店铺id |
| --- | --- | --- |
| menuType |  | 菜单类型 |
| goodsName |  | 商品名称 模糊查询 |

返回：

| goodsName |  | 商品名称 |
| --- | --- | --- |
| siteGoodsId |  | 店铺商品id |
| posNumber |  | pos机数量 |
| appNumber |  | app在售数量 |
| notTakeNumber |  | 预定未取数量 |
| totalStock |  | 总库存 |
| validStock |  | 可用库存 |
| posGround |  |  |
| posShow |  |  |
| appGround |  |  |
| appShow |  |  |
|  |  |  |
| diffCode |  | 比对结果 1 同步中 2不比对  3 多货 4缺货  5正常 |
| diffNumber |  | 差异数量    可用库存 和  在售数量比对 |

12.商品沽清--商品列表（套餐）

| skuList |  |  |
| --- | --- | --- |
|  |  |  |
| goodsName |  |  |
| number |  |  |

13商品沽清--汇总数据

入参:

| siteId |  | 店铺id |
| --- | --- | --- |

| totalSaleNumber |  | 总在售数量 |
| --- | --- | --- |
| totalStockNumber |  | 总库存数量 |
| vaildStockNumber |  | 可用库存数量 |
| expireStockNumber |  | 过期库存数 |
| lockStockNumber |  | 锁定库存数 |
| adventStockNumber |  | 临期库存数 |

14.沽清--编辑回显

入参：

| siteGoodsId |  | 店铺商品id |
| --- | --- | --- |

返回：

| posStockNumber |  | pos库存数量 |
| --- | --- | --- |
| posStatus |  | 1 在售  0停售 |
| appStockNumber |  | app库存数量 |
| appStatus |  | 1在售 0停售 |

15提交店铺商品库存编辑

16.机器库存 查询）（分机器）

入参：

| siteId |  | 店铺id |
| --- | --- | --- |

返回：

| macName |  |  |
| --- | --- | --- |
| totalSaleNumber |  | 总在售数量 |
| totalStockNumber |  | 总库存数量 |
| vaildStockNumber |  | 可用库存数量 |
| expireStockNumber |  | 过期库存数 |
| lockStockNumber |  | 锁定库存数 |
| adventStockNumber |  | 临期库存数 |
