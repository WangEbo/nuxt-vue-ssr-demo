<template>
  <div class="good-detail-page">
    <div class="tabs-opt">
      <!-- tab1  商品概要 -->
      <div id="good-info" >
        <div class="top-banner">
          <div class="banner-content">
            详情图banner
          </div>
        </div>
        <div class="good-description">
          <p class="simple-des">
            简略描述
          </p>
          <p class="price">
            ￥{{'商品价格'}}
          </p>
        </div>
        <div class="category-select">
          品类选择
        </div>
      </div>
      <!-- tab2  晒单评论  -->
      <div id="comment-scroller">
        <scroller>
          <comment-card></comment-card>
        </scroller>
      </div>
      <!-- tab3  商品详细参数 -->
      <div id="good-parameters">
        商品详情参数表格
        <table class="parameter-table">
          
        </table>
      </div>
    </div>
    
  </div>
</template>

<script>
import { defineComponent } from "nuxt3/dist/app/compat/capi"
export default defineComponent({
  mounted(){
    console.log(this.$route);
  }
})
</script>

<style>

</style>