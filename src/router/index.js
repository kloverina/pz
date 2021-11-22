import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)



const routes = [

  {
    path: '/',
    name: 'PZ',
    component: () => import('@/views/MainPage')
  },
  {
    path: '/Edit',
    name: 'Edit',
    component: () => import('@/views/Edit')
  },
  {
    path: '/Input',
    name: 'Input',
    component: () => import('@/views/Input')
  },

  {
    //не работает в случае, когда id в пути /edit/:id несущесвует
    path: '/*',
    name: 'Page Not Found',
    component: () => import('@/views/PageNotFound')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: 'active'
})

export default router
