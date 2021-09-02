<template>
  <div class="somefeatures">
    <div class="titlediv">
      <span class="el-icon-ice-tea"></span>
      <span>一些功能</span>
    </div>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <span class="smalltitle">拖拽功能</span>
          <span class="smalltitle smalltitle1">
            <el-button @click="viewclick('drag')">查看代码</el-button>
          </span>
          <dragList id="dragid" />
        </div>
      </el-col>
      <el-col :span="12"
        ><div class="grid-content bg-purple-light">
          <span class="smalltitle">复制粘贴功能</span>
          <span class="smalltitle smalltitle1">
            <el-button @click="viewclick('copy')">查看代码</el-button>
          </span>
          <copyandpaste /></div
      ></el-col>
    </el-row>
    <el-dialog
      title="查看代码"
      :visible.sync="dialogVisible"
      width="70%"
      :before-close="handleClose"
    >
      <!-- <quill-editor
        ref="text"
        v-model="content"
        class="myQuillEditor"
        :options="editorOption"
      /> -->
      <MonacoEditor
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
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
// import { quillEditor } from "vue-quill-editor";
// import "quill/dist/quill.core.css";
// import "quill/dist/quill.snow.css";
// import "quill/dist/quill.bubble.css";
import MonacoEditor from "vue-monaco-editor";
// import VueClipboard from 'vue-clipboard2'
import jsonData from "@/components/json/jsonData";
import jsondrag from "@/components/json/jsondrag";
import jsoncopy from "@/components/json/jsoncopy";
import dragList from "@/components/func/draglist.vue";
import copyandpaste from "@/components/func/copyandpaste.vue";
export default {
  inject:['reload'],
  name: "somefeatures",
  data() {
    return {
      clitype: "",
      editor: null,
      codeData: "",
      options: {
        selectOnLineNumbers: false,
      },
      content: "",
      editorOption: {},
      inputdata: "",
      tableData: [],
      dialogVisible: false,
    };
  },
  computed: {},
  components: {
    copyandpaste,
    dragList,
    MonacoEditor,
    // quillEditor,
  },
  methods: {
    onMounted(editor) {
      // console.log(this.$refs.editorref);
      console.log(editor)
      // this.editor = editor;
    },
    onCodeChange() {
      // console.log(this.editor.getValue());
    },
    viewclick(type) {
      console.log(type);
      this.clitype = type;
      this.dialogVisible = true;
      this.$nextTick(() => {
        if (type == "drag") {
          this.codeData = jsondrag.aa;
        }
        if (type == "copy") {
          this.codeData = jsoncopy.copy;
        }
      });
    },
    handleClose() {

      this.dialogVisible = false;
      this.$nextTick(() => {
        this.reload()
      });
    },
  },
  mounted() {
    this.tableData = jsonData.jsmethodData;
  },
};
</script>
<style scoped lang="scss">
.somefeatures {
  .titlediv {
    font-size: 16px;
    font-weight: 600;
    line-height: 50px;
    text-align: left;
  }
  .grid-content {
    box-shadow: 0px 2px 4px rgb(53 53 53 / 35%);
    border-radius: 10px;
    width: 95%;
    height: 360px;
    padding: 20px;
    .smalltitle {
      text-align: left;
      font-size: 14px;
      font-weight: 600;
      width: 50%;
      display: inline-block;
    }
    .smalltitle1 {
      text-align: right !important;
    }
  }
}
</style>
