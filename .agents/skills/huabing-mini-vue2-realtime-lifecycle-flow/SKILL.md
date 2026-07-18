---
name: huabing-mini-vue2-realtime-lifecycle-flow
description: 通用 UniApp + Vue 2 实时与异步生命周期技能。用于 WebSocket、心跳、重连、消息归一、事件总线、状态轮询、二维码/支付/订单定时刷新、倒计时、页面前后台切换和 timer/listener/request 清理；也用于排查重复连接、重复轮询和卸载后更新。
---

# UniApp Vue 2 实时与异步生命周期

## 先选择机制

- 低频且允许延迟：页面进入或用户刷新时查询。
- 有明确终态、持续时间短：轮询。
- 服务端主动推送、多页面共享：WebSocket。
- 展示剩余时间：本地倒计时，但关键时刻以服务端时间校准。

不要因为已有 socket 就把所有请求改为推送；也不要同时开启 socket 与无边界轮询而没有降级策略。

## 资源所有权

每个资源必须有唯一 owner：App、全局组件、页面或局部组件。记录：

- 创建点和唯一句柄。
- start 的幂等条件。
- stop/clear 的全部终态。
- `onShow/onHide/onUnload/beforeDestroy` 行为。
- 用户切换、网络变化和应用前后台时是否重建。

owner 之外只消费领域事件，不直接关闭别人的连接或 timer。

## 轮询契约

- `startPolling` 前先 `stopPolling`，保证单实例 timer。
- 使用 in-flight 锁，上一请求未完成时不叠加下一次。
- 采用截止时间或最大次数，不只依赖计数；页面后台时按需求暂停。
- success、明确 failed、timeout、取消和卸载都必须 clear。
- 网络错误可按策略重试，业务终态不重试。
- 快速切换订单/查询时用 request key，过期响应不能更新当前页面。
- 轮询间隔以服务端承载和产品时效为准，不复制固定秒数。

## WebSocket 状态机

使用 `idle -> connecting -> open -> reconnecting -> closed`，另记录是否为用户主动关闭。

- 同一会话只允许一个 connect Promise/SocketTask。
- open 后启动心跳；close/error 前停止心跳。
- 非主动断开使用指数退避和 jitter，并设置最大延迟/次数；网络恢复可触发立即重连。
- 重连前检查 token、用户、业务订阅和页面需求仍有效。
- 消息先解析 envelope、校验 type/version/payload，再转换为领域事件。
- 未知消息记录脱敏诊断，不让 JSON 解析错误中断后续消息。

## 事件分发

- 全局连接发布领域事件或提交 Store，不直接访问页面 ref。
- 订阅与取消订阅成对；同一 handler 引用用于 off，避免匿名函数无法移除。
- 页面收到事件后按需要局部更新或重新查询服务端权威状态。
- 为重复/乱序消息准备 event id、sequence 或更新时间比较。

## Vue 2 与 UniApp 生命周期

- Options API 生命周期函数不用箭头函数。
- UniApp 页面 `onUnload` 与 Vue 组件 `beforeDestroy` 都可能是清理点，按资源实际 owner 选择，避免重复创建。
- `onHide` 是否停止取决于后台是否仍需接收；默认暂停页面私有高频轮询。
- H5 额外检查 visibility、网络事件和浏览器 timer 节流；小程序/App 检查后台 socket 政策。

## 验证

- 首次连接、重复 start、网络断开/恢复、服务端关闭、token 变化和主动退出。
- 心跳、指数退避、最大重连、未知/重复/乱序消息。
- 轮询 success/failed/timeout/网络错误、刷新重启和卸载清理。
- 多次进入页面后连接、timer 和 listener 数量仍为预期值。
