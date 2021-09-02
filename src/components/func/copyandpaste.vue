<template>
  <div class="copy">
    <div style="display:flex;flex-direction:row;margin-top:20px;">
      <div style="width: 100%;height: 300px;border:.1px dashed #999999;">
        <div class="container">
          <p>{{ detail }}</p>
          <el-button
            class="fs12"
            v-clipboard:copy="detail"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
          >
            复制
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import jsonData from "@/components/json/jsonData";
export default {
  name: "copy",
  components: {
    // VueClipboard,
  },
  data() {
    return {
      message: "",
      detail: jsonData.copydata,
    };
  },
  computed: {},
  methods: {
    onCopy(a) {
      console.log(a);
      this.$message({
        showClose: true,
        message: "复制成功",
        type: "success",
      });
    },
    onError() {
      console.log("无法复制文本！");
    },
  },
};
</script>
<style scoped lang="scss">
.container {
  margin: 20px;
  .fs12 {
    float: right;
    
  }
}
</style>
