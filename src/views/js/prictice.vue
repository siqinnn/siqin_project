<template>
  <div class="practice">
    <van-nav-bar
      title="网格积分"
      left-text=" "
      left-arrow
      @click-left="onClickLeft"
    >
      <template #right>
        <van-dropdown-menu>
          <van-dropdown-item
            :title="mattertimeValue"
            v-model="value1"
            :options="option1"
            @change="dropdownchange"
          />
        </van-dropdown-menu>
      </template>
    </van-nav-bar>
    <van-row class="vanrowclass">
      <van-col span="8" align="center">
        <p>5480</p>
        <p>总绩效</p>
      </van-col>
      <van-col
        span="8"
        align="center"
        style="border-left: 1px solid gray; border-right: 1px solid gray"
      >
        <p>5240</p>
        <p>总积分</p>
      </van-col>
      <van-col span="8" align="center">
        <p>480</p>
        <p>业务量</p>
      </van-col>
    </van-row>
    <div>
      <van-row>
        <van-col span="6" align="center">
          <p>图片</p>
          <p>业绩预警</p>
        </van-col>
        <van-col span="6" align="center">
          <p>图片</p>
          <p>工效分析</p>
        </van-col>
        <van-col span="6" align="center">
          <p>图片</p>
          <p>对标管理</p>
        </van-col>
        <van-col span="6" align="center">
          <p>图片</p>
          <p>网格排名</p>
        </van-col>
      </van-row>
    </div>
    <div>
      <van-tabs v-model="isaactive" @click-tab="onClickTab">
        <van-tab title="标签 1" name="a">
          <div style="padding: 16px">
            <van-row>
              <van-col span="12" align="left">
                <span
                  style="
                    display: inline-block;
                    border-left: 4px solid steelblue;
                    padding-left: 8px;
                  "
                  >积分业绩</span
                >
              </van-col>
              <van-col span="12" align="right">
                <span>业务总量&nbsp;&nbsp;55</span>
              </van-col>
            </van-row>
            <div
              style="
                width: calc(100% - 20px);
                border: 1px solid gray;
                border-radius: 5px;
                margin-top: 16px;
                padding: 10px;
              "
            >
              <van-row style="border-bottom: 1px solid gray">
                <van-col span="24" align="center">
                  <p style="position: relative">
                    总绩效
                    <span style="position: absolute; right: 30px; top: 3px"
                      >50</span
                    >
                  </p>
                  <p>24553</p>
                  <p>环比2%</p>
                </van-col>
              </van-row>
              <van-row style="margin-top: 10px">
                <van-col
                  span="12"
                  align="center"
                  style="border-right: 1px solid gray"
                >
                  <p>价值绩效</p>
                  <p>954.12</p>
                </van-col>
                <van-col span="12" align="center">
                  <p>动作绩效</p>
                  <p>806.12</p>
                </van-col>
              </van-row>
            </div>
            <div>
              <van-row :gutter="10" style="margin-top: 10px">
                <van-col span="10">
                  <div
                    style="
                      border: 1px solid gray;
                      border-radius: 5px;
                      height: 122px;
                      padding: 10px;
                    "
                  >
                    <p>
                      <span>总积分</span>
                      <span>5/20</span>
                    </p>
                    <div
                      id="chartslist"
                      style="height: 120px; top: -10px !important"
                    ></div>

                    <p></p>
                  </div>
                </van-col>
                <van-col span="14">
                  <van-row>
                    <van-col span="24">
                      <div
                        style="
                          border: 1px solid gray;
                          border-radius: 5px;
                          height: 65px;
                        "
                      >
                        qwe
                      </div>
                    </van-col>
                    <van-col span="24">
                      <div
                        style="
                          border: 1px solid gray;
                          border-radius: 5px;
                          height: 65px;
                          margin-top: 10px;
                        "
                      >
                        qwe
                      </div>
                    </van-col>
                  </van-row>
                </van-col>
              </van-row>
            </div>
            <van-row>
              <van-col span="12" align="left">
                <span
                  style="
                    display: inline-block;
                    border-left: 4px solid steelblue;

                    margin: 10px 0;
                    padding-left: 8px;
                  "
                  >积分详情</span
                >
              </van-col>
            </van-row>
            <van-row>
              <van-col span="24">
                <div
                  style="
                    border: 1px solid gray;
                    border-radius: 5px;
                    padding: 10px;
                  "
                >
                  <table border="0">
                    <tr>
                      <th>业务名称</th>
                      <th>价值积分</th>
                      <th>价值绩效</th>
                      <th>业务量</th>
                    </tr>
                    <tr>
                      <td>价值绩效</td>
                      <td>http://</td>
                      <td>教育</td>
                      <td>教饿育</td>
                    </tr>
                    <tr>
                      <td>价值积分</td>
                      <td>http:</td>
                      <td>搜索</td>
                      <td>搜索</td>
                    </tr>
                    <tr>
                      <td>业务量</td>
                      <td>http:</td>
                      <td>图书</td>
                      <td>搜索</td>
                    </tr>
                  </table>
                </div>
              </van-col>
            </van-row>
          </div>
        </van-tab>
        <van-tab title="标签 2" name="b">内容 2</van-tab>
        <van-tab title="标签 3" name="c">内容 3</van-tab>
        <van-tab title="标签 4" name="d">内容 4</van-tab>
        <van-tab title="标签 5" name="e">内容 5</van-tab>
        <van-tab title="标签 6" name="f">内容 6</van-tab>
        <van-tab title="标签 7" name="g">内容 7</van-tab>
        <van-tab title="标签 8" name="h">内容 8</van-tab>
      </van-tabs>
    </div>
    <!-- <p class="btnclass" @click="showPopFn()">
      {{ this.mattertimeValue }}
      <van-icon name="arrow-down" />
    </p> -->
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '40%' }"
      round
    >
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        @confirm="confirmFn()"
        @cancel="cancelFn()"
      />
    </van-popup>
    <van-popup
      v-model="showyearmonth"
      position="bottom"
      :style="{ height: '40%' }"
      round
    >
      <van-datetime-picker
        v-model="currentDate1"
        type="year-month"
        @confirm="confirmFn1()"
        @cancel="cancelFn1()"
      />
    </van-popup>
    <!-- <div id="newgridSmallceo">
      <van-row gutter="20" style="text-align: center; padding: 0px 16px">
        <van-col span="8">指标</van-col>
        <van-col span="8">当日值</van-col>
        <van-col span="8">月累计</van-col>
      </van-row>
      <van-collapse v-model="activeName" accordion>
        <van-collapse-item
          v-for="(item, index) in items"
          :name="index"
          :key="index"
        >
          <template #title>
            <img
              v-if="activeName == index"
              class="imgclass"
              src="@/assets/1.jpg"
            />
            <img v-else class="imgclass" src="@/assets/2.jpg" />
            <div class="header-box">
              <van-row gutter="20" style="text-align: center; width: 100%">
                <van-col
                  v-for="(i, cindex) in items[index].value"
                  :key="cindex"
                  span="8"
                >
                  {{ i.itemCode }}</van-col
                >
              </van-row>
            </div>
          </template>
          <van-row gutter="20" style="text-align: center">
            <div
              class="header-box"
              v-for="(item, indexxx) in activeName === 'affairArray'
                ? affairArray1
                : activeName === 'affairArray22'
                ? affairArray29
                : activeName === 'affairArray0'
                ? affairArray88
                : ''"
              :key="indexxx + '89'"
            >
              <van-col span="8">{{ item.itemCode1 }}</van-col>
              <van-col span="8">{{ item.itemCode2 }}</van-col>
              <van-col span="8">{{ item.itemCode3 }}</van-col>
            </div>
          </van-row>
        </van-collapse-item>
      </van-collapse>
    </div> -->
    <!-- <canvas
      id="myCanvas"
      width="200"
      height="100"
      style="border:1px solid #000000;"
    ></canvas> -->
    <!-- <div id='container' style="width: 100%;height: 100%;position: absolute;z-index: 2;"></div>
    <canvas id='canvas' style="position: absolute;z-index: 1;filter: blur(5px);"></canvas> -->
  </div>
