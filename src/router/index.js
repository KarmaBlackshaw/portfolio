import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const lazyLoad = name => () => {
  const [folder, componentName] = name.split('/')
  return import(/* webpackChunkName: "[request]" */ `@/views/${folder}/${componentName}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: lazyLoad('home/Home')
  },
  {
    path: '/about',
    name: 'about',
    component: lazyLoad('about/About')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: lazyLoad('portfolio/Portfolio')
  },
  {
    path: '/resume',
    name: 'resume',
    component: lazyLoad('resume/Resume')
  },
  {
    path: '/contact',
    name: 'contact',
    component: lazyLoad('contact/Contact')
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
