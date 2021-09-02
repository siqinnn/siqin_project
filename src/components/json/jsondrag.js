let aa=`<template
<div class="draglist">
<div style="display:flex;flex-direction:row;margin-top:20px;">
    <div style="width: 50%;height: 300px;border:1px dashed gray">
      <div
        style="text-align: left;"
        v-for="(item, index) in stringData"
        :key="index"
        draggable="true"
        @dragstart="draStart(item, 'startweidu')"
        @dragend="draEnd"
      >
        <!-- <i style="color:#2C8CF0;float:left;padding-top:2px" class="el-icon-circle-check"></i> -->
        <!-- <el-tooltip :content="item.name" disabled>
              <p class="leftfontclass">{{item.age}}</p>
            </el-tooltip> -->
        <el-tag type="success">{{ item.age }}</el-tag>
      </div>
    </div>
    <div
      class="dimensionality-small overflowy"
      @dragover="drgOver('weidu')"
      style="width: 50%; height: 300px;border:1px dashed gray">
      <div
        v-for="(item, index) in dimensionData"
        :key="index"
        style="text-align: left;"
      >
        <el-tag type="warning"> {{ item.age }}</el-tag>
        <i class="el-icon-close" @click="removelist(index)"></i>
      </div> 
    </div>
  </div>
</div>
</template>
<script>
export default {
name: "draglist",
components: {},
data() {
  return {
    targNode: "",
    dimensionData: [],
    stringData: [
      {
        name: "tom",
        age: "拖拽1",
        number: "13522222222",
        size: "38",
      },
      {
        name: "tom",
        age: "拖拽2",
        number: "13522222222",
        size: "38",
      },
      {
        name: "tom",
        age: "拖拽3",
        number: "13522222222",
        size: "38",
      },
    ],
    maplist: [
      {
        name: "tom",
        age: "11",
        number: "13522222222",
        size: "38",
      },
      {
        name: "tom",
        age: "12",
        number: "13522222222",
        size: "38",
      },
      {
        name: "tom",
        age: "13",
        number: "13522222222",
        size: "38",
      },
      {
        name: "tom",
        age: "14",
        number: "13522222222",
        size: "38",
      },
    ],
  };
},
computed: {},
methods: {
  // draEnd: function(event) {
  draEnd: function() {
    this.$nextTick(() => {
      if (this.targNode === "weidu" && this.startNode === "startweidu") {
        let getNode = this.dragNode;
        let obj = {
          name: getNode.name,
          age: getNode.age,
        };
        this.dimensionData.push(obj);
      }
      // if (this.targNode === 'zhibiao' && this.startNode === 'startzhibiao') {
      //     let getNode = this.dragNode;
      //     let obj = {
      //         fieldDescribe: getNode.fieldDescribe,
      //         fieldName: getNode.fieldName,
      //         column: getNode.fieldName,
      //         func: 'sum',
      //     };
      //     // test
      //     this.indexData.push(obj)

      // }
      // if (this.targNode === 'shaixuan') {
      //     this.childNeedcolumn = this.dragNode.fieldName;
      //     this.switchStatus('add', true);
      //     this.indexscreen()
      // }
      // this.getData()
    });
    // this.dragNode = event;
  },
  removelist: function(index) {
    this.dimensionData.splice(index, 1);
    // this.getData()
  },
  draStart: function(event, type) {
    this.startNode = type;
    this.dragNode = event;
  },
  drgOver: function(type) {
    this.targNode = type;
  },
  mapclick() {
    this.listadd = this.maplist.map((item) => ({
      namee: item.name,
      agee: item.age,
    }));
  },
},
};
</script>
<style scoped lang="scss"></style>
`
export default{
  aa
}