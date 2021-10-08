import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const lazyLoad = name => () => import(/* webpackChunkName: "[request]" */ `@/views/${name}.vue`)

const routes = [
  {
    path: '/',
    name: 'home',
    component: lazyLoad('Home')
  },
  {
    path: '/about',
    name: 'about',
    component: lazyLoad('About')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: lazyLoad('Portfolio')
  },
  {
    path: '/resume',
    name: 'resume',
    component: lazyLoad('Resume')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// handles Navigation Duplicate
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
