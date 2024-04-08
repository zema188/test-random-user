import Vue from 'vue'
import Vuex from 'vuex'
import { getData } from '@/services/api';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {},
  },

  getters: {

    users: (state) => {
      return state.data.results
    },

    seed: (state) => {
      return state.data.info.seed
    },

  },

  mutations: {

    setData (state, payload) {
      state.data = { ...payload }
    }

  },

  actions: {

    async setData ({ commit }) {
      try {
        
        const data = await getData()
        commit('setData', data)

      } catch(err) {
        console.error(err)
      }
    }

  },
})
