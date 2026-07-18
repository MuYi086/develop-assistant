---
name: huabing-mini-vue2-ordering-business-flow
description: 话饼点餐、购物车、确认订单、取餐和烹饪业务流技能。用于修改 shop/cart、用餐方式、一键加购、确认订单、优惠与价格计算、V4 公共订单详情、旧详情兼容、cookingSend、cookV3、二维码/取餐柜、WebSocket 订单状态和烹饪流程；支付和售后按专项 skill 协作。
---

# 话饼点餐业务流

## 快速入口

改点餐、购物车、确认订单、支付、订单详情、取餐或烹饪前，先按闭环读这些文件：

- `src/pagesA/shop/shop.vue`
- `src/store/modules/shop.js`
- `src/pagesF/orderConfirm/orderConfirm.vue`
- `src/store/modules/orderConfirm.js`
- `src/pagesF/orderDetail/orderDetail.vue`
- `src/store/modules/orderDetail.js`
- `src/pagesD/cook/cook.vue`
- `src/store/modules/cook.js`
- `src/pagesF/commonOrderDetail/commonOrderDetail.vue`
- `src/store/modules/commonOrderDetail.js`
- `src/pagesD/cookV3/cookV3.vue`
- `src/pagesD/cookingSend/cookingSend.vue`
- `src/utils/util.js`

当任务涉及钱包、会员、支付结果页、取餐路由矩阵、新旧详情族或 WebSocket 事件来源时，再读 `references/source-map.md`。

## 协同规则

- 新增或改接口时，先按请求状态流 skill 维护 `api_*.js`、`api/index.js` 和 Vuex action。
- 改弹窗、按钮、购物车浮层或详情页 UI 时，同时按跨端 UI skill 检查 props/events、条件编译和样式。
- 改原生支付、钱包、世环餐卡或支付结果时，使用 `huabing-mini-vue2-payment-channel-flow`。
- 改订单取消、异常退款或商责流程时，使用 `huabing-mini-vue2-order-after-sales-flow`。
- 点餐业务页不要直接重写基础请求、支付封装、WebSocket 连接或全局路由生成逻辑。

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
5. 支付分支按渠道 skill 处理原生、钱包和世环餐卡，不在确认订单页增加第四套私有分发。

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

## 价格、优惠和用餐方式

- 优惠方式是有状态流程：当前选中、上次备份、弹窗预备项要分开。
- 从优惠券页、老人优惠 WebView、支付方式弹窗返回后，先判断是否应该保留旧选择，再重新算价。
- 需要避免自动选中第一种优惠时，使用对应的 not-auto-select action。
- 后端返回预估价为空或哨兵值时，遵循现有隐藏规则。
- 钱包支付渠道依赖 `pricePayable`，先算价再查支付渠道。
- 用餐方式是订单语义，不只是 UI 状态。
- 三代机相关接口要追加 `diningWay`、`peopleNum` 或自动加购信息。
- 创建订单时如果 `diningWay` 为 `RESERVATION`，按既有逻辑转为 `IN_SITE`。
- 服务端和本地都没有用餐方式时，先初始化安全的 `IN_SITE` 对象，再触发自动加购。
- 登录和未登录的用餐方式 store 对象要分开维护。

## 取餐和详情路由

V4 流程使用公共跳转，不在页面私写路由矩阵：

- `util.commonGoToOrderDetailV4(item, jumpType)`：一代机进入旧详情，非一代机进入 `commonOrderDetail`。
- `util.commonGoToCookV4(item, jumpType)`：进入 `cookV3`。
- 旧 `commonGoToOrderDetail`、`commonGoToCook` 已 Deprecated；只在维护旧流程时参考。
- `util.pickUpTypeJumpTo` 保留给旧 pickUpWay 详情/烹饪矩阵，不用于新 V4 入口。

需要改 `pickUpWay`、`orderVer` 或新增取餐类型时，先读 `references/source-map.md` 的路由矩阵和 `src/utils/util.js` 对应函数。

## 烹饪和轮询

- 预约、立即、扫码烹饪保持独立路径。
- 二维码流程必须：
  - 刷新、编辑、重新轮询前先清旧 interval。
  - 用 store 的 mask 状态显示过期和错误。
  - 按后端 `expireTime` 或本地限制停止轮询。
  - `onUnload` 清理所有 timer。
- 订单详情中区分多类 timer：烹饪进度、机器状态、待取餐二维码、支付状态。
- 支付轮询超过限制后要清理 timer，并恢复或提示异常状态。
- V4 详情进入前调用状态检查；存在未读失败工单或发送中工单时先进入 `cookingSend`。
- `commonOrderDetail` 的提货信息同时覆盖二维码、面条出餐口和取餐柜，修改时保持 `transactionOrderId`、`jointOrder`。

## WebSocket

- 旧详情消息走 `src/components/global-web-socket/global-web-socket.vue`；V4 公共详情走 `global-web-socket-v4`。
- 保留心跳、重连锁、最大重连次数、消息防抖。
- 用 `uni.$emit` 发事件，不直接耦合到具体页面。
- 组件销毁或 store 标志关闭时关闭 socket 并清理心跳和重连 timer。

## 校验

- 购物车改动同时测登录和未登录。
- 支付参数改动按支付渠道 skill 检查原生、钱包和世环餐卡。
- 优惠相关改动检查优惠券页和 WebView 返回后的 `onShow`。
- 烹饪和订单详情改动检查离开页面后 timer 是否停止。
- 新订单类型必须检查 `orderVer`、`pickUpWay` 和订单列表入口。
- V4 改动额外检查 `transactionOrderId`、`jointOrder`、`cookingSend` 和 `commonOrderDetail`。
