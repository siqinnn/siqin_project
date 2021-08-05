<template>
  <div class="index">
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <!-- <h3 class="medium">{{ item.title }}</h3> -->
        <img :src="item.src" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      imgList: [
        {
          title: "1",
          src: require('@/assets/coffe2.jpg'),
        },
         {
          title: "2",
          src: require('@/assets/woman.jpg'),
        },
         {
          title: "3",
          src: require('@/assets/computer.jpg'),
        },
      ],
    };
  },
  components: {},
  methods: {},
  mounted() {},
};
</script>

<style scoped lang="scss">
.index {
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
.index img{
  width: 100%;
  height: 100%;
}
</style>
