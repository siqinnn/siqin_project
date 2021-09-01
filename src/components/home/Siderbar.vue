<template>
  <div class="Siderbar">
    <span class="toggle" @click="changeCollapsed" style="z-index:999">
      <i :class="isCollapse ? 'el-icon-arrow-right' : 'el-icon-arrow-left'"></i>
    </span>
    <el-menu
      @select="selectMenu"
      :default-active="activelist"
      active-text-color="#926d53"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <div v-for="(item, index) in menuList" :key="index">
        <template v-if="item.children && item.children.length == 0" >
          <router-link :to="item.path" v-if="item.path != undefined">
            <el-menu-item :index="item.index" @click="menuClick(item)">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </router-link>
        </template>
        <el-submenu v-else :index="item.index">
          <template slot="title">
            <i :class="item.icon"></i>
            <span v-if="!isCollapse">{{ item.title }}</span>
          </template>
          <template v-for="child in item.children">
            <!-- 这里是类似递归循环 -->
            <sidebar-item
              v-if="child.children && child.children.length > 0"
              :item="child"
              :key="child.index"
            />
            <el-menu-item
              v-else
              :index="child.index"
              @click="menuClick1(child)"
              :key="child.index"
            >
              <span slot="title">{{ child.title }}</span>
            </el-menu-item>
          </template>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "Siderbar",
  data() {
    return {
      activelist:this.$route.name,
      isCollapse: true,
      startRouter: true, //开启路由标识， ，启用该模式会在激活导航时以 index 作为 path 进行路由跳转
      currentIndexLight: "", //当前激活菜单的 index  高亮显示
      arrIndex: [],
      menuList: [
        {
          index: "1",
          title: "Home page",
          icon: "el-icon-s-home",
          path: "/Index",
          children: [], 
        },
        {
          index: "2",
          title: "With respect to Html",
          icon: "el-icon-s-help",
          children: [
            {
              index: "3",
              path: "/labelList",
              title: "html标签",
              children: [],
            },
            {
              index: "4",
              path: "/elasticlayout",
              title: "弹性布局",
              children: [],
            },
          ],
        },
        {
          index: "5",
          title: "With respect to Javascript",
          icon: "el-icon-s-opportunity",
          children: [
             {
              index: "6",
              path: "",
              title: "",
              children: [],
            },
            {
              index: "7",
              path: "",
              title: "",
              children: [],
            },
          ], 
        },
      ],
    };
  },
  computed: {
   
  },
  components: {},
  methods: {
    changeCollapsed() {
      this.isCollapse = !this.isCollapse;
    },
    menuClick(val) {
      this.$router.push({ path: val.path });
    },
    menuClick1(val) {
      console.log(val);
      this.$router.push({ path: val.path });
    },
    selectMenu(key, keyPath) {
      console.log("key, keyPath");
      console.log(key, keyPath);
      this.currentIndexLight = key;
    },
    // 展开指定的 sub-menu
    handleOpen(key, keyPath) {
      console.log("展开的时候触发", key, keyPath);
    },

    //    收起指定的 sub-menu
    handleClose(key, keyPath) {
      console.log("收起的时候触发", key, keyPath);
    },
  },
  mounted() {

  },
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
