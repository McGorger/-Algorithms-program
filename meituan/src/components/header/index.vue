<template>
    <div class="m-header">
        <el-row >
            <el-col class="" :span="24">
                 <top-bar/>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
               <search-bar />
            </el-col>
        </el-row>
    </div>
</template>
<script>
import TopBar from '@/components/header/TopBar'
import SearchBar from '@/components/header/SearchBar'
export default {
  components:{
      TopBar,
      SearchBar

  }
}
</script>
<style lang="scss">

</style>