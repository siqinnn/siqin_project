let editData=`
<template>
  <div class="PersonnelDepart">
    <list-page>
      <template slot="queryForm">
        <el-form
          ref="ruleForm"
          label-width="100px"
          class="alarmForm"
          :model="alarmForm"
          label-suffix=":"
        >
          <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
              <el-form-item label="表名称">
                <el-input
                  placeholder="请输入表名称"
                  v-model="alarmForm.tableName"
                  style="width:100%"
                ></el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="24" :md="12" :lg="16" :xl="18">
              <el-form-item style="float:right">
                <el-button @click="search" type="primary">查询</el-button>
                <el-button @click="resetqueryForm" type="info">重置</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </template>
      <template slot="table">
        <el-table
          @cell-click="tabClick"
          :row-class-name="tableRowClassName"
          :cell-class-name="tableCellClassName"
          @selection-change="handleSelectionChange"
          :data="tableData"
          style="width: 100%"
          tooltip-effect="dark"
          border
          ref="tableT"
          height="600"
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
              <!-- <div v-if="scope.row.tableName == editHandleitrow && changedata">
                <el-input
                  v-model="scope.row.tableName"
                  @blur="inputBlur(scope)"
                />
              </div> -->
              <div>
                <el-popover trigger="hover" placement="top">
                  <div
                    v-for="(item, index) in scope.row
                      .operationalTableColumnsList"
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
                <el-input
                  v-model="scope.row.xcloudUrl"
                  @blur="inputBlur(scope)"
                />
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
                <el-input
                  v-model="scope.row.delimiter"
                  @blur="inputBlur(scope)"
                />
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
                <el-input
                  v-model="scope.row.splitUnit"
                  @blur="inputBlur(scope)"
                />
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
                <!-- <el-radio-group v-model="scope.row.isSplitTable">
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group> -->
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
        <el-pagination
          background
          class="pagination"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          layout="total, sizes, prev, pager, next, jumper"
          :page-sizes="[10, 20, 50, 100]"
          :current-page="current"
          :page-size="size"
          :total="total"
        >
        </el-pagination>
      </template>
      <template slot="modal">
        <el-dialog
          :title="dialogtitle"
          :visible.sync="dialogVisible"
          width="500px"
          destroy-on-close
          :before-close="handleClose"
          :close-on-click-modal="false"
        >
          <el-form label-position="left" class="demo-table-expand">
            <el-form-item label="操作描述 :">
              <span>{{ this.dteail.description }}</span>
            </el-form-item>
            <el-form-item label="请求参数 :">
              <span>{{ this.dteail.operReqParam }}</span>
            </el-form-item>
            <el-form-item label="返回参数 :">
              <span>{{ this.dteail.operRepParam }}</span>
            </el-form-item>
            <el-form-item label="操作方法 :">
              <span>{{ this.dteail.operMethod }}</span>
            </el-form-item>
            <el-form-item label="请求地址 :">
              <span>{{ this.dteail.operUri }}</span>
            </el-form-item>
            <el-form-item size="large" style="text-align:right">
              <el-button @click="resetForm('editForm')">取消</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
      </template>
    </list-page>
  </div>
</template>

<script>
import pageModalMixin from "@/mixins/pageModalMixin";
import { mapState, mapMutations } from "vuex";
import { log } from "util";

export default {
  name: "PersonnelDepart",
  data() {
    return {
      changedata1: true,
      changedata: true,
      isSplitTable: "0",
      rowIndex: -1, //行索引
      columnIndex: -1, //列索引
      tabClickIndex: null, // 列表当前点击行的index
      isEdit: true,
      status: "",
      tongbuid: "",
      tableState: true,
      FileLoading: false,
      dteail: "",
      depShowType: {
        value: "dimCode",
        label: "dimName",
        children: "children",
      },
      structureDataList: [],
      visible: false,
      loading: false,
      modalLoading: false,
      submitLoading: false,
      // showbssId: false,
      staffList: [],
      saleDepartInitId: "",
      rules: {
        dimCode: [{ required: true, message: "请参数编码", trigger: "blur" }],
        eparchyCode: [
          { required: true, message: "请选择地市分公司", trigger: "blur" },
        ],
        indexValue: [
          { required: true, message: "请输入参数值", trigger: "blur" },
        ],
        hrCode: [
          { required: true, message: "请输入人力资源编码", trigger: "blur" },
        ],
        statMonth: [{ required: true, message: "请选择账期", trigger: "blur" }],
      },
      editForm: {
        statMonth: "",
        dimCode: "",
        indexValue: "",
        hrCode: "",
        eparchyCode: "",
        validFlag: 0,
      },
      dialogtitle: "新增",
      editRow: {},
      dialogVisible: false,
      options: [],
      initId: "",
      options1: [],
      total: 0,
      size: 10,
      current: 1,
      alarmForm: {
        tableName: "",
      },
      tableData: [],
      saleNameList: [],
      tabClickrow: {},
      editHandleitrow: "",
    };
  },
  props: {},
  components: {},
  computed: {
    ...mapState({
      eparchyList: (state) => state.enums.eparchyList, //地市列表
    }),
  },
  filters: {
    getEparchyName(code) {
      return City.filter((i) => i.value === code)[0].label;
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    //把每一行的索引加到行数据中
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    //把每一列的索引加到列数据中
    tableCellClassName({ column, columnIndex }) {
      column.index = columnIndex;
    },
    //单元格被点击时会触发该事件
    tabClick(row, column, cell, event) {
      this.tabClickrow = row;

      this.rowIndex = row.index;
      this.columnIndex = column.index;
    },
    //输入框失去焦点事件（初始化中间变量）
    inputBlur(scope) {
      this.rowIndex = -1;
      this.columnIndex = -1;
    },
    handleChange(value) {
      this.editForm.dimCode = value.slice(-1).toString();
    },
    getTreeData(data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].children.length < 1) {
          // children若为空数组，则将children设为undefined
          data[i].children = undefined;
        } else {
          // children若不为空数组，则继续 递归调用 本方法
          this.getTreeData(data[i].children);
        }
      }
      return data;
    },
    hideModal(ref, formName) {
      this.status = "";
      this.visible = false;
      this.editRow = {};
      if (ref && formName) {
        this.$nextTick(() => {
          this.$refs[ref].$refs[formName].resetFields(); //清空子组件里面的表单信息
        });
      }
    },
    BulkImport() {
      this.$refs.userImport.submit();
    },
    resetqueryForm() {
      this.alarmForm = {
        tableName: "",
      };
      this.getData();
    },
    restit(row) {
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
        this.$axios
          .post("/xcloudParams/updateXcloudParams", {
            tableName: row.tableName,
            isSplitTable: row.isSplitTable == false ? "0" : "1",
            delimiter: row.delimiter,
            splitUnit: row.splitUnit,
            xcloudUrl: row.xcloudUrl,
          })
          .then((res) => {
            this.changedata = false;
            this.getData();
            this.$message({
              message: res.data.msg,
              type: "success",
            });
          })
          .catch(() => {
            this.changedata = true;
          });
      }
    },
    editHandle(row) {
      this.tableState = true;
      this.tongbuid = row.tableName;
      const self = this;
      self.FileLoading = true;
      this.$axios
        .post("/xcloud/uploadOperationalData", {
          tableName: row.tableName,
          operationalTableColumnsList: row.operationalTableColumnsList,
        })
        .then((res) => {
          this.tableState = false;
          this.$message({
            showClose: true,
            message: res.data.msg,
            type: "success",
          });
        })
        .catch(() => {
          this.tableState = false;
        });
    },
    resetForm(formName) {
      this.dialogVisible = false;
    },
    handleClose(done) {
      this.resetForm("editForm");
      done();
    },
    submitForm() {},
    handleSelectionChange(val) {},

    handleSizeChange(val) {
      this.size = val;
      this.getData();
    },
    handleCurrentChange(val) {
      this.current = val;
      this.getData();
    },
    getData() {
      this.loading = true;
      this.$axios

        .get("/xcloud/findAllOperationalTables", {
          params: {
            ...this.alarmForm,
            current: this.current,
            pageSize: this.size,
          },
        })
        .then((res) => {
          this.tableData = res.data.data.records;
          this.size = res.data.data.pageSize;
          this.current = res.data.data.current;
          this.total = res.data.data.total;
          this.loading = false;
        })
        .catch(() => (this.loading = false));
    },
    search() {
      this.current = 1;
      this.getData();
    },

    delHandle(id) {
      this.$axios
        .post("/ciAction/integral/deleteActionIntegral", {
          id: id.toString(),
          vaildFlag: 1,
        })
        .then((res) => {
          this.$message({
            showClose: true,
            message: res.data.msg,
            type: "success",
            onClose: () => {
              this.getData();
            },
          });
        })
        .catch((e) => e);
    },
  },
};
</script>

`
export default{
  editData
}