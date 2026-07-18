---
name: huabing-mini-vue2-form-submit-flow
description: 通用 UniApp + Vue 2 表单提交技能。用于输入归一、blur/实时/提交校验、按钮可用态、扫码或自动填充、异步校验、重复点击、防抖、single-flight 提交、错误定位和成功重置；适用于登录注册、资料、兑换码、地址、搜索和业务确认表单。
---

# UniApp Vue 2 表单提交

## 分离三类状态

- raw：用户输入或平台回调原值。
- normalized：trim、大小写、空值、数字和格式归一后的值。
- validation：字段错误、表单错误、是否可提交和异步校验状态。

不要把后端对象直接作为可编辑表单；建立 draft，提交时生成 payload。

## 两级校验

1. `deriveCanSubmit()`：无副作用、无 toast，只计算必填项和基础格式，用于按钮可用态。
2. `validateForSubmit()`：完整同步/跨字段校验，按顺序展示错误并返回结构化结果。

- blur 可更新字段错误，但不能替代正式提交校验。
- 扫码、粘贴、自动填充和接口回显必须走与手输相同的 normalize/validate 链。
- 后端规则无法在前端完整复现时，只做早期提示，最终以服务端校验为准。
- computed 保持纯函数，不在计算 canSubmit 时弹 toast 或修改字段。

## 提交状态机

使用 `idle -> validating -> submitting -> success|error`：

- 点击后先完整校验，再原子地设置 submitting 锁。
- submitting 期间忽略或合并重复点击；按钮 disabled 只是 UI，方法内部仍要防重。
- 请求携带服务端幂等键或客户端 request id，避免网络重试造成重复业务。
- 使用 `try/catch/finally` 恢复 loading 和按钮；跳转/关闭前按产品规则保留 success 状态。
- 业务错误映射到字段或表单级错误；网络错误保留 draft 便于重试。

## 防抖与异步校验

- 输入搜索/远程校验可防抖，正式提交不通过长防抖延迟。
- 防抖函数按 Vue 组件实例创建，在 `beforeDestroy/onUnload` cancel。
- 异步校验记录 value/query key，旧响应不能覆盖新输入。
- 同一字段正在校验时，提交可等待当前 Promise 或重新执行权威校验，策略必须明确。

## 组件契约

- 字段组件接收 value/error/disabled，发出 input、blur、clear 等事件；不直接提交整个表单。
- Vue 2 自定义 `v-model` 沿用目标项目的 `value`/`input` 或自定义 `model` 契约。
- 父页面拥有 draft 和提交状态；dialog/popup 关闭时按产品规则丢弃或保留 draft。
- 错误首次出现时滚动/聚焦到字段，注意 selector query、键盘和平台差异。

## 验证

- 空值、边界长度、格式、跨字段冲突、服务端业务错误和网络失败。
- 手输、粘贴、扫码、自动填充、清空和回显。
- 双击、多次快速点击、返回页面、组件销毁和旧异步响应。
- 成功后重置/跳转，失败后 draft、按钮、loading 和错误提示均正确。
