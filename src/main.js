import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate, {
    // config options if you'd like them
    delay: 500
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
