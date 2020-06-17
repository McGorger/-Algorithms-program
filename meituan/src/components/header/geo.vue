<template>
    <div class="m-geo">
        <div class="position">
        <i class="el-icon-location"></i>
        <span>{{ $store.state.position.name }}</span>
        <router-link class="changeCity" :to="{name:'changeCity'}">切换城市</router-link>
        [
        <a v-for="(item,index) in nearCity" :key="index" href="#">{{ item.name }} </a>
        ]
        </div> 
        <div class="m-user" v-if="!$store.state.userName">
            <router-link class="login" :to="{name:'login'}">立即登陆</router-link>
            <router-link class="register" :to="{name:'register'}">注册</router-link>
        </div>
        
    </div>
     
</template>
<script>
import api from "@/api/index.js";
export default {
    created(){
         api.getCurPosition().then(res =>{
            this.$store.dispatch('setPosition',res.data.data)
            this.nearCity = res.data.data.nearCity
         })
    },

      watch:{
       "$store.state.position": function () {
           this.nearCity = this.$store.state.position.nearCity
           console.log( this.$store.state.position)
       }
    },
   data(){
       return {
         nearCity:['旬阳县','汉县','石泉']
       }
   }
}
</script>
<style lang="scss">
  
</style>