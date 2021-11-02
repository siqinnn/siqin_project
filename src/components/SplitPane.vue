<template>
  <div class="split-pane-wrapper" ref="outer">
    <div class="pane pane-left" :style="{ width: `${leftOffsetPercent}` }">
      <slot name="pane-left"></slot>
    </div>

    <div
      class="trigger-icon"
      :style="{ width: `${triggerWidth}px`, left: `${triggerLeft}` }"
      @mousedown="handleMOuseDown"
    >
      <div :style="{ width: `${triggerWidth}px` }" class="t-b">
        <span :style="{ width: `${triggerWidth}px` }" class="t-xian"></span>
        <span :style="{ width: `${triggerWidth}px` }" class="t-xian"></span>
        <span :style="{ width: `${triggerWidth}px` }" class="t-xian"></span>
        <span :style="{ width: `${triggerWidth}px` }" class="t-xian"></span>
        <span :style="{ width: `${triggerWidth}px` }" class="t-xian"></span>
        <span :style="{ width: `${triggerWidth}px` }" class="t-xian"></span>
        <span :style="{ width: `${triggerWidth}px` }" class="t-xian"></span>
      </div>
    </div>

    <div class="pane pane-right" :style="{ left: `${leftOffsetPercent}` }">
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
      return `${this.value * 100}%`;
    },
    // 滑块各占一半
    triggerLeft() {
      return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)`;
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
