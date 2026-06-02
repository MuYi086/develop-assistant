---
name: huabing-mini-vue2-ordering-business-flow
description: "话饼点餐、购物车、确认订单、支付、取餐和烹饪业务流技能。用于修改 shop/cart、用餐方式、一键加购、确认订单、优惠方式、价格计算、钱包和原生支付、会员开通、订单详情、pickUpWay 路由、二维码轮询、WebSocket 订单状态和烹饪流程。"
---

# 话饼点餐业务流

## 先追踪业务闭环

点餐相关改动先读对应闭环，不只看单个页面：

- 点餐和购物车：`src/pagesA/shop/shop.vue`、`src/store/modules/shop.js`
- 确认订单：`src/pagesF/orderConfirm/orderConfirm.vue`、`src/store/modules/orderConfirm.js`
- 钱包和会员：`src/store/modules/wallet.js`、`src/store/modules/vip.js`
- 支付结果：`src/pagesG/nativePayResult/nativePayResult.vue`、`src/pagesG/walletPayResult/walletPayResult.vue`
- 订单详情：`src/pagesF/orderDetail/orderDetail.vue`、`src/store/modules/orderDetail.js`
- 烹饪：`src/pagesD/cook/cook.vue`、`src/store/modules/cook.js`
- 新详情族：`comboDetailV2`、`singleGoodsDetailV2`、`noodlesGoodsDetail`
- 公共业务工具：`src/utils/util.js`

## 购物车规则

- 保留登录和未登录接口分支。
- 保持 `cartKey`、`cartId`、`noLoginCartId`、用餐方式在点餐、购物车、确认订单之间一致。
- 涉及拼饭或用餐方式时使用：
  - `util.bindParamsGroupBuyingAttr`
  - `util.bindShopPageParamsDiningWayAttr`
- 登录后迁移未登录购物车、本地用餐方式上传、未登录加购获取 `cartId` 等一次性动作要用计数或标志位保护。
- 加购、减购、清空、购物车提交分别构造参数，不把不同操作混成一个通用大函数。
- 购物车变化后，按 UI 需要同时刷新购物车信息和价格计算。

## 确认订单规则

确认订单页是编排页，保持顺序：

1. 从 `orderConfirmCartSubmitInfo` 出发。
2. 获取餐具配置、优惠方式、钱包支付渠道、价格计算。
3. 用户改变优惠方式、餐具、用餐方式、支付方式、会员套餐、赠礼、一键加购时重新算价。
4. 创建订单前完成必要 UI 校验。
5. 支付分支：
   - 微信/支付宝原生支付走 `util.commonRequestPayMent`。
   - 钱包支付跳钱包支付结果页。

优先复用 `util.js` 里的参数构造器，不在页面重复散写：

- `bindParamsGroupBuyingAttr`
- `bindShopPageParamsDiningWayAttr`
- `bindParamsDiningTimeTypeAttr`
- `bindParamsWalletInfoAttr`
- `bindParamsPricePayableAttr`
- `bindParamsVipAttr`
- `bindTempCouponFlagAttr`
- `bindPreferentialMethodAttr`
- `bindQuickAddGoodsAttr`
- `bindResetOfferParams`

## 优惠和价格

- 优惠方式是有状态流程：当前选中、上次备份、弹窗预备项要分开。
- 从优惠券页、老人优惠 WebView、支付方式弹窗返回后，先判断是否应该保留旧选择，再重新算价。
- 需要避免自动选中第一种优惠时，使用对应的 not-auto-select action。
- 后端返回预估价为空或哨兵值时，遵循现有隐藏规则。
- 钱包支付渠道依赖 `pricePayable`，先算价再查支付渠道。

## 用餐方式

- 用餐方式是订单语义，不只是 UI 状态。
- 三代机相关接口要追加 `diningWay`、`peopleNum` 或自动加购信息。
- 创建订单时如果 `diningWay` 为 `RESERVATION`，按既有逻辑转为 `IN_SITE`。
- 服务端和本地都没有用餐方式时，先初始化安全的 `IN_SITE` 对象，再触发自动加购。
- 登录和未登录的用餐方式 store 对象要分开维护。

## 取餐和详情路由

使用公共跳转，不在页面私写路由矩阵：

- `util.commonGoToOrderDetail(item, jumpType)`
- `util.commonGoToCook(item, jumpType)`
- `util.pickUpTypeJumpTo(item, method, jumpType)`

按 `pickUpWay` 和 `orderVer` 分发：

- `MACHINE_TAKE_MEAL` -> 单品详情或单品烹饪。
- `PACKAGE_PICKUP` -> 套餐详情或套餐烹饪。
- `NOODLE_SOUP_PICKUP` -> 面条详情或面条烹饪。
- `AUTOMATIC_DELIVERY` -> 按 `orderVer` 进入自动发放详情 v1/v2。
- `SELF_PICKUP_VERIFICATION` -> 点位自提详情。
- 快递、同城、外卖、盲盒等 -> 订单详情 v1/v2 和普通烹饪页。

## 烹饪和轮询

- 预约、立即、扫码烹饪保持独立路径。
- 二维码流程必须：
  - 刷新、编辑、重新轮询前先清旧 interval。
  - 用 store 的 mask 状态显示过期和错误。
  - 按后端 `expireTime` 或本地限制停止轮询。
  - `onUnload` 清理所有 timer。
- 订单详情中区分多类 timer：烹饪进度、机器状态、待取餐二维码、支付状态。
- 支付轮询超过限制后要清理 timer，并恢复或提示异常状态。

## WebSocket

- 全局消息走 `src/components/global-web-socket/global-web-socket.vue`。
- 保留心跳、重连锁、最大重连次数、消息防抖。
- 用 `uni.$emit` 发事件，不直接耦合到具体页面。
- 组件销毁或 store 标志关闭时关闭 socket 并清理心跳和重连 timer。

## 验证清单

- 购物车改动同时测登录和未登录。
- 支付参数改动至少检查原生支付和钱包支付。
- 优惠相关改动检查优惠券页和 WebView 返回后的 `onShow`。
- 烹饪和订单详情改动检查离开页面后 timer 是否停止。
- 新订单类型必须检查 `orderVer`、`pickUpWay` 和订单列表入口。

## 参考文件

- `src/pagesA/shop/shop.vue`
- `src/store/modules/shop.js`
- `src/pagesF/orderConfirm/orderConfirm.vue`
- `src/store/modules/orderConfirm.js`
- `src/pagesD/cook/cook.vue`
- `src/store/modules/cook.js`
- `src/pagesF/orderDetail/orderDetail.vue`
- `src/components/global-web-socket/global-web-socket.vue`
- `src/utils/util.js`
