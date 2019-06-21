import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 全局引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 图片懒加载
// import Lazyload from 'vue-lazyload'
// Vue.use(Lazyload,{
//   error: '/favicon.ico',
//   loading: require('../loading.gif'),
//   attempt: 1
// })

Vue.config.productionTip = false
//axios
import Axios from 'utils/axios'
Vue.prototype.$axios=Axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
