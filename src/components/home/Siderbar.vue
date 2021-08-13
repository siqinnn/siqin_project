<template>
  <div class="Siderbar">
    <span class="toggle" @click="changeCollapsed" style="z-index:999">
      <i :class="isCollapse ? 'el-icon-arrow-right' : 'el-icon-arrow-left'"></i>
    </span>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <div v-for="(item, index) in menuList" :key="index">
        <router-link :to="item.path" v-if="item.path != undefined">
          <el-menu-item :index="item.index" @click="menuClick(item)">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </router-link>
      </div>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "Siderbar",
  data() {
    return {
      isCollapse: true,
      menuList: [
        {
          index: "1",
          title: "首页",
          icon: "el-icon-s-home",
          path: "/index",
        },
        {
          index: "2",
          title: "导航",
          icon: "el-icon-document",
        },
        {
          index: "3",
          title: "导航1",
          icon: "el-icon-setting",
        },
      ],
    };
  },
  computed: {},
  components: {},
  methods: {
    changeCollapsed() {
      this.isCollapse = !this.isCollapse;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    menuClick(val) {
      this.$router.push({ path: val.path });
    },
  },
  mounted() {},
};
</script>
<style scoped lang="scss">
.Siderbar {
  position: relative;
  height: 100%;
  overflow: visible !important;
}
.Siderbar .toggle {
  background: #242424;
  display: block;
  position: absolute;
  font-size: 18px;
  cursor: pointer;
  border-radius: 3px;
  right: -18px;
  top: 48%;
  line-height: 80px;
  color: white;
}
.el-menu-vertical-demo {
  height: 100%;
  overflow: auto !important;
}
.el-menu {
  border-right: 0;
}
.titleclass {
  color: #333;
}
.el-menu-item.is-active {
  color: #303133;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 300px;
  min-height: 400px;
}
</style>
