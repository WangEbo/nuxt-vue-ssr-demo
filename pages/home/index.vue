<template>
    <!-- 主页 -->
    <header>
      <div class="location"  @click="showMap" >当前位置：{{location}}
        <!-- <environment-outlined @click="showMap=true" /> -->
        <img :src="logoUrl" width="100%" height="100%" alt="">
      </div>
      <common-map @acceptPosition="acceptPosition" v-show="mapVisible" ref="Map"></common-map>
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

export default {
  components: {
    Swiper, SwiperSlide,
  },
  setup() {
    let bannerList = ref([]),
        newGoogsList = ref([]);
    setTimeout(()=> {
      bannerList.value = [
        {
          url: '/imgs/bed/bed1.jpg'
        },
        {
          url: '/imgs/bed/bed2.jpg'
        },
        {
          url: '/imgs/bed/bed3.jpg'
        },
      ]
      newGoogsList.value = [
        {
          url: '/imgs/sofa/sofa1.jpg',
          alt: '美家沙发',
          description: '美家沙发',
          prcie: 3600,
          sealCount: 259,
        },
        {
          url: '/imgs/sofa/sofa2.jpg',
          alt: '美家沙发',
          description: '美家沙发',
          prcie: 5700,
          sealCount: 1299,
        },
        {
          url: '/imgs/sofa/sofa3.jpg',
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
    };
  },
  data(){
    return {
      location: {},
      mapVisible: false,
      logoUrl: '/imgs/logo.png'
    }
  },
  mounted(){

  },
  methods: {
    acceptPosition(position){
      
    },
    showMap(){
      console.log('showMap');
      this.mapVisible = true;
      let mp = this.$refs.Map.initMap();
      console.log(mp);
    }
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

  .new-goods-preview{
    margin-top: 20px;
    ul{
      display: flex;
      box-sizing: border-box;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: flex-start;
      margin: 0 4%;
      li{
        width: 47.9%;
        border-radius: 4px;
        box-shadow: 2px 6px 2px #f3f3f3;
        margin-bottom: 10px;
      }
    }
  }
}
</style>