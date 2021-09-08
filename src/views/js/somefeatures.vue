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
      <el-col :span="24"
        ><div class="grid-content bg-purple-light grid-contentw">
          <span class="smalltitle">搜索部分超出下拉</span>
          <span class="smalltitle smalltitle1">
            <el-button @click="viewclick('search')">查看代码</el-button>
          </span>
          <searchlist /></div
      ></el-col>
      <el-col :span="24"
        ><div class="grid-content bg-purple-light grid-contentw">
          <span class="smalltitle">校验</span>
          <span class="smalltitle smalltitle1">
            <el-button @click="viewclick('verify')">查看代码</el-button>
          </span>
          <verifylist /></div
      ></el-col>
      <el-col :span="24"
        ><div class="grid-content bg-purple-light grid-contentw">
          <span class="smalltitle">数据可视化屏幕自适应</span>
          <span class="smalltitle smalltitle1">
            <el-button @click="viewclick('charts')">查看代码</el-button>
          </span>
          <echartlist /></div
      ></el-col>
      <el-col :span="12"
        ><div class="grid-content bg-purple-light grid-contentw">
          <span class="smalltitle">树的子内拖拽新增编辑删除</span>
          <span class="smalltitle smalltitle1">
            <el-button @click="viewclick('tree')">查看代码</el-button>
          </span>
          <treelist /></div
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
// import { quillEditor } from "vue-quill-editor";
// import "quill/dist/quill.core.css";
// import "quill/dist/quill.snow.css";
// import "quill/dist/quill.bubble.css";
import MonacoEditor from "vue-monaco-editor";
// import VueClipboard from 'vue-clipboard2'
import jsonData from "@/components/json/jsonData";
import jsondrag from "@/components/json/jsondrag";
import jsoncopy from "@/components/json/jsoncopy";
import jsonverify from "@/components/json/jsonverify";
import jsoncharts from "@/components/json/jsoncharts";
import jsonsearch from "@/components/json/jsonsearch";
import jsontree from "@/components/json/jsontree";
import dragList from "@/components/func/draglist.vue";
import searchlist from "@/components/func/searchlist.vue";
import copyandpaste from "@/components/func/copyandpaste.vue";
import verifylist from "@/components/func/verifylist.vue";
import echartlist from "@/components/func/echartlist.vue";
import treelist from "@/components/func/treelist.vue";
export default {
  inject: ["reload"],
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
    searchlist,
    verifylist,
    echartlist,
    treelist,
    // quillEditor,
  },
  methods: {
    onMounted() {},
    onCodeChange() {},
    viewclick(type) {
      console.log(type);
      this.clitype = type;
      this.dialogVisible = true;
      if (type == "drag") {
        this.codeData = jsondrag.aa;
      }
      if (type == "copy") {
        this.codeData = jsoncopy.copy;
      }
      if (type == "search") {
        this.codeData = jsonsearch.searchData;
      }
      if (type == "verify") {
        this.codeData = jsonverify.verify;
      }
      if (type == "charts") {
        this.codeData = jsoncharts.chartsdata;
      }
      if (type == "tree") {
        this.codeData = jsontree.treedata;
      }
    },
    handleClose() {
      this.reload();
      this.dialogVisible = false;
    },
  },
  mounted() {
    this.tableData = jsonData.jsmethodData;
    // console.log(jsonverify.verify)
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
  .grid-contentw {
    margin-top: 20px;
    width: 97.5%;
  }
}
</style>
