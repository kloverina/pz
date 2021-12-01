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
    path: '/from-file',
    name: 'Input from file',
    component: () => import('@/views/FromFile')
  },

  {
    path: '/table-bipolar-transistors',
    name: 'Bipolar transistors',
    component: () => import('@/views/Table_bt')
  },
  {
    path: '/table-unipolar-transistors',
    name: 'Unipolar transistors',
    component: () => import('@/views/Table2_ut')
  },
  {
    path: '/table-operational-amplifiers',
    name: 'Operational amplifiers',
    component: () => import('@/views/Table3_ob')
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
