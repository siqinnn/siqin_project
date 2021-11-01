<template>
  <div class="somefeatures">
    <div class="titlediv">
      <span class="el-icon-ice-tea"></span>
      <span>一些功能</span>
    </div>
    <el-row :gutter="20">
      <el-col :span="24" style="margin-bottom:20px" class="buttonclass">
        <el-button @click="viewclick('all')"
          >element增删改查table查看代码</el-button
        >
        <el-button @click="viewclick('export')">导出功能查看代码</el-button>
        <el-button @click="viewclick('import')">导入功能查看代码</el-button>
        <el-button @click="viewclick('axios')">封装的axios查看代码</el-button>
        <el-button @click="viewclick('save')">本地存储查看代码</el-button>
        <el-button @click="viewclick('date')">时间格式化查看代码</el-button>
        <el-button @click="viewclick('fetch')"
          >fetch请求的封装查看代码</el-button
        >
        <el-button @click="viewclick('judge')"
          >设备判断：android、ios、web查看代码 </el-button
        ><el-button @click="viewclick('transition')"
          >时间与时间戳转换查看代码</el-button
        >
        <el-button @click="viewclick('pc')">是否为PC端查看代码</el-button>
        <el-button @click="viewclick('random')"
          >生成随机数范围查看代码</el-button
        >
        <el-button @click="viewclick('img')"
          >判断图片加载完成查看代码</el-button
        >
        <el-button @click="viewclick('cursor')"
          >光标所在位置插入字符查看代码</el-button
        >
        <el-button @click="viewclick('base')"
          >光图片地址转base64查看代码</el-button
        >
        <el-button @click="viewclick('down')"
          >base64图片下载功能查看代码</el-button
        >
        <el-button @click="viewclick('func')">函数防抖与节流查看代码</el-button>
        <!-- <el-button @click="viewclick('tableedit')">table列表内编辑</el-button> -->
      </el-col>
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
        ><div class="grid-content bg-purple bg-purple-margin">
          <span class="smalltitle">树的子内拖拽新增编辑删除</span>
          <span class="smalltitle smalltitle1">
            <el-button @click="viewclick('tree')">查看代码</el-button>
          </span>
          <treelist /></div
      ></el-col>
      <el-col :span="12"
        ><div class="grid-content bg-purple-light bg-purple-margin">
          <span class="smalltitle">table表格内编辑</span>
          <span class="smalltitle smalltitle1">
            <el-button @click="viewclick('tableedit')">查看代码</el-button>
          </span>
          <tableditlist /></div
      ></el-col>
    </el-row>
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
import jsonData from "@/components/json/jsonData";
import jsondrag from "@/components/json/jsondrag";
import jsoncopy from "@/components/json/jsoncopy";
import jsoneditData from "@/components/json/jsoneditData";
import jsonexportData from "@/components/json/jsonexportData";
import jsonimportData from "@/components/json/jsonimportData";
import jsonaxiosData from "@/components/json/jsonaxiosData";
import jsonsaveData from "@/components/json/jsonsaveData";
import jsonallData from "@/components/json/jsonallData";
import jsonverify from "@/components/json/jsonverify";
import jsoncharts from "@/components/json/jsoncharts";
import jsonsearch from "@/components/json/jsonsearch";
import jsontree from "@/components/json/jsontree";
import dragList from "@/components/func/draglist.vue";
import searchlist from "@/components/func/searchlist.vue";
import copyandpaste from "@/components/func/copyandpaste.vue";
import tableditlist from "@/components/func/tableditlist.vue";
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
    tableditlist,
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
      if (type == "export") {
        this.codeData = jsonexportData.exportData;
      }
      if (type == "import") {
        this.codeData = jsonimportData.importData;
      }
      if (type == "axios") {
        this.codeData = jsonaxiosData.axiosData;
      }
      if (type == "save") {
        this.codeData = jsonsaveData.saveData;
      }
      if (type == "date") {
        this.codeData = jsonsaveData.dateData;
      }
      if (type == "fetch") {
        this.codeData = jsonsaveData.fetchData;
      }
      if (type == "judge") {
        this.codeData = jsonsaveData.judgeData;
      }
      if (type == "transition") {
        this.codeData = jsonsaveData.transitionData;
      }
      if (type == "pc") {
        this.codeData = jsonsaveData.pcData;
      }
      if (type == "random") {
        this.codeData = jsonsaveData.randomData;
      }
      if (type == "img") {
        this.codeData = jsonsaveData.imgData;
      }
      if (type == "cursor") {
        this.codeData = jsonsaveData.cursorData;
      }
      if (type == "base") {
        this.codeData = jsonsaveData.baseData;
      }
      if (type == "down") {
        this.codeData = jsonsaveData.downData;
      }
      if (type == "func") {
        this.codeData = jsonsaveData.funcData;
      }
      if (type == "all") {
        this.codeData = jsonallData.allData;
      }

      if (type == "tableedit") {
        this.codeData = jsoneditData.editData;
      }
    },
    handleClose() {
      this.reload();
      this.dialogVisible = false;
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
  .grid-contentw {
    margin-top: 20px;
    width: 97.5%;
  }
  .bg-purple-margin{
    margin-top: 20px;
  }

  .buttonclass button {
    margin-top: 10px;
    margin-left: 0;
    margin-right: 10px;
    box-shadow: 0px 2px 4px rgb(53 53 53 / 35%);
    border-radius: 10px;
  }
}
</style>
