<template>
  <dl class="s-item">
    <dt>
      <img :src="meta.image" />
    </dt>
    <dd>
      <h3>{{ meta.title }}</h3>
      <p>
        <el-rate
          v-model="meta.score"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}"
        ></el-rate>
        <span v-if="meta.score >4.5">很好</span>
        <span v-else-if="meta.score >4">好</span>
        <span v-else-if="meta.score >3.5">不错</span>
        <span v-else-if="meta.score >3">一般</span>
        <span v-else>差</span>
        <span class>{{ meta.score }}分</span>
        <span class="s-item-comment-total">{{ meta.commentNum }}评论</span>
      </p>
      <p>
        <span>
          <span
            v-for="(item,index) in meta.tab"
            :key="index"
          >{{ item+(index < meta.tab.length -1?'|':'')}}</span>
        </span>
        <span>{{ meta.address }}</span>
        <span>
          <a href="#">
            <i class="el-icon-location"></i>
            查看地图
          </a>
        </span>
      </p>
      <p>
        <span class="s-item-price">人均￥15</span>
      </p>
      <ul class="deal-items">
          <li 
           v-for="(item,index) in meta.dealItems"
           :key="index"
          class="items">
              <div class="deal-title">{{ item.title }}</div>
              <div>
                  <span class="deal-price">￥{{item.price }}</span>
                  <span class="deal-old-price">门市价{{ item.counterPrice }}</span>
                  <span class="deal-sales">已售{{item.saleNum  }}</span>
              </div>
          </li>
      </ul>
    </dd>
  </dl>
</template>
<script>
export default {
  props: ["meta"]
};
</script>
<style lang="scss">
</style>