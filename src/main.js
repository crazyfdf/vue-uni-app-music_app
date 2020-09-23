import Vue from 'vue'
import App from './App'
//引入vuex
import store from './store'
//把vuex定义成全局组件
Vue.prototype.$store = store
//把引入公共方法
import commonApi from '@/assets/content/commonApi'
Vue.prototype.$commonApi = commonApi
//Vue组件通信中eventBus
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  ...App,
  store,
})
app.$mount()