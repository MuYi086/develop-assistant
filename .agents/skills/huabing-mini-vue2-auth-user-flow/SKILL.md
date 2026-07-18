---
name: huabing-mini-vue2-auth-user-flow
description: 话饼 UniApp Vue 2 登录与用户状态技能。用于修改 hb-login、微信/支付宝登录注册、手机号授权、隐私协议、邀请码注册关系、token/refreshToken 存储与续签、登录弹层回调、未登录拦截、用户信息刷新和注销重置流程。
---

# 话饼登录与用户状态流

## 快速入口

处理登录、注册、隐私授权或 token 前，先读取：

- `src/components/hb-login/hb-login.vue`
- `src/store/modules/user.js`
- `src/utils/api/api_login.js`、`src/utils/api/api_user.js`
- `src/utils/authHttp.js`、`src/utils/storage.js`
- 触发登录的目标页面，以及 `src/pages/home/home.vue` 的隐私初始化

需要核对平台分支、邀请注册、token 续签或目标提交依据时，再读 `references/source-map.md`。

## 登录状态机

1. 父页面通过 `ref.init()` 或既有 `util.checkToken(this)` 拉起登录，不直接复制登录逻辑。
2. `hb-login` 打开前获取平台 code，再调用注册检查接口判断已注册/未注册。
3. 已注册用户调用 `authCustomTokenSocial`，成功后同时提交 `SET_TOKEN` 和 `SET_REFRESHTOKEN`。
4. 未注册用户先校验协议和手机号授权，再按平台调用微信或支付宝注册接口；注册成功后进入登录流程。
5. 关闭弹层时保持 `popupClose`、`popChange`、`resetCommit` 和父页面回调一致，避免旧 code、按钮禁用态或邀请参数残留。

## 平台分支

- 微信、支付宝授权按钮和回调使用现有条件编译与 `runEnv` 分支。
- 微信手机号授权回调不能假设一定存在 `e.detail`；兼容 uni-app 拉起授权的返回形态。
- 微信注册使用 `adminCustomRegister`，支付宝使用 `adminCustomAlipayRegister`，不要混用 code 或手机号字段。
- 支付宝请求头的 `clientId` 由 `authHttp` 注入，不在页面重复添加。
- 隐私授权优先沿用首页 `uni.getPrivacySetting` 与 `hb-dialog-privacy`；支付宝按现有路径继续定位初始化。

## Token 与用户状态

- token 和 refreshToken 通过 `user` store mutation 同步到 `config` 与 `storage`，不要只改其中一处。
- 普通请求由 `authHttp.getAccessToken()` 注入 bearer token；续签使用 refreshToken 链路，不在业务页手写 Authorization。
- 保留 `authOauthCheckToken`、`authOauthToken` 以及 `util.checkTokenExpire` 一类公共能力的职责边界。
- 用户信息写入 `userInfo`，跨页面消费通过 getter；退出或登录失败后使用现有 reset action 清理。
- 修改持久化时同时检查 `config.vuexStorePath` 和 `src/store/index.js`，禁止持久化授权临时 code、手机号解密数据或注册请求体。

## 邀请与页面恢复

- 邀请注册参数从 `inviteFriendsInviteObj` 读取，`invitedId`、`inviteCompanyId` 等缺省值显式归一为空字符串。
- 注册错误上报只发送排障所需字段；不得写入或输出 token、完整手机号、敏感授权数据。
- 登录成功后由原触发页刷新业务状态，不让 `hb-login` 直接耦合购物车、订单或活动页面。
- 订单列表、点餐、优惠券等未登录入口继续通过公共登录组件，不新增平行登录弹窗。

## 实现风格

- 页面/组件负责平台交互和流程编排；API 常量、Store 状态、HTTP header 各自留在现有层。
- 保持 Vue 2 Options API、`popupShow`/`popupClose`、Promise 返回和父子事件模式。
- 修复历史问题时保留当前父页面事件名，不顺手重命名全局登录事件。
- 优先做小范围兼容修复；不要为了统一风格重写成熟授权链路。

## 验证

- 微信：已注册登录、未注册手机号授权、拒绝授权、隐私协议未勾选。
- 支付宝：授权登录、注册、`clientId` 请求头和返回事件。
- 邀请：有/无 `invitedId`、`inviteCompanyId` 两类注册。
- Token：登录写入、冷启动恢复、过期续签、退出清理。
- 业务入口：登录成功后原页面刷新，取消登录后按钮和弹层状态恢复。
