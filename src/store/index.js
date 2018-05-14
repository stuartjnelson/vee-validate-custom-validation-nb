import Vue from 'vue'
import Vuex from 'vuex'
import Form from '@/store/modules/form.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: [
      Form
  ]
})
