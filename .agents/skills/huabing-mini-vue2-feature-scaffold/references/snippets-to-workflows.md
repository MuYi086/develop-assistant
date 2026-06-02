# Snippets 到 Agent 工作流映射

## 总体原则

`.vscode/uni.code-snippets` 里保留的是局部代码记忆；Agent 使用时要升级成“先读现状、再按项目链路落文件、最后验证”的工作流。

## 页面和路由

- `uniVue2`：转成 Vue 2 Options API 页面模板。新页面必须结合路由源、store getter、onLoad dispatch、onUnload reset。
- `uniJsonPage`：转成 `zxScript/basicPages.mjs` 或 `zxScript/basicPages.h5.mjs` 的路由项维护，不直接长期编辑 `src/pages.json`。
- `uniComponent`：转成页面同级 `components/` 或 `src/components/hb-*` 的选择规则。

## 请求和列表

- `uniJsRequest`、`uniJsPromise`：默认转成 Vuex action + 页面 dispatch。只有不需要保存结果的瞬时动作才在页面直接请求。
- `uniJsList`：转成 store 中保存 `list/page/hasMore/totalPage` 或页面局部分页状态，视是否跨组件消费决定。
- `uniJsUpload`：仍按现有 `util.uniUpload` 模式，但 token/header 从 store 或 util 统一来源读取。

## Store

- `uniJsStoreCommit`：只在明确同步 UI 状态时使用；接口结果优先通过 action commit。
- `uniJsStoreDispatch`：保留为页面调用入口，但 requestParams 必须包含 `url`、`params`、`method`。
- `uniJsStoreGetters`：转成 `src/store/getters.js` 新增 getter + 页面 `mapGetters`。

## 路由、分享和平台能力

- `uniJsJump`：保留 `util.commonViewTap`，新增页面要先确认是否 tabBar、分包或需要参数。
- `uniJsInitShare`、`uniJsGetShareMessage`：沿用 `util.commonShareAppMessage`，不要在页面散落分享对象结构。
- `uniJsGetLocation`、`uniJsOpenSetting`、`uniJsGetSystemInfoSync`：使用既有 util 包装，涉及微信/支付宝差异时加条件编译。

## 表单和交互

- `uniJsJudgeAll`、`uniJsValidator`：转成页面方法或局部表单组件方法，错误提示沿用 `uni.showToast({ icon: 'none' })`。
- `uniJsDebounce`、`uniJsThrottle`：按钮提交、搜索、滚动计算继续使用 util 包装。
- `uniJsGetboundingClientRect`、`uniJsPageScrollTo`、`uniJsJudgeTouchDirection`：归入跨端 UI skill，改滚动/吸顶/测量前先读相邻实现。

## 工具函数

- 时间、拷贝、trim、storage、eventEmitter、中间件类 snippets 保留为“查 util 能力”的索引，不生成业务文件。
- storage 操作优先通过 `src/utils/storage.js`，不要散落原始 key。
