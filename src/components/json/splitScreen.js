let screen=`
<template>
  <div class="content">
     
    <div class="titlediv">
      <span class="el-icon-video-camera"></span>
      <span>分屏功能</span>
      <span class="button-class"><el-button @click="viewclick('drag')">查看代码</el-button></span>
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
    <el-dialog
      title="查看代码"
      :visible.sync="dialogVisible"
      width="70%"
      :before-close="handleClose"
    >
      <MonacoEditor
        width="100%"
        height="600"
        language="typescript"
        :code="codeData"
        :editorOptions="options"
        @mounted="onMounted"
        @codeChange="onCodeChange"
        ref="editorref"
      >
      </MonacoEditor>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
      </span>
    </el-dialog>
  </div>
  
</template>

<script>
import MonacoEditor from "vue-monaco-editor";
export default {
  name: "sys-depart-mreldepartlist",
  data() {
    return {
      offset: 0.15,
      codeData:'',
      dialogVisible:false,
      clitype:''
    };
  },
   components: {
    MonacoEditor,
  },
  filters: {},
  created() {},
  methods: {
       viewclick(type) {
      console.log(type);
      this.clitype = type;
      this.dialogVisible = true;
      if (type == "drag") {
        this.codeData = jsondrag.aa;
      }}
  },
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
  .button-class{
    display: inline-block;
    float: right;
  }
}

</style>
// 封装好的组件

//////////
<template>
  <div class="split-pane-wrapper" ref="outer">
    <div class="pane pane-left" :style="{ width: '￥{leftOffsetPercent}' }">
      <slot name="pane-left"></slot>
    </div>

    <div
      class="trigger-icon"
      :style="{ width: '￥{triggerWidth}px', left: '￥{triggerLeft}' }"
      @mousedown="handleMOuseDown"
    >
      <div :style="{ width: '￥{triggerWidth}px' }" class="t-b">
        <span :style="{ width: '￥{triggerWidth}px' }" class="t-xian"></span>
        <span :style="{ width: '￥{triggerWidth}px' }" class="t-xian"></span>
        <span :style="{ width: '￥{triggerWidth}px' }" class="t-xian"></span>
        <span :style="{ width: '￥{triggerWidth}px' }" class="t-xian"></span>
        <span :style="{ width: '￥{triggerWidth}px' }" class="t-xian"></span>
        <span :style="{ width: '￥{triggerWidth}px' }" class="t-xian"></span>
        <span :style="{ width: '￥{triggerWidth}px' }" class="t-xian"></span>
      </div>
    </div>

    <div class="pane pane-right" :style="{ left: '￥{leftOffsetPercent}' }">
      <slot name="pane-right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "SplitPane",
  props: {
    value: {
      type: Number,
      default: 0.5,
    },
    triggerWidth: {
      type: Number,
      default: 5,
    },
    maxLength: {
      type: Number,
      default: 0.9,
    },
    minLength: {
      type: Number,
      default: 0.1,
    },
  },
  data() {
    return {
      mouseDown: false,
      initOffest: 0,
    };
  },
  computed: {
    leftOffsetPercent() {
      return '{this.value * 100}%';
    },
    // 滑块各占一半
    triggerLeft() {
      return 'calc(￥{this.value * 100}% - ￥{this.triggerWidth / 2}px)';
    },
  },
  methods: {
    handleMOuseDown(event) {
      document.addEventListener("mousemove", this.handleMouseMove);
      document.addEventListener("mouseup", this.handleMouseUp);
      this.mouseDown = true;
      // 获取鼠标距离滑块最左侧距离
      this.initOffest =
        event.pageX - event.srcElement.getBoundingClientRect().left;
    },
    handleMouseMove(event) {
      if (!this.mouseDown) return;
      const outer = this.$refs.outer.getBoundingClientRect();
      let offsetPercent =
        (event.pageX - outer.left - this.initOffest + this.triggerWidth / 2) /
        outer.width;
      if (offsetPercent > this.maxLength) offsetPercent = this.maxLength;
      if (offsetPercent < this.minLength) offsetPercent = this.minLength;
      this.$emit("update:value", offsetPercent);
    },
    handleMouseUp() {
      this.mouseDown = false;
      document.removeEventListener(
        "mousemove",
        function() {
          console.log("--mousemove监听被移除");
        },
        false
      );
      document.removeEventListener(
        "mouseup",
        function() {
          console.log("--mouseup监听被移除");
        },
        false
      );
    },
  },
};
</script>
<style scoped>
.split-pane-wrapper {
  position: relative;
  width: 100%;
  height: 800px;
  /*background-color: palegoldenrod;*/
}
.pane {
  height: 100%;
  position: absolute;
  top: 0;
}
.pane-left {
  /*background-color: peru;*/
}
.pane-right {
  right: 0;
  overflow: auto;
  /*background-color: blue;*/
}
.trigger-icon {
  position: absolute;
  height: 100%;
  background-color: #c1c1c1;
  position: absolute;
  top: 0;
  z-index: 100;
  cursor: col-resize;
}
.t-b {
  position: absolute;
  top: 50%;
  left: 0;
}
.t-xian {
  display: block;
  height: 5px;
  background: #ffffff;
  margin-bottom: 1px;
}
</style>
// 全局注册
// components内index.js

import SplitPane from "./SplitPane";
export default {
    install(Vue) {
        Vue.component('split-pane',SplitPane)
    }
}


// 全局引用
// main.js内
import components from "./components/index"
Vue.use(components)

`
export default{
  screen
}