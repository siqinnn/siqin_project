let treedata=`
<template>
  <div class="treelist">
    <el-tree
      @node-drop="handleDragOver"
      :data="tableData"
      draggable
      :allow-drop="allowDrop"
      :expand-on-click-node="false"
      :props="depShowType"
    >
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <!-- <el-button @click="ww(node, data)"></el-button> -->
        <span class="titleellipsiis">{{ data.name }}</span>
        <span style="width:200px;display:inline-block">
          &nbsp;
          <i
            style="margin-left:10px;color:#207EEA"
            @click="add('add', data)"
            v-if="data.children != null"
            type="text"
            size="mini"
            class="el-icon-plus"
          ></i>
          &nbsp;
          <i
            style="margin-left:10px;color:#207EEA"
            v-if="data.children == null"
            type="text"
            size="mini"
            @click="() => edit('edit', node, data)"
            class="el-icon-edit"
          ></i>

          &nbsp;
          <i
            style="margin-left:10px;color:#207EEA"
            v-if="data.children == null"
            type="text"
            size="mini"
            @click="() => remove(node, data)"
            class="el-icon-delete"
          ></i>
        </span>
      </span>
    </el-tree>
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      width="800px"
      :before-close="handleClose"
      destroy-on-close
      :close-on-click-modal="false"
    >
      <el-form :model="formList" ref="formList" label-width="100px">
        <el-form-item label="名称">
          <el-input v-model="formList.name" placeholder="请输入名称"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="formList.use" placeholder="请输入备注"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetForm('formList')">取 消</el-button>
        <el-button type="primary" @click="submitForm('formList')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "treelist",
  components: {
    // VueClipboard,
  },
  data() {
    return {
      datapush: [],
      status: "",
      title: "",
      formList: {
        name: "",
        use: "",
      },
      dialogVisible: false,
      tableData: [
        {
          name: "一级 1",
          children: [
            {
              name: "二级 1-1",
              use: "111111",
            },
          ],
        },
        {
          name: "一级 2",
          children: [
            {
              name: "二级 2-1",
              use: "111111",
            },
            {
              name: "二级 2-2",
              use: "111111",
            },
          ],
        },
        {
          name: "一级 3",
          children: [
            {
              name: "二级 3-1",
              use: "111111",
            },
            {
              name: "二级 3-2",
              use: "111111",
            },
          ],
        },
      ],
      depShowType: {
        use: "use",
        name: "name",
        children: "children",
      },
    };
  },
  computed: {},
  mounted() {},
  methods: {
    remove() {
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.dialogVisible = false;
    },
    submitForm() {
      console.log(this.formList);
      this.datapush.push(this.formList);
      this.formList = {
        name: "",
        use: "",
      };
      this.dialogVisible = false;
    },
    edit(type, node, data) {
      this.formList.name = data.name;
      this.formList.use = data.use;
      this.status = type;
      this.name = data.value;
      this.dialogVisible = true;
      this.title = "编辑规则";
    },
    add(type, data) {
      this.datapush = data.children;
      this.usecode = data.value;
      this.status = type;
      this.dialogVisible = true;
      this.title = "新增规则";
    },
    handleClose() {
      this.resetForm("formList");
    },
    handleDragOver() {},
    allowDrop(draggingNode, dropNode, type) {
      // 不能拖拽到级别里面
      if (type === "inner") return;
      if (draggingNode.nextSibling === undefined) {
        return type === "prev";
      } else if (dropNode.nextSibling === undefined) {
        return type === "next";
      } else if (draggingNode.nextSibling.id !== dropNode.id) {
        return type === "prev";
      } else {
        return type === "next";
      }
    },
  },
};
</script>
<style scoped lang="scss"></style>

`
export default{
  treedata
}