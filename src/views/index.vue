<template>
  <div class="index">
    <el-carousel :interval="4000" type="card" height="450px">
      <el-carousel-item
        v-for="(item, index) in imgList"
        :key="index"
        style="border-radius:10px;box-shadow: 0px 2px 4px rgb(53 53 53 / 35%);"
      >
        <img :src="item.src" alt="" />
      </el-carousel-item>
    </el-carousel>
    <div class="flexbox">
      <div class="flexclass">
        <span class="maintitle"
          ><i class="el-icon-coffee"></i> &nbsp;常用知识</span
        >
        <div class="row-bg">
          <el-row type="flex" justify="space-between">
            <el-col :span="24"
              ><img class="imgclassbig" src="@/assets/18.jpg" alt=""
            /></el-col>
          </el-row>
        </div>
      </div>
      <div class="flexclass">
        <span class="maintitle"
          ><i class="el-icon-office-building"></i> &nbsp;常用知识</span
        >
        <div class="row-bg">
          <el-row type="flex" justify="space-between">
            <el-col :span="4" v-for="(item, index) in titleData" :key="index"
              ><img class="imgclass" :src="item.src" alt=""
            /></el-col>
          </el-row>
          <el-row type="flex" justify="space-between" style="margin-top:20px;">
            <el-col :span="4" v-for="(item, index) in title1Data" :key="index"
              ><img class="imgclass" :src="item.src" alt=""
            /></el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div id="wrap">
      <ul id="list">
        <img src="@/assets/1.jpg" alt="" />
        <img src="@/assets/2.jpg" alt="" />
        <img src="@/assets/3.jpg" alt="" />
        <img src="@/assets/4.jpg" alt="" />
        <img src="@/assets/5.jpg" alt="" />
        <img src="@/assets/1.jpg" alt="" />
        <img src="@/assets/2.jpg" alt="" />
        <img src="@/assets/3.jpg" alt="" />
        <img src="@/assets/4.jpg" alt="" />
        <img src="@/assets/5.jpg" alt="" />
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      cityList: [],
      tableData: [],
      titleData: [
        {
          src: require("@/assets/1.jpg"),
        },
        {
          src: require("@/assets/2.jpg"),
        },
        {
          src: require("@/assets/3.jpg"),
        },
        {
          src: require("@/assets/4.jpg"),
        },
        {
          src: require("@/assets/5.jpg"),
        },
      ],
      title1Data: [
        {
          src: require("@/assets/6.jpg"),
        },
        {
          src: require("@/assets/11.jpg"),
        },
        {
          src: require("@/assets/8.jpg"),
        },
        {
          src: require("@/assets/9.jpg"),
        },
        {
          src: require("@/assets/10.jpg"),
        },
      ],
      imgList: [
        {
          title: "1",
          src: require("@/assets/coffe2.jpg"),
        },
        {
          title: "2",
          src: require("@/assets/woman.jpg"),
        },
        {
          title: "3",
          src: require("@/assets/computer.jpg"),
        },
      ],
    };
  },
  components: {},
  mounted() {
    // this.clickMe();
    // this.getTitleData();
  },
  methods: {
    // clickMe() {
    //   // 这里请求的地址要和mock中定义的请求地址一致
    //   this.$axios.get("http://localhost:8081/test/city").then((res) => {
    //     console.log(77, res);
    //     if (res.data) {
    //       this.cityList = res.data.cityList;
    //     }
    //   });
    // },
    // getTitleData() {
    //   // 这里请求的地址要和mock中定义的请求地址一致
    //   this.$axios.get("http://localhost:8081/test/titleData").then((res) => {
    //     console.log(77, res);
    //     if (res.data) {
    //       this.titleData = res.data.titleData;
    //     }
    //   });
    // },
  },
};
</script>

<style scoped lang="scss">
#wrap {
  width: 1000px;
  height: 200px;
  border: 1px solid #000;
  position: relative;
  margin: 20px auto;
  overflow: hidden;
}
#list {
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  -webkit-animation: 6s move infinite linear;
  width: 200%;
}
#list img {
  list-style: none;
  width: 196px;
  height: 196px;
  border: 1px solid #fff;
  background: rgb(163, 151, 151);
  color: #fff;
  font: 50px/98px Arial;
  text-align: center;
  float: left;
}
@-webkit-keyframes move {
  0% {
    left: 0;
  }
  100% {
    left: -1000px;
  }
}
@keyframes move {
  0% {
    left: 0;
  }
  100% {
    left: -1000px;
  }
}
#wrap:hover #list {
  -webkit-animation-play-state: paused; /*动画暂停播放*/
}
.index {
  width: 100%;
  .flexbox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .maintitle {
    display: block;
    color: #333;
    margin-top: 20px;
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    margin-bottom: 20px;
  }
  .imgclass {
    border-radius: 10px;
  }
  .imgclassbig {
    // height:315px;
    border-radius: 10px;
  }
  .flexclass {
    width: 49%;
    .row-bg {
      // height: 315px;
      border-radius: 10px;
      padding: 10px;
      background: #f9fafb;
      box-shadow: 0px 2px 4px rgb(53 53 53 / 35%);
    }
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.index img {
  width: 100%;
  height: 100%;
}
</style>
