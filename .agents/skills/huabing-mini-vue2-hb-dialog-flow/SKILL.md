---
name: huabing-mini-vue2-hb-dialog-flow
description: 话饼 UniApp Vue 2 的 hb-dialog 弹窗技能。用于新建或修复中心确认弹窗、提示弹窗、规则阅读弹窗、隐私授权弹窗、订单取消弹窗、动态内容 dialogObj、showDialog/hideDialog、dialogLeftClick/dialogRightClick 事件、popType=form/tips/modify 和 hb-dialog 样式覆盖。
---

# 话饼 hb-dialog 弹窗

## 快速入口

处理 `hb-dialog` 前，先读取：

- `src/components/hb-dialog/hb-dialog.vue`
- 目标页面和相邻 `components/dialog-*.vue`
- 需要复用全局封装时读取 `src/components/hb-dialog-*`
- 需要现有案例地图时读取 `references/usage-map.md`
- 涉及点餐、订单、支付、取餐和烹饪时，同时读取 `huabing-mini-vue2-ordering-business-flow`
- 涉及支付结果时读取 `huabing-mini-vue2-payment-channel-flow`；涉及取消退款时读取 `huabing-mini-vue2-order-after-sales-flow`

## 落点判断

- 单页面专用弹窗放目标页同级 `components/dialog-*.vue`。
- 多页面复用弹窗放 `src/components/hb-dialog-*`，并通过 easycom 使用。
- 中心确认、规则、提示、富内容卡片使用 `hb-dialog`。
- 底部选择、长列表操作面板和购物车浮层使用 `uv-popup`。

## 基础契约

`hb-dialog` 基础组件只接收 `dialogObj` 并发出事件：

- `@left`：左按钮、关闭图标或 tips 按钮。
- `@right`：右按钮。
- `@dialogClose`：基础组件内部 `hideDialog` 发出，现有封装较少使用。

`dialogObj` 常用字段：

```js
dialogObj1: {
  visible: false,
  isShowClose: false,
  title: '提示',
  popType: 'form',
  content: '',
  leftBtnName: '取消',
  rightBtnName: '确认',
  tipName: ''
}
```

`popType` 约定：

- `form`：底部两个按钮，使用 `leftBtnName` 和 `rightBtnName`。
- `tips`：底部一个按钮，使用 `tipName`。
- `modify`：没有基础 footer，在 slot 中自行实现内容和按钮。

## 标准封装

```vue
<template>
  <view class="component dialog-demo">
    <hb-dialog
      :dialogObj="dialogObj1"
      @left="dialogLeftClick"
      @right="dialogRightClick">
      <slot></slot>
    </hb-dialog>
  </view>
</template>
```

```js
methods: {
  init (payload) {
    this.resData = payload
    this.showDialog()
  },
  showDialog () {
    this.dialogObj1.visible = true
  },
  hideDialog () {
    this.dialogObj1.visible = false
  },
  dialogLeftClick () {
    this.hideDialog()
    this.$emit('dialogLeftClick', null)
  },
  dialogRightClick () {
    this.hideDialog()
    this.$emit('dialogRightClick', null)
  }
}
```

## 事件命名

- 新组件优先使用 `dialogLeftClick`、`dialogRightClick`。
- 修改旧组件时保持父页面现有拼写，仓库里有不少 `dialogLeftCilck`、`dialogRightCilck`，不要顺手改名导致事件断开。
- 事件 payload 只传父页面需要的业务数据，例如 `errorIds`、`continueTakeMeal`、`showVerifyLimit`。
- 右按钮需要等待父页面请求结果时，可以只 emit，不在子组件里写请求。

## 动态内容

- 简单错误提示使用 `init(message)` 设置 `dialogObj1.content` 并打开。
- 按钮文案变化使用 `updateDialogTipName(title)` 或相邻组件已有命名。
- 规则、富文本和 slot 内容使用 `popType: 'modify'`，在 slot 内放 `rich-text`、`uv-button`、checkbox 或自定义图片。
- 需要按状态展示不同文案时可维护 `dialogObj1`、`dialogObj2`，例如取消订单待支付和非待支付分支。
- 需要关闭图标时设置 `isShowClose: true`，基础组件会把关闭图标映射到 `left` 事件。

## 样式规则

- 封装组件使用 `options: { styleIsolation: 'shared' }`。
- 通过 `::v-deep .hb-dialog`、`.dialog-wrapper`、`.dialog-header`、`.dialog-content`、`.dialog-footer` 覆盖基础样式。
- 常见中心弹窗宽度是 `640rpx` 左右；特殊活动卡片可以把 `.dialog-wrapper` 改成 `width: 750rpx` 和透明背景。
- 长规则内容放在 slot 内，使用明确高度和 `overflow-y: scroll`。
- 特殊层级先搜索 `z-index`，不要盲目超过全局弹层。

## 业务边界

- 子组件只管理 visible、本地 UI 状态和 emit。
- 接口请求、购物车、支付、订单取消、烹饪状态流转由父页面或 store 编排。
- 失败路径由父页面恢复按钮状态、重新打开弹窗或展示 toast。
- 隐私授权、登录、支付、扫码等平台差异必须使用条件编译或既有工具，不在 dialog 内硬编码平台分支。

## 验证

- 检查父页面 `ref`、组件 tag、emit 名和方法名是否一致。
- 检查 `form`、`tips`、`modify` 三种 footer 行为符合预期。
- 检查关闭图标、遮罩层滚动锁定、H5 body overflow 恢复。
- 检查 slot 内容在微信、支付宝和 H5 下不溢出、不遮挡按钮。
- 修改全局 `hb-dialog-*` 时，搜索全部引用页，避免影响旧流程。
- 使用地图统计会随业务增长而变化；执行任务时用末尾复查命令重新确认，不把数量当作固定契约。
