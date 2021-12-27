<template>
    <!-- 主页 -->
    <header>
      主页
    </header>
    <div class="main-content">
      <div class="banner">
        <swiper
          :modules="modules"
          navigation
          :scrollbar="{ draggable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="(item, i) in bannerList" :key="i">
            <div class="banner-item" :style="{backgroundImage: `url('${item.url}')`}"></div>
          </swiper-slide>
        </swiper>
        吴圆圆是个猪
      </div>
      <div class="new-good-preview">
        
      </div>
    </div>
</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
// Import Swiper styles
import { ref } from 'vue'
export default {
  components: {
    Swiper, SwiperSlide
  },
  setup(){
    let bannerList = ref([]),
        newGoodsList = ref([]);

    setTimeout(() => {
      bannerList.value = [
        {
          url: '/assets/imgs/bed/bed (1).jpg'
        },
       {
          url: '/assets/imgs/bed/bed (2).jpg'
        },
        {
          url: '/assets/imgs/bed/bed (3).jpg'
        },
      ]

      newGoodsList.value = [
        {
          url: '/assets/imgs/bed/bed (1).jpg'
        },
       {
          url: '/assets/imgs/bed/bed (2).jpg'
        },
        {
          url: '/assets/imgs/bed/bed (3).jpg'
        },
      ]
    }, 500);

    return {
      bannerList,
      newGoodsList
    }
  }
}
</script>

<style lang="scss">
.main-content{
  .banner{
    .banner-item{
      height: 300px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: 0 0;
    }
  }
}
</style>