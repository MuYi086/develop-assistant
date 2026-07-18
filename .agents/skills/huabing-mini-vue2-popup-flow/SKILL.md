---
name: huabing-mini-vue2-popup-flow
description: 通用 UniApp + Vue 2 popup/bottom-sheet 技能。用于底部选择器、购物车、登录授权、筛选、支付方式、长列表或操作面板弹层，涵盖草稿/提交状态、open/close、overlay 策略、z-index、安全区、键盘、滚动、@change 副作用和父子组件契约；适配任意 UI 库。
---

# UniApp Vue 2 Popup 与 Bottom Sheet

## 落点与契约

- 页面专用 popup 放局部组件；多个页面稳定复用后放通用组件目录。
- 父页面负责业务数据和请求，popup 负责展示、临时选择和事件。
- 优先受控 visible；目标 UI 库为命令式 API 时，统一包装 `open(payload)`、`close(reason)`，不把库实例泄漏到多层父组件。
- `change`/visible-change 只同步显示状态和必要清理，不把确认业务全部塞入显示事件。

## 草稿与提交

选择型 popup 使用两阶段状态：

1. 打开时从 committed 值复制出 draft。
2. 用户操作只修改 draft。
3. 确认时校验并 emit draft，由父页面提交为 committed。
4. 取消、遮罩或返回键丢弃 draft。

如果产品要求即时生效，明确标记为 immediate 模式，并为失败提供回滚或重新拉取策略。

## 打开与渲染时序

- `open(payload)` 先归一化参数、重置/回显草稿，再打开。
- 内容依赖条件节点、长列表或 Store 更新时，在 `$nextTick` 后测量/滚动，不假定子组件同步渲染。
- 防止重复 open/close 造成动画状态错乱；必要时维护 `closed/opening/open/closing` 状态。
- 页面卸载时关闭 popup，取消输入防抖、timer 和内部请求。

## Overlay 与层级

- 必选流程才禁止遮罩关闭，并提供明确取消/返回策略；普通选择默认允许关闭。
- 维护项目级层级表：页面固定栏、普通 popup、dialog、登录/支付授权、系统级 overlay。
- 不复制固定 z-index；先搜索相邻 overlay 和原生组件层级。
- 多层 overlay 尽量避免；确需叠加时明确焦点、返回键和关闭顺序。

## 布局

- footer 适配底部安全区；键盘弹出时输入项和提交按钮不能被遮挡。
- popup 内部滚动与页面滚动隔离，长列表设置明确可用高度和空态。
- 圆角、背景和动画使用 UI 库公开参数或项目 token；深度覆盖限制在组件根节点。
- 图片和图标来自目标项目资源配置，不硬编码私有 CDN。

## 业务串联

- 登录 popup 使用 auth-user 技能；支付方式使用 payment-channel 技能。
- 购物车、优惠、筛选等选择态分别使用 commerce、marketing 或 list 技能。
- 提交校验和防重复使用 form-submit 技能。

## 验证

- 覆盖首次打开、回显、修改后取消、确认、遮罩、系统返回、重复打开和异步失败。
- 检查 draft 不会在取消时污染 committed 状态。
- 检查长列表、键盘、安全区、页面滚动、多层 overlay 和不同平台动画。
- 检查父页面 ref/visible、事件名、payload 与 loading 恢复。
