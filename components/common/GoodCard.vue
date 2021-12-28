<template>
  <div class="good-detail">
    <img :src="detail.url" :alt="detail.alt">
    <p class="description">{{detail.description}}</p>
    <div>
      <p class="price">{{detail.prcie}}</p><p class="seal-count">{{detail.sealCount}}</p>
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
  }
}
</style>