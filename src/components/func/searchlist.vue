<template>
  <div class="search">
    <el-form :model="queryForm" label-width="120px" label-suffix=":">
      <el-row>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
          <el-form-item label="第一个">
            <el-select
              v-model="queryForm.a1"
              placeholder="请选择第一个"
              clearable
              class="w-100"
              style="width:100%"
            >
              <el-option
                v-for="(i, idx) in eparchyList"
                :key="idx"
                :label="i.label"
                :value="i.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
          <el-form-item label="第二个">
            <el-input type="text" v-model="queryForm.a2"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
          <el-form-item label="第三个">
            <el-input type="text" v-model="queryForm.a3"></el-input>
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
          <el-form-item label="第四个">
            <el-input type="text" v-model="queryForm.a4"></el-input>
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
          <el-form-item label="第五个">
            <el-input type="text" v-model="queryForm.a5"></el-input>
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
          <el-form-item label="第六个">
            <el-input type="text" v-model="queryForm.a6"></el-input>
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
          <el-form-item label="第七个">
            <el-input v-model="queryForm.a7"></el-input>
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
          <el-form-item label="第八个" prop="custId">
            <el-input v-model="queryForm.a8"></el-input>
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
          <el-form-item label="第九个" prop="custName">
            <el-input v-model="queryForm.a9"></el-input>
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
          <el-form-item label="第十个">
            <el-input type="text" v-model="queryForm.a10"></el-input>
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
          <el-form-item label="第十一个">
            <el-date-picker
              v-model="queryForm.a11"
              type="date"
              placeholder="请选择销户开始时间"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd"
              style="width:100%"
            >
            </el-date-picker>
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
          <el-form-item label="第十二个" prop="destroyTimeEnd">
            <el-input type="text" v-model="queryForm.a12"></el-input>
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
          <el-form-item label="第十三个">
            <el-input type="text" v-model="queryForm.a13"></el-input>
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
          <el-form-item label="第十四个">
            <el-input type="text" v-model="queryForm.a14"></el-input>
          </el-form-item>
        </el-col>
        <el-col
          v-if="isOpen == true"
          style="text-align: right; margin-bottom: 22px;"
          :xs="24"
          :sm="24"
          :md="12"
          :lg="6"
          :xl="6"
        >
          <el-button @click="getList" type="primary">查询</el-button>
          <el-button @click="resetForm('queryForm')" type="info"
            >重置</el-button
          >
          <span @click="open(isOpen)" class="open">
            {{ isOpen == false ? "展开" : "收起" }}
            <i v-if="isOpen == false" class="el-icon-arrow-down"></i>
            <i class="el-icon-arrow-up" v-else />
          </span>
        </el-col>
        <el-col
          v-else
          style="text-align: right;margin-bottom: 22px;"
          :xs="24"
          :sm="24"
          :md="6"
          :lg="24"
          :xl="24"
        >
          <el-button @click="getList" type="primary">查询</el-button>
          <el-button @click="resetForm('queryForm')" type="info"
            >重置</el-button
          >
          <span @click="open(isOpen)" class="open">
            {{ isOpen == false ? "展开" : "收起" }}
            <i v-if="isOpen == false" class="el-icon-arrow-down"></i>
            <i class="el-icon-arrow-up" v-else />
          </span>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "search",
  components: {},
  data() {
    return {
      queryForm: {
        a1: null,
        a2: null,
        a3: null,
        a4: null,
        a5: null,
        a6: null,
        a7: null,
        a8: null,
        a9: null,
        a10: null,
        a11: null,
        a12: null,
        a13: null,
        a14: null,
      },
      eparchyList: [
        {
          label: "label",
          value: "value",
        },
        {
          label: "label",
          value: "value",
        },
      ],
      isOpen: true,
    };
  },
  computed: {},
  methods: {
    open(isOpen) {
      if (isOpen == false) {
        this.isOpen = true;
      }
      if (isOpen == true) {
        this.isOpen = false;
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getList() {},
  },
};
</script>
<style scoped lang="scss">
.search{
  margin-top: 20px;
  .open i:hover{
    cursor: pointer;
  }
}
</style>
