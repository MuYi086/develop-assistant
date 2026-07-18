---
name: huabing-web-vue2-request-store-flow
description: "通用 Vue 2 PC 管理端请求与 Vuex 3 状态链路规范。用于任意 Vue 2 Web 项目新增或修改 API 模块、Axios 类请求封装、拦截器、Vuex module/action/mutation/getter、状态持久化，以及页面 mapGetters、dispatch、commit 数据流时，按宿主契约选择最小状态层并保证异常可传播。"
---

# 话饼 Web Vue2 请求状态流

## 开始前

1. 读取 `references/request-store-patterns.md`。
2. 从目标页面反查请求实例、API 模块、store 注册方式、getter 和持久化配置，避免创建重复层。
3. 确认请求方法、序列化方式、响应体层级、错误契约和数据共享范围。

## 决策

- 仅当前页面使用且无需跨组件缓存：页面调用领域 API。
- 多个组件或页面共享，并需要统一缓存、loading 或刷新：使用 Vuex module。
- 认证、租户、追踪标识、序列化和统一错误：放入请求基础设施，不散落业务页。
- 只持久化刷新后仍有意义且不敏感的状态；token、临时表单、请求 loading 和大列表默认不持久化。

## 实施流程

1. 在宿主项目既有 API 目录中定义单一职责函数；沿用现有请求实例、函数命名与响应解包约定。
2. 按请求封装契约区分 query 与 body；仅在接口要求时设置序列化、文件响应或自定义 header。
3. 需要 Vuex 时先定义最小 state，再实现同步 mutation 与异步 action，并按宿主项目选择 namespaced 或全局命名。
4. action 负责编排共享请求和状态；失败时恢复 loading 并继续抛出错误，让调用方决定交互。
5. 页面读取共享状态、派发异步动作，只对明确的同步本地状态执行 commit。
6. 页面离开时只重置会污染下次进入且没有其他消费者的临时状态。

## 约束

- mutation 保持同步；归一化时创建必要副本，不错误修改 API 入参、prop 或 getter 返回值。
- 不重复包装请求库已返回的 Promise；组合请求或兼容旧契约时才增加一层编排。
- 不吞异常，也不让页面提示与全局拦截器重复轰炸用户。
- 新增非 namespaced action/mutation 前全局搜索冲突；已有 namespaced 模块不得绕过命名空间。
- 不把 token、账号、Webhook、主机信息或私有数据写入源码、日志、持久化存储或 Skill。
- 修改拦截器时回归认证跳过、租户/追踪 header、参数序列化、登录过期、取消请求和网络错误。

## 验证

1. 逐层核对：页面参数 → API 配置 → action → mutation → getter → 渲染。
2. 覆盖成功、业务错误、HTTP 错误、网络错误、取消、重复查询、空列表和分页切换。
3. 检查 loading 全路径收口、响应层级正确、旧响应不会覆盖新查询。
4. 运行宿主项目的定向 lint/测试并审查 diff；构建前确认 package script 无 deploy、push、notify 或 release 副作用。
