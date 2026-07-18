---
name: huabing-mini-vue3-app-shell
description: 面向 Vue 3 uni-app 小程序项目的应用壳层维护技能。用于新增或删除页面与分包、维护 pages.json/manifest 路由配置、导航拦截与登录门禁、createSSRApp 插件注册、App 生命周期、原生或动态 tabBar、easycom、条件编译、Vite/HBuilderX 环境配置、Tailwind/PostCSS 跨端处理和多模式构建发布；也用于排查页面已创建但未注册、分包路径错误、插件未安装、鉴权未生效、H5 base/代理错位或不同小程序端构建失败。
---

# 话饼 Vue3 小程序应用壳层

## 先探测再修改

不要假设目录、包管理器、构建器或路由方案。先完成以下探测：

1. 读取仓库级指令、`package.json`、锁文件和开发文档。
2. 定位 `pages.json`、`manifest.json`、`main.ts`、`App.vue`、构建配置和环境目录。
3. 从依赖与脚本判断项目属于 Vite CLI、HBuilderX 管理、Vue CLI/webpack 或自定义构建链。
4. 检索 `createSSRApp`、`app.use`、`import.meta.glob`、`uni.addInterceptor`、路由插件、`tabBar`、`subPackages` 和条件编译块。
5. 记录目标平台、mode、UI 库、状态库、样式体系和发布副作用。

需要系统盘点新项目时，读取 `references/adaptation-checklist.md`。

## 维护页面与分包

- 把实际 `pages.json` 作为页面注册事实源；项目若通过脚本生成它，改生成源而不是产物。
- 新增页面时同步处理页面文件、主包或分包注册、页面样式、公开/鉴权 metadata、导航引用和 easycom 依赖。
- 调整分包时验证 `root + page.path`、分包独立性、包体积、跨包跳转和平台限制。
- 改首页顺序、alias 或 tabBar 页面时验证启动页、分享路径、回退栈和登录回跳。
- 删除页面前全仓搜索导航、分享、扫码、推送、WebView 和后端配置引用；不要只删目录。
- 不要因残留组件或历史提交仍引用旧路径就自动恢复页面，先确认产品需求与接口仍存在。

## 适配路由与鉴权方案

先辨别项目使用哪种方案：

- 原生 `uni.navigateTo`、`redirectTo`、`reLaunch`、`switchTab`；
- `uni.addInterceptor` 统一拦截；
- `uni-mini-router`、`uni-simple-router` 或项目自研路由层；
- 后端动态菜单与本地页面 metadata 的组合。

实现门禁时保持以下不变量：

- 公开页必须显式可识别，默认策略必须清楚。
- 登录页、授权页和错误页不能递归触发登录跳转。
- 统一规范 query 去除、路径前导 `/`、分包路径和未知路由策略。
- 区分“页面是否需要登录”“菜单是否允许进入”“按钮或数据是否可见”，不要混用一个布尔值。
- 覆盖四种导航 API 的页面栈差异，并验证小程序冷启动、分享进入和扫码进入。

## 维护入口、插件与生命周期

- 先识别插件是显式 `app.use()`、插件聚合器还是 `import.meta.glob` 自动注册，再沿当前模式扩展。
- 自动注册模块必须遵守项目约定的默认导出或安装接口；不要创建无法被扫描器识别的具名导出。
- 把平台专用依赖和 API 放入正确的 uni-app 条件编译块，避免其他端在解析阶段失败。
- 在 Pinia/Vuex、持久化插件、UI 库和全局属性之间保持可解释的安装顺序。
- `App.vue` 的 `onLaunch` 只承载全局必要初始化；可延迟业务数据放到页面或 store，避免启动白屏。
- 文件存在不等于功能启用。通过实际 import、安装调用和运行条件确认 VConsole、路由拦截器、tabBar 等能力是否生效。

## 适配 Tabbar 与全局组件

- 先区分原生 `pages.json.tabBar`、自定义 tabBar 和后端动态 tabBar。
- 原生 tabBar 使用 `switchTab`，路径不能携带普通 query；自定义 tabBar 要自行维护选中态、页面栈和安全区。
- 动态 tabBar 必须校验配置结构、图片 URL、页面注册和路径规范；配置未就绪时安全隐藏或显示稳定占位。
- easycom 规则要避免吞掉第三方组件前缀，并验证 H5 与目标小程序端的组件解析结果。
- 不要修改 vendored UI 库源码，除非任务明确要求修补第三方代码且已评估升级影响。

## 维护跨端构建

- 只记录环境变量 key、来源和覆盖顺序，不要读取后把真实 token、域名、appid 或 client secret 写入文档和日志。
- 对照 `manifest.json`、构建脚本和 Vite/webpack 配置检查 appid、H5 base、代理、分包、组件编译和平台插件。
- 修改 Tailwind/PostCSS/rpx 转换时至少验证一个 H5 和一个目标小程序构建；不要假设同一 CSS 插件适用于所有端。
- 区分“只生成 `dist`”与“复制/上传/覆盖发布目录”的命令。运行发布脚本前解析绝对目标并确认删除、覆盖和外部写入已获授权。
- 新增 mode 后同步检查 env 文件、package script、CI、开发者工具导入目录和发布说明。

## 文档与交付

- 面向项目所有者的 constitution、spec、plan、tasks、checklist、README、手册、prompt 模板说明、metadata 说明和人工评审记录使用中文主文。
- 命令、路径、文件名、代码标识符、JSON key、API 字段、模型名和第三方专有术语保留英文，避免为翻译牺牲准确性。
- 引用英文资料时给出中文结论摘要；只有英文主文能显著降低工具误解时才使用英文，并同时补充中文解释。

## 边界

- 登录 token、请求封装、持久化和 WebView 安全归 `huabing-mini-vue3-runtime`。
- 首页数据编排、权限展示和统计卡片归 `huabing-mini-vue3-home-dashboard`。
- Vue 2 uni-app 项目应使用独立的 `huabing-mini-vue2-*` 系列，不要套用 `createSSRApp`、Composition API 或 Vue 3 插件假设。
- 先服从目标仓库现有约束；通用 skill 不替代项目自己的 spec、AGENTS.md 或架构决策。

## 验证

- 运行目标仓库已有 lint/typecheck；若脚本带 `--fix`，执行后检查无关 diff。
- 对每个受影响平台运行对应 mode 构建，不用单一 H5 结果证明小程序兼容。
- 手测启动、公开页、受保护页、未知路由、分包跳转、返回栈、Tabbar、插件安装和热启动。
- 涉及发布脚本时先用非发布构建验证，最后再执行已授权的复制或上传步骤。
