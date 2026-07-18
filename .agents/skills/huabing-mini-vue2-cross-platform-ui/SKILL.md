---
name: huabing-mini-vue2-cross-platform-ui
description: 话饼跨端 UI 和组件技能。用于构建或修复 Vue 2 uni-app 的 hb-* 组件、页面局部组件、uv-ui 二次封装、自定义导航、按钮、弹窗、购物车浮层、swiper、vtabs、sticky、scroll 布局、rpx 样式和微信小程序/支付宝小程序/H5 兼容问题。若任务主要是购物车业务计算或订单状态，应配合点餐业务流 skill。
---

# 话饼跨端 UI

## 快速入口

改跨端 UI、组件、滚动、弹窗、自定义导航或 uv-ui 封装前，先读这些文件：

- `src/pages.json`
- `src/components/hb-navbar/hb-navbar.vue`
- `src/components/hb-button/hb-button.vue`
- `src/components/hb-uv-swiper/hb-uv-swiper.vue`
- `src/pagesA/shop/components/hb-uv-vtabs.vue`
- 目标页面或目标组件的相邻组件

当任务涉及组件族、已知平台差异、购物车弹层、订单确认组件或样式资源入口时，再读 `references/source-map.md`。

## 任务边界

- 组件只处理展示、局部状态、props/events、测量和交互节流。
- 价格、库存、购物车提交、支付、优惠、订单流转由父页面或 store 编排。
- 修改 `hb-shopping-cart-*`、订单确认组件或详情页组件时，同时检查业务 skill 的状态约束。
- 登录授权 UI 同时检查 `huabing-mini-vue2-auth-user-flow`；支付方式 UI 同时检查 `huabing-mini-vue2-payment-channel-flow`。

## 基线规则

- 使用 Vue 2 Options API。
- 模板使用 uni-app 基础节点：`view`、`text`、`image`、`scroll-view`、`swiper` 等。
- 通用组件放 `src/components/hb-*`。
- 页面私有组件放页面相邻 `components/`。
- 业务决策放父页面，组件通过 props 和 emit 交互。
- 复用已有 ref 方法命名：`popupShow`、`popupClose`、`showDialog`、`hideDialog`、`reset*`。

## 条件编译

平台差异使用条件编译块。微信和支付宝行为不同的地方，不要靠同一套模板硬撑。

```html
<!-- #ifdef MP-WEIXIN -->
<!-- 微信小程序节点 -->
<!-- #endif -->

<!-- #ifdef MP-ALIPAY -->
<!-- 支付宝小程序节点 -->
<!-- #endif -->

<!-- #ifdef H5 -->
<!-- H5 节点 -->
<!-- #endif -->
```

## 平台差异

重点检查这些已知差异：

- 支付宝 selector query 可能不支持 `.in(self)`，参考 `uniUtil.getBoundingClientRect` 的分支。
- 支付宝自定义导航箭头颜色需要 `my.setNavigationBar` hack。
- 部分 swiper 配置支付宝不支持，参考 `hb-uv-swiper` 的注释和降级。
- 支付宝 `hb-uv-vtabs` slot 内 gap 可能不渲染；沿用组件 prop 在封装内部补 gap，不把平台 hack 散到业务列表。
- 微信 `scroll-view` 中 slot 内容的 ID 可能无法稳定用于 `scroll-into-view`，必要时用 `scrollTop`。
- 子组件渲染可能晚于 store 更新，依赖 ref 或测量时用 `this.$nextTick`。

## 组件规则

- 自定义导航用 `uni.getSystemInfoSync()` 和 `uni.getMenuButtonBoundingClientRect()` 计算状态栏、胶囊和内容宽度。
- 页面使用自定义导航时，路由配置保持 `navigationStyle: 'custom'`。
- 导航左侧点击向父级 emit `leftClick`，不要在组件里固定跳转。
- 适配不同设备状态栏和胶囊高度，不写死 iPhone 或 Android 单一值。
- 按钮的 H5、微信、支付宝 open-type 行为用不同模板。
- 点击用 `util.debounce` 风格防抖。
- 提交、支付、下单按钮使用内部 disabled 或 `isDisableAfterFirstClick` 防重复点击。
- 失败路径由父页面调用 reset 方法恢复按钮状态。
- 滚动和吸顶先测量 section 高度和 top，再在滚动中使用缓存结果。
- 重计算布局要防抖。
- 左侧菜单滚动和右侧内容滚动分开处理。
- `sticky` 需要外层 wrapper 时，不要直接套在不生效的 `scroll-view` 内部。
- 父页面需要切换全局滚动和内部滚动时，暴露类似 `updateRightContentScrollable` 的方法。
- 弹窗组件只管理展示状态，业务分支交给父页面。
- 使用语义事件，例如 `popupHandleClick`、`dialogRightCilck`、`handleBtnClick`。
- 弹窗失败路径要恢复触发按钮或提交按钮状态。
- 购物车、用餐方式、提交错误等弹窗层级复杂，改 z-index 前先查周边组件。

## 样式

- 小程序布局优先使用 rpx；系统测量得到 px 时再转换。
- 静态图优先走 `config.defaultImg`，不要散落 OSS URL。
- 保留项目 iconfont 体系，除非任务明确要求替换。
- 文案、说明和项目文档中文优先；按钮、状态和业务文案按现有产品语言风格。
- 避免影响现有 v1/v2 组件族。
- 目标提交中的临时 class、调试文本和注释代码不是风格规范；只复用已经在当前源码保留的兼容方案。

## 验证

- 含 `#ifdef` 的组件至少检查微信和支付宝分支。
- 滚动、吸顶和 vtabs 改动要测短列表和长列表。
- 自定义导航改动要测不同状态栏和胶囊高度。
- 按钮改动要测成功、失败、取消三类路径的 disabled 恢复。
