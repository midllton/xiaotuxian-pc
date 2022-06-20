import { createStore } from 'vuex'

const moduleA = { // 默认的模块，state 区分模块，其他 getters mutations actions 都在全局
  state: {
    name: 'moduleA'
  },
  getters: {
    updateName (state) {
      state.name = 'AAAAA'
    }
  }
}

const moduleB = {
  namespaced: true, // 带命名空间 namespaced: true 的模块，所有功能区分模块，更高封装度和复用
  state: {
    name: 'moduleB'
  },
  getters: {
    updateName (state) {
      state.name = 'BBBBB'
    }
  }
}

export default createStore({
  // vue2.0 创建仓库 new Vuex.Store({})
  // vue3.0 创建仓库 createStore({})
  state: {
    username: 'lili'
  },
  getters: {
    newName (state) {
      return state.username + '!!!!'
    }
  },
  mutations: {
    updateName (state) {
      state.username = 'ss'
    }
  },
  actions: {
    updateAsync (ctx) {
      setTimeout(() => {
        ctx.commit('updateName')
      }, 1000)
    }
  },
  modules: {
    moduleA,
    moduleB
  }
})
