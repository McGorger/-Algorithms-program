<template>
  <div class="m-nav">
    <ul class="nav">
      <li
        v-for="(item,index) in navList"
        :class="[showList[index],MyList.title]"
        :key="index"
        @mouseenter="handleEnter(index+1)"
      >
        <a href>{{ item }}</a>
        <dl>
          <dt></dt>
          <dd v-for=" (item ,index)  in  MyList.list" :key="index">{{ item }}</dd>
        </dl>
        <template v-if="MyList.title=='site'">
          <div class="subContainer">
            <dl class="hotel">
              <dt>酒店旅游</dt>
              <dd v-for=" (i,v) in MyList.hotel" :key="v">{{ i }}</dd>
            </dl>
            <dl class="food">
              <dt>食物</dt>
              <dd v-for=" (i,v) in MyList.food" :key="v">{{ i }}</dd>
            </dl>
            <dl class="movie">
              <dt>看电影</dt>
              <dd v-for=" (i,v) in MyList.movie" :key="v">{{ i }}</dd>
            </dl>
            <dl class="app">
              <dt>手机应用</dt>
              <dd>
                <a href="https://i.meituan.com/mobile/down/meituan" target="_blank">
                  <img src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" />
                </a>
              </dd>
              <dd>
                <a href="https://waimai.meituan.com/mobile/download/default" target="_blank">
                  <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png" />
                </a>
              </dd>
              <dd>
                <a href="https://minsu.meituan.com/app/" target="_blank">
                  <img
                    src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png"
                  />
                </a>
              </dd>
              <dd>
                <a href="https://www.dianping.com/events/m/index.htm" target="_blank">
                  <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png" />
                </a>
              </dd>
              <dd>
                <a href="https://maoyan.com/app" target="_blank">
                  <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png" />
                </a>
              </dd>
            </dl>
          </div>
        </template>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: ["我的美团", "手机APP", "商家中心", "美团规则", "网站导航"],
      showList: ["list", null, "list", "list", "list", "list"],
      MyList: {}
    };
  },
  methods: {
    handleEnter(index) {
      if (index == 1) {
        this.MyList = {

          list: ["我的订单", "我的收藏", "抵用卷", "用户设置"]
        };
      } else if (index == 3) {
        this.MyList = {
          title: "bd",
          list: [
            "美团商户中心",
            "登陆商家中心",
            "美团智能收银",
            "我想合作",
            "免费手机开店",
            "餐饮代理招募",
            "免费美团排队"
          ]
        };
      } else if (index == 4) {
        this.MyList = {
          title: "",
          list: ["规则中心", "规则目录", "规则评议院"]
        };
      } else if (index == 5) {
        this.MyList = {
          title: "site",
          hotel: [
            "国际机票",
            "火车票",
            "民宿",
            "经济型酒店",
            "主题酒店",
            "商务酒店",
            "公寓",
            "豪华酒店",
            "客栈",
            "青年旅社",
            "度假酒店",
            "别墅"
          ],
          food: ["吃美食", "烤鱼", "代金卷", "自助餐", "火锅", "烧烤"],
          movie: [
            "热映电影",
            "热门影院",
            "热映电影口碑榜",
            "最受期待电影",
            "国内票房榜",
            "北美票房榜",
            "电影排行榜"
          ]
        };
      }
    }
  }
};
</script>
<style lang="scss">
</style>