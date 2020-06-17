<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col class="left" :span="4">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团" />
      </el-col>
      <el-col class="center" :span="14">
        <div class="wrapper">
          <el-input
            v-model="searchHotKey"
            placeholder="搜索商家和地点"
            @focus="handleHot"
            @blur="handleBlur"
            @input="input"
          ></el-input>
          <el-button type="primary">
            <i class="el-icon-search"></i>
          </el-button>
          <div v-if="isShowHot && !searchHotKey" class="hotPlace" @blur="handleBlur">
            <dl>
              <dt>热门搜索</dt>
              <dd v-for="(item,index) in placeHotList" :key="index">{{ item }}</dd>
            </dl>
          </div>
          <div v-if="searchHotKey" class="searchList">
            <dl>
              <dd v-for="(item,index) in searchList" :key="index">
                <router-link
                  :to="{name:'goods',params:{
                     name:item
                }}"
                >{{ item }}</router-link>
              </dd>
            </dl>
          </div>
        </div>
        <p class="suggest">
          <a v-for="(item,index) in sugestList" :key="index">{{ item }}</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      isShowHot: false,
      searchHotKey: "",
      placeHotList: [],
      sugestList: [],
      searchList: []
    };
  },
  created() {
    api.getSearchHotWord().then(res => {
      this.placeHotList = res.data.data;
      this.sugestList = res.data.data;
    });
  },
  methods: {
    handleHot() {
      this.isShowHot = true;
      console.log(this.isShowHot);
    },
    handleBlur() {
      this.isShowHot = false;
      setTimeout(() => {
        this.searchHotKey = "";
      }, 500);
    },
    input() {
      let val = this.searchHotKey;
      if (!val == "") {
        api.getSearchWords().then(res => {
          let value = res.data.data.list;
          this.searchList = value.filter((item, index) => {
            return item.indexOf(val) > -1;
          });
        });
      }
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/public/header/index.scss";
</style>