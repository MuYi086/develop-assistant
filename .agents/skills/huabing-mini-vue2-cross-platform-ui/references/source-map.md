# 来源映射

## 当前源码路径

- EasyCom 配置：`src/pages.json`
- 通用组件：`src/components/`
- 自定义导航：`src/components/hb-navbar/hb-navbar.vue`
- 通用按钮：`src/components/hb-button/hb-button.vue`
- Swiper 封装：`src/components/hb-uv-swiper/hb-uv-swiper.vue`
- 点餐 vtabs：`src/pagesA/shop/components/hb-uv-vtabs.vue`
- 购物车按钮：`src/components/hb-shopping-cart-btn/hb-shopping-cart-btn.vue`
- 购物车弹层：`src/components/hb-shopping-cart-popup/hb-shopping-cart-popup.vue`
- 确认订单局部组件：`src/pagesF/orderConfirm/components/`
- 图片和静态资源配置：`src/utils/config.js`
- 常用工具：`src/utils/util.js`、`src/utils/common/uniUtil.js`

## 组件族

- `hb-dialog-*`：取消订单、隐私、温馨提示、提交错误等弹窗。
- `hb-uv-*`：uv-ui 二次封装组件。
- `hb-shopping-cart-*`：购物车按钮、弹窗和相关状态展示。
- `pagesF/orderConfirm/components/*`：确认订单页展示和交互组件。
- `packages/zebra-swiper`：本地 swiper 包，修改前确认所有调用方。

## 常用定位

- 查 EasyCom：`rg -n '"easycom"|custom' src/pages.json`
- 查条件编译：`rg -n '#ifdef|#ifndef|#endif' src/components src/pages src/pagesA src/pagesF`
- 查组件事件：`rg -n '\\$emit\\(|@.*=' src/components/hb-navbar src/components/hb-button src/pagesF/orderConfirm/components`
- 查购物车浮层：`rg -n 'shopping-cart|cart' src/components src/pagesA/shop src/pagesF/orderConfirm`

## 维护要点

- `hb-` 前缀组件依赖 `pages.json` easycom 自动导入，新增通用组件优先保持该命名。
- `rpx` 是小程序布局主单位；系统 API 返回 `px` 时再按现有工具转换。
- 静态图优先走 `config.defaultImg` 或既有配置，不在组件里散落 OSS URL。
- 微信、支付宝和 H5 的 open-type、selector query、swiper、scroll-view 行为可能不同，改动后至少检查相关平台分支。
- 弹窗层级和购物车浮层耦合较多，调整 z-index 前先查周边组件。
