---
name: huabing-mini-vue2-auth-user-flow
description: 通用 UniApp + Vue 2 登录与用户会话技能。用于微信/支付宝/其他平台登录、注册、手机号或隐私授权、协议确认、邀请参数、token/refreshToken、单次刷新、登录弹层回调、未登录拦截、用户信息恢复和注销清理；不依赖特定 endpoint 或组件名。
---

# UniApp Vue 2 登录与用户会话

## 先画状态机

至少区分：

- `anonymous`：未登录。
- `authorizing`：正在获取平台 code/授权信息。
- `registerRequired`：需要协议、手机号或资料。
- `authenticated`：token 有效。
- `refreshing`：刷新 token，其他请求等待同一 Promise。
- `expired`：刷新失败，需要重新登录。

UI 文案可以不同，但状态转换、可取消点和失败回退必须明确。

## 平台授权边界

- 平台 code、手机号授权、隐私 API 和回调结构使用条件编译或 provider adapter。
- 不假设事件一定含 `detail`，先按目标 UniApp/平台版本校验返回结构。
- 页面不直接调用注册 endpoint；统一由 auth service/store 编排 provider 参数。
- 登录 popup 只收集授权和发出结果，不耦合购物车、订单或活动页面。
- 登录成功后由原触发页根据 reason/continuation 刷新业务，不在登录组件写页面分支。

## Token 契约

- token 注入只在请求 client/interceptor 完成，业务页面不拼 Authorization。
- access token、refresh token、过期时间和用户摘要由单一会话状态源管理，再同步到项目既有 storage。
- 刷新使用 single-flight，刷新请求本身禁止再次触发刷新；失败后清理会话并拒绝等待队列。
- 冷启动恢复先校验 schema、过期时间和用户隔离，再标记 authenticated。
- 注销同时停止 socket/timer、清理用户级 Store 和敏感缓存，不只删除 token 字符串。

## 注册、协议与邀请

- 协议勾选、手机号授权和资料校验在正式提交时再次验证，不能只依赖按钮 disabled。
- 邀请/渠道参数先归一化并设置允许字段白名单，登录完成后按后端契约消费一次。
- 授权拒绝、隐私不同意和用户主动关闭属于可预期结果，不显示为系统异常。
- 错误日志脱敏，不记录 token、完整手机号、授权密文、身份证或密码。

## 未登录业务入口

- 通过统一 `ensureAuthenticated({ reason, continuation })` 或等价能力拉起登录。
- 登录取消后恢复原按钮、popup 和 loading；不要留下半提交状态。
- 同一页面多次点击只允许一个登录流程，后续调用复用结果或明确拒绝。
- 登录前产生的匿名业务数据是否迁移，交给对应业务域以幂等方式处理。

## 验证

- 各目标平台：已注册、未注册、拒绝授权、隐私未同意、平台 API 失败。
- Token：正常请求、并发过期、刷新成功、刷新失败、冷启动恢复、注销清理。
- 页面：登录成功后继续原动作，取消后状态恢复，返回/卸载不触发过期回调。
- 安全：storage、日志、埋点和错误上报中没有敏感明文。
