<template>
  <div class="good-detail">
    <img :src="detail.url" :alt="detail.alt">
    <p class="description">{{detail.description}}</p>
    <div>
      <p class="price">{{detail.prcie}}</p><p class="seal-count">{{detail.sealCount}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detail: {
      type: Object,
      require: true
    }
  }
}
</script>

<style lang="scss">
.good-detail{
  img{
    width: 100%;
  }
}
</style>