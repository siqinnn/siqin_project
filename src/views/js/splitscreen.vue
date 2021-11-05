<template>
  <div class="content">
     
    <div class="titlediv">
      <span class="el-icon-video-camera"></span>
      <span>分屏功能</span>
      <span class="button-class"><el-button @click="viewclick('screen')" type="warning" plain>查看代码</el-button></span>
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
import splitScreen from "@/components/json/splitScreen";
import MonacoEditor from "vue-monaco-editor";
export default {
  name: "sys-depart-mreldepartlist",
  data() {
    return {
      offset: 0.15,
      codeData:'',
      dialogVisible:false,
      clitype:'',
      options:''
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
      if (type == "screen") {
        this.codeData = splitScreen.screen;
      }},
      handleClose(){
        this.dialogVisible=false
      }
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
    background: rgb(199, 198, 198);
    opacity: 0.5;
  }
  .rightclass{
    border-bottom-right-radius: 30px;
    border-top-right-radius: 30px;
    background: rgb(202, 206, 202);
    opacity: 0.5;
  }
  .button-class{
    display: inline-block;
    float: right;
  }
}

</style>
