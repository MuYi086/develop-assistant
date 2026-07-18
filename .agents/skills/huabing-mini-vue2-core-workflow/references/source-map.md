# 来源映射

## 项目治理入口

- 宪章：`.claude/constitution.md`
- 仓库说明：`AGENTS.md`、`CLAUDE.md`
- 依赖和脚本：`package.json`

## 当前源码路径

- 页面路由：`src/pages.json`
- 小程序和 App manifest：`src/manifest.json`
- 自动生成环境：`src/env.js`
- 运行时配置：`src/utils/config.js`
- 页面生成源：`zxScript/basicPages*.mjs`
- manifest 生成源：`zxScript/basicManifest*.mjs`、`zxScript/basicManifest.env.mjs`
- 环境生成脚本：`zxScript/main.mjs`
- Vuex 入口：`src/store/index.js`
- Getter 汇总：`src/store/getters.js`
- API 汇总：`src/utils/api/index.js`
- 公共工具出口：`src/utils/util.js`
- 本地包：`packages/zebra-swiper`

## 当前项目规模

- `src/components/` 下约 44 个 `hb-*` 组件。
- `src/utils/api/` 下有 48 个 `api_*.js` 模块。
- `src/store/modules/` 下有 52 个 Vuex 模块。
- `src/pages.json` 是单行压缩 JSON，查路由时用 `rg -n '"path":"pagesA/shop/shop"' src/pages.json` 这类定向搜索。

## 代表性业务入口

- 点餐页：`src/pagesA/shop/shop.vue`
- 确认订单：`src/pagesF/orderConfirm/orderConfirm.vue`
- 烹饪页：`src/pagesD/cook/cook.vue`
- 订单详情：`src/pagesF/orderDetail/orderDetail.vue`
- 全局 WebSocket：`src/components/global-web-socket/global-web-socket.vue`
- V4 公共订单详情：`src/pagesF/commonOrderDetail/commonOrderDetail.vue`
- V3 烹饪页：`src/pagesD/cookV3/cookV3.vue`
- V4 WebSocket：`src/components/global-web-socket-v4/global-web-socket-v4.vue`

## 维护要点

- `src/env.js` 是生成结果，不是源文件。环境或路由变更优先改 `zxScript/` 里的生成源。
- `src/utils/util.js` 和 `src/utils/api/index.js` 有循环依赖历史，新增公共工具或 API 汇总时先查现有 import 方式。
- `src/store/index.js` 自动加载 `src/store/modules/`，新增模块不需要手动注册，但跨页面 getter 需要同步 `src/store/getters.js`。
- 主包在 `src/pages/`，分包在 `src/pagesA-L/`；新增页面要同时考虑小程序分包大小限制。
- v1/v2 页面和组件族是既有架构，不要为了统一风格擅自合并。
- 当前 `package.json` 版本为 `4.11.0`，脚本和依赖版本以 `package.json` 为准，不沿用旧文档里的版本号。

## 目标提交证据

筛选口径：committer 为 `ougege` 或 `muyi086`，且邮箱为 `1258947325@qq.com`。共匹配 2915 个提交，其中 2685 个非 merge 提交；当前工程范围 845 个文件中有 681 个文件的最后 committer 匹配该口径。

- `615e7cf4f`（2024-08-12）：改造编译脚本，生成 appid、平台、版本和 API 环境信息。
- `1e59011b5`（2024-07-03）：统一 Vuex reset 能力。
- `e7f26f049`（2026-06-23）：一次新增公共详情页面、组件、Store、API、getter 和路由源。
- `306e3b62c`（2026-07-06）：公共详情接入 V4 路由、WebSocket 和公共工具。

上述提交用于提炼工程边界，不代表应复制其中的临时代码、调试输出或历史冗余。
