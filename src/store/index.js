import Vue from 'vue'
import Vuex from 'vuex'
import layout from './modules/layout'

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
  },
  modules: {
    layout
  }
})
