---
name: huabing-mini-vue2-feature-scaffold
description: 话饼 UniApp Vue 2 新需求脚手架技能。用于从一个新业务需求生成或补齐页面路由源、页面目录、同级 components、api_*.js、api/index.js 聚合、Vuex module、getters 和页面 onLoad dispatch demo；适用于用户说新建页面、新功能、新需求骨架、从 snippets 提炼开发流程、页面/API/store 一起创建等场景。
---

# 话饼新需求脚手架

## 结论

优先使用 skill，不把 snippets 直接迁移成一组固定 slash command。

- skill 适合承载项目约束、文件读取顺序、跨端路由源、API/Vuex 数据流和示例代码生成。
- slash command 只适合作为入口别名，例如“按话饼新需求脚手架创建 xxx”，不适合承载全部规则。
- VS Code snippets 中的代码片段要转成“生成前检查 + 文件落点 + 数据流约束 + demo 模板”，不要原样搬运。

## 使用顺序

1. 先读项目边界：`AGENTS.md`、`.claude/constitution.md`、`src/pages.json`、`zxScript/basicPages.mjs`、目标分包相邻页面。
2. 需要 API 或 Vuex 时，同时使用 `huabing-mini-vue2-request-store-flow`。
3. 需要组件、样式、弹窗、滚动或自定义导航时，同时使用 `huabing-mini-vue2-cross-platform-ui`。
4. 需求落在点餐、购物车、确认订单、支付或订单详情时，同时使用 `huabing-mini-vue2-ordering-business-flow`。
5. 缺少关键信息时先补齐：页面路径、导航标题、分包 root、真实接口路径、登录/未登录接口是否成对、store 模块名、getter 名；不要生成虚构 endpoint。

## 脚手架产物

新增一个普通业务页时，默认产出或维护：

- `src/<root>/<page>/<page>.vue`
- `src/<root>/<page>/components/<PascalName>Panel.vue`
- `src/utils/api/api_<domain>.js`
- `src/utils/api/index.js`
- `src/store/modules/<domain>.js`
- `src/store/getters.js`
- `zxScript/basicPages.mjs`
- H5 需要独立入口时再维护 `zxScript/basicPages.h5.mjs`

不要直接把 `src/pages.json` 当源文件长期维护。它由 `zxScript/main.mjs` 生成；改完路由源后运行对应 `npm run zx:manifest:*` 生成。

## 页面约定

- 使用 Vue 2 Options API。
- 页面通过 `mapGetters` 读取 store 值。
- `onLoad` 只处理入参和首屏请求编排。
- 页面方法构造 `{ url, params, method }`，然后 `this.$store.dispatch('<module>/<action>', requestParams)`。
- 页面不直接用 `util.postData` 存业务结果；接口返回值进入 Vuex，再通过 getter 消费。
- `onUnload` 如需清理页面态，优先 dispatch store 的 `reset`。
- 页面私有组件放同级 `components/`，通用组件再放 `src/components/hb-*`。

## Store 约定

- 保持 `initState -> state -> mutations -> actions -> export default`。
- action 内部调用 `util.postDataPromise(requestParams)`。
- action 负责后端数据归一化并 commit。
- mutation 使用 `SET_*` 命名。
- getter 写入 `src/store/getters.js`，命名带领域前缀。
- 只在确实需要跨启动保留时，才改 `config.vuexStorePath`。

## API 约定

- `api_*.js` 只放接口路径常量。
- `api/index.js` 继续手动 require 并展开到 `api` 对象，不恢复 `require.context`。
- 登录/未登录接口若后端成对提供，显式维护两条常量。
- 小程序端会在 `api/index.js` 拼接 `config.apiUrl`，不要在 API 常量里硬编码域名。

## 可复用资源

- `scripts/scaffold-feature.mjs`：生成页面、组件、API、store、getter 和路由源的 Node 脚本。先用 `--dry-run` 看计划，再正式写入。
- `references/snippets-to-workflows.md`：把 `.vscode/uni.code-snippets` 的片段分类成 Agent 工作流。
- `references/slash-command-template.md`：可选 slash command 入口模板，只作为触发 skill 的短 prompt。
- `references/source-map.md`：脚手架规则对应的目标提交和当前源码证据。

## 脚本示例

```bash
node generated-skills/huabing-mini-vue2-feature-scaffold/scripts/scaffold-feature.mjs \
  --root pagesF \
  --page demoFeature/demoFeature \
  --title 示例页面 \
  --domain demoFeature \
  --endpoint wxminiappWxClientDemoFeatureDetail=/wxminiapp/wx/client/demoFeature/detail \
  --dry-run
```

确认后去掉 `--dry-run`。如果 H5 也需要入口，加 `--h5`。

## 验证

- 路由源修改后运行对应 `npm run zx:manifest:<platform>:<env>`，确认 `src/pages.json` 被正确生成。
- `.vue` 或样式变更后运行 `npm run lint:stylelint`。
- 检查 `api/index.js` 中 require 和展开对象都已加入。
- 检查 `src/store/getters.js` 中 getter 指向正确模块和字段。
- 检查页面没有直接把接口返回散落存在 `data` 里。
