<template>
  <div class="Siderbar">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <span class="toggle" @click="changeCollapsed" style="z-index:999">
      <i :class="isCollapse ? 'el-icon-arrow-right' : 'el-icon-arrow-left'"></i>
    </span>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu> -->
  </div>
</template>
<script>
export default {
  name: "Siderbar",
  data() {
    return {
      isCollapse: true,
    };
  },
  components: {},
  methods: {
    changeCollapsed(state) {
      if (!state.isCollapse) {
        state.menuWidth = "64px";
      } else {
        state.menuWidth = "260px";
      }
      state.isCollapse = !state.isCollapse;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.Siderbar {
  position: relative;
  height: 890px;
  // border-right: solid 1px #e6e6e6;
  overflow: auto;
  // width: calc(100% - );
  // background: linear-gradient(180deg, #13201e 0, rgba(35, 32, 30, 0));
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.Siderbar .toggle {
  background: red;
  display: block;
  position: absolute;
  font-size: 18px;
  cursor: pointer;
  border-radius: 3px;
  right:-18px;
  top: 44%;
  line-height: 80px;
  color: #444a5e;
  i {
    font-weight: bold;
  }
}
.el-menu--collapse{
  height: 873px;
}
</style>
