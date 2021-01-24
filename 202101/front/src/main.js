import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate, { Validator } from 'vee-validate'

import './local/index'
import axios from 'axios'
Vue.use(VeeValidate);

const validator = new Validator();
validator.localize('zh-CN');

Vue.config.productionTip = false

// 设置axios的请求域名
axios.defaults.baseURL = 
process.env.NODE_ENV !== 'production' 
? 'http://localhost:3000' 
: 'http://your.domain.com'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
