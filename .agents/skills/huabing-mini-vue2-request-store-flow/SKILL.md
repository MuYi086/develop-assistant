---
name: huabing-mini-vue2-request-store-flow
description: "话饼请求、API、Vuex 状态流技能。用于新增或修改接口常量、api/index.js 聚合、basicHttp/authHttp/util.postData 请求链路、登录和未登录接口对、请求头、错误处理、本地拦截上报、Vuex module/action/getter、持久化白名单和 storage 行为。"
---

# 话饼请求与状态流

## 四层请求链路

按既有链路处理，不在业务页重复封装基础请求：

1. `src/utils/common/basicHttp.js`
   - Promise 化 `uni.request`。
   - 维护请求任务，用于 `abortAllRequest`。
   - 管理导航栏 loading 和下拉刷新结束。
   - 请求前和失败时调用 `interceptRequest.start()`。

2. `src/utils/authHttp.js`
   - 构造请求头。
   - 注入 bearer token、mini version、支付宝 `clientId`。
   - 按请求类型选择 JSON 或 form content type。

3. `src/utils/util.js`
   - `postData` 负责 callback 请求、`code === 0` 判断和错误分发。
   - `postDataPromise` 供 Vuex action 使用。
   - `errorFunction` 统一处理 toast、登录异常和业务失败。

4. `src/store/modules/*.js`
   - 页面发起的数据请求通常通过 Vuex action。

## 新增接口

1. 在对应 `src/utils/api/api_*.js` 只添加接口路径常量。
2. 在 `src/utils/api/index.js` 手动 import 该 API 文件。
3. 将新模块展开合并进导出的 `api` 对象。
4. 登录和未登录接口如果后端成对提供，要同时评估并保持显式命名。
5. 记住小程序端在 `api/index.js` 模块加载时拼接 `config.apiUrl`，H5 行为不同，不要混用。

## Vuex 模块模式

保持本项目常见结构：

```js
const util = require('@/utils/util')

const initState = {
  domainValue: {}
}

const state = {
  ...initState
}

const mutations = {
  SET_DOMAINVALUE: (state, domainValue) => {
    state.domainValue = domainValue
  }
}

const actions = {
  doGetDomainValue({ commit }, requestParams) {
    return new Promise((resolve, reject) => {
      util.postDataPromise(requestParams).then(res => {
        commit('SET_DOMAINVALUE', res.data)
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
```

页面只需要结果、不需要写 store 时，可以直接 `return util.postDataPromise(requestParams)`。

## Action 约定

- action 名沿用 `do...` 风格。
- action 内做后端数据归一化，再 commit。
- mutation 使用 `SET_*` 命名，页面不要直接改模块内部结构。
- 静默刷新、轮询、价格预取等场景传 `isShowLoading=false`。
- 页面需要自定义错误弹窗或恢复逻辑时传 `isToastError=false`。
- 需要多个请求首屏并发时，让 action 返回 Promise，页面用 `Promise.all` 编排。

## 鉴权和请求头

- 不在新代码里硬编码 token、私钥、Basic auth 字符串或 app secret。
- 普通授权请求走 `authHttp`。
- 需要客户端鉴权头时复用 `util.renderClientAuthHeader()` 或周边既有模式。
- token、refreshToken 通过 store getter 或 `storage` 包装读取，不散落原始 key。
- 不破坏 `checkTokenExpire`、`miniProgramOauthCheckToken`、`miniProgramRefreshToken` 的续签链路。

## 错误和拦截

- 通用 HTTP 和业务错误留在 `util.errorFunction`。
- 预期业务失败由页面处理时关闭默认 toast，并在 fail 分支恢复按钮状态或弹窗状态。
- abort 的请求不显示错误。
- `interceptRequest.js` 负责 inner 本地 mock、inner/preProd/prod 错误上报；调整请求结构时确认日志链路仍可用。

## Getter 和持久化

- 页面大量使用 `mapGetters`，新增跨组件状态时同步 `src/store/getters.js`。
- getter 命名保持领域前缀，例如 `shopCartPriceInfo`、`orderConfirmPriceInfo`、`walletOrderConfirmChoosedPayMethod`。
- 只有确实需要跨启动保留的数据才加入 `config.vuexStorePath`。
- 只持久化少数字段时优先使用 `src/store/index.js` 里的 reducer 思路，不直接持久化大对象。
- storage 操作优先通过 `src/utils/storage.js`。

## 验证

- 接口变更检查登录和未登录分支。
- 请求头变更检查微信、支付宝和 H5。
- 持久化变更检查 storage 大小和页面返回后的旧状态。
- 请求层变更检查本地拦截和错误上报。

## 参考文件

- `src/utils/common/basicHttp.js`
- `src/utils/authHttp.js`
- `src/utils/interceptRequest.js`
- `src/utils/api/index.js`
- `src/utils/util.js`
- `src/store/index.js`
- `src/store/modules/orderConfirm.js`
- `src/store/modules/shop.js`
- `src/store/modules/cook.js`
- `src/store/modules/wallet.js`
