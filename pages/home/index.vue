<template>
  <!-- 主页 -->
  <div class="home">
    <header>
      <common-search-bar></common-search-bar>
    </header>
    <div class="main-content">
      <div class="banner">
        <swiper :modules="modules" :hashNavigation="true" :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange">
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
  </div>

</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import { GoodItem, BannerItem } from "~~/types";

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    let bannerList = ref([] as BannerItem[]),
      newGoogsList = ref([] as GoodItem[]);
    setTimeout(() => {
      bannerList.value = [
        {
          url: "/imgs/bed/sofa.png",
        },
        {
          url: "/imgs/bed/table.png",
        },
        {
          url: "/imgs/bed/table2.png",
        },
      ];
      newGoogsList.value = [
        {
          url: "/imgs/sofa/sofa1.jpg",
          name: "美家沙发",
          description: "美家沙发",
          prcie: 3600,
          sealCount: 259,
        },
        {
          name: '美家沙发',
          url: "/imgs/sofa/sofa2.jpg",
          description: "美家沙发",
          prcie: 5700,
          sealCount: 1299,
        },
        {
          url: "/imgs/sofa/sofa3.jpg",
          name: "美家沙发",
          description: "美家沙发",
          prcie: 5700,
          sealCount: 11888,
        },
      ];
    }, 500);
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
      bannerList,
      newGoogsList,
    };
  },
  data() {
    return {
      location: {},
      mapVisible: false,
      logoUrl: "/imgs/logo.png",
    };
  },
  mounted() {},
  methods: {
    acceptPosition(position) {},
    showMap() {
      console.log("showMap");
      this.mapVisible = true;
      let mp = this.$refs.Map.initMap();
      console.log(mp);
    },
  },
});
</script>

<style lang="scss">
.home{
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  header{
    margin-top: 20px;
    .search-bar{
      width: 100%;
      margin: 0 auto;
      .van-field__control{
        background-color: rgba(245, 245, 247, 1);
        border-radius: 6px;
        
      }
    }
  }
}

.main-content {
  flex: 1;
  margin: 20px 0 60px;
  .banner{
    box-shadow: 0px 8px 13px rgba(0, 0, 0, 0.17);
    border-radius: 8px;
    overflow: hidden;
    .banner-img {
      height: 175px;
      background-size: 100% 100%;
      background-position: 0 0;
      background-repeat: no-repeat;
    }
  }

  .new-goods-preview {
    margin-top: 30px;
    ul {
      display: flex;
      box-sizing: border-box;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: flex-start;
      li {
        width: 47.9%;
        border-radius: 4px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>