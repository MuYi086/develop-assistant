---
name: huabing-mini-vue2-request-store-flow
description: 通用 UniApp + Vue 2 请求与状态流。用于新增或修改 API、请求客户端、鉴权 header、token 刷新、错误归一、请求取消、登录/未登录接口、Vuex 3 module/action/getter、状态重置、持久化和 storage；适配目标项目已有目录与请求库，不要求固定封装名称。
---

# UniApp Vue 2 请求与状态流

## 建立当前链路地图

先定位并记录目标项目实际采用的五层职责，允许合并层级但不允许职责失踪：

1. endpoint：路径、method 和协议字段。
2. transport/client：`uni.request` 或第三方请求库、超时、取消、序列化。
3. auth/interceptor：token、平台 header、刷新、错误归一和日志。
4. domain/store：业务参数、响应归一、Vuex action/mutation。
5. page/component：触发、loading、空态和预期业务失败展示。

不要把某个项目的文件名、成功码或 callback 形态当作通用契约。先读现有实现，再沿用它的导入方式和返回结构。

## 请求契约

- endpoint 层不硬编码域名、token 或环境；base URL 来自配置。
- client 统一返回 Promise，并保留取消、超时和原始错误信息。
- 在单一边界把传输错误、HTTP 错误、业务错误归一为稳定结构，例如 `{ kind, code, message, retryable, raw }`。
- 预期由页面处理的业务失败要允许关闭全局 toast；取消请求不显示错误。
- token 刷新使用 single-flight：同一时刻只发一次刷新，等待请求复用结果；刷新失败统一清会话并阻止无限重试。
- 登录/未登录 endpoint 只有在后端确实区分时才成对维护；调用点显式选择，不通过字符串替换猜路径。
- 日志只记录排障所需字段，脱敏 Authorization、手机号、身份证、支付凭据和完整请求体。

## Vuex 3 约定

- 先判断数据是否确实跨组件/跨页面共享；瞬时请求结果可留在页面，不为形式进入 Store。
- 模块使用工厂式 `createInitialState()`，避免嵌套对象在 reset 后共享引用。
- mutation 只做同步状态修改；action 负责请求、归一化和提交，并把 Promise 返回给调用方。
- state 保持领域原始状态，展示 label、合计和过滤结果优先由 getter/computed 派生。
- 页面不要直接修改 Store 内部对象；需要草稿态时显式区分 `draft` 与 `committed`。
- reset 覆盖页面退出、用户切换和业务重新开始三类场景；不要在页面散落大段赋空。
- 需要通用示例时读取 `references/vuex-module-pattern.md`。

## 持久化与 storage

- 只持久化冷启动后仍必须恢复的最小字段，并记录 schema/version。
- token 和 refresh token 使用项目已有安全存储策略；不持久化授权临时 code、解密数据或表单敏感草稿。
- 大列表、图片/base64 和高频临时态不进入持久化；移动端 storage 容量必须纳入设计。
- 读取旧缓存时校验类型、版本和过期时间；迁移失败回退初始状态。

## 页面协作

- 首屏并发让 action 返回 Promise，由页面使用 `Promise.all` 或 `Promise.allSettled` 按原子性要求编排。
- 搜索、切 tab 和返回刷新要防止旧响应覆盖新状态，可使用 request id、查询 key 或取消能力。
- loading、按钮锁和弹层状态必须在成功、失败、取消的 `finally` 路径恢复。
- 分页使用 `huabing-mini-vue2-list-pagination-flow`；登录会话使用 `huabing-mini-vue2-auth-user-flow`。

## 验证

- 检查登录/未登录、token 正常/过期/刷新失败、网络错误/业务错误/取消。
- 检查微信、支付宝、H5/App 所需 header 与 base URL 行为。
- 检查并发刷新只有一次、错误不会被吞、页面卸载后不会写入错误页面态。
- 检查持久化体积、敏感字段、旧缓存迁移和用户退出清理。
