---
name: huabing-mini-vue2-payment-channel-flow
description: 话饼 UniApp Vue 2 支付渠道技能。用于修改微信/支付宝原生支付、钱包余额/银行卡、世环餐卡 LENIU_WALLET、最佳支付方式选择、支付参数、支付结果页轮询、钱包充值/会员开卡支付、订单列表和详情继续支付及支付后订单/烹饪跳转。
---

# 话饼支付渠道流

## 快速入口

处理支付渠道、支付结果或继续支付前，先读取：

- `src/utils/config.js` 的支付渠道常量
- `src/utils/util.js` 的支付、渠道拆分和结果页跳转函数
- `src/store/modules/wallet.js`、`nativePayResult.js`
- `src/pagesF/orderConfirm/orderConfirm.vue` 及支付方式组件
- `src/pagesG/nativePayResult/`、`walletPayResult/`、`shiHuanMealCardPayResult/`
- 发起继续支付的订单列表或订单详情页

需要渠道矩阵、轮询边界、目标提交依据时，再读 `references/source-map.md`。

## 渠道模型

- 原生支付：`config.nativePayChannelId`，微信为 `WX_JSAPI`，支付宝为 `ALIPAY_MINI_APP`。
- 钱包支付：`config.walletPayChannelId`，值为 `WALLET_PAYMENT`。
- 世环餐卡：`config.shiHuanMealCardPayChannelId`，值为 `LENIU_WALLET`。

渠道由运行平台和后端返回决定，不在页面散落字符串判断。新增渠道时同步检查 config、支付方式列表、订单创建参数、结果页、继续支付和订单详情展示。

## 确认订单顺序

1. 先完成价格计算，得到 `pricePayable` 和可用优惠。
2. 查询支付渠道并由 `walletSplitPayChannelList` 拆分原生/钱包/银行卡/餐卡。
3. 使用 `findBestPayMethodFormChannelList` 选择可用的最佳方式。
4. 弹层使用 prepare/temp 选择态，确认后写正式支付方式。
5. 优惠方式变化后重新算价，再只驱动一次支付渠道更新，防止循环请求。
6. 创建订单时由公共参数构造函数写入 `payChannelId`，不要从 UI 文案推断渠道。

## 支付分发

- 原生支付：把机型对应支付参数写入 `nativePayResult` Store，进入 `nativePayResult` 后调用 `util.commonRequestPayMent`。
- 钱包：保存创建订单信息，进入 `walletPayResult`。
- 世环餐卡：保存同类订单上下文，进入 `shiHuanMealCardPayResult`。
- 会员开卡和钱包充值复用原生支付结果页，通过既有 machine version 标记区分，不新建重复 native-pay 页面。
- 订单详情和列表继续支付先根据 `orderPayChannelId` 分流；不要再读取已废弃的 `orderPayChannel`。
- 改造继续支付前先检查来源页是否已有待支付入口，优先复用并补齐渠道分流、loading 和防重复提交，不新增重复按钮。

## 支付结果与轮询

- 结果页从 query 和 Store 同时恢复 orderId、机型、联合单、用餐时间和 jumpType。
- 页面进入后启动轮询；成功、明确失败、超时和 `onUnload` 都必须清理 timer。
- 刷新按钮先重置支付状态并显示带 mask 的 loading，再重新查询。
- 支付成功后：
  - 一代机按旧详情路径处理。
  - 拼饭订单回订单列表。
  - 立即用餐进入详情前先检查 V4 订单入口状态，必要时进入 `cookingSend`。
  - 择时用餐进入对应烹饪页。
- 从订单详情发起支付时沿用 `jumpType: 3` 的 `reLaunch` 语义，避免支付成功后堆叠两个详情页；其他来源不要未经检查照搬该值。

## 参数和鉴权

- 普通登录请求走 token；未登录下单/支付参数按现有 `renderClientAuthHeader()` 处理。
- 原生支付鉴权继续使用平台对应 Basic auth 配置，不在页面硬编码凭据。
- 联合单以 `transactionOrderId`、`jointOrder` 为主；旧一代机路径显式转换 `orderId`。
- 支付金额和 `amountPayable` 从当前订单/价格计算结果获取，不信任上一个页面残留状态。

## 实现风格

- 渠道识别、拆分、公共跳转下沉 `util.js`；页面只做 UI、顺序和路由编排。
- Store 保存结果页跨页面所需的最小参数，并在离开结果页时清理。
- 支付方式 item 只展示 enable、余额、不可用原因和选择态，不直接发起付款。
- 不合并三个结果页；它们当前存在差异化交互和轮询语义，先保持独立。
- 错误与取消都恢复按钮、loading 和 timer，避免重复支付。

## 验证

- 平台：微信原生支付、支付宝原生支付。
- 渠道：原生、钱包、银行卡/钱包列表、世环餐卡。
- 来源：确认订单、订单列表、详情继续支付、钱包充值、会员开卡。
- 订单：一代机、二/三代机、拼饭、联合单、立即/择时用餐。
- 结果：成功、取消、失败、超时、刷新、离页 timer 清理。
