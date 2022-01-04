<template>
  <swiper :autoplay="{delay: 2000}" :pagination="true" :loop="true" :modules="modules" :hashNavigation="true" :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange">
    <swiper-slide v-for="(item, i) in bannerList" :key="i">
      <div class="banner-img">
        <img style="height: 100%; width: 100%;" :src="item.url" alt="">
      </div>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";

import { defineComponent, PropType } from "vue"
import { BannerItem } from "~~/types"

export default defineComponent({
  props: {
    bannerList: {
      type: Array as PropType< BannerItem[] >
    }
  },
  setup(){
    const onSwiper = (swiper) => {
      console.log('swiper');
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  }
})
</script>

<style>

</style>