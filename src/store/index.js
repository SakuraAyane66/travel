import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '重庆'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {

}
export default new Vuex.Store({
  state: {
    city: defaultCity,
    fullwhite: false
  },
  actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    },
    changeFullwhite (clo) {
      clo.commit('changeFullwhite')
    }
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (e) {}
    },
    changeFullwhite (state) {
      state.fullwhite = !state.fullwhite
    }
  }
})
