<template>
  <div class="verify">
    <el-form
      :model="queryForm"
      label-width="120px"
      label-suffix=":"
      :rules="rules"
    >
      <el-row>
        <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
          <el-form-item label="密码校验" prop="password">
            <el-input
              type="text"
              v-model="queryForm.password"
              placeholder="密码不能少于8位数，包含英文字母和数字！"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
          <el-form-item label="密码校验2" prop="password2">
            <el-input
              type="text"
              v-model="queryForm.password2"
              placeholder="密码8位数，包含英文大小写字母，数字和特殊符号！"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
          <el-form-item label="邮箱校验" prop="email">
            <el-input
              type="text"
              v-model="queryForm.email"
              placeholder="邮箱格式！"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
          <el-form-item label="手机号校验" prop="phone">
            <el-input
              type="text"
              v-model="queryForm.phone"
              placeholder="手机号格式！"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
          <el-form-item label="数据名称校验" prop="name">
            <el-input
              type="text"
              v-model="queryForm.name"
              placeholder="汉字，英文，数字，下划线，且只能是英文或者汉字开头！"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
          <el-form-item label="身份证校验" prop="idcard">
            <el-input
              type="text"
              v-model="queryForm.idcard"
              placeholder="份证号码格式！"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
          <el-form-item label="年龄校验" prop="age">
            <el-input
              type="text"
              v-model="queryForm.age"
              placeholder="年龄格式！"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
          <el-form-item label="中文校验" prop="ch">
            <el-input
              type="text"
              v-model="queryForm.ch"
              placeholder="必须只有中文！"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
          <el-form-item label="英文校验" prop="en">
            <el-input
              type="text"
              v-model="queryForm.en"
              placeholder="必须只有英文！"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
          <el-form-item label="账号校验" prop="account">
            <el-input
              type="text"
              v-model="queryForm.account"
              placeholder="账号必须为6-20位字母和数字组合！！"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
          <el-form-item label="年龄校验" prop="age">
            <el-input
              type="text"
              v-model="queryForm.age"
              placeholder="年龄格式！"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
          <el-form-item label="中文校验" prop="ch">
            <el-input
              type="text"
              v-model="queryForm.ch"
              placeholder="中文格式！"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "verify",
  components: {},
  data() {
    const validatepassword = (rule, value, callback) => {
      const reg = /^[^\u4E00-\u9FA5\s]{8,16}$/;
      if (value === "") {
        callback("请重新输入密码");
      } else if (!reg.test(value) && value !== "") {
        callback("用户密码不能少于8位数，且只能包含英文字母和数字！");
      }
      //  else {
      //   callback(null);
      // }
    };
    return {
      queryForm: {
        password: null,
        password2: null,
        email: null,
        phone: null,
        name: null,
        idcard: null,
        age:null,
        ch:null,
        en:null,
        account:null
      },
      rules: {
        account: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            message: "账号必须为6-20位字母和数字组合！！",
            pattern: /^(?![0-9]*$)(?![a-zA-Z]*$)[a-zA-Z0-9]{6,20}$/,
            trigger: "blur",
          },
        ],
        en: [
          { required: true, message: "请输入英文", trigger: "blur" },
          {
            message: "请输入正确的英文格式！！",
            pattern: /^[A-Za-z]+$/,
            trigger: "blur",
          },
        ],
        ch: [
          { required: true, message: "请输入中文", trigger: "blur" },
          {
            message: "请输入正确的中文格式！！",
            pattern: /^[\u4E00-\u9FA5]+$/,
            trigger: "blur",
          },
        ],
        age: [
          { required: true, message: "请输入年龄", trigger: "blur" },
          {
            message: "请输入正确的年龄格式！！",
            pattern: /^(([1-9]\d?)|100)$/,
            trigger: "blur",
          },
        ],
        idcard: [
          { required: true, message: "请输入身份证号", trigger: "blur" },
          {
            message: "请输入正确的身份证号码格式！！",
            pattern: /^\d{15}(\d{2}[A-Za-z0-9])?$/,
            trigger: "blur",
          },
        ],
        name: [
          { required: true, message: "请输入名称", trigger: "blur" },
          {
            pattern: /^[\u4e00-\u9fa5a-zA-Z]+[\u4e00-\u9fa5a-zA-Z0-9\-_]*$/,
            message:
              "支持汉字，英文，数字，下划线，且只能是英文或者汉字开头，4-50个字符",
            trigger: "blur",
          },
          {
            min: 4,
            max: 50,
            message: "长度在 4 到 50 个字符",
            trigger: "blur",
          },
        ],
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            min: 8,
            max: 16,
            message: "请输入正确的手机号格式！！",
            pattern: /^1[3|4|5|8][0-9]\d{4,8}$/,
            trigger: "blur",
          },
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          {
            min: 8,
            max: 16,
            message: "请输入正确的邮箱格式！！",
            pattern: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            validator: validatepassword,
            trigger: "blur",
            message: "请输入密码",
          },
        ],
        password2: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 8,
            max: 16,
            message:
              "用户密码8位数，且只能包含英文大小写字母，数字和特殊符号！",
            pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{8,}/,
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {},
  methods: {},
};
</script>
<style scoped lang="scss">
.verify {
  margin-top: 20px;
}
</style>
