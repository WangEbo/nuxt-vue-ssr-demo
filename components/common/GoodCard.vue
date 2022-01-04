<template>
  <div class="good-detail" @tap="clickGood" @click="clickGood">
    <div class="row1">
      <img class="gd-img-only" :src="detail.url" :alt="detail.alt">
    </div>
    <div class="row2">
      <p class="g-name">{{detail.name}}</p>
      <p class="price">￥{{detail.prcie}}</p>
    </div>
    <div class="row3"></div>
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
  },
  methods: {
    clickGood(){
      console.log('11111');
      this.$emit('goodClick', this.detail)
    },
  }
})
</script>

<style lang="scss">
.good-detail{
  cursor: pointer;
  pointer-events: all;
  img{
    width: 100%;
    min-height: 60px;
    border-radius: 6px;
    box-shadow: 1px 2px 2px #f9f9f9;
  }
  font-family: SourceHanSansCN-Regular;
  
  .row2{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    line-height: 26px;
    .g-name{
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