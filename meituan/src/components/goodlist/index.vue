<template>
    <div class="page-product">
     <el-row>
         <crumbs />
     </el-row>
     <el-row>
         <el-col :span="19">
             <el-row>
                 <m-select />
             </el-row>
             <el-row>
                 <m-list />
             </el-row>
         </el-col>
     </el-row>
    </div>
</template>
<script>
import Crumbs from './crumbs'
import MSelect from './select'
import MList from './goodList'
export default {
 components:{
     Crumbs,
     MSelect,
     MList
 }
}
</script>
<style lang="scss">
  @import "@/assets/css/products/index.scss";
</style>