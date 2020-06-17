<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <m-menu />
      </el-col>
      <el-col :span="19">
        <slider />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <is-style :nav="navList1" />
      </el-col>
      <el-col :span="24">
        <is-style :nav="navList2" />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import MMenu from "@/components/index/menu";
import Slider from "@/components/index/slider";
import IsStyle from "@/components/index/IsStyle";
import api from "@/api/index.js";
export default {
  data() {
    return {
      navList1: {
        title: "有格调",
        class: "istyle",
        item: [
          {
            type: "all",
            name: "全部"
          },
          {
            type: "food",
            name: "约会聚餐"
          },
          {
            type: "Spa",
            name: "丽人Spa"
          },
          {
            type: "movie",
            name: "电影演出"
          },
          {
            type: "travel",
            name: "品质出游"
          }
        ]
      },
      navList2: {
        title: "有优惠",
        class: "youhui",
        item: [
          {
            type: "all",
            name: "全部"
          },
          {
            type: "food",
            name: "美食"
          },
          {
            type: "sleep",
            name: "休闲"
          }
        ]
      }
    };
  },
  components: {
    MMenu,
    Slider,
    IsStyle
  },

};
</script>
<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>