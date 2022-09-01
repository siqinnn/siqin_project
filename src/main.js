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
import components from "./components/index"
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
Vue.use(VueClipboard)
Vue.use(html2Canvas)
Vue.use(JsPDF)
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts
    // 将axios挂载到Vue实例,在组件中可以直接使用
Vue.prototype.$axios = axios
    // const originalPush = router.prototype.push
    // router.prototype.push = function push(location) {
    //   return originalPush.call(this, location).catch(err => err)
    // }
Vue.config.productionTip = false
Vue.use(ElementUI)
    // Vue.use(html2Canvas)
    // Vue.use(JsPDF)
Vue.use(components)
new Vue({
    router,
    store,
    // axios,
    render: h => h(App)
}).$mount('#app')