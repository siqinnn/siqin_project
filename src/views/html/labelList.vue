<template>
  <div class="labenList">
    <div class="titlediv">
      <span class="el-icon-ice-tea"></span>
      <span>html标签</span>

      <el-input
        style="width:20%;float:right"
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="inputdata"
      >
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="search(inputdata)"
        ></el-button>
      </el-input>
    </div>

    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column
        v-for="item in columns"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :formatter="item.formatter"
        :width="item.width"
        :type="item.type"
      >
      </el-table-column>
      <!-- <el-table-column type="index" width="50" label="序号" align="center">
      </el-table-column>
      <el-table-column prop="name" label="标签名"> </el-table-column>
      <el-table-column prop="explain" label="说明"> </el-table-column>
      <el-table-column prop="remark" label="备注"> </el-table-column>
      <el-table-column prop="use" label="用法"> </el-table-column> -->
    </el-table>
  </div>
</template>
<script>
// import { mapGetters } from "vuex";
import jsonData from "@/components/json/jsonData";
export default {
  name: "labenList",
  data() {
    return {
      columns: [
        {
          label: "序号",
          type: "index",
        },
        {
          label: "标签名",
          prop: "name",
          width:"150"
        },
        {
          label: "说明",
          prop: "explain",
          width:"280"
        },
        {
          label: "备注",
          prop: "remark",
          width:"220"
          // formatter(row,column,value){
          //   return {
          //     0:"管理员",
          //     1:"普通用户"
          //   }[value]
          // }
        },
        {
          label: "用法",
          prop: "use",
        },
      ],
      inputdata: "",
      tableData: [],
      dialogVisible: false,
    };
  },
  computed: {},
  components: {},
  methods: {
    search(val) {
      this.inputdata = val;
      let obj = this.tableData.find((val) => val.name == this.inputdata);
      this.tableData = [obj];
    },
    addlist() {
      this.dialogVisible = true;
    },
    resetForm() {},
    onSubmit() {},
  },
  mounted() {
    this.tableData = jsonData.labelData;

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
</style>
