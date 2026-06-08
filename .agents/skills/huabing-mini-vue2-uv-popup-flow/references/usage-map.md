# uv-popup 使用地图

基准：2026-06-08，在 `src` 下用 `rg -l "<uv-popup" src` 检索到 32 个文件。

## 核心模式

- `uv-popup` 主要用于底部浮层：购物车、登录、用餐方式、优惠方式、支付方式、预约烹饪、取餐选择、购买须知、活动说明。
- 标准 ref 是 `popup`，标准外部方法是 `popupShow`、`popupClose`。
- 标准配置对象是 `popConfig1`，登录组件使用 `uvPopupConfig`。
- 多数打开方式是 `this.$refs.popup.open('bottom')`，关闭方式是 `this.$refs.popup.close()`。
- 复杂内容先改本地渲染状态，再 `$nextTick` 打开，避免列表或条件节点未渲染。

## 全局组件

- `src/components/hb-shopping-cart-popup/hb-shopping-cart-popup.vue`：新版购物车，`zIndex: 50`，`@change` 同步 `shop/SET_SHOPISSHOWCARTDIALOG`。
- `src/components/hb-shopping-cart-popup-v1/hb-shopping-cart-popup-v1.vue`：旧版购物车，`zIndex: 50`，同步 `shopV1/SET_SHOPISSHOWCARTDIALOGV1`。
- `src/components/hb-login/hb-login.vue`：登录授权弹层，`zIndex: 10077`，微信/支付宝授权按钮使用条件编译。

## 点餐页

- `src/pagesA/shop/components/popup-shop-recommend.vue`
- `src/pagesA/shop/components/popup-business-good.vue`
- `src/pagesA/shop/components/popup-dining-method-choose.vue`
- `src/pagesA/shopV1/components/popup-shop-recommend.vue`

要点：

- 推荐弹层需要高过购物车，常用 `zIndex: 10077`。
- 用餐方式选择是必选流程，使用 `closeOnClickOverlay: false`。
- 用餐方式先写临时 diningWay，再关闭并 emit `chooseConfirm` 给父页面。

## 确认订单

- `src/pagesF/orderConfirm/components/popup-choose-meal-time.vue`
- `src/pagesF/orderConfirm/components/popup-choose-pay-method.vue`
- `src/pagesF/orderConfirm/components/popup-choose-preferential.vue`
- `src/pagesF/orderConfirm/components/popup-choose-table-ware.vue`
- `src/pagesF/orderConfirm/components/popup-choose-vip-gift.vue`
- `src/pagesF/orderConfirm/components/popup-purchasing-notice1.vue`
- `src/pagesF/orderConfirm/components/popup-purchasing-notice2.vue`
- `src/pagesF/orderConfirm/components/popup-purchasing-notice3.vue`
- `src/pagesF/orderConfirmV1/components/popup-choose-preferential.vue`
- `src/pagesF/orderConfirmV1/components/popup-choose-table-ware.vue`
- `src/pagesF/orderConfirmV1/components/popup-purchasing-notice1.vue`

要点：

- 优惠、支付、餐具、赠礼一般先写 temp/prepare 选择态，再点击确定写正式态。
- `popup-choose-pay-method` 使用 `zIndex: 10077`，避免被其他订单确认层遮住。
- VIP 赠礼使用 `closeOnClickOverlay: false`，`popupShow(type)` 会按 type 决定重置或回显。

## 烹饪

- `src/pagesD/cook/components/popup-choose-cooktime.vue`
- `src/pagesD/cook/components/popup-remote-cook-guide.vue`
- `src/pagesD/cook/components/popup-current-cook-guide.vue`
- `src/pagesD/singleGoodsCook/components/popup-choose-cooktime.vue`
- `src/pagesD/noodlesGoodsCook/components/popup-choose-cooktime.vue`
- `src/pagesD/comboCook/components/popup-choose-cooktime.vue`

要点：

- 预约烹饪弹层打开前自动回显 day/time，并在选择时间后 emit `handleChange`。
- 引导弹层会在 `mounted` 中自动 `popupShow`，点击确认只更新次数状态。
- 烹饪相关弹层关闭、确认和状态重置必须配合 cook store。

## 商品详情和订单详情

- `src/pagesF/singleGoodsDetailV2/components/popup-show-meal-intro.vue`
- `src/pagesF/noodlesGoodsDetail/components/popup-show-meal-intro.vue`
- `src/pagesF/comboDetailV2/components/popup-show-meal-intro.vue`
- `src/pagesF/orderDetail/components/popup-choose-take-goods.vue`
- `src/pagesF/orderDetailV1/components/popup-choose-take-goods.vue`
- `src/pagesF/orderDetailV1/components/popup-choose-cook-goods.vue`

要点：

- 多数是说明、选择待取餐品或待烹饪品，保持页面私有组件。
- `popupShow` 前如需同步订单详情状态，先从父页面或 store 准备数据。

## 其他页面

- `src/pagesC/mall/index.vue`：页面内联 `uv-popup`，不是私有组件。使用 `isShowPopup` 控制内容渲染，先 open 再 `$nextTick` 显示内容。
- `src/pagesC/invite-friends/components/popup-invite-join-company.vue`：使用 `customStyle` 和 `@change`，内容是企业加入/分享列表。

## 复查命令

```bash
rg -n "<uv-popup|popupShow|popupClose|popConfig1|uvPopupConfig|popupChange|popChange|maskClick" src --glob "*.vue"
rg -n "zIndex:|closeOnClickOverlay|customStyle" src --glob "*.vue"
```
