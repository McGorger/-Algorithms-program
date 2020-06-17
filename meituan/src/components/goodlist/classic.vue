<template>
  <dl class="classic">
    <dt>{{ title }}</dt>
    <dt>全部</dt>
    <dd v-for="(item,index) in nav " :key="index">
      <div class="m-product-select">
        <dl class="tab">
          <dt>
            {{ item.title }}
            <i class="el-icon-caret-bottom"></i>
          </dt>
          <dd>
            <template>
              <dt class="select-title">{{ item.title }}</dt>
              <span v-for="(i,v) in item.subList" :key="v">{{ i.name }}</span>
            </template>
          </dd>
        </dl>
      </div>
    </dd>
  </dl>
</template>
<script>
export default {
  props: ["nav", "title"]
};
</script>
<style lang="scss">
</style>