<template>
  <div class="bugchange">
    <div class="titlediv">
      <span class="el-icon-ice-tea"></span>
      <span>一些bug的修改</span>
    </div>

    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column prop="name" label="方法名字"> </el-table-column>
      <el-table-column prop="code" label="代码"> </el-table-column>
      <!-- <el-table-column prop="remark" label="备注"> </el-table-column>
      <el-table-column prop="use" label="用法"> </el-table-column> -->
    </el-table>
  </div>
</template>
<script>
import jsonData from "@/components/jsonData";
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
