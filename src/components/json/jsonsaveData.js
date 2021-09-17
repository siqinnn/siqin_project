let saveData = `
const store = { // 本地存储
  set: function(name, value, day) { // 设置
    let d = new Date()
    let time = 0
    day = (typeof(day) === 'undefined' || !day) ? 1 : day // 时间,默认存储1天
    time = d.setHours(d.getHours() + (24 * day)) // 毫秒
    localStorage.setItem(name, JSON.stringify({
      data: value,
      time: time
    }))
  },
  get: function(name) { // 获取
    let data = localStorage.getItem(name)
    if (!data) {
      return null
    }
    let obj = JSON.parse(data)
    if (new Date().getTime() > obj.time) { // 过期
      localStorage.removeItem(name)
      return null
    } else {
      return obj.data
    }
  },
  clear: function(name) { // 清空
    if (name) { // 删除键为name的缓存
      localStorage.removeItem(name)
    } else { // 清空全部
      localStorage.clear()
    }
  }
}
`
let dateData = `
const formatDate = function(fmt, date) { // 时间格式化 【'yyyy-MM-dd hh:mm:ss',时间】
  if (typeof date !== 'object') {
    date = !date ? new Date() : new Date(date)
  }
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}
`
let fetchData = `

const fetch = function(url, setting) { // fetch请求的封装
  let opts = { // 设置参数的初始值
    method: (setting.method || 'GET').toUpperCase(), // 请求方式
    headers: setting.headers || {}, // 请求头设置
    credentials: setting.credentials || true, // 设置cookie是否一起发送
    body: setting.body || {},
    mode: setting.mode || 'no-cors', // 可以设置 cors, no-cors, same-origin
    redirect: setting.redirect || 'follow', // follow, error, manual
    cache: setting.cache || 'default' // 设置 cache 模式 (default, reload, no-cache)
  }
  let dataType = setting.dataType || 'json' // 解析方式
  let data = setting.data || '' // 参数
  let paramsFormat = function(obj) { // 参数格式
    var str = ''
    for (var i in obj) {
      str += '￥{i}=￥{obj[i]}&'
    }
    return str.split('').slice(0, -1).join('')
  }

  if (opts.method === 'GET') {
    url = url + (data ? '?￥{paramsFormat(data)}' : '')
  } else {
    setting.body = data || {}
  }
  return new Promise((resolve, reject) => {
    fetch(url, opts).then(async res => {
      let data = dataType === 'text' ? await res.text() : dataType === 'blob' ? await res.blob() : await res.json()
      resolve(data)
    }).catch(e => {
      reject(e)
    })
  })
}
`
let judgeData = `
// 不识别反斜杠故用￥代替
const isDevice = function() { // 判断是android还是ios还是web
  var ua = navigator.userAgent.toLowerCase()
  if (ua.match(/iPhone￥sOS/i) === 'iphone os' || ua.match(/iPad/i) === 'ipad') { // ios
    return 'iOS'
  }
  if (ua.match(/Android/i) === 'android') {
    return 'Android'
  }
  return 'Web'
}
`
let transitionData = `
const stamp = { // 时间，时间戳转换
  getTime: function(time) { // 时间转10位时间戳
    let date = time ? new Date(time) : new Date()
    return Math.round(date.getTime() / 1000)
  },
  timeToStr: function(time, fmt) { // 10位时间戳转时间
    return new Date(time * 1000).pattern(fmt || 'yyyy-MM-dd')
  }
}
`
let pcData = `
const isPC = function() { // 是否为PC端
  let userAgentInfo = navigator.userAgent
  let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  let flag = true
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}
`
let randomData = `
const random = function(min, max) { // 生成随机数范围
  if (arguments.length === 2) {
    return Math.floor(min + Math.random() * ((max + 1) - min))
  } else {
    return null
  }
}
`
let imgData = `
const imgLoadAll = function(arr, callback) { // 图片加载
  let arrImg = []
  for (let i = 0; i < arr.length; i++) {
    let img = new Image()
    img.src = arr[i]
    img.onload = function() {
      arrImg.push(this)
      if (arrImg.length == arr.length) {
        callback && callback()
      }
    }
  }
}
`
let cursorData = `
const insertAtCursor = function(dom, val) { // 光标所在位置插入字符
  if (document.selection) {
    dom.focus()
    let sel = document.selection.createRange()
    sel.text = val
    sel.select()
  } else if (dom.selectionStart || dom.selectionStart == '0') {
    let startPos = dom.selectionStart
    let endPos = dom.selectionEnd
    let restoreTop = dom.scrollTop
    dom.value = dom.value.substring(0, startPos) + val + dom.value.substring(endPos, dom.value.length)
    if (restoreTop > 0) {
      dom.scrollTop = restoreTop
    }
    dom.focus()
    dom.selectionStart = startPos + val.length
    dom.selectionEnd = startPos + val.length
  } else {
    dom.value += val
    dom.focus()
  }
}
`
let baseData = `
const getBase64 = function(img) { //传入图片路径，返回base64，使用getBase64(url).then(function(base64){},function(err){}); 
  let getBase64Image = function(img, width, height) { //width、height调用时传入具体像素值，控制大小,不传则默认图像大小
    let canvas = document.createElement("canvas");
    canvas.width = width ? width : img.width;
    canvas.height = height ? height : img.height;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    let dataURL = canvas.toDataURL();
    return dataURL;
  }
  let image = new Image();
  image.crossOrigin = '';
  image.src = img;
  let deferred = $.Deferred();
  if (img) {
    image.onload = function() {
      deferred.resolve(getBase64Image(image));
    }
    return deferred.promise();
  }
}
`
let downData = `
const downloadFile = function(base64, fileName) { //base64图片下载功能
  let base64ToBlob = function(code) {
    let parts = code.split(';base64,');
    let contentType = parts[0].split(':')[1];
    let raw = window.atob(parts[1]);
    let rawLength = raw.length;
    let uInt8Array = new Uint8Array(rawLength);
    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], {
      type: contentType
    });
  };
  let aLink = document.createElement('a');
  let blob = base64ToBlob(base64); //new Blob([content]);
  let evt = document.createEvent("HTMLEvents");
  evt.initEvent("click", true, true); //initEvent不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
  aLink.download = fileName;
  aLink.href = URL.createObjectURL(blob);
  aLink.click();
}
`
let funcData = `
const debounce = function(func, wait, immediate) { //函数防抖[func 函数,wait 延迟执行毫秒数,immediate true 表立即执行,false 表非立即执行,立即执行是触发事件后函数会立即执行，然后n秒内不触发事件才能继续执行函数的效果]
  let timeout;
  return function() {
    let context = this;
    let args = arguments;
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait)
      if (callNow) func.apply(context, args)
    } else {
      timeout = setTimeout(function() {
        func.apply(context, args)
      }, wait);
    }
  }
}
// -----------------------------

const throttle = function(func, wait ,type) { //函数节流 [func 函数 wait 延迟执行毫秒数 type 1 表时间戳版，2 表定时器版]
  if(type===1){
      let previous = 0;
  }else if(type===2){
      let timeout;
  }
  return function() {
      let context = this;
      let args = arguments;
      if(type===1){
          let now = Date.now();
          if (now - previous > wait) {
              func.apply(context, args);
              previous = now;
          }
      }else if(type===2){
          if (!timeout) {
              timeout = setTimeout(() => {
                  timeout = null;
                  func.apply(context, args)
              }, wait)
          }
      }
  }
}
`
export default {
  saveData,
  dateData,
  fetchData,
  judgeData,
  transitionData,
  pcData,
  randomData,
  imgData,
  cursorData,
  baseData,
  downData,
  funcData,


}