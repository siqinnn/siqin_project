let allData=`
<template>
  <div class="PersonnelDepart">
    <list-page>
      <template slot="queryForm">
        <el-form
          ref="ruleForm"
          label-width="140px"
          class="alarmForm"
          :model="alarmForm"
          label-suffix=":"
          :rules="rulesd"
        >
          <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
              <el-form-item label="地市分公司" prop="eparchyCode">
                <el-select
                  placeholder="请选择地市分公司"
                  v-model="alarmForm.eparchyCode"
                  clearable
                  filterable
                  style="width:100%"
                >
                  <el-option
                    v-for="(i, idx) in eparchyList"
                    :key="idx"
                    :label="i.label"
                    :value="i.value"
                    :disabled="i.disabled"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
              <el-form-item label="渠道发展人名称">
                <el-input
                  placeholder="请输入渠道发展人名称"
                  v-model="alarmForm.devName"
                  style="width:100%"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
              <el-form-item label="渠道发展人编码">
                <el-input
                  placeholder="请输入渠道发展人编码"
                  v-model="alarmForm.devCode"
                  style="width:100%"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col
              v-if="isOpen == true"
              :xs="24"
              :sm="24"
              :md="12"
              :lg="8"
              :xl="6"
            >
              <el-form-item label="营销发展人编码">
                <el-input
                  placeholder="请输入营销发展人编码"
                  v-model="alarmForm.saleDeveloperId"
                  style="width:100%"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col
              v-if="isOpen == true"
              :xs="24"
              :sm="24"
              :md="12"
              :lg="8"
              :xl="6"
            >
              <el-form-item label="是否关联">
                <el-select
                  placeholder="请选择是否关联"
                  v-model="alarmForm.relationTag"
                  clearable
                  filterable
                  style="width:100%"
                >
                  <el-option
                    v-for="(i, idx) in relationTaglist"
                    :key="idx"
                    :label="i.label"
                    :value="i.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col
              v-if="isOpen == true"
              style="text-align: right"
              :xs="24"
              :sm="24"
              :md="12"
              :lg="8"
              :xl="18"
            >
              <el-form-item style="float:right">
                <el-button @click="search" type="primary">查询</el-button>
                <el-button @click="resetqueryForm" type="info">重置</el-button>
                <!--                <span @click="open(isOpen)" class="open">-->
                <!--                  {{ isOpen == false ? "展开" : "收起" }}-->
                <!--                  <i v-if="isOpen == false" class="el-icon-arrow-down"></i>-->
                <!--                  <i class="el-icon-arrow-up" v-else />-->
                <!--                </span>-->
              </el-form-item>
            </el-col>
            <el-col
              v-else
              style="text-align: right"
              :xs="24"
              :sm="24"
              :md="12"
              :lg="24"
              :xl="6"
            >
              <el-button icon="search" @click="search()" type="primary"
                >查询</el-button
              >
              <el-button @click="resetqueryForm('queryForm')" type="info"
                >重置</el-button
              >
              <!--              <span @click="open(isOpen)" class="open">-->
              <!--                {{ isOpen == false ? "展开" : "收起" }}-->
              <!--                <i v-if="isOpen == false" class="el-icon-arrow-down"></i>-->
              <!--                <i class="el-icon-arrow-up" v-else />-->
              <!--              </span>-->
            </el-col>
          </el-row>
        </el-form>
      </template>
      <!-- <template slot="toolbar">
        <el-button type="primary" @click="addlist('add', '新增')"
          >新增
        </el-button>
      </template> -->
      <template slot="toolbar">
        <el-popover
          style="padding:0;margin:0"
          placement="top-start"
          trigger="hover"
          :content="popovercontent"
        >
          <el-button slot="reference" :loading="FileLoading" @click="handleExport" type="primary">
            导出</el-button
          >
        </el-popover>
      </template>
      <template slot="table">
        <el-table
          @selection-change="handleSelectionChange"
          :data="tableData"
          style="width: 100%"
          tooltip-effect="dark"
          border
          height="560"
          stripe
          v-loading="loading"
        >
          <el-table-column
            prop="eparchyCode"
            label="地市分公司"
            width="150"
            align="center"
            show-overflow-tooltip
          >
            <template slot-scope="scope">
              <span>{{ scope.row.eparchyCode | getEparchyName }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="chnlName"
            label="渠道部门"
            align="center"
            show-overflow-tooltip
          >
          </el-table-column>
          <!-- <el-table-column prop="devCode" label="渠道发展人编码">
                              </el-table-column> -->
          <el-table-column
            prop="devName"
            label="渠道发展人及编码"
            align="center"
            show-overflow-tooltip
          >
            <template slot-scope="scope">
              <span>{{
                (scope.row.devName == null ? "" : scope.row.devName) +
                  "|" +
                  (scope.row.devCode == null ? "" : scope.row.devCode)
              }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="saleDeveloperId"
            label="营销发展人及编码"
            align="center"
            show-overflow-tooltip
          >
            <template slot-scope="scope">
              <span>{{
                (scope.row.saleDeveloperName == null
                  ? ""
                  : scope.row.saleDeveloperName + "|") +
                  (scope.row.saleDeveloperId == null
                    ? ""
                    : scope.row.saleDeveloperId)
              }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="icon"
            width="300px"
            label="操作"
            align="center"
            show-overflow-tooltip
          >
            <template slot-scope="scope">
              <el-button type="text" @click="editHandle('edit', scope.row)"
                >{{
                  scope.row.relationTag == 1 ? "更新对应关系" : "建立对应关系"
                }}
              </el-button>
              <el-divider
                direction="vertical"
                v-if="scope.row.relationTag == 1"
              ></el-divider>
              <template>
                <el-popconfirm
                  title="确定删除吗？"
                  @confirm="delHandle(scope.row.id)"
                >
                  <el-button
                    v-if="scope.row.relationTag == 1"
                    type="text"
                    slot="reference"
                    >删除对应关系</el-button
                  >
                </el-popconfirm>
              </template>
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
          width="800px"
          destroy-on-close
          :before-close="handleClose"
          :close-on-click-modal="false"
        >
          <el-form
            v-loading="modalLoading"
            ref="editForm"
            :model="editForm"
            label-width="150px"
            :rules="rules"
          >
            <el-form-item label="地市分公司：" prop="eparchyCode">
              <el-select
                :disabled="this.status == 'edit' ? true : false"
                placeholder="请选择地市分公司"
                v-model="editForm.eparchyCode"
                clearable
                filterable
                style="width:100%"
                @change="getDepartByEparchy"
              >
                <el-option
                  v-for="(i, idx) in eparchyList"
                  :key="idx"
                  :label="i.label"
                  :value="i.value"
                  :disabled="i.disabled"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="营销部门" prop="chnlName">
              <custom-tree-select
                is-depart
                v-model="editForm.saleDepartId"
                :init-id="saleDepartInitId"
                :edit="status == 'add' ? false : true"
                :name="
                  (editForm.saleDepartId == null
                    ? ''
                    : editForm.saleDepartId + '|') +
                    (editForm.saleDepartName == null
                      ? ''
                      : editForm.saleDepartName)
                "
                @change="getStaffByDepartId"
              />
            </el-form-item>
            <el-form-item label="营销发展人" prop="saleDeveloperId">
              <el-select
                v-model="editForm.saleDeveloperId"
                placeholder="请选择营销发展人"
                filterable
                clearable
                class="w-100"
                style="width:100%;"
              >
                <el-option
                  v-for="(item, index) in saleNameList"
                  :label="
                    (item.staffId == null ? '' : item.staffId) +
                      '|' +
                      (item.staffName == null ? '' : item.staffName)
                  "
                  :value="item.staffId"
                  :key="index"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="渠道部门" prop="chnlNChanneldepartmentame">
              <custom-tree-select
                v-if="this.status == 'add'"
                :disabled="this.status == 'edit' ? true : false"
                v-model="editForm.devDepartId"
                url="/departcb/searchTreeCb"
                :init-id="initId"
                @change="getStaffByDepartIdCb"
                label="departName"
                id="departId"
                code="departCode"
                :edit="status == 'add' ? false : true"
                :name="
                  (editForm.devDepartId == null ? '' : editForm.devDepartId) +
                    '|' +
                    (editForm.chnlName == null ? '' : editForm.chnlName)
                "
              />
              <el-input
                v-if="this.status == 'edit'"
                :value="
                  (editForm.devDepartId == null ? '' : editForm.devDepartId) +
                    '|' +
                    (editForm.chnlName == null ? '' : editForm.chnlName)
                "
                :disabled="this.status == 'edit' ? true : false"
              ></el-input>
            </el-form-item>
            <el-form-item label="渠道发展人" prop="devCode">
              <el-select
                :disabled="this.status == 'edit' ? true : false"
                style="width:100%;"
                v-model="editForm.devCode"
                placeholder="请选择渠道发展人"
                filterable
                clearable
                class="w-100"
              >
                <el-option
                  v-for="(item, index) in staffList"
                  :label="
                    (item.devCode == null ? '' : item.devCode) +
                      '|' +
                      (item.devName == null ? '' : item.devName)
                  "
                  :value="item.devCode"
                  :key="index"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item size="large" style="text-align:right">
              <el-button @click="resetForm('editForm')">取消</el-button>
              <el-button
                type="primary"
                @click="onSubmit('editForm')"
                :loading="submitLoading"
                >确定
              </el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
      </template>
    </list-page>
  </div>
</template>

<script>
import { City } from "../../utils/public";
import { mapState, mapMutations } from "vuex";

export default {
  name: "sys-depart-personneldepartlist",

  data() {
    return {
      FileLoading:false,
       popovercontent:
        "最多可导出1万条数据，若多于1万，请重新选择条件进行查询",
      rulesd: {
        eparchyCode: [
          { required: true, message: "请选择地市分公司", trigger: "change" },
        ],
      },
      isOpen: true,
      relationTaglist: [
        {
          value: "1",
          label: "已关联",
        },
        {
          value: "0",
          label: "未关联",
        },
      ],
      loading: false,
      modalLoading: false,
      submitLoading: false,
      // showbssId: false,
      staffList: [],
      saleDepartInitId: "",
      rules: {
        saleDeveloperId: [
          { required: true, message: "请选择营销发展人", trigger: "blur" },
        ],
        eparchyCode: [
          { required: true, message: "请选择地市分公司", trigger: "blur" },
        ],
      },
      editForm: {
        eparchyCode: "", //地市分公司
        saleDepartId: "", //营销部门
        saleDeveloperId: "", //营销发展人
        devDepartId: "", //渠道部门
        devCode: "", //渠道发展人
      },
      dialogtitle: "新增",
      editRow: {},
      dialogVisible: false,
      status: "",
      options: [],
      initId: "",
      options1: [],
      total: 0,
      size: 10,
      current: 1,
      alarmForm: {
        eparchyCode: "",
        devCode: "",
        devName: "",
        saleDeveloperId: "",
        relationTag: "",
      },
      tableData: [],
      saleNameList: [],
    };
  },

  computed: {
    ...mapState({
      eparchyList: (state) => state.enums.eparchyList, //地市列表
    }),
  },
  filters: {
    getEparchyName(code) {
      if (!code) return;
      if (code === "10") return "内蒙古";
      return City.filter((i) => i.value === code)[0].label;
      //  return City.filter((i) => i.value === code).label;
    },
  },
  mounted() {
    // this.getData();
  },
  methods: {
      handleExport() {
      const self = this
      if (self.tableData.length < 1) {
        self.$message({
          message: '请筛选数据再重更新导出',
        });
      } else {
        self.FileLoading = true
         let alarmFormdata = Object.assign({},this.alarmForm)
        self.$downloadFile('depart/tdChlDevelopStaffSale/exportTdChlDevelopStaffSale',{},
          {
            params:alarmFormdata,
            success() {
              self.FileLoading = false;
            },
            error () {
              self.FileLoading = false;
            }
          }
        );
      }
    },
    open(isOpen) {
      if (isOpen == false) {
        this.isOpen = true;
      }
      if (isOpen == true) {
        this.isOpen = false;
      }
    },
    getDepartByEparchyCb(eparchyCode) {
      this.$axios
        .get("/departcb/getDepartByEparchyCodeCb/" + eparchyCode)
        .then((res) => {
          //为查询cbss部门树组件传值
          this.initId = res.data.data.departId;
        });
    },
    getStaffByDepartIdCb(departId) {
      if (departId) {
        this.$axios
          .get("/depart/tdChlDevelopStaffSale/findDevelopStaffchnl/", {
            params: {
              departId: departId,
            },
          })
          .then((res) => {
            this.staffList = res.data.data;
          });
      }
    },
    getDepartByEparchy(eparchyCode) {
      this.getDepartByEparchyCb(eparchyCode);
      this.$axios
        .get("/depart/getDepartByEparchyCode/" + eparchyCode)
        .then((res) => {
          //为查询营销部门树组件传值
          this.saleDepartInitId = res.data.data.departId;
        });
    },
    getStaffByDepartId(departId) {
      this.editForm.saleDeveloperId = "";
      if (departId) {
        this.$axios
          .get("/sys/staff/getStaffByDepartId/" + departId)
          .then((res) => {
            this.saleNameList = res.data.data;
          });
      }
    },
    resetqueryForm() {
      this.alarmForm = {
        eparchyCode: "",
        devCode: "",
        devName: "",
        saleDeveloperId: "",
        relationTag: "",
      };
      // this.getData();
      this.tableData = [];
      this.total = 0;
    },
    addlist(type, title, row) {
      this.status = type;
      this.dialogtitle = title;
      this.dialogVisible = true;
      this.editRow = row;
    },
    editHandle(type, row) {
      this.status = type;
      let id = row.id;
      // this.modalLoading = true;
      this.dialogVisible = true;
      this.dialogtitle = "编辑";
      if (row.relationTag == 0) {
        const formData = Object.assign({}, row);
        this.getDepartByEparchy(formData.eparchyCode);
        if (formData.saleDepartId) {
          this.getStaffByDepartId(formData.saleDepartId);
        }
        if (formData.devDepartId) {
          this.getStaffByDepartIdCb(formData.devDepartId);
        }
        this.editForm = formData;
      }
      if (row.relationTag == 1) {
        this.$axios
          .get(
            "/depart/tdChlDevelopStaffSale/findOneChlDevelopStaffSale?id=" + id
          )
          .then(async (res) => {
            const formData = Object.assign({}, res.data.data);
            this.getDepartByEparchy(formData.eparchyCode);
            if (formData.saleDepartId) {
              await this.getStaffByDepartId(formData.saleDepartId);
            }
            if (formData.devDepartId) {
              this.getStaffByDepartIdCb(formData.devDepartId);
            }
            this.editForm = formData;
            this.modalLoading = false;
          })
          .catch(() => (this.modalLoading = false));
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.dialogVisible = false;
      this.editForm = {
        eparchyCode: "", //地市分公司
        saleDepartId: "", //营销部门
        saleDeveloperId: "", //营销发展人
        devDepartId: "", //渠道部门
        devCode: "", //渠道发展人
      };
      this.saleDepartInitId = "";
    },
    handleClose(done) {
      this.resetForm("editForm");
      done();
    },
    onSubmit(formName) {
      const formData = Object.assign({}, this.editForm);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.submitLoading = true;
          this.$axios
            .post(
              "/depart/tdChlDevelopStaffSale/" +
                (formData.id
                  ? "updateChlDevelopStaffSale"
                  : "saveChlDevelopStaffSale"),
              formData
            )
            .then((res) => {
              this.$message({
                showClose: true,
                message: res.data.data.msg,
                type: "success",
              });
              this.getData();
              this.editForm = {};
              this.submitLoading = false;
              this.dialogVisible = false;
            })
            .catch(() => (this.submitLoading = false));
        } else {
          return false;
        }
      });
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
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$axios
            .get("/depart/tdChlDevelopStaffSale/findChlDevelopStaffSale", {
              params: {
                ...this.alarmForm,
                // devName: this.alarmForm.devName.toString(),
                // devCode: this.alarmForm.devCode,
                // eparchyCode: this.alarmForm.eparchyCode,
                // saleDeveloperId: this.alarmForm.saleDeveloperId,
                // relationTag: this.alarmForm.relationTag,
                current: this.current,
                pageSize: this.size,
              },
            })
            .then((res) => {
              this.tableData = res.data.data.records;
              this.size = res.data.data.size;
              this.current = res.data.data.current;
              this.total = res.data.data.total;
              this.loading = false;
            })
            .catch(() => (this.loading = false));
        } else {
          return false;
        }
      });
    },
    search() {
      this.getData();
    },

    delHandle(id) {
      this.$axios
        .delete(
          "/depart/tdChlDevelopStaffSale/deleteChlDevelopStaffSale?id=" + id
        )
        .then((res) => {
          this.$message({
            showClose: true,
            message: res.data.data.msg,
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
  allData
}