<template>
  <div class="m-life">
    <el-row>
      <ul class="nav">
        <li>
          <a href>美团外卖</a>
        </li>
        <li>
          <a href>猫眼电影</a>
        </li>
        <li>
          <a class="takeout" href>美团酒店</a>
        </li>
        <li>
          <a class="apartment" href>民宿/公寓</a>
        </li>
        <li>
          <a href>商家入住</a>
        </li>
        <li>
          <a class="business" href>美团公益</a>
        </li>
      </ul>
    </el-row>
    <el-row>
      <el-col :span="14">
        <div class="slide">
          <el-carousel height="240px">
            <el-carousel-item v-for="(item,index) in picList" :key="index">
              <img :src="item" alt />
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="m-life-pic"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-login">
          <h4>
            <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt />
          </h4>
          <div class="m-life-login-name">Hi！{{$store.state.userName ?$store.state.userName:'你好'}}</div>
          <p v-if="!$store.state.userName">
            <el-button round>
              <router-link :to="{name:'register'}">注册</router-link>
            </el-button>
          </p>
          <p v-if="!$store.state.userName">
            <el-button round>
              <router-link :to="{name:'login'}">立即登陆</router-link>
            </el-button>
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <div class="m-life-hotel"></div>
      </el-col>
      <el-col :span="7">
        <div class="m-life-music"></div>
      </el-col>
      <el-col :span="4">
        <div class="m-life-coop"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-downapp">
          <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt />
          <p>美团APP手机版</p>
          <p class="last-p">
            <span>一元起</span>
            <em>吃喝玩乐</em>
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      picList: [
        "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
        "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png",
        "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg"
      ]
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/life.scss";
</style>