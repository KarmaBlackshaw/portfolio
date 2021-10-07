import Vue from './config/Vue'
import App from './App.vue'
import router from './router'
import store from './store'

// libs
import AOS from 'aos'

import '@/main.scss'
import 'aos/dist/aos.css' // You can also use <link> for styles

AOS.init()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
