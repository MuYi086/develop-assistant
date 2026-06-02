---
name: huabing-mini-vue2-core-workflow
description: 话饼 UniApp 项目核心工作流。用于在本仓库处理项目治理、路由和分包、manifest/env 生成配置、模块边界、跨端工程约束、中文优先文档、构建脚本和需要先定架构边界的维护任务。若任务主要是 hb/uv-ui 组件、请求/Vuex 状态流、点餐/订单业务流，应优先配合对应专项 skill。
---

# 话饼 UniApp 核心工作流

## 快速入口

改项目结构、路由、生成配置或跨模块流程前，按任务选择读取：

- `.claude/constitution.md`，宪章优先级高于普通经验。
- `AGENTS.md`、`CLAUDE.md`
- `package.json`
- `src/pages.json`
- `src/manifest.json`
- `zxScript/main.mjs`
- 目标页面、相邻组件、对应 `src/store/modules/` 模块和 `src/utils/api/` API 文件

当任务涉及页面入口、生成文件来源、示例业务页、Vuex/API 主干或本地包边界时，再读 `references/source-map.md`。

## 协同规则

- UI、组件、样式、滚动、弹窗、自定义导航：使用 `huabing-mini-vue2-cross-platform-ui` 的细节规则。
- 接口、请求头、错误处理、Vuex、getter、持久化：使用 `huabing-mini-vue2-request-store-flow` 的细节规则。
- 点餐、购物车、确认订单、支付、订单详情、烹饪：使用 `huabing-mini-vue2-ordering-business-flow` 的细节规则。
- 多域任务先用本 skill 定边界，再加载对应专项 skill；不要用本 skill 替代专项业务规则。

## 技术边界

- 使用 UniApp + Vue 2.6 + Vuex 3 + `@climblee/uv-ui` 的现有模式。
- 不引入 Vue 3、`<script setup>`、Composition API、Vite 或新前端框架。
- 不把包管理器擅自切到 `pnpm`、`yarn` 或其他工具；按仓库现状使用 `npm run ...`。
- 页面和组件使用 Vue 2 Options API：`props`、`data`、`computed`、`watch`、`methods`、生命周期。
- 面向项目所有者的文档、skill、计划、检查清单和说明中文优先；命令、路径、API 字段、JSON key、代码标识符和英文专有名词可以保留英文。

## 实现顺序

1. 通过 `src/pages.json` 和 `zxScript/basicPages*.mjs` 定位页面入口。
2. `src/pages.json` 是压缩 JSON，查路由时优先用 `rg` 定位 path，再回到生成源确认。
3. 追踪数据流：`api_*.js` 常量 -> `api/index.js` 汇总 -> Vuex action -> 页面方法 -> 组件 props/events。
4. 保持页面负责生命周期和 UI 编排：`onLoad` 处理入参和首屏请求，`onShow` 处理返回刷新，`onUnload` 清理 timer、页面态和旧 store 状态。
5. 多页面共用的业务转换放入 `src/utils/util.js`；只服务单页的逻辑留在页面或局部组件。
6. 不擅自合并 v1/v2 流程。`shop`/`shopV1`、`orderConfirm`/`orderConfirmV1`、新旧订单详情并存是既有架构。

## 跨端规则

- 平台差异使用 `#ifdef MP`、`#ifdef H5`、`#ifdef MP-WEIXIN`、`#ifdef MP-ALIPAY`。
- 微信和支付宝差异不要用运行时猜测替代条件编译，尤其是登录、支付、授权、分享、订阅消息、`clientId`。
- 不在业务代码里绕过 `config.js` 硬编码环境地址、socket 地址、支付渠道或 OSS 前缀。
- 新增分包超过 `pagesA-L` 范围时，必须考虑各平台分包大小限制并同步路由配置。

## 生成文件

- 禁止直接维护 `src/env.js` 作为源文件；它由 `zxScript/main.mjs` 生成。
- 路由和 manifest 的源头在 `zxScript/basicPages*.mjs`、`zxScript/basicManifest*.mjs`、`zxScript/basicManifest.env.mjs`。
- 需要切换平台或环境时使用生成脚本，例如 `zx ./zxScript/main.mjs -p mp-weixin -e inner` 或对应 `npm run zx:manifest:*`。
- 如果为了验证临时看了生成结果，结束前确认生成源文件也需要同步。

## 状态规则

- Vuex 模块保持 `initState -> state -> mutations -> actions -> export default`。
- 只把必须跨重启保留的数据加入 `config.vuexStorePath`。
- 持久化新增内容要说明原因，避免超过小程序 storage 限制。
- 局部重置优先使用已有 reset mutation 或 `storeModuleReset` 思路，不要在页面里散落大段手动清理。

## 验证

- 路由、环境、manifest 修改后运行对应 `npm run zx:manifest:*` 并检查 `src/env.js`、`src/pages.json`、`src/manifest.json`。
- `.vue` 或样式变更后优先运行 `npm run lint:stylelint`。
- 触及登录、支付、订单、购物车、优惠券、钱包、WebSocket 或请求层时，同时评估登录/未登录、H5/小程序、微信/支付宝差异。
