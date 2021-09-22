<template>
  <div class="elasticlayout">
    <div class="titlediv">
      <span class="el-icon-ice-tea"></span>
      <span>弹性布局display：flex；</span>
    </div>
    <el-button @click="exportExcel" style="float:right;margin-bottom:10px">点击导出弹性布局</el-button>
    <el-table :data="tableData" style="width: 100%" border id="out-eltable">
      <el-table-column type="index" width="50" label="序号" align="center">
      </el-table-column>
      <el-table-column prop="name" label="属性名" width="400">
      </el-table-column>
      <el-table-column prop="attributevalue" label="属性值">
        <template slot-scope="scope">
          <div v-html="scope.row.attributevalue"></div>
        </template>
      </el-table-column>
      <el-table-column prop="meaning" label="对应含义">
        <template slot-scope="scope">
          <div v-html="scope.row.meaning"></div>
        </template>
      </el-table-column>
    </el-table>
    <!-- <el-dialog
      :title="dialogtitle"
      :visible.sync="dialogVisible"
      width="800px"
      height="600px"
      destroy-on-close
      :close-on-click-modal="false"
    >
      <el-form ref="editForm" :model="editForm" label-width="120px">
        <el-form-item label="岗位备注" label-width="100px">
          <el-input
            v-model="editForm.name"
            autocomplete="off"
            placeholder="请输入岗位备注"
          ></el-input>
        </el-form-item>

        <el-form-item size="large" style="text-align:right">
          <el-button @click="resetForm()">取消</el-button>
          <el-button type="primary" @click="onSubmit()">确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog> -->
  </div>
</template>
<script>
import FileSaver from "file-saver";

import XLSX from "xlsx";
// import { mapGetters } from "vuex";
import jsonData from "@/components/json/jsonData";
export default {
  name: "elasticlayout",
  data() {
    return {
      dialogtitle: "",
      editForm: {},
      tableData: [],
      dialogVisible: false,
    };
  },
  computed: {
    // ...mapGetters(["gettableData"]),
  },
  components: {},
  methods: {
    // npm install --save xlsx file-saver
    exportExcel() {
      var wb = XLSX.utils.table_to_book(document.querySelector("#out-eltable"));
      var wbout = XLSX.write(wb, {
        bookType: "xlsx",
        bookSST: true,
        type: "array",
      });
      try {
        FileSaver.saveAs(
          new Blob([wbout], { type: "application/octet-stream" }),
          "弹性布局.xlsx"
        );
      } catch (e) {
        if (typeof console !== "undefined") console.log(e, wbout);
      }
      return wbout;
    },
    addlist() {
      this.dialogVisible = true;
    },
    resetForm() {},
    onSubmit() {
      // this.$axios
      //   .post("/listAdd", {
      //     params: {
      //       obj: this.editForm,
      //     },
      //   })
      //   .then((res) => {
      //     // console.log("请求成功"+res.data.data);
      //     this.tableData = res.data.data;
      //     localStorage.setItem("tableData", JSON.stringify(this.tableData));
      //     console.log("this.tableData");
      //     console.log(this.tableData);
      //     console.log(this.gettableData)
      //   });
    },
    // getData() {
    //   this.$axios.get("/list").then((res) => {
    //     console.log(res.data.data);
    //     localStorage.getItem(arr);
    //     this.tableData = arr;
    //   });
    // },
  },
  mounted() {
    this.tableData = jsonData.disflexData;
    // this.$axios.get("/list").then((res) => {

    //   this.tableData = res.data.data;

    // });
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
.elasticlayout .el-table .cell {
  white-space: pre-line !important;
}
</style>
