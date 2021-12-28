<template>
  <swiper
    :modules="modules"
    navigation
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(item, i) in bannerList" :key="i">
      <div class="banner-img">
        <img style="height: 100%; width: 100%;" :src="item.url" alt="">
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  // Import Swiper styles
  export default {
    props: {
      bannerList : {
        type: Array,
        require: true
      }
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },
    mounted(){
      console.log(this);
    }
  };
</script>