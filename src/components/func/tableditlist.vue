<template>
  <div class="verify">
    <el-table
      :data="tableData"
      style="width: 100%"
      tooltip-effect="dark"
      border
      ref="tableT"
      height="300"
      stripe
      v-loading="loading"
    >
      <el-table-column
        prop="tableName"
        label="表名称"
        width="280"
        align="center"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
          <div>
            <el-popover trigger="hover" placement="top">
              <div
                v-for="(item, index) in scope.row.operationalTableColumnsList"
                :key="index"
              >
                <p>字段名称: {{ item.columnName }}</p>
                <!-- <p>字段类型: {{ item.dataType }}</p> -->
              </div>

              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.tableName }}</el-tag>
              </div>
            </el-popover>
          </div>
        </template>
      </el-table-column>

      <el-table-column
        prop="tableComment"
        label="表描述"
        align="center"
        width="280"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="创建时间"
        width="180"
        align="center"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="xcloudUrl"
        label="上传路径"
        width="160"
        align="center"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
          <div v-if="scope.row.tableName == editHandleitrow && changedata">
            <el-input v-model="scope.row.xcloudUrl" @blur="inputBlur(scope)" />
          </div>
          <div v-else>
            <span>{{ scope.row.xcloudUrl }}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column
        prop="delimiter"
        label="数据分隔符"
        width="100"
        align="center"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
          <div v-if="scope.row.tableName == editHandleitrow && changedata">
            <el-input v-model="scope.row.delimiter" @blur="inputBlur(scope)" />
          </div>
          <div v-else>
            <span>{{ scope.row.delimiter }}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column
        prop="splitUnit"
        label="拆分基数"
        width="200"
        align="center"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
          <div v-if="scope.row.tableName == editHandleitrow && changedata">
            <el-input v-model="scope.row.splitUnit" @blur="inputBlur(scope)" />
          </div>
          <div v-else>
            <span>{{ scope.row.splitUnit }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="isSplitTable"
        label="是否拆分文件"
        width="200"
        align="center"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
          <div v-if="scope.row.tableName == editHandleitrow && changedata">
            <el-switch
              v-model="scope.row.isSplitTable"
              active-color="#b30000"
              inactive-color="#666"
              active-value="1"
              inactive-value="0"
            >
            </el-switch>
          </div>
          <div v-else>
            <el-switch
              v-model="scope.row.isSplitTable"
              active-color="#b30000"
              inactive-color="#666"
              active-value="1"
              inactive-value="0"
            >
            </el-switch>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="icon"
        width="200px"
        label="操作"
        fixed="right"
        align="center"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
          <el-button
            type="text"
            @click="editHandle(scope.row)"
            :loading="scope.row.tableName == tongbuid && tableState"
            :disabled="scope.row.tableName == editHandleitrow && changedata"
            >同步
          </el-button>
          <el-divider direction="vertical"></el-divider>
          <el-button
            type="text"
            @click="
              addit(
                scope.row,
                scope.row.tableName == editHandleitrow && changedata
                  ? 'add'
                  : 'edit'
              )
            "
            >{{
              changedata && scope.row.tableName == editHandleitrow
                ? "保存"
                : "编辑"
            }}
          </el-button>
          <el-button
            type="text"
            @click="restit(scope.row)"
            v-if="changedata && scope.row.tableName == editHandleitrow"
            >取消
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "verify",
  components: {},
  data() {
    return {
      loading:false,
      tongbuid: "",
      editHandleitrow: "",
      changedata1: true,
      changedata: true,
      tableData: [
        {
          tableName: "bus_dim_cus_score_index",
          tableComment: "指标维度表",
          createTime: "2021-10-13 06:25:49",
          xcloudUrl: "/sftp",
          isSplitTable: "0",
          delimiter: "#$",
          splitUnit: 0,
        },
        {
          tableName: "bus_dim_cus_score_index_extend",
          tableComment: "派生指标表",
          createTime: "2021-10-13 06:25:49",
          xcloudUrl: "/sftp",
          isSplitTable: "0",
          delimiter: "#$",
          splitUnit: 0,
        },
        {
          tableName: "bus_dim_cus_score_index_type",
          tableComment: "派生指标类别表",
          createTime: "2021-10-13 06:25:49",
          xcloudUrl: "/sftp",
          isSplitTable: "0",
          delimiter: "#$",
          splitUnit: 0,
        },
        {
          tableName: "bus_dwd_cus_score_gt",
          tableComment: "指标数据沉降表",
          createTime: "2021-10-13 06:25:49",
          xcloudUrl: "/sftp",
          isSplitTable: "0",
          delimiter: "#$",
          splitUnit: 0,
        },
      ],
    };
  },
  computed: {},
  methods: {
        restit() {
      this.changedata = false;
      this.changedata1 = true;
    },
    addit(row, type) {
      this.status = type;
      if (type == "edit") {
        this.changedata1 = false;
        this.changedata = true;
        this.editHandleitrow = row.tableName;
      } else if (type == "add") {
         this.$message({
          message: '保存成功',
          type: 'success'
         
        });
         this.changedata = false;
        // this.$axios
        //   .post("/xcloudParams/updateXcloudParams", {
        //     tableName: row.tableName,
        //     isSplitTable: row.isSplitTable == false ? "0" : "1",
        //     delimiter: row.delimiter,
        //     splitUnit: row.splitUnit,
        //     xcloudUrl: row.xcloudUrl,
        //   })
        //   .then((res) => {
        //     this.changedata = false;
        //     this.getData();
        //     this.$message({
        //       message: res.data.msg,
        //       type: "success",
        //     });
        //   })
        //   .catch(() => {
        //     this.changedata = true;
        //   });
      }
    },
    editHandle(row) {
      this.tableState = true;
      this.tongbuid = row.tableName;
      // const self = this;
      // self.FileLoading = true;
      // this.$axios
      //   .post("/xcloud/uploadOperationalData", {
      //     tableName: row.tableName,
      //     operationalTableColumnsList: row.operationalTableColumnsList,
      //   })
      //   .then((res) => {
      //     this.tableState = false;
      //     this.$message({
      //       showClose: true,
      //       message: res.data.msg,
      //       type: "success",
      //     });
      //   })
      //   .catch(() => {
      //     this.tableState = false;
      //   });
    },
  },
};
</script>
<style scoped lang="scss">
.verify {
  margin-top: 20px;
}
</style>
