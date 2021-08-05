<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <el-container>
      <el-header style="height:auto;"><Headerbar /></el-header>
      <el-container style="height:890px">
        <el-aside width="auto"><Siderbar /></el-aside>
        <el-container>
          <el-main><router-view /></el-main>
          <el-footer><Footerbar /></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Siderbar from "./home/Siderbar";
import Headerbar from "./home/Headerbar";
import Footerbar from "./home/Footerbar";
export default {
  name: "Home",
  components: {
    Siderbar,
    Headerbar,
    Footerbar,
  },
};
</script>
<style scoped>
.el-header {
  padding: 0;
}
.el-aside {
  width: auto;
  overflow: visible;
  border-right: solid 1px #e6e6e6;
  /* background: black; */
  /* opacity: 0.2; */
}
</style>
