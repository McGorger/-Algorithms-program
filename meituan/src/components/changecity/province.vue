<template>
  <div>
    <span class="name">按省份选择:</span>
    <sel
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
      class="province"
    />
    <sel
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
      :disabled="cityDisabled"
      className="city"
    />
    <span>直接搜素：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>
<script>
import Sel from "./select.vue";
import Hot from "./hot.vue";
import api from "@/api/index.js";
export default {
  data() {
    return {
      provinceList: ["江苏", "南京", "辽宁", "西藏", "黑龙江"],
      province: "省份",
      cityList: ["江苏", "南京", "辽宁", "西藏", "黑龙江"],
      city: "城市",
      provinceActive: false,
      cityActive: false,
      searchList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗"],
      searchWord: "",
      loading: false,
      cityDisabled: true
    };
  },
  components: {
    Sel
  },
   created(){
         api.getProvinceList().then(res =>{
             this.provinceList = res.data.data.map(item =>{
               item.name = item.provinceName
               return item
             });
             console.log(this.provinceList)
         })
   },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;

      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeProvince(value) {
      this.province = value.name;
      this.cityDisabled = false;
     this.cityList = value.cityInfoList
    },
    changeCity(value) {
      this.city = value.name;
      this.$store.dispatch('setPosition',value)
      this.$router.push({ name: "index" });
    },
    remoteMethod() {}
  }
};
</script>
<style lang="scss">
</style>