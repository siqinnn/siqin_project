let chartsdata = `
<template>
  <div class="echartclass">
    <el-row :gutter="24">
      <el-col :span="6">
        <div id="barcharts" class="barcharts1"></div>
      </el-col>
      <el-col :span="6">
        <div id="piecharts" class="barcharts1"></div>
      </el-col>
      <el-col :span="6">
        <div id="linechartslist" class="barcharts1"></div>
      </el-col>
      <el-col :span="6">
        <div id="chartslist" class="barcharts1"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "echartclass",
  components: {
    // VueClipboard,
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {
    setTimeout(() => {
      this.piecharts();
      const resizeOb = new ResizeObserver((entries) => {
        for (const entry of entries) {
          this.$echarts.getInstanceByDom(entry.target).resize();
        }
      });
      resizeOb.observe(document.getElementById("piecharts"));
    }, 10);
    setTimeout(() => {
      this.linecharts();
      const resizeOb = new ResizeObserver((entries) => {
        for (const entry of entries) {
          this.$echarts.getInstanceByDom(entry.target).resize();
        }
      });
      resizeOb.observe(document.getElementById("linechartslist"));
    }, 10);
    setTimeout(() => {
      this.maincharts();
      const resizeOb = new ResizeObserver((entries) => {
        for (const entry of entries) {
          this.$echarts.getInstanceByDom(entry.target).resize();
        }
      });
      resizeOb.observe(document.getElementById("chartslist"));
    }, 10);

    setTimeout(() => {
      this.charts();
      const resizeOb = new ResizeObserver((entries) => {
        for (const entry of entries) {
          this.$echarts.getInstanceByDom(entry.target).resize();
        }
      });
      resizeOb.observe(document.getElementById("barcharts"));
    }, 10);
  },
  methods: {
    maincharts() {
      var myChart = this.$echarts.init(document.getElementById("chartslist"));
      var option;

      option = {
        xAxis: {
          //  show: false,
          // axisTick: {
          //   //坐标轴刻度相关设置。
          //   show: false,
          // },
          // axisLine: {
          //   //坐标轴轴线相关设置。
          //   show: false,
          // },
          axisLabel: {
            //坐标轴刻度标签的相关设置
            textStyle: { color: "white" },
            fontSize: 12,
          },

          type: "category",
          boundaryGap: false,
          data: ["2013", "2014", "2015", "2016", "2017", "2018", "2019"],
        },
        yAxis: [
          {
            type: "value",
            name: "单位(个)",
            nameTextStyle: {
              color: "#ffffff",
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#5E658A",
              },
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#ffffff",
              },
            },
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "#5E658A",
              },
            },
          },
        ],
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#00f9ff",
                  },
                  {
                    offset: 0.5,
                    color: "#00B6CE",
                  },
                  {
                    offset: 1,
                    color: "#00B6CE",
                  },
                ],

                // global: false, // 缺省为 false
              },
            },
          },
        ],
      };

      option && myChart.setOption(option);
    },
    linecharts() {
      var myChart = this.$echarts.init(
        document.getElementById("linechartslist")
      );

      let option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true,
          },
        ],
      };

      option && myChart.setOption(option);
    },
    piecharts() {
      let myChart = this.$echarts.init(document.getElementById("piecharts"));
      let option = {
        textStyle: {
          color: "red",
          fontSize: 14, // 调节字体大小
        },
        title: {
          text: "", // 主标题名称
          subtext: "", // 副标题名称
          x: "center", // 标题的位置
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical", // 标签名称垂直排列
          x: "86%", // 标签的位置
          y: "center",
          data: [
            {
              value: 180,
              name: "A镇",
              itemStyle: {
                color: "#06f3ff",
              },
            }, // 变量对应的具体数据
            {
              value: 180,
              name: "B镇",
              itemStyle: {
                color: "#d33535",
              },
            },
            {
              value: 165,
              name: "C镇",
              itemStyle: {
                color: "#90ed7d",
              },
            },
            {
              value: 151,
              name: "D镇",
              itemStyle: {
                color: "#f7a35c",
              },
            },
            {
              value: 97,
              name: "E镇",
              itemStyle: {
                color: "#8085e9",
              },
            },
            {
              value: 81,
              name: "F镇",
              itemStyle: {
                color: "#920783",
              },
            },
            {
              value: 29,
              name: "G镇",
              itemStyle: {
                color: "#e4d354",
              },
            },
            {
              value: 20,
              name: "H镇",
              itemStyle: {
                color: "#601986",
              },
            },
          ],
          textStyle: {
            color: "#999999",
            fontSize: 14, // 调节字体大小
          },
        }, // 标签变量名称
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            magicType: {
              show: true,
              type: ["pie", "funnel"],
            },
          },
        },
        calculable: true,
        series: [
          {
            itemStyle: {
              color: "#999999",
              normal: {
                label: {
                  color: "#999999",
                  show: true,
                },

                labelLine: {
                  show: true,
                },
              },
            },
            name: "面积模式", // 图表名称
            type: "pie", // 图表类型
            radius: [40, 80], // 图表内外半径大小
            center: ["40%", "50%"], // 图表位置
            roseType: "area",
            label: {
              normal: {
                show: true,
                formatter: "{b}({d}%)", // 显示百分比
              },
            },
            data: [
              {
                value: 180,
                name: "A镇",
                itemStyle: {
                  color: "#06f3ff",
                },
              }, // 变量对应的具体数据
              {
                value: 180,
                name: "B镇",
                itemStyle: {
                  color: "#d33535",
                },
              },
              {
                value: 165,
                name: "C镇",
                itemStyle: {
                  color: "#90ed7d",
                },
              },
              {
                value: 151,
                name: "D镇",
                itemStyle: {
                  color: "#f7a35c",
                },
              },
              {
                value: 97,
                name: "E镇",
                itemStyle: {
                  color: "#8085e9",
                },
              },
              {
                value: 81,
                name: "F镇",
                itemStyle: {
                  color: "#920783",
                },
              },
              {
                value: 29,
                name: "G镇",
                itemStyle: {
                  color: "#e4d354",
                },
              },
              {
                value: 20,
                name: "H镇",
                itemStyle: {
                  color: "#601986",
                },
              },
            ],
            color: "black",
          },
        ],
      };
      myChart.setOption(option);
    },
    charts() {
      var myChart = this.$echarts.init(document.getElementById("barcharts"));
      var barOption = {
        dataset: {
          source: [
            // 可从后台取值动态传入
            // ["amount", "name"],
            [48212, "E镇"],
            [38254, "D镇"],
            [41032, "C镇"],
            [22755, "B镇"],
            [20145, "A镇"],
            // [79146, '化学'],
          ],
        },
        grid: {
          left: "10%",
          top: "20px",
          bottom: "0px",
        },
        tooltip: {
          show: true,
          trigger: "axis",
          axisPointer: {
            type: "none",
          },
        },
        toolbox: {
          show: true,
          orient: "horizontal",
          itemSize: 15,
          itemGap: 10,
        },
        xAxis: { name: "", show: false },
        yAxis: {
          type: "category",
          nameGap: "11px",
          boundaryGap: ["14px", "14px"],
          axisLine: {
            show: false, // 不显示轴线
          },
          axisTick: {
            show: false, // 不显示刻度
          },
          nameLocation: "center",
          axisLabel: {
            show: true,
            textStyle: {
              color: "#44eefe",
              fontSize: "14px",
            },
          },
        },
        series: [
          {
            type: "bar",
            encode: {
              // 定义data的哪个维度编码成啥样
              x: "amount",
              y: "name",
            },
            barWidth: "10px",
            barGap: "10%" /*多个并排柱子设置柱子之间的间距*/,
            barCategoryGap: "0px", // 柱间距
            nameTextStyle: {
              color: "red",
              fontSize: "14px",
            },
            itemStyle: {
              normal: {
                barBorderRadius: 10,
                color: function(params) {
                  var colorList = [
                    "#45d8ff",
                    "#00f2fd",
                    "#ffb000",
                    "#f0702e",
                    "#ed342f",
                  ];
                  return colorList[params.dataIndex];
                },
              },
            },
            label: {
              show: true,
              color: " #c9c9c9",
              position: "right",
            },
          },
        ],
      };

      myChart.setOption(barOption);
    },
  },
};
</script>
<style scoped lang="scss">
.echartclass {
  margin-top: 20px;
  width: 100%;
  .barcharts1 {
    /* width: 500px; */
    height: 300px;
  }
}
</style>

`
export default {
  chartsdata
}