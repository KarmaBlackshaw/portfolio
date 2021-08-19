import Vue from './config/Vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './main.scss'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
