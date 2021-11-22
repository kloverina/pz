import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/index.js'
import styles from '../src/stylesheets/index.scss'

Vue.config.productionTip = false



new Vue({
  router,
  data: {
    ip: process.env.NODE_ENV === 'production' ? '' : 'http://127.0.0.1:80', // Dev: http://127.0.0.1:80
    selectedVideoType: 0
  },
  render: (h) => h(App)
}).$mount('#app')
