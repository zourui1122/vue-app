import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curMenu: {
      name: '剧集',
      bgColor: 'rgb(102, 112, 207)'
    }
  },
  mutations: {
    setCurMenu(state, menu) {
      state.curMenu = menu;
    }
  },
  actions: {
  },
  modules: {
  }
})
