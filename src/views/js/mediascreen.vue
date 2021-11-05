<template>
  <div class="content">
    <div class="titlediv">
      <span class="el-icon-video-camera"></span>
      <span>图片响应式</span>
      <span class="button-class"
        ><el-button @click="viewclick('screen')" type="warning" plain>查看代码</el-button></span
      >
    </div>

    <div id="gallery" class="container-fluid">
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-1.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-2.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-3.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-4.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-5.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-6.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-7.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-8.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-9.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-10.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-11.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-12.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-13.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-14.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-15.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-16.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-17.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-18.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-19.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-20.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-21.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-22.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-23.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-24.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-25.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-26.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-27.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-28.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-29.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-30.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-31.jpg"
        class="img-responsive"
      />
      <img
        src="http://haiyong.site/wp-content/uploads/2021/11/maomao-32.jpg"
        class="img-responsive"
      />
    </div>
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
import imgData from "@/components/json/imgData";
import MonacoEditor from "vue-monaco-editor";
export default {
  name: "sys-depart-mreldepartlist",
  components: {
    MonacoEditor,
  },
  data() {
    return {
      codeData: "",
      dialogVisible: false,
      clitype: "",
      options: "",
    };
  },
  filters: {},
  created() {},
  methods: {
    handleClose() {
      this.dialogVisible = false;
    },
    viewclick(type) {
      console.log(type);
      this.clitype = type;
      this.dialogVisible = true;
      if (type == "screen") {
        this.codeData = imgData.imgdata;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.titlediv {
  font-size: 16px;
  font-weight: 600;
  line-height: 50px;
  text-align: left;
}
.button-class {
  display: inline-block;
  float: right;
}
@media (max-width: 2400px) {
  #gallery {
    column-count: 8;
    column-gap: 20px;
  }
}
@media (max-width: 2000px) {
  #gallery {
    column-count: 7;
    column-gap: 20px;
  }
}
@media (max-width: 1600px) {
  #gallery {
    column-count: 6;
    column-gap: 20px;
  }
}
@media (max-width: 1400px) {
  #gallery {
    column-count: 5;
    column-gap: 20px;
  }
}
@media (max-width: 1200px) {
  #gallery {
    column-count: 4;
    column-gap: 20px;
  }
}
@media (max-width: 1000px) {
  #gallery {
    column-count: 3;
    column-gap: 20px;
  }
}
@media (max-width: 800px) {
  #gallery {
    column-count: 2;
    column-gap: 20px;
  }
}
@media (max-width: 600px) {
  #gallery {
    column-count: 1;
  }
}
#gallery {
  column-count: 0;
  column-gap: 20px;
}
#gallery img {
  width: 100%;
  height: auto;
  margin: 4% auto;
  box-shadow: -3px 5px 15px #000;
  cursor: pointer;
  transition: all 0.2s;
}
.content {
  width: 100%;
}
</style>
