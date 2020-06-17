<template>
  <div class="page-changeCity">
    <div class="m-iselect">
      <el-row>
        <m-select />
      </el-row>
      <el-row>
        <Hot title="热门城市" :list="hotCity" />
      </el-row>
      <el-row>
        <Hot title="最近访问" :list="curList" />
      </el-row>
      <el-row>
          <category />
      </el-row>
    </div>
  </div>
</template>
<script>
import MSelect from "./province.vue";
import Hot from "./hot.vue";
import Category from "./category.vue";
import api from "@/api/index.js";
export default {
  components: {
    MSelect,
    Hot,
    Category
  },
  data() {
    return {
      curList: [],
      hotCity: ["青岛", "武汉", "淄博", "鞍山"]
    };
  },
  created(){
       api.getHotCity().then( res => {
           this.hotCity = res.data.data.map(item => item.name)
       });
       api.getRecentCity().then( res =>{
             this.curList = res.data.data.map(item => item.name)
       } )
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>