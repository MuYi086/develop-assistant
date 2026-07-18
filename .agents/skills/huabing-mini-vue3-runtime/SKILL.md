---
name: huabing-mini-vue3-runtime
description: 面向 Vue 3 uni-app 小程序项目的运行时与基础设施维护技能。用于处理登录认证、token 与租户状态、Pinia/Vuex 持久化、storage/cache、请求封装与拦截器、重试和重复请求取消、全局属性注入、API 模块 tree-shaking、WebView token 中转、query 编解码、H5 OAuth/微信 JS-SDK 和条件编译；也用于排查冷启动登录态丢失、请求头不一致、接口响应结构冲突、WebView 白屏或认证信息泄漏。
---

# 话饼 Vue3 小程序运行时

## 建立运行时依赖图

先发现事实，不要套用固定目录：

1. 定位应用入口、App 生命周期、状态容器安装、持久化插件和全局属性注入。
2. 搜索 token 的所有读写点、storage key、登录/退出流程、租户或组织切换逻辑。
3. 盘点全部请求 client、API 目录、base URL、拦截器、响应解包、重试和取消机制。
4. 定位 WebView 页面、URL/query 工具、H5 OAuth、微信 JS-SDK 和平台条件编译。
5. 用“状态源 → header/query → 请求或跳转 → 错误/回跳”的链路记录实际依赖。

遇到陌生项目或多套基础设施并存时，读取 `references/adaptation-checklist.md`。

## 收敛认证状态

- 为 token、refresh token、用户、租户和临时凭证确定唯一事实源；持久化层只是恢复机制，不应成为第二套业务状态。
- 如果历史兼容要求同一 token 写入多个 key，集中在一个 service/store action 内原子同步，并给迁移和退出补测试。
- 冷启动按“恢复凭证 → 校验或刷新 → 拉用户 → 开放业务请求”组织；不要让页面各自抢跑初始化。
- 登录成功统一落状态、取用户、处理 back URL；退出只清理本应用拥有的 key，除非产品明确要求，避免直接 `clearStorageSync()` 清空其他模块数据。
- 登录页先判断已有会话还是先清会话必须二选一，不要出现先 logout 再判断 isLogin 的不可达分支。
- 账号、租户或组织切换后清理权限、菜单、业务缓存和在途请求，防止跨身份串数据。

## 选择并维护请求层

先为每套请求 client 建表：调用域、base URL、认证 header、租户 header、请求/响应类型、错误语义、取消 key、重试策略和上传差异。

- 在既有业务域内沿用当前 client 做窄改动；新代码优先收敛到主 client，不要无理由新增第三套封装。
- 统一成功响应和业务错误的边界，避免页面同时处理 HTTP status、`code`、`ok` 和多种嵌套 data。
- 认证、租户、终端类型和追踪 header 在拦截器集中添加；上传请求也要覆盖同一策略。
- 只对幂等或明确允许的请求重试。POST、支付、下单等写操作默认不自动重放。
- 重复请求取消 key 至少考虑 method、规范化 URL 和业务需要；若包含 params/body，不要把敏感字段写进日志。
- 用 `finally` 闭合 loading、请求计数和取消注册；区分用户主动 abort、超时、离线和后端错误。
- 给新 endpoint 和响应补局部 interface，避免扩散 `any` 或污染全局 `Error`。

## 维护状态持久化与全局能力

- 先确认项目使用 Pinia、Vuex 还是自研 store，再沿现有插件安装顺序扩展。
- 持久化配置只保存恢复真正需要的字段；菜单、权限、临时请求结果等易过期数据应有版本、TTL 或登录边界清理。
- store 不要依赖只能在组件 setup 期间工作的 `getCurrentInstance()`；基础能力优先显式 import 或依赖注入。
- 维护已有 `globalProperties` 时同步 TypeScript module augmentation；新模块优先显式 import，避免扩大隐式依赖。
- 只有在生产式构建确实丢模块时才添加保活注册表。优先检查动态 import、sideEffects、聚合导出和真实引用，不要把所有 API 机械加入“防 tree-shaking”文件。

## 安全维护 WebView 与 OAuth

- 先明确 WebView 是同域 H5、受信任多域还是任意外链；使用 allowlist 校验 scheme、host 和内部 path。
- 需要中转 token 时使用当前状态源重建凭证，不信任入口 URL 中携带的旧 token。
- 对整个嵌套 URL 和每个 query 键值分别采用正确编码；特殊字符、空值、重复 key、数组和中文必须有测试。
- 优先使用项目已验证的 query 库；自研 stringify/parse 必须定义编码、数组、空值和异常输入语义。
- token 放在 query 只能作为既有兼容约束；不要持久化最终认证 URL，不要记录完整 URL、header、OAuth code 或 token。
- 无 token、过期、域名不允许和解码失败时给出明确回退，避免空白 WebView。
- H5 OAuth 与 JS-SDK 签名 URL 要区分 Android/iOS、history/hash、首次进入 URL 和热更新后的地址。

## 处理跨端差异

- 浏览器对象、公众号 SDK、原生 App bridge 和小程序 API 都放在对应条件编译或运行时守卫内。
- 不要用 H5 成功证明小程序请求、storage、文件上传或 WebView 行为正确。
- 环境变量只在构建期允许的方式读取；不要把完整 env 对象输出到控制台。
- 多端 base URL、代理和微服务路径适配必须形成可测试的纯函数或集中配置。

## 文档与交付

- 面向项目所有者的 constitution、spec、plan、tasks、checklist、README、手册、prompt 模板说明、metadata 说明和人工评审记录使用中文主文。
- 命令、路径、文件名、代码标识符、JSON key、API 字段、模型名和第三方专有术语保留英文，避免为翻译牺牲准确性。
- 引用英文资料时给出中文结论摘要；只有英文主文能显著降低工具误解时才使用英文，并同时补充中文解释。

## 边界

- 页面注册、插件壳层、manifest 和构建发布归 `huabing-mini-vue3-app-shell`。
- 首页统计卡片、刷新编排与权限展示归 `huabing-mini-vue3-home-dashboard`。
- Vue 2 uni-app 项目应使用独立的 `huabing-mini-vue2-*` 系列，不要套用 Vue 3 store、插件安装或类型增强方式。
- 先遵守目标仓库现有 spec；迁移请求层、存储 key 或认证协议属于架构变更，先给出计划与兼容策略。

## 验证

- 运行目标仓库 lint、typecheck 和相关单测，并检查自动修复 diff。
- 至少构建主要小程序端；涉及 H5/OAuth/WebView 时额外验证 H5 生产式构建。
- 手测登录、退出、冷启动恢复、token 过期、租户切换、并发同 endpoint、取消、超时、上传和 WebView 异常回退。
- 检索日志和产物，确认没有 token、认证 URL、OAuth code、真实环境值或租户私有数据。
