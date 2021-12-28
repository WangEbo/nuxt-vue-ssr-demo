<template>
    <!-- 主页 -->
    <header>
      <div class="location">当前位置：{{location}} 
        <!-- <el-icon><location /></el-icon>  -->
        </div>
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
            <div class="banner-img">
              <img style="height: 100%; width: 100%;" :src="item.url" alt="">
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="new-goods-preview">
        <ul>
          <li v-for="(item, i) in newGoogsList" :key="i">
            <common-good-card :detail="item"></common-good-card>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import {ref} from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
// import { ElIcon } from 'element-plus'
// import { Location } from '@element-plus/icons-vue/dist/lib/location.vue'
export default {
  components: {
    Swiper, SwiperSlide,// ElIcon, Location
  },
  setup() {
    let bannerList = ref([]),
        newGoogsList = ref([]);
    setTimeout(()=> {
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
      newGoogsList.value = [
        {
          url: '/assets/imgs/sofa/sofa (1).jpg',
          alt: '美家沙发',
          description: '美家沙发',
          prcie: 3600,
          sealCount: 259,
        },
        {
          url: '/assets/imgs/sofa/sofa (2).jpg',
          alt: '美家沙发',
          description: '美家沙发',
          prcie: 5700,
          sealCount: 1299,
        },
        {
          url: '/assets/imgs/sofa/sofa (3).jpg',
          alt: '美家沙发',
          description: '美家沙发',
          prcie: 5700,
          sealCount: 11888,
        },
      ]
    },500)
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
      bannerList,
      newGoogsList,
      location: '',
    };
  },
  mounted(){
    console.log(this.bannerList);
  }
}
</script>

<style lang="scss">
.main-content{
  .banner-img{
    height: 300px;
    background-size: 100% 100%;
    background-position: 0 0;
    background-repeat: no-repeat;
  }
}
</style>