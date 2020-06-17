<template>
    <div class=" m-header m-header-topbar">
        <el-row>
            <el-col :span="12">
                  <geo/>
            </el-col>
            <el-col :span="12">
                <m-nav />
            </el-col>
        </el-row>
    </div>
</template>
<script>
import Geo from "@/components/header/geo"
import MNav from '@/components/header/nav'
export default {
    components:{
        Geo,
        MNav
    }
}
</script>
<style lang="scss">
 @import "@/assets/css/public/header/topbar.scss";
</style>