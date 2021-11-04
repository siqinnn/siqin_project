<template>
  <div class="bugchange">
    <div class="titlediv">
      <span class="el-icon-ice-tea"></span>
      <span>好用的代码</span>
    </div>

    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column type="index" width="50" label="序号" align="center">
      </el-table-column>
      <el-table-column prop="name" label="方法名字"> </el-table-column>
      <el-table-column prop="code" label="详情">
        <template slot-scope="scope">
          <el-popover placement="right" title="" trigger="hover">
            <img :src="scope.row.img" style="height: 160px;width: 900px" />
            <img
              slot="reference"
              :src="scope.row.img"
              :alt="scope.row.filepath"
              style="height: 40px;width: 250px"
            />
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
    // 数组去重方法
    const removeDuplicates = (arr) => [...new Set(arr)];
    console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5, 5, 6]));
    //生成随机字符串
    const randomString = () =>
      Math.random()
        .toString(36)
        .slice(2);
    console.log(randomString());
    // 翻转字符串
    const reverse = (str) =>
      str
        .split("")
        .reverse()
        .join("");
    reverse("hello world"); // 'dlrow olleh'
    // 时间格式化
    const timeFromDate = (date) => date.toTimeString().slice(0, 8);
    timeFromDate(new Date(2021, 11, 2, 12, 30, 0)); // 12:30:00
    timeFromDate(new Date()); // 返回当前时间 09:00:00
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
