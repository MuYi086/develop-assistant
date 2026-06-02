# 来源映射

## 当前源码路径

- 点餐页：`src/pagesA/shop/shop.vue`
- 点餐 store：`src/store/modules/shop.js`
- 确认订单页：`src/pagesF/orderConfirm/orderConfirm.vue`
- 确认订单 store：`src/store/modules/orderConfirm.js`
- 钱包 store：`src/store/modules/wallet.js`
- 会员 store：`src/store/modules/vip.js`
- 原生支付结果：`src/pagesG/nativePayResult/nativePayResult.vue`
- 钱包支付结果：`src/pagesG/walletPayResult/walletPayResult.vue`
- 订单详情页：`src/pagesF/orderDetail/orderDetail.vue`
- 订单详情 store：`src/store/modules/orderDetail.js`
- 烹饪页：`src/pagesD/cook/cook.vue`
- 烹饪 store：`src/store/modules/cook.js`
- 全局 WebSocket：`src/components/global-web-socket/global-web-socket.vue`
- 公共业务工具：`src/utils/util.js`

## 详情和取餐相关入口

- 套餐详情族：查找 `comboDetailV2`
- 单品详情族：查找 `singleGoodsDetailV2`
- 面条详情族：查找 `noodlesGoodsDetail`
- 套餐烹饪：`src/pagesD/comboCook/comboCook.vue`
- 单品烹饪：`src/pagesD/singleGoodsCook/singleGoodsCook.vue`
- 面条烹饪：`src/pagesD/noodlesGoodsCook/noodlesGoodsCook.vue`
- 公共详情跳转：`util.commonGoToOrderDetail(item, jumpType)`
- 公共烹饪跳转：`util.commonGoToCook(item, jumpType)`
- 取餐类型跳转：`util.pickUpTypeJumpTo(item, method, jumpType)`

## 取餐路由矩阵

- `MACHINE_TAKE_MEAL` -> 单品详情或单品烹饪。
- `PACKAGE_PICKUP` -> 套餐详情或套餐烹饪。
- `NOODLE_SOUP_PICKUP` -> 面条详情或面条烹饪。
- `AUTOMATIC_DELIVERY` -> 按 `orderVer` 进入自动发放详情 v1/v2。
- `SELF_PICKUP_VERIFICATION` -> 点位自提详情。
- 快递、同城、外卖、盲盒等 -> 订单详情 v1/v2 和普通烹饪页。

## 常用定位

- 查点餐参数构造：`rg -n 'bindParamsGroupBuyingAttr|bindShopPageParamsDiningWayAttr|bindParamsDiningTimeTypeAttr' src/utils/util.js src/pagesA src/pagesF`
- 查详情跳转：`rg -n 'commonGoToOrderDetail|commonGoToCook|pickUpTypeJumpTo' src`
- 查支付入口：`rg -n 'commonRequestPayMent|nativePay|walletPay' src/pagesF src/pagesG src/store/modules`
- 查轮询和 timer：`rg -n 'setInterval|clearInterval|timer|poll' src/pagesD src/pagesF src/store/modules`

## 维护要点

- 登录和未登录购物车接口通常成对存在，点餐改动要同时检查两条路径。
- `cartKey`、`cartId`、`noLoginCartId`、用餐方式会贯穿点餐、购物车和确认订单，不能只在单页修状态。
- 确认订单是编排页，价格、优惠、钱包支付渠道和创建订单之间有顺序依赖。
- `pickUpWay` 和 `orderVer` 共同决定订单详情和烹饪跳转，不要在单个入口私写不完整路由矩阵。
- 二维码、支付状态、烹饪进度和机器状态都有 timer，离开页面必须清理。
- WebSocket 通过 `uni.$emit` 通知页面，不要让全局组件直接耦合具体页面。
