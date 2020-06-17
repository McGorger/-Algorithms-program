<template>
  <div class="m-products-list">
    <ul>
      <li v-for="(item,index) in tab" :key="index">{{ item }}</li>
    </ul>
    <el-row>
      <item v-for="(item,index) in productsList" :key="index" :meta="item" />
    </el-row>
  </div>
</template>
<script>
import Item from "./item";
import api from "@/api/index.js";
export default {
  data() {
    return {
      tab: ["智能排序", "价格最低", "人气最高", "评价最高"],
      productsList: []
    };
  },
  components: {
    Item
  },
  created(){
      api.getProductsList().then(res =>{
          this.productsList  = res.data.data
      })
  }
};
</script>
<style lang="scss">
</style>