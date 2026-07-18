# 请求与 Vuex 3 通用模式

## 先识别宿主契约

定位请求入口和一个同域完整样例，确认：

- 请求实例从哪里导入；
- GET/POST 参数如何传递，数组和表单如何序列化；
- 拦截器返回完整 response 还是业务 data；
- 业务错误是 resolve 还是 reject；
- Vuex 是否 namespaced，模块如何注册，页面如何读取；
- 哪些状态被持久化，以及清理登录态的责任边界。

以下代码仅表达职责，不规定路径或响应层级：

```js
import request from '@/api/request'

export function executeDomainAction(payload) {
  return request({
    url: '/domain/action',
    method: 'post',
    data: payload
  })
}
```

## API 层

- 一个函数表达一个后端动作，函数名和注释描述业务语义。
- API 层负责 URL、method、params/data、header 和 responseType，不持有页面状态。
- 响应解包只做一次；先确认请求拦截器是否已经返回业务 data。
- 上传交给浏览器生成 multipart boundary；下载同时验证 Content-Type、文件名与错误响应。

## 拦截器责任

| 能力 | 验证点 |
| --- | --- |
| 认证 | 可按请求配置跳过；过期只触发一次退出流程 |
| 租户/追踪 | 仅在有值且目标域允许时注入 |
| 参数序列化 | GET 数组、POST 表单与 JSON 契约一致 |
| 进度条/loading | 成功、失败和取消都结束 |
| 业务错误 | 调用方能感知，不产生重复提示 |
| 请求取消 | 取消不伪装成业务失败，旧请求不回写 |

## Vuex 3 模块

```text
store/modules/<domain>.js
  state      跨组件共享的最小状态
  getters    可复用派生状态
  mutations  同步更新和必要归一化
  actions    异步请求与流程编排
store/index  注册模块
```

- 查询条件通常由页面持有；只有多页面确需共享时才进入 store。
- 列表状态可拆为 `records`、`total`、`loading` 和必要的缓存时间。
- action 可直接返回 API Promise；多次提交 mutation 时优先 `async/await` 与 `try/finally`。
- 若模块 namespaced，页面使用完整命名空间；若不 namespaced，action/mutation 名必须全局唯一。
- 高频、页面私有且存在竞态的数据可让 action 返回，页面通过 revision/latest-wins 决定是否接纳，避免旧响应 commit 覆盖新状态。

## 持久化决策

新增持久化项前回答：

1. 刷新后是否必须保留？
2. 是否包含认证信息、个人数据或业务敏感内容？
3. 数据结构升级后如何迁移或失效？
4. 是否会因为账号、租户或环境切换产生串数据？

优先使用白名单并带版本；请求 loading、弹窗开关、未提交表单和大列表默认排除。

## 页面接入检查

- 查询条件变化时重置页码，分页 size/current 各只触发一次请求。
- 提交按钮防重复点击；失败保留可修正输入，成功刷新数据或导航。
- 并发查询使用取消、请求 ID 或 revision，保证最新意图获胜。
- 离开页面不清除其他消费者仍使用的共享状态。
- 测试至少覆盖成功、空数据、业务失败、HTTP 失败、网络失败与登录过期。
