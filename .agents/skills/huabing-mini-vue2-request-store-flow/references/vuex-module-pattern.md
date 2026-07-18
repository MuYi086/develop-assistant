# Vuex 3 模块参考

先沿用目标项目的 module 注册、导入语法和请求客户端。下面只展示职责，不规定文件路径或命名风格。

```js
import requestClient from '@/services/request-client'

const createInitialState = () => ({
  detail: null,
  status: 'idle',
  error: null
})

const state = createInitialState()

const getters = {
  isReady: state => state.status === 'success' && Boolean(state.detail)
}

const mutations = {
  SET_STATUS (state, status) {
    state.status = status
  },
  SET_DETAIL (state, detail) {
    state.detail = detail
  },
  SET_ERROR (state, error) {
    state.error = error
  },
  RESET_STATE (state) {
    Object.assign(state, createInitialState())
  }
}

const actions = {
  async fetchDetail ({ commit }, params) {
    commit('SET_STATUS', 'loading')
    commit('SET_ERROR', null)
    try {
      const response = await requestClient.getDetail(params)
      const detail = normalizeDetail(response)
      commit('SET_DETAIL', detail)
      commit('SET_STATUS', 'success')
      return detail
    } catch (error) {
      commit('SET_ERROR', error)
      commit('SET_STATUS', 'error')
      throw error
    }
  },
  reset ({ commit }) {
    commit('RESET_STATE')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
```

注意：

- `normalizeDetail` 是纯函数，放在领域 adapter 或 util 中。
- action 不再额外包一层无意义的 `new Promise`。
- `RESET_STATE` 每次调用工厂函数，避免复用嵌套对象引用。
- 如果目标项目由根 getter 汇总模块状态，按现有注册方式同步；否则优先模块局部 getter。
