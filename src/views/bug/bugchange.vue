<template>
  <div class="bugchange">
    <div class="titlediv">
      <span class="el-icon-ice-tea"></span>
      <span>好用的代码</span>
    </div>

    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column type="index" width="50" label="序号" align="center"> </el-table-column>
      <el-table-column prop="name" label="方法名字"> </el-table-column>
      <el-table-column prop="code" label="详情">
        <template slot-scope="scope">
          <el-popover placement="right" title="" trigger="hover">
           <img :src="scope.row.img"  style="height: 160px;width: 900px"/>
           <img slot="reference" :src="scope.row.img" :alt="scope.row.filepath" style="height: 40px;width: 250px">
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="code" label="代码">
        <template slot-scope="scope">
          <span v-html="scope.row.code"></span>
        </template>
      </el-table-column>
      <!-- <el-table-column prop="remark" label="备注"> </el-table-column>
      <el-table-column prop="use" label="用法"> </el-table-column> -->
    </el-table>
  </div>
</template>
<script>
import jsonData from "@/components/json/jsonData";
export default {
  name: "bugchange",
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
    resetForm() {},
    onSubmit() {},
  },
  mounted() {
    this.tableData = jsonData.bugData;
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
