let labelData = [{
  explain: '文本块级标签',
  name: '<p></p>',
  remark: '直接写入内容',
  use: 'p 元素会自动在其前后创建一些空白。浏览器会自动添加这些空间，您也可以在样式表中规定。'
}, {
  explain: '指定w3c超链接',
  name: '<a></a>',
  remark: '直接写href导入地址入内容',
  use: '元素最重要的属性是 href 属性，它指示链接的目标。'
}, {
  explain: '块级无样式',
  name: '<div></div>',
  remark: '随意使用',
  use: '标签常用于组合块级元素，以便通过样式表来对这些元素进行格式'
}, {
  explain: 'ul标签定义无序列表,li标签定义列表项目',
  name: '<ul><li></li></ul>',
  remark: 'ul与li一起使用'
}, {
  explain: '行级标签',
  name: '<span></span>',
  remark: '可插入图片文本',
  use: '行内元素的特点是标签内的内容是多大它就是多大，而且不会占一整行'
}, {
  explain: '图片标签',
  name: '<img/>',
  remark: '行内插入图片src',
  use: '<img> 标签有两个必需的属性：src 属性 和 alt 属性。'
}, {
  explain: '标题标签',
  name: '<title></title>',
  remark: '写页面前定义题目',
  use: '浏览器会以特殊的方式来使用标题，并且通常把它放置在浏览器窗口的标题栏或状态栏上。'
}, {
  explain: '行内写css样式',
  name: '<style><style/>',
  remark: '此标签内写入样式',
  use: '在 style 元素中，您规定的是 HTML 元素如何在浏览器中呈现。'
}, {
  explain: '提供有关页面的元信息',
  name: '<meta/>',
  remark: '不包含内容',
  use: 'meta常用于定义页面的说明，关键字，最后修改日期，和其它的元数据'
}, {
  explain: '链接一个外部样式表',
  name: '<link/>',
  remark: '导入外部资源',
  use: '<link> 标签最常见的用途是链接样式表。'
}, {
  explain: '写逻辑标签',
  name: '<script/>',
  remark: '写逻辑代码',
  use: 'script标签没有跨域问题，可加载任何网站脚本，和img标签类似，通常会用来解决跨域问题'
}]
let disflexData = [{
    name: "flex-direction",
    attributevalue: `<pre>row默认值</pre><pre>row-reverse</pre><pre>column</pre><pre>column-reverse</pre>`,
    meaning: `<pre>主轴为水平方向，起点在左端</pre><pre>主轴为水平方向，起点在右端</pre><pre>主轴为垂直方向，起点在上沿</pre><pre>主轴为垂直方向，起点在下沿</pre>`

  },
  {
    name: "flex-wrap",
    attributevalue: `<pre>nowrap默认值</pre><pre>wrap</pre><pre>wrap-reverse</pre>`,
    meaning: `<pre>不换行</pre><pre>换行，第一行在上方</pre><pre>换行，第一行在下方</pre>`
  },
  {
    name: "justify-content",
    attributevalue: `<pre>flex-start默认值</pre><pre>flex-end</pre><pre>center</pre><pre>space-between</pre><pre>space-around</pre>`,
    meaning: `<pre>左对齐</pre><pre>右对齐</pre><pre>居中</pre><pre>两端对齐，项目之间的间隔都相等</pre><pre>每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍</pre>`
  },
  {
    name: "align-items",
    attributevalue: `<pre>flex-start</pre><pre>flex-end</pre><pre>center</pre><pre>baseline</pre><pre>stretch默认值</pre>`,
    meaning: `<pre>交叉轴的起点对齐</pre><pre>交叉轴的终点对齐</pre><pre>交叉轴的中点对齐</pre><pre>项目的第一行文字的基线对齐</pre><pre>如果项目未设置高度或设为auto，将占满整个容器的高度</pre>`
  },
  {
    name: "align-content",
    attributevalue: `<pre>flex-start</pre><pre>flex-end</pre><pre>center</pre><pre>space-between</pre><pre>space-around</pre><pre>stretch默认值</pre>`,
    meaning: `<pre>与交叉轴的起点对齐</pre><pre>与交叉轴的终点对齐</pre><pre>与交叉轴的中点对齐</pre><pre>与交叉轴两端对齐，轴线之间的间隔平均分布</pre><pre>每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍</pre><pre>轴线占满整个交叉轴</pre>`
  },
]
let jsmethodData = [{
    name: "对比循环后返回一个值",
    code: "this.city = this.eparchyInfo.find((val) => val.eparchyId == this.alarmForm.eparchyCode).eparchyName;"
  },
  {
    name: "获取字符串中的字符数",
    code: "const characterCount = (str, char) => str.split(char).length - 1"
  }, {
    name: "检查对象是否为空",
    code: "const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object"
  }, {
    name: "等待一定时间后执行",
    code: "const wait = async (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));"
  }, {
    name: "获取两个日期之间的天差",
    code: "const daysBetween = (date1, date2) => Math.ceil(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24))"
  }, {
    name: "重定向到另一个 URL",
    code: "const redirect = url => location.href = url"
  }, {
    name: "检查设备上的触摸支持",
    code: "const touchSupported = () => ('ontouchstart' in window || DocumentTouch && document instanceof DocumentTouch)"
  }, {
    name: "在元素后插入一串 HTML",
    code: "const insertHTMLAfter = (html, el) => el.insertAdjacentHTML('afterend', html)"
  }, {
    name: "打乱数组",
    code: "const shuffle = arr => arr.sort(() => 0.5 - Math.random())"
  }, {
    name: "在网页上获取选定的文本",
    code: "const getSelectedText = () => window.getSelection().toString()"
  }, {
    name: "获取一个随机布尔值",
    code: "const getRandomBoolean = () => Math.random() >= 0.5"
  }, {
    name: "计算数组的平均值",
    code: "const average = (arr) => arr.reduce((a, b) => a + b) / arr.length"
  },
  {
    name: "本地存取数据",
    code: "sessionStorage.setItem('dataParamId', response.data.id);let getId = sessionStorage.getItem('dataParamId')"

  },
  {
    name: "数组去重方法",
    code: `const removeDuplicates = (arr) => [...new Set(arr)];
    console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5, 5, 6]));`
  },
  {
    name: "生成随机字符串",
    code: " const randomString = () => Math.random() .toString(36) .slice(2); console.log(randomString());"

  },
  {
    name: "翻转字符串",
    code: `const reverse = (str) => str.split("") .reverse() .join("");reverse('hello world'); // 'dlrow olleh'`

  },
  {
    name: "时间格式化",
    code: `const timeFromDate = (date) => date.toTimeString().slice(0, 8);
    timeFromDate(new Date(2021, 11, 2, 12, 30, 0)); // 12:30:00
    timeFromDate(new Date()); // 返回当前时间 09:00:00`

  },
  {
    name: "钱转成逗号，斜杠识别不了改成￥",
    code: `const ThousandNum = num => num.toString().replace(/￥B(?=(￥d{3})+(?!￥d))/g, ",");
    const money = ThousandNum(1000000);`

  },
  {
    name: "生成随机id",
    code: `const RandomId = len => Math.random().toString(36).substr(3, len);
    const id = RandomId(10);`

  },
  {
    name: "生成随机颜色",
    code: `const RandomColor = () => "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
    const color = RandomColor();`

  },
  {
    name: "变成时间戳",
    code: `const timestamp = +new Date("2022-03-22");`

  },
  {
    name: "小数点",
    code: `const RoundNum = (num, decimal) => Math.round(num * 10 ** decimal) / 10 ** decimal;
    const num = RoundNum(1.2345, 2);`

  },
  {
    name: "取最小最大数",
    code: `const arr = [0, 1, 2, 3];
    const min = Math.min(...arr);
    const max = Math.max(...arr);`

  },
  {
    name: "生成范围随机数",
    code: `const RandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const num = RandomNum(1, 10); // 5`

  },


]
let bugData = [{
    name: "后台下载文件无法下载时候 后台加这个",
    img: require("@/assets/bug1.png"),
    code: "corsConfiguration.addExposeHeader(HttpHeaders.CONTENT_DISPOSITION)"
  },
  {
    name: "vue的table动态添加标签",
    img: require("@/assets/bug2.png"),
    code: `<pre>
renderHeader(h, { column }) {
   return h("div", [h("span", column.label),
   h("i", {class: "el-icon-caret-bottom",}) ]);},</pre>`
  },
  {
    img: null,
    name: "万能清除浮动",
    code: `.clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0}.clearfloat{zoom:1}`

  },
  {
    img: null,
    name: "循环的个体后加符号",
    code: `scope.row.sysRoles.map((i) => i.name).join(",")`
  },
  {
    img: null,
    name: "多条件三目运算",
    code: '{{`${fieldsValue1.declarationState=="0" ? "未审核" : ""}  ${fieldsValue1.declarationState =="1" ? " 审核通过" : ""} ${fieldsValue1.declarationState =="2" ? " 未通过" : ""} ${fieldsValue1.declarationState =="3" ? " 删除" : ""}`}}'
  },
  {
    img: null,
    name: "复制道新的对象里",
    code: `let formItem = Object.assign({}, formData);`
  },
  {
    img: null,
    name: "校验,queryForm是查询条件区域ref-queryForm",
    code: `this.$refs["queryForm"].validate((valid) => { if (valid) {}}`
  },
  {
    img: null,
    name: "摆脱一遍又一遍地编写 console.log",
    code: `let c = console.log.bind(document)|c('This is JavaScript')`
  },
  {
    img: null,
    name: "判断是否是一个数组",
    code: `const isArray = function(arr) { // 判断是否是一个数组
      return Object.prototype.toString.call(arr) === '[object Array]'
    }`
  },
  {
    img: null,
    name: "三目运算多个条件",
    code: `this.type=="2"?"A":this.type=="1"&&this.queryForm.double==true?"B":"C"`
  },
  {
    img: require("@/assets/edit.png"),
    name: "table中暂无数据居中",
    code: `   .table-body .table .el-table__body-wrapper .el-table__empty-block {
       	width: 100%;
       	min-width: 100%;
       	max-width: 100%;
       	padding-right: 100%;
       }`
  },
]
let copydata = `人生旅途中，总有人不断的走来，有人不断的离去，当新的名字变成老的名字，当老的名字渐渐模糊，又是一个故事的结束和一个故事的开始。在不断的相遇和错过中，终于明白：身边的人只能陪你走过或近或远的一程，而不能伴自己的一生；陪伴一生的是自己的名字和那些或清晰或模糊名字所带来的感动。`
export default {
  labelData,
  disflexData,
  jsmethodData,
  bugData,
  copydata
}