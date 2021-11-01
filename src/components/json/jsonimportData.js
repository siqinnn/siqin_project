let importData=`
// 注释------------，特殊字符（美元符号）无法识别，用（￥）替换了，用的时候换掉
<template>
    <div class="import" v-loading="loading" element-loading-text="正在导入...">
        <div class="import-title">
            <span style="color: red">导入前请查看模板格式：</span>
            <a :href="'/ors-ui/￥{fileName}批量导入模板.xlsx'" :download="'￥{fileName}批量导入模板'"><i class="el-icon-paperclip"></i>{{'￥{fileName}批量导入模板下载'}}</a>
        </div>
        <el-form
                ref="ruleForm"
                label-width="130px"
                label-suffix=":"
                class="alarmForm"
                :model="alarmForm"
                :rules="rules"
        >
            <el-form-item label="归属地市" prop="eparchyCode">
                <el-select
                        placeholder="请选择归属地市"
                        v-model="alarmForm.eparchyCode"
                        clearable
                        filterable
                        style="width:360px"
                >
                    <el-option
                            v-for="item in eparchyList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                    >
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="上传文件" prop="file">
                <el-upload
                        v-model="alarmForm.file"
                        class="upload-demo"
                        :auto-upload="false"
                        drag
                        :action=action
                        :headers="{
                            Authorization:Authorization
                        }"
                        :data="{
                            eparchyCode:alarmForm.eparchyCode,
                            dual:dual
                        }"
                        accept=".xls,.xlsx"
                        ref="Upload"
                        :on-success="success"
                        :on-error="error"
                        :limit="1"
                >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div slot="tip">只能上传xls或xlsx文件</div>
                </el-upload>
            </el-form-item>
            <div class="import-title" v-if="batchId!==''">
                <a  @click="downloadFail" href="javascript:;"><i class="el-icon-bottom"></i>下载失败结果</a>
            </div>
        </el-form>
    </div>
</template>
<script>
    /**
     * @description 批量导入  用户维系经理  用户维系经理 组件
     * @author yaoml
     */
    import {mapState} from "vuex";
    export default {
        name: 'import',
        data() {
            const validatePhone = (rule, value, callback) => {
                if (this.$refs.Upload.uploadFiles.length === 0) {
                    return callback(new Error("请选择文件！"));
                } else {
                    return callback();
                }
            };
            return {
                loading: false,
                Authorization: localStorage.getItem('token'),
                action: '￥{process.env.VUE_APP_HTTP_PROXY_TARGET}￥{this.url}',
                batchId: '',
                alarmForm: {
                    eparchyCode: '',
                    file: ''
                },
                rules: {
                    eparchyCode: [
                        {required: true, message: "请选择归属地市", trigger: "blur"},
                    ],
                    file: [
                        {required: true, trigger: "blur", validator: validatePhone},
                    ],
                }
            }
        },
        computed:{
            ...mapState({
                eparchyList:state=>state.enums.eparchyList  //地市列表
            })
        },
        props:{
            /**
            * @author yaoml
            * 是否双计 是 true
            **/
            dual:{
               type:Boolean,
               default:false
            },
            /**
            * @author yaoml
            * 导入的接口url
            **/
            url:{
                type:String,
                default: 'userDispatch/importUserManager'
            },
            fileName:{
                type:String,
                default:'用户维系经理'
            }
        },
        methods: {
            /**
             * @author yaoml
             * 手动上传
             **/
            submit() {
                this.$refs['ruleForm'].validate((valid) => {
                    if (valid) {
                        this.batchId = ''
                        this.loading = true
                        this.$refs.Upload.submit()
                    } else {
                        return false;
                    }
                });
            },
            /**
            * @author yaoml
            * 上传成功之后的回调
            **/
            success(response) {
                this.loading = false
                if(response.code === 400){
                    return this.$message({
                        message: response.msg,
                        type: 'error',
                        duration:5000,
                        showClose:true
                    })
                }
                this.batchId = response.data
                let regex=/败(.+?)条/g;
                let result;
                let total = 0;
                result = regex.exec(response.msg)
                if(result.length!==0){
                    total = result[1]
                }
                this.$refs.Upload.clearFiles()
                this.$message({
                    message: response.msg,
                    type: total>0?'error':'success',
                    duration:5000,
                    showClose:true
                })
            },
            /**
             * @author yaoml
             * 上传失败之后的回调
             **/
            error(error) {
                this.loading = false
                this.$message({
                    message: error,
                    type: 'error',
                    duration:5000,
                    showClose:true
                })
            },
            /**
            * @author yaoml
            * 下载失败文件
            **/
            downloadFail() {
                let type = this.url.match(/'xieang'/([^/]*)$/)[1];
                this.$downloadFile('userDispatch/exportErrorImport/￥{this.batchId}?type=￥{type}')
            }
        },
        mounted() {

        }
    }
</script>
<style lang="scss">
    .import {
        .import-title {
            display: flex;
            padding-left: 51px;
            margin-bottom: 20px
        }
    }
</style>
// <user-import
// ref="userImport"
// :dual="isDouble"
// :url="url"
// :fileName="fileName"
// />
// <div slot="footer" class="dialog-footer">
// <el-button @click="hideModal()">取 消</el-button>
// <el-button
//   type="primary"
//   :loading="submitLoading"
//   @click="BulkImport"
//   >导入</el-button
// >
// </div>
// <el-button
//           @click="showModal('add', '￥{fileName}批量导入', {})"
//           type="primary"
//           icon="el-icon-upload"
//           >{{ '批量导入￥{fileName}' }}</el-button
//         >

// 函数    BulkImport() {
//   this.$refs.userImport.submit();
// },
// props: {
//   url: {
//     type: String,
//     default: "userDispatch/importUserManager",
//   },
//   fileName: {
//     type: String,
//     default: "用户维系经理",
//   },
//  },
// import userImport from "../../components/usermaintenance/import";
// components: {
//   userImport,
// },
// BulkImport() {
//   this.$refs.userImport.submit();
// },
`
export default{
  importData
}