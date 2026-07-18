---
name: huabing-mini-vue2-uv-popup-flow
description: 话饼 UniApp Vue 2 的 uv-popup 弹层技能。用于新建或修复页面底部弹层、购物车浮层、登录授权弹层、用餐方式/优惠/支付/烹饪时间选择弹层、弹层 z-index、overlay 关闭、popupShow/popupClose、@change 状态同步和父子组件交互。
---

# 话饼 uv-popup 弹层

## 快速入口

处理 `uv-popup` 前，先按任务读取：

- `huabing-mini-vue2-core-workflow`
- `huabing-mini-vue2-cross-platform-ui`
- 目标页面和相邻 `components/popup-*.vue`
- 需要点餐、购物车、确认订单、支付或烹饪状态时，同时读取 `huabing-mini-vue2-ordering-business-flow`
- 支付方式选择同时读取 `huabing-mini-vue2-payment-channel-flow`；登录授权弹层同时读取 `huabing-mini-vue2-auth-user-flow`
- 需要现有案例地图时读取 `references/usage-map.md`

## 落点判断

- 页面专用弹层放目标页同级 `components/popup-*.vue`。
- 多页面复用弹层放 `src/components/hb-*`，例如购物车和登录。
- 底部选择、列表、授权、购物车和操作面板优先用 `uv-popup`。
- 中心确认、提示、规则阅读和自定义卡片弹窗优先用 `hb-dialog`，不要把两套弹窗混用成一个组件。

## 基础结构

保持本仓库常见结构：

```vue
<template>
  <uv-popup
    ref="popup"
    :mode="popConfig1.mode"
    :round="popConfig1.round"
    :zIndex="popConfig1.zIndex"
    :bgColor="popConfig1.bgColor"
    class="component popup-demo"
  >
    <view class="popup-wrap">
      <view class="popup-header"></view>
      <view class="popup-content"></view>
      <view class="popup-footer"></view>
    </view>
  </uv-popup>
</template>
```

```js
data () {
  return {
    popConfig1: {
      mode: 'bottom',
      round: 16,
      zIndex: 10070,
      bgColor: '#fff'
    }
  }
},
methods: {
  popupShow () {
    this.$refs.popup.open('bottom')
  },
  popupClose () {
    this.$refs.popup.close()
  }
}
```

## 交互规则

- 暴露给父页面的方法优先命名 `popupShow`、`popupClose`。
- 父页面通过 `ref` 调用弹层；弹层通过 `$emit` 返回业务动作。
- 通用确认事件沿用 `popupHandleClick`；强语义场景使用 `chooseConfirm`、`handleChange`、`cartClear`、`cartSumChange` 等现有命名。
- 表单或选择弹层先校验，再关闭；失败时用 `uni.showToast` 并保持弹层打开。
- 需要“临时选择态”的弹层先写 prepare/temp store，点击确定后再写真实选择态。
- 需要打开前重置或回显内容时，在 `popupShow` 里准备状态，再 `this.$refs.popup.open('bottom')`。
- 需要先渲染大列表或条件节点时，先设置本地 `isShow*`，再 `this.$nextTick(() => this.$refs.popup.open('bottom'))`。
- `@change` 只用于显示状态同步、购物车浮层标记等副作用，不要把确认业务全塞进 `@change`。

## 配置规则

- 常规底部弹层使用 `mode: 'bottom'`、`round: 16`、`bgColor: '#fff'`。
- 必选流程使用 `closeOnClickOverlay: false`，例如用餐方式、VIP 赠礼。
- 可选流程默认允许点击遮罩关闭，除非周边组件已有禁关行为。
- 需要自定义圆角或样式时使用 `customStyle`，不要直接依赖全局覆盖。
- 图片资源走 `config.defaultImg`。
- 按钮优先复用 `uv-button` 配置对象；跨平台授权按钮按现有条件编译拆分。

## z-index

先搜索周边层级再改：

```bash
rg -n "zIndex:|z-index:" src --glob "*.vue"
```

现有分层经验：

- 普通购物车弹层：`zIndex: 50`
- 门店推荐、订单确认、烹饪和商品详情底部弹层：多为 `10070`
- 需要高过购物车或登录授权的弹层：多为 `10077`
- 叠在订单确认特殊 dialog 上方时，检查是否已有 `10086`

## 样式规则

- 外层 class 使用 `component popup-xxx`。
- 内容结构保持 `.popup-wrap`、`.popup-header`、`.popup-content`、`.popup-footer`。
- 长列表使用 `overflow-y: scroll` 和明确 `max-height`，并隐藏滚动条。
- 小程序尺寸优先用 `rpx`；来自系统 API 的 `px` 再转换。
- 底部弹层 footer 需要避开购物车、系统安全区或固定提交栏时，参考相邻组件的 padding。
- 不改无关 v1/v2 弹层，`shop`、`shopV1`、`orderConfirm`、`orderConfirmV1` 保持并存。

## 验证

- 检查父页面 `ref` 名、弹层暴露方法、emit 名是否完全匹配。
- 检查打开、关闭、遮罩点击、确认、取消、失败校验路径。
- 检查长列表滚动、底部按钮和键盘输入不互相遮挡。
- 检查微信、支付宝和 H5 条件编译分支。
- 涉及购物车、支付、优惠、烹饪时同步检查业务状态是否被恢复或提交。
- 使用地图数量仅为审计基准；任务开始时运行引用中的复查命令确认新增调用方。
