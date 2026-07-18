# 来源映射

## 当前源码路径

- 登录弹层：`src/components/hb-login/hb-login.vue`
- 用户状态：`src/store/modules/user.js`
- 登录 API：`src/utils/api/api_login.js`
- 用户和 token API：`src/utils/api/api_user.js`
- 授权请求头：`src/utils/authHttp.js`
- 存储包装：`src/utils/storage.js`
- 公共登录/续签工具：`src/utils/util.js`
- 首页隐私入口：`src/pages/home/home.vue`
- 协议页：`src/pagesB/agreement/`
- 个人信息：`src/pagesJ/personInfo/`

## 目标提交证据

筛选口径：committer 为 `ougege` 或 `muyi086`，且邮箱为 `1258947325@qq.com`。

- `4e67a3a6e`（2024-09-12）：增加 token 续签流程。
- `484c6f8cb`（2024-09-12）：增加 refreshToken 存储。
- `5ee5b6a3b`（2024-08-13）：支付宝请求追加 `clientId`。
- `93451385c`（2025-08-19）：登录组件增加注册错误上报。
- `e0eb65285`（2025-09-06）：兼容 uni-app 微信授权返回没有 `e.detail`。
- `a8e0c1481`（2025-09-06）：修复授权上报获取页面栈。
- `88d982f03`（2026-01-15）：修复并整理 `authHttp`。

## 维护要点

- `hb-login` 同时承担登录、注册、手机号授权、协议确认和邀请关系传递，修改时按状态机检查完整链路。
- token 同时存在于 Vuex、storage 和运行时 config，mutation 是同步入口。
- 登录/未登录接口选择属于业务页面职责；鉴权 header 属于 `authHttp` 职责。
- 微信和支付宝 code、授权回调、注册 endpoint 不同，必须保留平台分支。

## 常用定位

```bash
rg -n "popupShow|checkUserRegister|doLogin|doRegister|handleGetPhoneNumber" src/components/hb-login
rg -n "SET_TOKEN|SET_REFRESHTOKEN|refreshToken|checkTokenExpire" src/store src/utils
rg -n "checkToken\(|hb-login|dialog-privacy|getPrivacySetting" src --glob "*.vue"
```
