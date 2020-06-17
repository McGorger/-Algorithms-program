<template>
  <div class="m-istyle">
    <dl @mouseover="isShow" :class="nav.class">
      <dt>{{ nav.title }}</dt>
      <dd
        v-for="(item,index) in nav.item"
        :class="{active:kind==item.type}"
        :key="index"
        :data-type="item.type"
      >{{ item.name }}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in resultsData[kind]"
       :key="index"
      >
        <el-card :body-style="{ padding: '0px' }" shadow="never">
         <img :src="item.image"/>
          <div class="cbody">
            <div class="title" >{{ item.title }}</div>
            <div class="sub-title" >{{ item.subTitle }}</div>
            <div class="price-info" >
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{ item.price }}</span>
              </span>
              <span class="sold bottom-right-info">{{ item.address }}</span> 
              </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      kind: "all",
      resultsData:[]
    };
  },
 created(){
    api.getResultProducts().then(res =>{
     this.resultsData = res.data.data
     console.log(this.resultsData)
})
 },
  methods: {
    isShow(e) {
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if (tagName !== "dd") {
        return;
      }
      this.kind = dom.getAttribute("data-type");
    }
  },
  props: {
    nav: Object
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>