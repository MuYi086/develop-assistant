# Vuex 模块模式

## 基础结构

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
  doGetDomainValue ({ commit }, requestParams) {
    return new Promise((resolve, reject) => {
      util.postDataPromise(requestParams).then(res => {
        commit('SET_DOMAINVALUE', res.data)
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  reset ({ commit }) {
    return util.storeModuleReset(state, initState, commit, mutations)
  },
  recover ({ commit }, recoverState) {
    return util.storeModuleReset(state, recoverState)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
```

## Reset 模式

- 多数模块通过 `util.storeModuleReset(state, initState, commit, mutations)` 或 `util.storeModuleReset(state, recoverState)` 恢复状态。
- `storeModuleReset` 定义在 `src/utils/common/publicUtil.js`，由 `src/utils/util.js` 汇出。
- 新增模块如需页面离开后清状态，优先沿用 reset mutation/action，不在页面散落大段赋空对象。

## Getter 模式

- 跨页面或跨组件消费的状态同步写入 `src/store/getters.js`。
- getter 命名保留领域前缀，例如 `shopCartPriceInfo`、`orderConfirmPriceInfo`、`walletOrderConfirmChoosedPayMethod`。
- 只在单页内部使用的状态，不必为了形式新增 getter。
