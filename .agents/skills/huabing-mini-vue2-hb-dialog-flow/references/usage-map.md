# hb-dialog 使用地图

基准：2026-06-08，在 `src` 下用 `rg -l "<hb-dialog" src` 检索到 78 个文件。

## 基础组件

- `src/components/hb-dialog/hb-dialog.vue`

基础组件行为：

- `v-if="dialogObj.visible"` 控制显示。
- 根节点和 wrapper 阻止触摸穿透。
- H5 显示时设置 `document.body.style.overflow = 'hidden'`，关闭和销毁时恢复。
- `isShowClose` 的关闭图标触发 `left`。
- `form` footer 显示左右按钮；`tips` footer 显示单按钮；`modify` 不显示 footer。

## 全局 hb-dialog 封装

- `src/components/hb-dialog-cancel-order/hb-dialog-cancel-order.vue`
- `src/components/hb-dialog-ebao-take/hb-dialog-ebao-take.vue`
- `src/components/hb-dialog-kindly-reminder-v1/hb-dialog-kindly-reminder-v1.vue`
- `src/components/hb-dialog-kindly-reminder-v2/hb-dialog-kindly-reminder-v2.vue`
- `src/components/hb-dialog-privacy/hb-dialog-privacy.vue`
- `src/components/hb-dialog-submit-cart-error/hb-dialog-submit-cart-error.vue`
- `src/components/hb-dialog-submit-error/hb-dialog-submit-error.vue`

要点：

- `hb-dialog-submit-error`：`tips` 类型，`init(message)` 后打开，支持 `updateDialogTipName`。
- `hb-dialog-cancel-order`：两个 `dialogObj` 按订单状态切换。
- `hb-dialog-kindly-reminder-v1/v2`：高层级 `10077`，用 `updateModifyTip` 先改文案再打开。
- `hb-dialog-privacy`：`modify` 类型，slot 内使用隐私授权按钮和 `uni.openPrivacyContract`。

## 页面私有 dialog 族

### home/mine/orderList

- `src/pages/home/components/dialog-shop-far.vue`
- `src/pages/home/components/dialog-shop-enterprise.vue`
- `src/pages/home/components/dialog-invite-next.vue`
- `src/pages/home/components/dialog-open-screen-popup.vue`
- `src/pages/mine/components/dialog-goods-safety-intro.vue`
- `src/pages/orderList/components/dialog-order-list-not-pay-cancel.vue`
- `src/pages/orderList/components/dialog-order-list-cancel.vue`

### shop/search

- `src/pagesA/shop/components/dialog-join-company.vue`
- `src/pagesA/shopV1/components/dialog-join-company.vue`
- `src/pagesA/shopV1/components/dialog-auth-position.vue`
- `src/pagesA/shop/shop.vue` 使用全局提交错误和温馨提示 dialog。
- `src/pagesA/search-goods/search-goods.vue` 使用全局提交错误和温馨提示 dialog。

### mall/invite/group/lottery

- `src/pagesC/mall/component/dialog-exchange-confirm.vue`
- `src/pagesC/invite-friends/components/dialog-invite-rule.vue`
- `src/pagesI/groupBuyingDetail/components/dialog-pinfan-share.vue`
- `src/pagesI/groupBuyingDetail/components/dialog-pinfan-rule.vue`
- `src/pagesI/groupBuyingDetail/components/dialog-cancel-pinfan.vue`
- `src/pagesI/receive-award/components/dialog-success.vue`
- `src/pagesI/receive-award/components/dialog-error-tip.vue`
- `src/pagesI/receive-award/components/dialog-activity-rule.vue`
- `src/pagesI/lottery/components/dialog-success.vue`
- `src/pagesI/lottery/components/dialog-error-tip.vue`
- `src/pagesI/lottery/components/dialog-activity-rule.vue`

### cook

- `src/pagesD/cook/components/dialog-schedule-cook.vue`
- `src/pagesD/cook/components/dialog-scan-code.vue`
- `src/pagesD/singleGoodsCook/components/dialog-schedule-cook.vue`
- `src/pagesD/singleGoodsCook/components/dialog-scan-code.vue`
- `src/pagesD/noodlesGoodsCook/components/dialog-schedule-cook.vue`
- `src/pagesD/noodlesGoodsCook/components/dialog-scan-code.vue`
- `src/pagesD/comboCook/components/dialog-schedule-cook.vue`
- `src/pagesD/comboCook/components/dialog-scan-code.vue`
- `src/pagesD/singleGoodsCook/singleGoodsCook.vue` 使用等待烹饪列表错误 dialog。
- `src/pagesD/noodlesGoodsCook/noodlesGoodsCook.vue` 使用等待烹饪列表错误 dialog。
- `src/pagesD/comboCook/comboCook.vue` 使用等待烹饪列表错误 dialog。

