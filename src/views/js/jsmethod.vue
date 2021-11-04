<template>
  <div class="jsmethod">
    <div class="titlediv">
      <span class="el-icon-ice-tea"></span>
      <span>Javascript方法</span>
      <!-- <el-input
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
      </el-input> -->
    </div>

    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column type="index" width="50" label="序号" align="center"> </el-table-column>
      <el-table-column prop="name" width="400" label="方法名字"> </el-table-column>
      <el-table-column prop="code" label="代码"> </el-table-column>
      <!-- <el-table-column prop="remark" label="备注"> </el-table-column>
      <el-table-column prop="use" label="用法"> </el-table-column> -->
    </el-table>
  </div>
</template>
<script>
// import { mapGetters } from "vuex";
import jsonData from "@/components/json/jsonData";
export default {
  name: "jsmethod",
  data() {
    return {
      inputdata: "",
      tableData: [],
      dialogVisible: false,
    };
  },
  computed: {},
  components: {},
  methods: {
    // search(val) {
    //   this.inputdata = val;
    //   let obj= this.tableData.find((val) => val.name == this.inputdata);
    //   this.tableData=[obj];
    // },
    resetForm() {},
    onSubmit() {},
  },
  mounted() {
    this.tableData = jsonData.jsmethodData;
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
