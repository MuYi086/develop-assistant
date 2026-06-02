---
name: huabing-mini-vue2-core-workflow
description: "话饼 UniApp 项目核心工作流。用于在本仓库处理项目结构、Vue 2 uni-app 页面和组件、路由、生成配置、模块边界、跨端约束、中文优先文档，以及任何需要遵守 ougege 代码风格和项目宪章的功能开发或维护任务。"
---
# 话饼 UniApp 核心工作流

## 入口检查

先读项目现状，再改代码：

- 读 `.claude/constitution.md`，宪章优先级高于普通经验。
- 读 `AGENTS.md`、`CLAUDE.md`，确认协作和仓库约束。
- 读 `package.json`，确认平台、环境、构建脚本和依赖版本。
- 读目标页面、相邻组件、对应 `src/store/modules/` 模块和 `src/utils/api/` API 文件。

面向项目所有者的文档、skill、计划、检查清单和说明必须中文优先。命令、路径、API 字段、JSON key、代码标识符和第三方专有名词可以保留英文。

## 技术边界

- 使用 UniApp + Vue 2.6 + Vuex 3 + `@climblee/uv-ui` 的现有模式。
- 不引入 Vue 3、`<script setup>`、Composition API、Vite 或新前端框架。
- 不把包管理器擅自切到 `pnpm`、`yarn` 或其他工具；按仓库现状使用 `npm run ...`。
- 页面和组件使用 Vue 2 Options API：`props`、`data`、`computed`、`watch`、`methods`、生命周期。

## 目录边界

- 主包页面在 `src/pages/`。
- 分包页面在 `src/pagesA-L/`。
- 通用组件在 `src/components/`，优先使用 `hb-` 前缀以匹配 EasyCom。
- 页面私有组件放在页面自己的 `components/` 目录。
- Vuex 模块放在 `src/store/modules/`，由 `src/store/index.js` 自动加载。
- 通用工具集中在 `src/utils/`，其中 `src/utils/util.js` 是主工具出口。
- `packages/zebra-swiper` 是本地包，修改前确认调用方和跨端兼容。

## 生成文件

- 禁止直接维护 `src/env.js` 作为源文件；它由 `zxScript/main.mjs` 生成。
- 路由和 manifest 的源头在：
  - `zxScript/basicPages*.mjs`
  - `zxScript/basicManifest*.mjs`
  - `zxScript/basicManifest.env.mjs`
- 需要切换平台或环境时使用生成脚本，例如 `zx ./zxScript/main.mjs -p mp-weixin -e inner` 或对应 `npm run zx:manifest:*`。
- 如果为了验证临时看了生成结果，结束前确保生成源文件也同步。

## 修改流程

1. 先通过 `src/pages.json` 和 `zxScript/basicPages*.mjs` 定位页面入口。
2. 追踪数据流：`api_*.js` 常量 -> `api/index.js` 汇总 -> Vuex action -> 页面方法 -> 组件 props/events。
3. 保持页面负责生命周期和 UI 编排：
   - `onLoad` 处理入参和首屏请求。
   - `onShow` 处理从优惠券、WebView、支付结果等页面返回后的刷新。
   - `onUnload` 清理定时器、重置页面态、避免旧 store 状态泄漏。
4. 多个页面共用的业务转换放入 `util.js`；只服务单页的逻辑留在页面或局部组件里。
5. 不擅自合并 v1/v2 流程。`shop`/`shopV1`、`orderConfirm`/`orderConfirmV1`、新旧订单详情并存是既有架构。

## 跨端规则

- 平台差异使用 `#ifdef MP`、`#ifdef H5`、`#ifdef MP-WEIXIN`、`#ifdef MP-ALIPAY`。
- 微信和支付宝差异不要用运行时猜测替代条件编译，尤其是登录、支付、授权、分享、订阅消息、`clientId`。
- 不在业务代码里绕过 `config.js` 硬编码环境地址、socket 地址、支付渠道或 OSS 前缀。
- 新增分包超过 `pagesA-L` 范围时，必须考虑各平台分包大小限制并同步路由配置。

## 状态和持久化

- Vuex 模块保持 `initState -> state -> mutations -> actions -> export default`。
- 只把必须跨重启保留的数据加入 `config.vuexStorePath`。
- 持久化新增内容要说明原因，避免超过小程序 storage 限制。
- 局部重置优先使用已有 reset mutation 或 `storeModuleReset` 思路，不要在页面里散落大段手动清理。

## 验证

- 路由、环境、manifest 修改后运行对应 `npm run zx:manifest:*` 并检查 `src/env.js`、`src/pages.json`、`src/manifest.json`。
- `.vue` 或样式变更后优先运行 `npm run lint:stylelint`。
- 触及登录、支付、订单、购物车、优惠券、钱包、WebSocket 或请求层时，同时评估登录/未登录、H5/小程序、微信/支付宝差异。

## 参考文件

- `src/utils/util.js`
- `src/store/index.js`
- `src/store/getters.js`
- `src/pagesA/shop/shop.vue`
- `src/pagesF/orderConfirm/orderConfirm.vue`
- `src/pagesD/cook/cook.vue`
- `src/pagesF/orderDetail/orderDetail.vue`
- `zxScript/main.mjs`
- `zxScript/basicPages.mjs`