### orderConfirm

- `src/pagesF/orderConfirm/components/dialog-shop-far.vue`
- `src/pagesF/orderConfirm/components/dialog-switch-pay-channel.vue`
- `src/pagesF/orderConfirm/components/dialog-facial-recognition-verify.vue`
- `src/pagesF/orderConfirm/components/dialog-quick-add.vue`
- `src/pagesF/orderConfirm/components/dialog-quick-add-sold-out.vue`
- `src/pagesF/orderConfirm/components/dialog-goods-time-out.vue`
- `src/pagesF/orderConfirm/components/dialog-verify-limit.vue`
- `src/pagesF/orderConfirm/orderConfirm.vue` 使用提交错误、用餐方式错误、购物车错误和温馨提示 dialog。
- `src/pagesF/orderConfirmV1/components/dialog-shop-far.vue`

要点：

- 一键加购使用 `modify` 类型和跨端 swiper 条件编译。
- 人脸识别 verify dialog 根据 `exceedMaxAuthAttempts` emit 不同事件。
- 售罄和验证次数类错误 dialog 使用 `init(message, ids)` 和 `updateDialogTipName`。

### detail/cancel/pay

- `src/pagesF/singleGoodsDetailV2/components/dialog-show-qr.vue`
- `src/pagesF/singleGoodsDetailV2/components/dialog-show-door-number.vue`
- `src/pagesF/singleGoodsDetailV2/components/dialog-open-screen.vue`
- `src/pagesF/singleGoodsDetailV2/components/dialog-cancel-order.vue`
- `src/pagesF/noodlesGoodsDetail/components/dialog-show-door-number.vue`
- `src/pagesF/noodlesGoodsDetail/components/dialog-open-screen.vue`
- `src/pagesF/noodlesGoodsDetail/components/dialog-cancel-order.vue`
- `src/pagesF/comboDetailV2/components/dialog-show-qr.vue`
- `src/pagesF/comboDetailV2/components/dialog-show-door-number.vue`
- `src/pagesF/comboDetailV2/components/dialog-open-screen.vue`
- `src/pagesF/comboDetailV2/components/dialog-cancel-order.vue`
- `src/pagesF/orderDetail/components/dialog-cancel-schedule-cook.vue`
- `src/pagesF/orderDetail/orderDetail.vue` 使用全局取消订单 dialog。
- `src/pagesF/orderDetailV1/components/dialog-cancel-order-v1.vue`
- `src/pagesF/orderDetailV1/components/dialog-take-meal-tip.vue`
- `src/pagesF/orderDetailV1/components/dialog-machine-sold-out.vue`
- `src/pagesF/orderDetailV1/components/dialog-machine-only-part-take.vue`
- `src/pagesF/orderDetailV1/orderDetailV1.vue` 使用 ebao take dialog。
- `src/pagesF/positionSelfPickOrderDetail/positionSelfPickOrderDetail.vue` 使用全局取消订单 dialog。
- `src/pagesF/autoDeliverOrderDetail/autoDeliverOrderDetail.vue` 使用全局取消订单 dialog。
- `src/pagesF/autoDeliverOrderDetailV1/autoDeliverOrderDetailV1.vue` 使用全局取消订单 dialog。
- `src/pagesF/orderCancel/components/dialog-order-cancel-rule.vue`
- `src/pagesF/orderCancel/components/dialog-order-cancel-refresh.vue`
- `src/pagesG/walletPayResult/components/dialog-cancel-pay.vue`
- `src/pagesE/couponExchange/components/dialog-coupon-exchange-success.vue`
- `src/pagesE/couponExchange/components/dialog-card-password-exchange-success.vue`
- `src/pagesI/shopResponsibilityCancel/components/dialog-cancel-rule.vue`

## 常见代码模式

- `showDialog () { this.dialogObj1.visible = true }`
- `hideDialog () { this.dialogObj1.visible = false }`
- `dialogLeftClick () { this.hideDialog(); this.$emit('dialogLeftClick', null) }`
- `dialogRightClick () { this.hideDialog(); this.$emit('dialogRightClick', null) }`
- 旧文件可能使用 `dialogLeftCilck`、`dialogRightCilck`，要按父页面引用保持一致。

## 复查命令

```bash
rg -n "<hb-dialog|showDialog|hideDialog|dialogLeft|dialogRight|updateDialog|updateModifyTip" src --glob "*.vue"
rg -n "popType:|dialogObj1|dialogObj2|isShowClose|z-index:" src --glob "*.vue"
```
