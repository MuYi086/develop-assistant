# 来源映射

## 当前源码路径

- 基础请求：`src/utils/common/basicHttp.js`
- 授权请求：`src/utils/authHttp.js`
- 请求拦截：`src/utils/interceptRequest.js`
- 公共工具和 `postData`：`src/utils/util.js`
- API 汇总：`src/utils/api/index.js`
- API 模块目录：`src/utils/api/`
- Vuex 入口：`src/store/index.js`
- Getter 汇总：`src/store/getters.js`
- Store 模块目录：`src/store/modules/`
- 运行时配置和持久化白名单：`src/utils/config.js`
- Storage 包装：`src/utils/storage.js`

## 代表性模块

- 点餐：`src/store/modules/shop.js`
- 确认订单：`src/store/modules/orderConfirm.js`
- 烹饪：`src/store/modules/cook.js`
- 钱包：`src/store/modules/wallet.js`
- 用户：`src/store/modules/user.js`
- reset 工具：`src/utils/common/publicUtil.js` 的 `storeModuleReset`

## 请求链路边界

- `basicHttp.js` 负责 Promise 化 `uni.request`、abort、loading 和拦截入口。
- `authHttp.js` 负责 token、版本头、支付宝 `clientId` 和 content type。
- `util.js` 的 `postData` 负责 callback 风格、`code === 0`、toast 和登录异常处理。
- `postDataPromise` 常用于 Vuex action。
- `api/*.js` 只维护 endpoint 常量，`api/index.js` 手动 import 和合并。

## 常用定位

- 查 API 常量：`rg -n 'export const|module.exports|/wxminiapp|/wxApp' src/utils/api`
- 查 API 汇总：`rg -n 'api_|Object.assign|\\.\\.\\.' src/utils/api/index.js`
- 查请求封装：`rg -n 'postDataPromise|postData\\(|errorFunction|renderClientAuthHeader' src/utils`
- 查持久化白名单：`rg -n 'vuexStorePath|persistedstate|reducer' src/utils/config.js src/store/index.js`
- 查 store reset：`rg -n 'storeModuleReset|recoverState|initState' src/store/modules src/utils`

## 维护要点

- H5 和小程序 API 前缀处理不同，新增接口时先确认运行平台行为。
- 登录和未登录 endpoint 如果后端成对提供，要显式保留两套命名。
- `interceptRequest.js` 同时承担 inner 本地 mock 和失败请求上报，改请求结构时要确认日志仍能上传。
- 新增跨组件状态时同步 `src/store/getters.js`；只有必须跨重启保留的数据才加入 `config.vuexStorePath`。
- 持久化大对象会增加小程序 storage 风险，优先使用 `src/store/index.js` 的 reducer 思路保留必要字段。
