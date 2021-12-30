<template>
  <div class="good-detail">
    <div class="row1">
      <img :src="detail.url" :alt="detail.alt">
    </div>
    <div class="row2">
      <p class="g-name">{{detail.name}}</p>
      <p class="price">￥{{detail.prcie}}</p>
    </div>
    <div class="row3">
      <!-- <p class="description">{{detail.description}}</p> -->
      <!-- <p class="seal-count">{{detail.sealCount}}</p> -->
    </div>
  </div>
</template>

<script lang="ts">
import { GoodItem } from '../../types'
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  props: {
    detail: {
      type: Object as PropType<GoodItem>,
      require: true
    }
  }
})
</script>

<style lang="scss">
.good-detail{
  img{
    width: 100%;
    border-radius: 6px;
    box-shadow: 1px 2px 2px #f9f9f9;
  }
  font-family: SourceHanSansCN-Regular;
  
  .row2{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    line-height: 26px;
    .good-name{
      color: rgba(17, 17, 17, 1);
      font-size: 14px;
    }
    .price{
      font-size: 12px;
      color: rgba(17, 17, 17, 1);
    }
  }
}
</style>