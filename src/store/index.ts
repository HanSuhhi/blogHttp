import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articleTitle: '',
  },
  mutations: {
    changeTitle(state, title: string) {
      state.articleTitle = title
    }
  },
  actions: {
  },
  modules: {
  }
})
