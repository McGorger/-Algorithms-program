<template>
  <div class="m-product-categroy">
    <classic :nav="classicList" title="分类" />
    <classic :nav="areaList" title="区域"/>
  </div>
</template>
<script>
import Classic from "./classic";
import api from "@/api/index.js";
export default {
  components: {
    Classic
  },
  data() {
    return {
      classicList: [],
      areaList: [
        {
          title: "推荐商圈",
          subList: [
            {
              name: "望京",
              id: 120000
            },
            {
              name: "昌平",
              id: 12222
            }
          ]
        },
        {
          title: "南岗区",
          subList: [
            {
              name: "中央大街",
              id: 123
            },
            {
              name: "西客站",
              id: 11
            },
            {
              name: "花园街",
              id: 222
            },
            {
              name: "通乡街/果园街",
              id: 21
            },
            {
              name: "爱建社区",
              id: 1
            },
            {
              name: "学府路",
              id: 34
            }
          ]
        }
      ]
    };
  },
  created() {
    api.getClassic().then(res => {
      this.classicList = res.data.data;
      console.log(this.classicList)
    });
  }
};
</script>
<style lang="scss">
</style>