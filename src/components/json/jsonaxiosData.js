let axiosData=`
// 注释------------，特殊字符（美元符号）无法识别，用（￥）替换了，用的时候换掉
import axios from "axios";
import router from "./router";
import Element from "element-ui"
import core from "./utils/core";
const ignoreAuthApis = ["get@/captcha"] //需要过滤的接口
axios.defaults.baseURL = process.env.VUE_APP_HTTP_PROXY_TARGET   //请求后台地址
const request = axios.create({
    timeout: 2000000,
    headers: {
        'Content-Type': "application/json; charset=utf-8"
    }
})
const cores = new core()
request.interceptors.request.use(config => {
    const {url, method} = config;
    const pathName = cores.getPathName(url);
    if (!cores.checkApiIsIgnore(ignoreAuthApis, pathName, method)) {
        config.headers['Authorization'] = localStorage.getItem("token")
    }
    return config
})

request.interceptors.response.use(
    response => {
        // console.log("response ->" + response)

        let res = response.data
        if (res.code === 200) {
            return response
        } else {
            Element.Message.error(!res.msg ? '系统异常' : res.msg)
            return Promise.reject(response.data.msg)
        }
    },
    error => {

        console.log(error)

        if (error.response.data) {
            error.massage = error.response.data.msg
        }

        if (error.response.status === 401) {
            router.push("/login")
        }

        Element.Message.error(error.massage, {duration: 3000})
        return Promise.reject(error)
    }
)
export default request
//core文件
// export default class core{
//   constructor() {
//   }
//   checkApiIsIgnore(ignoreApis, api, method) {
//       let isIgnore = false;
//       for (let reg of ignoreApis) {
//           const curReg = new RegExp(reg.replace(/\//g, '\\/').replace(/\:+/g, '\\'));
//           if (curReg.test('￥{method.toLowerCase()}@￥{api}')) {
//               isIgnore = true;
//               break;
//           }
//       }
//       return isIgnore;
//   }
//   // 获取路径
//   getPathName(url) {
//       const index = url.indexOf('?');
//       if (index >= 0) return url.substr(0, index);
//       return url;
//   }
// }



`
export default{
  axiosData
}