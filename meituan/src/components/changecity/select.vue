<template>
  <div :class="['choose-wrap',disabled?'disabled':'']" v-document-click="doucmentClick">
    <div class="choose" @click="showWrapper">
      <span>{{ value }}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content':true,'active':showWrapperActive}">
        <h2>{{ title }}</h2>
        <div :class="['wrapper',className]">
          <div v-for=" (item ,index) in  renderList " :key="index" class="col">
            <span
              @click="changeValue(item)"
              :class="{'mt-item':true,'active':value === item.name}"
              v-for="(item,i) in item"
              :key="i"
            >{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["list", "value", "showWrapperActive", "title","disabled","className"],
  computed: {
    renderList() {
      let col = Math.ceil(this.list.length / 12);
      let resultList = [];
      for (var i = 0; i < col; i++) {
        let data = this.list.slice(i * 12, i * 12 + 12);
        resultList.push(data);
      }
      return resultList;
    }
  },
  methods: {
    showWrapper(e) {
      e.stopPropagation(); //阻止事件冒泡
      if (!this.disabled) {
        this.$emit("change_active", true);
      }
    },
    changeValue(item) {
      this.$emit("change", item);
    },
    doucmentClick() {
      this.$emit("change_active", false);
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>