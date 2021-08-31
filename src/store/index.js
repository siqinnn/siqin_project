import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tableData: localStorage.getItem('tableData') ? JSON.stringify(localStorage.getItem('tableData')) : null
  },
  getters: {
    gettableData(state) {
      return state.tableData
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})