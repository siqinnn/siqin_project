<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <el-container>
      <el-header style="height:auto;"><Headerbar /></el-header>
      <el-container>
        <el-aside width="auto"><Siderbar /></el-aside>
        <el-container>
          <el-main><Mainbar /></el-main>
          <el-footer><Footerbar /></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Siderbar from "./home/Siderbar";
import Headerbar from "./home/Headerbar";
import Mainbar from "./home/Mainbar";
import Footerbar from "./home/Footerbar";
export default {
  name: "Home",
  components: {
    // HelloWorld
    Siderbar,
    Headerbar,
    Mainbar,
    Footerbar,
  },
};
</script>
<style scoped>
.el-header {
  padding: 0;
}
.el-aside{
  width:auto;
}
</style>
