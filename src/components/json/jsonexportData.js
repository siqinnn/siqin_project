let exportData=`
// 注释------------，特殊字符（美元符号）无法识别，用（￥）替换了，用的时候换掉
import { Message } from 'element-ui';
export default {
    install(Vue) {
        const MAP_ERROR_CODE = {
            500: '服务器异常, 请稍后重试',
            401: '令牌过期，请重新登陆',
            400: '资源访问异常'
        }
        const deepDataCopy = (data) => {
            let obj = {}
            for (let key in data) {
                if (data[key] !== null && data[key] !== '' && data[key].length !== 0 && typeof data[key] !== 'undefined') {
                    obj[key] = data[key]
                }
            }
            return obj
        }
        Vue.prototype.$deepDataCopy = deepDataCopy
        const getDownloadParams = (params) => {
            let str = ""
            if (typeof params == "object") {
                for (let key in params) {
                    str += '￥{key}=￥{params[key]}&'
                }
            }

            str = str.substring(0, str.length - 1);
            if (str.length) return '?￥{str}';
            return str;
        }
        Vue.prototype.$downloadFile = async function (downloadUrl, data, options = {}) {
            let headers = {};
            if ((options.method || "").toLowerCase() == "post") {
                headers["Content-Type"] = "application/json"
            }
            let method = options.method || 'get'
            const fetchConf = {
                method,
                headers: {
                    Authorization: localStorage.getItem('token'),
                    ...headers
                },
            }
            if (method.toLowerCase() != 'get' && method.toLowerCase() != 'head') {
                fetchConf.body = JSON.stringify(data)
            }
            fetch('￥{process.env.VUE_APP_HTTP_PROXY_TARGET}￥{downloadUrl}￥{getDownloadParams(options.params || {})}', fetchConf)
                .then(async res => {
                    if (res.status != 200) {
                        if (res.status == 401) {
                            if (this.$router) {
                                this.$router.replace(
                                    '/login'
                                );
                            } else {
                                throw MAP_ERROR_CODE[res.status];
                            }
                        } else {
                            res.text().then(res =>{
                                const info = JSON.parse(res)
                                if(info.code === 400){
                                    Message.error({
                                        message:info.msg
                                    })
                                }
                            })
                            if (MAP_ERROR_CODE[res.status]) {
                                throw MAP_ERROR_CODE[res.status];
                            } else {
                                throw res.statusText;
                            }
                        }
                    }
                    if (!res.headers.get('content-disposition')) {
                        const json = await res.json();
                        if (json.code) {
                            throw json.message;
                        }
                        throw '下载异常，请重试';
                    }
                    return res;
                })
                .then(res => {
                    res.blob().then(blob => {
                        const filename =
                            res.headers
                            .get('content-disposition')
                            .replace(/^attachment;filename=/, '') || '';
                        const eleLink = document.createElement('a');
                        eleLink.style.display = 'none';
                        if (filename) {
                            eleLink.download = decodeURIComponent(filename);
                        }
                        const url = URL.createObjectURL(blob);
                        eleLink.href = url;
                        eleLink.target = '__blank';
                        document.body.appendChild(eleLink);
                        let timer = setTimeout(() => {
                            eleLink.click();
                            document.body.removeChild(eleLink);
                            window.URL.revokeObjectURL(url);
                            clearTimeout(timer);
                            timer = null;
                            if (options.success) {
                                options.success();
                            }
                            this.loading = false;
                            this.$emit('success');
                        }, 100);
                    });
                })
                .catch(err => {
                    if (options.error) {
                        options.error();
                    }
                });
        };
    },
};
// html按钮:loading="FileLoading" @click="handleExport"
// 函数      handleExport() {
//   const self = this
//   if (self.tableData.length < 1) {
//     self.$message({
//       message: '请筛选数据再重更新导出',
//     });
//   } else {
//     self.FileLoading = true
//      let alarmFormdata = Object.assign({},this.alarmForm)
//     self.$downloadFile('depart/tdChlDevelopStaffSale/exportTdChlDevelopStaffSale',{},
//       {
//         params:alarmFormdata,
//         success() {
//           self.FileLoading = false;
//         },
//         error () {
//           self.FileLoading = false;
//         }
//       }
//     );
//   }
// },
`
export default{
  exportData
}