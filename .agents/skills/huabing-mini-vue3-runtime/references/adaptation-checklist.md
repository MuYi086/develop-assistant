# Vue3 uni-app 运行时适配清单

## 认证与状态盘点

记录每个状态的事实源、持久化位置、写入者、读取者和清理边界：

| 状态 | 事实源 | 持久化 | 注入位置 | 清理时机 |
| --- | --- | --- | --- | --- |
| access token | 待确认 | key/插件待确认 | Authorization/query | 退出、失效 |
| refresh token | 待确认 | key 待确认 | 刷新请求 | 退出、轮换 |
| 用户信息 | 待确认 | 通常不长期持久化 | store | 账号切换 |
| 租户/组织 | 待确认 | key 待确认 | header/query | 租户切换 |
| 权限/菜单 | 后端响应 | 可选且需过期策略 | UI/路由 | 登录与租户边界 |

如果同一状态出现多个 key，先判断是兼容、迁移还是缺陷，不要直接删任一份。

## 请求 client 盘点

为每个 client 回答：

- 哪些 API 目录和业务域在使用？
- H5、小程序和 App 的 base URL 如何生成？
- token、租户、客户端类型和 content-type 在哪里添加？
- 成功时返回 response、response.data 还是业务 data？
- 401、403、424、500、超时和业务 code 如何映射？
- 是否支持上传、下载、取消、重试和刷新 token？
- 重复请求 key 是否会误杀不同参数请求？
- loading 和请求计数是否一定闭合？

迁移前先建立调用方清单和响应契约测试，避免一次替换所有 client。

## WebView 安全检查

- scheme 仅允许 `https` 或明确受控协议。
- host/path 符合 allowlist，不接受任意重定向。
- 嵌套 URL 先整体 encode，目标页再 decode 一次。
- query 库对空值、中文、`&`、`=`、逗号、数组和重复 key 有明确语义。
- 使用当前 token 覆盖旧 token，不把 URL 参数反写进状态源。
- 日志、埋点、错误上报和剪贴板不包含认证 URL。
- token 缺失、解码失败、域名拒绝和页面加载失败都有回退 UI。

## 跨端验证矩阵

| 场景 | 主要小程序端 | H5/公众号 | App（若支持） |
| --- | --- | --- | --- |
| 冷启动恢复 | storage + store | storage + OAuth | storage + bridge |
| 请求 header | 必测 | 代理后必测 | 直连必测 |
| 上传/下载 | 平台 API | 浏览器限制 | 权限与路径 |
| WebView | 小程序容器 | 普通路由或 iframe | 原生容器 |
| 退出清理 | owned keys | OAuth 状态 | bridge 状态 |

不要把某个平台的 mock 测试结果外推为全端结论。
