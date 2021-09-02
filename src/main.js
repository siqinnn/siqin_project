import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './mock/mock.js'
import axios from 'axios'
import '../config/axios'
import VueClipboard from "vue-clipboard2";
Vue.use(VueClipboard)
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts
// 将axios挂载到Vue实例,在组件中可以直接使用
Vue.prototype.$axios = axios
// const originalPush = router.prototype.push
// router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  // axios,
  render: h => h(App)
}).$mount('#app')