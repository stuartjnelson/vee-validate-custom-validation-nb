import Vue from 'vue'
import Vuex from 'vuex'
import Form from '@/store/modules/form.js'

// Plugins
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

// Setting up local storage
const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

export default new Vuex.Store({
  modules: [
      Form
  ],
  plugins: [vuexLocal.plugin]
})
