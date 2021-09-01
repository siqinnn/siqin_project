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
          <dragList />
        </div>
      </el-col>
      <el-col :span="12"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
    </el-row>
  </div>
</template>
<script>
import jsonData from "@/components/jsonData";
import dragList from "@/components/draglist.vue";
export default {
  name: "somefeatures",
  data() {
    return {
      inputdata: "",
      tableData: [],
      dialogVisible: false,
    };
  },
  computed: {},
  components: {
    dragList
  },
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
    height: 350px;
    padding: 20px;
    .smalltitle{
      text-align: left;
      font-size: 14px;
      font-weight: 600;
      display: block;
    }
  }
}
</style>
