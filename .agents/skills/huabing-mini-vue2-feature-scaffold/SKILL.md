---
name: huabing-mini-vue2-feature-scaffold
description: 通用 UniApp + Vue 2 新功能脚手架工作流。用于从需求创建或补齐页面、页面私有组件、API/服务、Vuex 模块、路由/分包和最小验证；会先探测目标项目约定，不硬编码 pagesA、API barrel、Store 注册或生成脚本，也不会猜测接口路径。
---

# UniApp Vue 2 新功能脚手架

## 适配目标项目

1. 先使用核心工作流读取仓库约束。
2. 可运行 `node scripts/inspect-uniapp-vue2.mjs --project <项目目录> --pretty` 生成只读探测报告。
3. 根据报告和相邻功能确认页面目录、组件命名、SFC 顺序、路由源、API 层、Store 注册及测试方式。
4. 需要适配决策表时读取 `references/project-adaptation.md`。

探测脚本只提供候选，不替代阅读真实文件；未找到的约定必须通过源码确认，不凭经验补路径。

## 需求契约

开始写文件前明确：

- 用户场景、完成标准和失败/空态。
- 页面路径、导航标题、主包或分包、登录要求和目标平台。
- 真实 API method/path、请求与响应示例、错误语义。
- 状态由页面还是 Vuex 持有，是否需要持久化。
- 组件职责、props/events/slot，以及清理 timer/listener 的生命周期。

缺少真实 endpoint、业务枚举或关键交互时，不生成看似可用的虚构实现；先完成不依赖该信息的结构和明确待确认项。

## 组件地图

为非平凡页面先写简短组件地图：

- route page：解析参数、生命周期、请求编排和页面级状态。
- feature container：组织一个独立功能区。
- presentational component：只接收 props、发出事件。
- overlay/form/list：按对应专项技能维护草稿、提交、分页和关闭契约。

页面存在三个以上独立 UI 区域或同时承担复杂请求与大段展示时拆分；小型单页不为形式制造组件。

## 文件落点

- 页面、私有组件和通用组件沿用目标项目目录及命名。
- 路由只修改权威源；若 `pages.json` 是生成物，修改生成源并运行生成命令。
- 仅在跨组件/跨页面共享时创建 Vuex 模块；否则保留页面局部状态。
- API/服务沿用现有 client 和 error contract，不在页面直接复制 `uni.request`。
- 自动注册、barrel、getter 汇总和持久化白名单仅在目标项目确有该机制时维护。

## 页面生命周期

- `onLoad`：解析和归一化 query，启动只需一次的首屏流程。
- `onShow`：处理从选择页/WebView 返回后确需刷新的状态，使用明确标志避免重复请求。
- `onPullDownRefresh` / `onReachBottom`：交给列表分页契约。
- `onHide` / `onUnload`：按资源所有权停止 timer、socket、listener 和未完成请求，重置页面专属 Store。

## 实施与验证

1. 先创建页面和组件契约，再接 API/Store，最后更新路由源。
2. 每一步都保持应用可解析；不覆盖已存在文件，不做无关重构。
3. 运行路由生成、lint、测试和至少一个目标平台构建。
4. 验证首次进入、返回刷新、空数据、网络失败、重复点击和卸载清理。
5. API/Store、UI、表单、列表、实时能力分别加载对应专项技能。
