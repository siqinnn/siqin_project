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
          //   //??????????????????????????????
          //   show: false,
          // },
          // axisLine: {
          //   //??????????????????????????????
          //   show: false,
          // },
          axisLabel: {
            //????????????????????????????????????
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
            name: "??????(???)",
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

                // global: false, // ????????? false
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
          fontSize: 14, // ??????????????????
        },
        title: {
          text: "", // ???????????????
          subtext: "", // ???????????????
          x: "center", // ???????????????
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical", // ????????????????????????
          x: "86%", // ???????????????
          y: "center",
          data: [
            {
              value: 180,
              name: "A???",
              itemStyle: {
                color: "#06f3ff",
              },
            }, // ???????????????????????????
            {
              value: 180,
              name: "B???",
              itemStyle: {
                color: "#d33535",
              },
            },
            {
              value: 165,
              name: "C???",
              itemStyle: {
                color: "#90ed7d",
              },
            },
            {
              value: 151,
              name: "D???",
              itemStyle: {
                color: "#f7a35c",
              },
            },
            {
              value: 97,
              name: "E???",
              itemStyle: {
                color: "#8085e9",
              },
            },
            {
              value: 81,
              name: "F???",
              itemStyle: {
                color: "#920783",
              },
            },
            {
              value: 29,
              name: "G???",
              itemStyle: {
                color: "#e4d354",
              },
            },
            {
              value: 20,
              name: "H???",
              itemStyle: {
                color: "#601986",
              },
            },
          ],
          textStyle: {
            color: "#999999",
            fontSize: 14, // ??????????????????
          },
        }, // ??????????????????
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
            name: "????????????", // ????????????
            type: "pie", // ????????????
            radius: [40, 80], // ????????????????????????
            center: ["40%", "50%"], // ????????????
            roseType: "area",
            label: {
              normal: {
                show: true,
                formatter: "{b}({d}%)", // ???????????????
              },
            },
            data: [
              {
                value: 180,
                name: "A???",
                itemStyle: {
                  color: "#06f3ff",
                },
              }, // ???????????????????????????
              {
                value: 180,
                name: "B???",
                itemStyle: {
                  color: "#d33535",
                },
              },
              {
                value: 165,
                name: "C???",
                itemStyle: {
                  color: "#90ed7d",
                },
              },
              {
                value: 151,
                name: "D???",
                itemStyle: {
                  color: "#f7a35c",
                },
              },
              {
                value: 97,
                name: "E???",
                itemStyle: {
                  color: "#8085e9",
                },
              },
              {
                value: 81,
                name: "F???",
                itemStyle: {
                  color: "#920783",
                },
              },
              {
                value: 29,
                name: "G???",
                itemStyle: {
                  color: "#e4d354",
                },
              },
              {
                value: 20,
                name: "H???",
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
            // ??????????????????????????????
            // ["amount", "name"],
            [48212, "E???"],
            [38254, "D???"],
            [41032, "C???"],
            [22755, "B???"],
            [20145, "A???"],
            // [79146, '??????'],
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
            show: false, // ???????????????
          },
          axisTick: {
            show: false, // ???????????????
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
              // ??????data??????????????????????????????
              x: "amount",
              y: "name",
            },
            barWidth: "10px",
            barGap: "10%" /*?????????????????????????????????????????????*/,
            barCategoryGap: "0px", // ?????????
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