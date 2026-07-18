---
name: huabing-mini-vue2-payment-channel-flow
description: 通用 UniApp + Vue 2 多支付渠道技能。用于微信/支付宝原生支付、钱包/余额、银行卡或业务钱包、最佳渠道选择、支付参数、支付结果页、状态轮询、订单列表/详情继续支付和支付后跳转；以平台 adapter 和后端渠道契约为准，不写死渠道 ID。
---

# UniApp Vue 2 支付渠道流

## 渠道模型

把后端渠道归一为稳定描述，而不是在页面判断文案：

```js
{
  id: '',
  type: 'native|wallet|bank|business-wallet',
  enabled: true,
  disabledReason: '',
  balance: null,
  limits: {},
  capabilities: []
}
```

- 渠道 ID、可用性、限额和支付参数来自配置/后端。
- 微信、支付宝及其他平台原生支付通过 adapter 映射到 `uni.requestPayment` 所需参数。
- 新增渠道时检查渠道列表、选择 UI、创建订单参数、结果页、继续支付和订单展示全链路。

## 结算顺序

1. 服务端试算得到最新应付金额和优惠结果。
2. 以金额、订单场景和平台查询可用渠道。
3. 按后端优先级或明确产品规则选择最佳可用渠道，不默认选数组第一项。
4. popup 只维护 draft，确认后写 committed channel。
5. 优惠或金额变化后重新查询渠道，并用 request key 防止旧结果覆盖。
6. 创建支付时携带幂等键，按钮保持 single-flight。

## 支付分发

- 页面只调用统一 `pay({ channel, order, amount })`；dispatcher 根据 channel type 选择 adapter。
- 原生支付参数由服务端签名，前端不保存商户私钥、Basic auth secret 或可重放签名。
- 钱包/业务钱包同样由服务端确认扣款，不用前端余额计算作为最终结论。
- 用户取消与支付失败分别建模；取消一般不弹系统错误，但要恢复按钮和可重试状态。
- 继续支付重新查询订单和可用渠道，不信任上一个页面缓存的金额与状态。

## 结果页与轮询

- 结果状态统一为 `pending`、`success`、`failed`、`cancelled`、`timeout`、`unknown`。
- SDK 返回成功不等于订单最终成功；按后端状态查询确认。
- 轮询使用 realtime-lifecycle 技能：单实例 timer、请求 in-flight 锁、最大次数/截止时间、离页清理。
- 明确成功、明确失败和超时都停止轮询；unknown 提供刷新或回订单入口。
- 支付成功后的路由由订单场景和来源决定，使用版本化路由矩阵，不在结果页散落路径判断。

## Store 与安全

- Store 只保存结果页恢复所需的最小订单上下文，不持久化签名、完整支付参数或敏感凭据。
- query 参数按白名单解析并归一 Boolean/Number；金额从服务端订单读取。
- 结果页卸载时清 timer 和一次性支付数据，保留订单 ID 仅在业务确需恢复时。
- 日志脱敏支付参数、卡号、token、用户身份和服务端签名。

## 验证

- 平台：每个目标小程序平台及 H5/App 的适用渠道。
- 渠道：可用/不可用、余额不足、限额、最佳选择和手动切换。
- 结果：成功、取消、失败、超时、unknown、刷新、重复点击和离页。
- 来源：结算、订单列表、详情继续支付及业务充值/开通场景。
- 安全：无前端密钥、无敏感持久化、金额与最终状态均由服务端确认。
