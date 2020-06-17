<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="NavLeave">
      <dt>全部分类</dt>
      <dd v-for="(item ,index) in navList" :key="index" @mouseenter="NavHandle(item.items)">
        <i :class="item.type"></i>
        {{ item.name }}
        <span class="arrow"></span>
      </dd>
    </dl>

    <div v-if="curNav" class="detail" @mouseenter="enterDetail" @mouseleave="NavLeave">
      <h4>{{ curNav.title }}</h4>
      <span v-for="(item,index) in curNav.items" :key="index">{{ item }}</span>
    </div>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      navList: [],
      curNav:"",
      timer: ""
    };
  },
  created() {
    api.getMenuList().then(res => {
      this.navList = res.data.data;
    });
  },
  methods: {
    NavHandle(item) {
      if (item) {
        this.curNav = item[0];
      }

    },
    NavLeave() {
      this.timer = setTimeout(() => {
        this.curNav = null;
      }, 100);
    },
    enterDetail() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = "";
      }
    }
  }
};
</script>
<style lang="scss">
</style>