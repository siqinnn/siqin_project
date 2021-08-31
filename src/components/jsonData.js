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
export default {
  labelData,
  disflexData
}