</template>
<script>
export default {
  name: "practice",
  data() {
    return {
      currentRate: 1670,
      isaactive: "a",
      showyearmonth: false,
      option1: [
        { text: "日期", value: 0 },
        { text: "月份", value: 1 },
        { text: "往月", value: 2 },
      ],
      value1: "",
      mattertimeValue: "",
      currentDate1: new Date(),
      currentDate: new Date(),
      show: false,
      items: {
        affairArray: {
          value: [
            {
              itemCode: "价值积分",
            },
            {
              itemCode: "标题2",
            },
            {
              itemCode: "标题3",
            },
          ],
        },
        affairArray22: {
          value: [
            {
              itemCode: "动作积分",
            },
            {
              itemCode: "标题4",
            },
            {
              itemCode: "标题5",
            },
          ],
        },
        affairArray0: {
          value: [
            {
              itemCode: "奖励积分",
            },
            {
              itemCode: "标题7",
            },
            {
              itemCode: "标题8",
            },
          ],
        },
      },
      activeName: "affairArray",
      // affairArray:[
      //     {
      //     itemCode:'标题1'
      // },
      //     {
      //         itemCode:'标题2'
      //     },
      //     {
      //         itemCode:'标题3'
      //     }],
      // affairArray2:[
      //     {
      //         itemCode:'标题3'
      //     },
      //     {
      //         itemCode:'标题4'
      //     },
      //     {
      //         itemCode:'标题5'
      //     }],
      affairArray1: [
        {
          itemCode1: "haha",
          itemCode2: "haha",
          itemCode3: "haha",
        },
        {
          itemCode1: "haha",
          itemCode2: "haha",
          itemCode3: "haha",
        },
        {
          itemCode1: "haha",
          itemCode2: "haha",
          itemCode3: "haha",
        },
      ],
      affairArray29: [
        {
          itemCode1: "gaga",
          itemCode2: "gaga",
          itemCode3: "gaga",
        },
        {
          itemCode1: "gaga",
          itemCode2: "gaga",
          itemCode3: "gaga",
        },
        {
          itemCode1: "gaga",
          itemCode2: "gaga",
          itemCode3: "gaga",
        },
      ],
      affairArray88: [
        {
          itemCode1: "zui",
          itemCode2: "zui",
          itemCode3: "zui",
        },
        {
          itemCode1: "zui",
          itemCode2: "zui",
          itemCode3: "zui",
        },
        {
          itemCode1: "zui",
          itemCode2: "zui",
          itemCode3: "zui",
        },
      ],
      inputdata: "",
      tableData: [],
      dialogVisible: false,
    };
  },
  computed: {
    text() {
      console.log(this.currentRate);
      return this.currentRate.toString();
    },
  },
  components: {},
  methods: {
    maincharts() {
      var myChart = this.$echarts.init(document.getElementById("chartslist"));
      var option;

      option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "40%",
          left: "center",
        },
        graphic: [
          {
            //环形图中间添加文字
            type: "text", //通过不同top值可以设置上下显示
            left: "center",
            top: "45%",
            style: {
              text: "2334",
              textAlign: "center",
              fill: "#666", //文字的颜色
              width: 30,
              height: 30,
              fontSize: 16,
              fontFamily: "Microsoft YaHei",
            },
          },
        ],
        color: ["#5B8FF9", "#5AD8A6"],
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["50%", "80%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 3,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [{ value: 1048 }, { value: 735 }],
          },
        ],
      };

      option && myChart.setOption(option);
    },
    onClickTab(val) {
      67;
      alert(val);
    },
    onClickLeft() {
      alert("dianle");
    },
    onClickRight() {},
    dropdownchange(val) {
      console.log(val);
      if (val == 0) {
        this.show = true;
      } else if (val == 1) {
        this.showyearmonth = true;
      }
    },
    // showPopFn() {
    //   this.show = true;
    // },
    // showPopup() {
    //   this.show = true;
    // },
    confirmFn() {
      // 确定按钮
      this.mattertimeValue = this.timeFormat(this.currentDate);
      this.show = false;
      this.value1 = "";
    },
    confirmFn1() {
      // 确定按钮
      this.mattertimeValue = this.timeFormat(this.currentDate1).slice(0, -3);
      this.showyearmonth = false;
      this.value1 = "";
    },
    cancelFn() {
      this.show = true;
    },
    timeFormat(time) {
      // 时间格式化 2019-09-08
      let year = time.getFullYear();
      let month =
        time.getMonth() + 1 < 10
          ? "0" + (time.getMonth() + 1)
          : time.getMonth() + 1;
      let day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
      return year + "-" + month + "-" + day;
    },
    //  init(){
    //       drawDragonImageInCanvas();
    //   },
    // drawDragonImageInCanvas() {
    //   var canvas = document.getElementById("canvas");
    //   var ctx = canvas.getContext("2d");
    //   var image = new Image(); //使用的new方法拉实现
    //   // console.log(image);
    //   image.src = require("@/assets/bm1.jpg");
    //   image.onload = function () {
    //     canvas.width = image.width;
    //     canvas.height = image.height;
    //     ctx.drawImage(image, 0, 0);
    //     var imageData = ctx.getImageData(0, 0, image.width, image.height).data;
    //     // console.log(image.width);
    //     // console.log(image.height);
    //     ctx.clearRect(0, 0, image.width, image.height);
    //     var gap = 10;
    //     var dragonContainer = document.getElementById("container");
    //     var dragonScale = 2;
    //     for (var h = 0; h < image.height; h += gap) {
    //       for (var w = 0; w < image.width; w += gap) {
    //         var position = (image.width * h + w) * 4;
    //         var r = imageData[position],
    //           g = imageData[position + 1],
    //           b = imageData[position + 2];
    //         if (r + g + b == 0) {
    //           var bubble = document.createElement("img");
    //           bubble.src = "@/assets/bm1.jpg";
    //           bubble.setAttribute("class", "bubble");
    //           var bubbleSize = Math.random() * 10 + 20;
    //           bubble.style.left = w * dragonScale - bubbleSize / 2 + "px";
    //           bubble.style.top = h * dragonScale - bubbleSize / 2 + "px";
    //           bubble.style.width = bubble.style.height = bubbleSize + "px";
    //           bubble.style.animationDuration = Math.random() * 6 + 4 + "s";
    //           dragonContainer.appendChild(bubble);
    //         }
    //       }
    //     }
    //   };
    // },
    getnewDate() {
      let nowdata = new Date();
      let year = nowdata.getFullYear();
      let month = nowdata.getMonth() + 1;
      let date = nowdata.getDate();
      let nowtime = year + "-";
      if (month < 10) {
        nowtime += "0";
      }
      nowtime += month + "-";
      if (date < 10) {
        nowtime += "0";
      }
      nowtime += date;
      this.mattertimeValue = nowtime;
    },
  },
  mounted() {
    setTimeout(() => {
      this.maincharts();
      const resizeOb = new ResizeObserver((entries) => {
        for (const entry of entries) {
          this.$echarts.getInstanceByDom(entry.target).resize();
        }
      });
      resizeOb.observe(document.getElementById("chartslist"));
    }, 10);
    this.getnewDate();
    this.value1 = this.mattertimeValue;
    // this.drawDragonImageInCanvas();
    // var c = document.getElementById("myCanvas");
    // var ctx = c.getContext("2d");
    // -----颜色
    // ctx.fillStyle = "#FF0000";
    // ctx.fillRect(0, 0, 150, 75);
    // -----一条线
    // ctx.moveTo(0, 0);
    // ctx.lineTo(200, 100);
    // ctx.stroke();
    // -----一个圆
    // ctx.beginPath();
    // ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    // ctx.stroke();
    // -----绘制实心文字
    // ctx.font = "30px Arial";
    // ctx.fillText("Hello World", 10, 50);
    // -----绘制空心文字
    //  ctx.font="30px Arial";
    //  ctx.strokeText("Hello World",10,50);
    ////////////////////////////////////////////////////////
  },
};
</script>
<style scoped="scoped" lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  background: #333;
}
p {
  margin: 0;
}
span {
  display: inline-block;
}
.vanrowclass .van-col p {
  margin: 0;
}
table {
  width: 100%;
  border-collapse: collapse;
  word-break: break-word;
  word-wrap: break-word;
  table-layout: fixed;
}
table tr td {
  text-align: center;
}
table tr:nth-child(odd) {
  background: rgba(250, 250, 251);
}
table tr th {
  background: rgba(244, 245, 247);
}
.practice {
  // width: 400px;
  height: auto;
  border: 1px solid gray;
  // padding: 16px;
}
.bubble {
  position: absolute;
  animation-timing-function: linear;
  animation-name: floating;
  animation-iteration-count: infinite;
}
.btnclass {
  // float: left;
  width: 114px;
  height: 25px;
  border-radius: 10px;
  border: 1px solid gray;
  text-align: center;
  line-height: 25px;
}
@keyframes floating {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
}
.practice {
  // width: 400px;
  height: auto;
  border: 1px solid gray;
  // padding: 16px;
}

.header-box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.header-box span {
  font-size: 14px;
  color: #4a4a4a;
  font-weight: 400;
  display: inline-block;
  // min-width: 33.3%;
  line-height: 30px;
  text-align: center;
}

.imgclass {
  height: 20px;
  padding-bottom: 4px;
  position: absolute;
  top: 12px;
  left: 10px;
}
#newgridSmallceo .van-cell__title {
  position: relative;
}
</style>
<style lang="scss">
#newgridSmallceo .van-icon {
  display: none !important;
}
#newgridSmallceo .van-cell__left-icon,
#newgridSmallceo .van-cell__right-icon {
  display: none !important;
}
.van-dropdown-menu {
  width: 114px;
  height: 25px;
  border-radius: 14px;
  border: 1px solid gray;
  text-align: center;
  line-height: 25px;
}
.van-dropdown-menu__title {
  line-height: 25px;
}
.van-dropdown-menu__bar {
  height: auto;
  background-color: inherit;
}
.van-dropdown-menu__title::after {
  border-color: transparent transparent #323233 #323233;
}
.van-dropdown-menu__title--active {
  color: #323233;
}
.van-tabs__wrap {
  border-bottom: 1px solid gray;
}
</style>
