---
name: huabing-mini-vue2-dialog-flow
description: 通用 UniApp + Vue 2 中心弹窗技能。用于确认、提示、规则、隐私授权、动态内容和业务状态 dialog，涵盖组件选型、visible 契约、按钮事件、slot、滚动锁、层级、父子组件协作和成功/失败/取消路径；适配目标项目已有基础弹窗或 UI 库。
---

# UniApp Vue 2 中心弹窗

## 先选正确容器

- 简短确认、风险提示、规则阅读和聚焦式业务状态使用中心 dialog。
- 长列表、连续选择、键盘输入密集或接近半屏/全屏的操作使用 popup/bottom sheet。
- 先复用目标项目基础 dialog 或 UI 库；只有交互契约明显不同且无法组合时才新建基础组件。

## 状态所有权

- 页面专用弹窗放页面局部组件，多页面稳定复用后再升级为全局组件。
- 父页面拥有业务状态和请求；弹窗拥有可见性、局部草稿和展示状态。
- 优先使用受控 `visible` + `update:visible`/close 事件；目标项目若采用 `ref.open()`，只暴露 `open(payload)`、`close(reason)`、`reset()` 等最小 API。
- 关闭原因显式区分 `confirm`、`cancel`、`mask`、`close-icon`、`system-back`，避免一个事件承担不同语义。

## 通用契约

```js
dialog: {
  visible: false,
  title: '',
  message: '',
  confirmText: '确认',
  cancelText: '取消',
  showCancel: true,
  closeOnMask: true,
  loading: false
}
```

- 字段名沿用目标组件，不要求复制上面的命名。
- 简单文案通过 prop/config 输入；富内容通过 slot，不能把业务请求塞进基础 dialog。
- confirm 发出业务 payload，由父页面执行请求；异步期间锁定确认按钮，失败后保持弹窗或按产品规则恢复。
- 取消默认不修改已提交业务状态；需要回滚时从打开前快照恢复。

## Vue 2 实现规则

- 对象/数组 prop 使用工厂默认值，不修改传入对象。
- `methods` 和生命周期使用普通函数；事件在 script 中 camelCase、模板中按项目风格绑定。
- H5 需要锁 body 滚动时记录并恢复原值，组件销毁也必须清理。
- 长规则内容设置可滚动内容区，footer 固定但不遮挡正文；考虑安全区和字体放大。
- 样式覆盖限制在弹窗根 class 下，先读取 UI 库的公开 customStyle/class 能力，再使用深度选择器。

## 层级与平台

- 先建立 overlay 层级表，再设置 z-index；不要复制某个项目的固定数字。
- 检查原生组件、video/map、导航栏和键盘是否形成独立层级。
- 微信、支付宝、H5/App 的遮罩点击、返回键、隐私授权按钮和滚动锁分别验证。
- 平台授权或支付按钮使用条件编译/适配器，dialog 只承载 UI。

## 验证

- 覆盖打开、确认、取消、遮罩、关闭图标、重复点击、异步失败和组件销毁。
- 检查父页面 ref、props、events 和 payload 完全一致。
- 检查短/长文案、富内容、键盘、安全区、滚动穿透和多层 overlay。
- 修改基础 dialog 时搜索全部调用方，并验证默认值变化不会破坏旧页面。
