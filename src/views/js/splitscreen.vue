<template>
  <div class="content">
    <div class="titlediv">
      <span class="el-icon-video-camera"></span>
      <span>分屏功能</span>
    </div>
    <split-pane :value.sync="offset">
      <template slot="pane-left">
        <div class="allclass leftclass"></div>
      </template>
      <template slot="pane-right">
        <div class="allclass rightclass">
          
        </div>
      </template>
    </split-pane>
  </div>
</template>

<script>
export default {
  name: "sys-depart-mreldepartlist",
  components: {},
  data() {
    return {
      offset: 0.15,
    };
  },
  filters: {},
  created() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.content{
  width: 100%;
.titlediv {
    font-size: 16px;
    font-weight: 600;
    line-height: 50px;
    text-align: left;
  }
  .allclass{
    width: 100%;
    height: 100%;
  }
  .leftclass{
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
    background: rgb(224, 214, 214);
    opacity: 0.5;
  }
  .rightclass{
    border-bottom-right-radius: 30px;
    border-top-right-radius: 30px;
    background: rgb(189, 204, 189);
    opacity: 0.5;
  }
}

</style>
