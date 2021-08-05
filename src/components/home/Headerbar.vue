<template>
  <div class="Headerbar">
    <!-- <el-row :gutter="10">
      <el-col :span="12" :offset="6"> -->
        <span class="title"> S I Q I N</span>
      <!-- </el-col>
      <el-col :span="12" :offset="6">  -->
        <span class="hint">My little project</span>
        <!-- </el-col>
    </el-row> -->
  </div>
</template>

<script>
export default {
  name: "Headerbar",
  components: {},
  methods: {},
  mounted() {},
};
</script>

<style scoped lang="scss">
.Headerbar {
  height: 36px;
  width: 100%;
  background: linear-gradient(180deg, #13201e 0, rgba(35, 32, 30, 0));
  background: #242424;
  color: white;
}
.title {
  width: 300px;
  padding-left: 10px;
  text-align: left;
  display: block;
  line-height: 36px;
}
.hint {
  // padding-right: 20px;
  width: 300px;
  text-align: right;
  display: block;
  line-height: 36px;
}
</style>
