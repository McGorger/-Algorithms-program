<template>
  <div class="layout-default">
    <el-container>
      <el-header height>
        <m-header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer height>
        <m-footer />
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import MHeader from "@/components/header/index";
import MFooter from "@/components/footer/footer";
export default {
  components: {
    MHeader,
    MFooter
  }
};
</script>
 <style lang='scss'>
@import "@/assets/css/public/layout.scss";
</style>