<template>
  <!-- 主页 -->
  <scroller ref="scroller" class="home" 
    :pulldown="true" 
    :pullup="true" 
    @pulldown="refresh" 
    @pullUp="loadMore"
    :beforePullUpTip="beforePullUpTip">
    <div class="scroll-inner-content">
      <header>
        <common-search-bar></common-search-bar>
      </header>
      <div class="main-content">
        <div class="banner">
          <swiper :autoplay="{delay: 2000}" :pagination="true" :loop="true" :modules="modules" :hashNavigation="true" :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide v-for="(item, i) in bannerList" :key="i">
              <div class="banner-img">
                <img style="height: 100%; width: 100%;" :src="item.url" alt="">
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="new-goods-preview">
          <water-fall :colNum="2" :list="newGoogsList" :gap="18">
            <template v-slot:fall-item="slotProps">
              <common-good-card :detail="slotProps.item" @good-click="goodClick"></common-good-card>
            </template>
          </water-fall>
        </div>
      </div>
    </div>
  </scroller>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { GoodItem, BannerItem } from "~~/types";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";

import { Toast } from 'vant';

let goodList1 = [
  {
    id: "1351afqefqe13r1",
    url: "/imgs/bed/bed1.png",
    name: "红木床",
    description: "红木床",
    prcie: 3000,
    sealCount: 259,
  },
  {
    id: "1351afqefqe13r1",
    url: "/imgs/sofa/sofa1.png",
    name: "英式沙发",
    description: "英式沙发",
    prcie: 5888,
    sealCount: 259,
  },
  {
    id: "1351afgqegq1",
    name: "现代简约床",
    url: "/imgs/bed/bed2.png",
    description: "美家沙发",
    prcie: 2600,
    sealCount: 1299,
  },
  {
    id: "1351afgqegq1",
    name: "中式沙发",
    url: "/imgs/sofa/sofa2.png",
    description: "中式沙发",
    prcie: 2988,
    sealCount: 1299,
  },
  {
    id: "wrh2326463hhefd1",
    url: "/imgs/bed/bed3.png",
    name: "儿童床",
    description: "儿童床",
    prcie: 1988,
    sealCount: 11888,
  },
  {
    id: "wrh2326463hhefd1",
    url: "/imgs/sofa/sofa3.png",
    name: "现代简约沙发",
    description: "现代简约沙发",
    prcie: 1988,
    sealCount: 11888,
  },
];

let bannerList = ref([] as BannerItem[]),
    newGoogsList = ref([] as GoodItem[]);

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
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
      newGoogsList.value = goodList1
    }, 500);
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
      bannerList,
      newGoogsList,
    };
  },
  data() {
    return {
      location: {},
      mapVisible: false,
      logoUrl: "/imgs/logo.png",
      beforePullUpTip: ''
    };
  },
  mounted() {
    this.$nextTick(()=>{
      this.refreshScroller();
    })
  },
  watch:{
    newGoogsList: {
      handler(nval){
        this.$nextTick(()=>{
          this.refreshScroller();
        })
      }
    }
  },
  methods: {
    refreshScroller(){
      let refScroller = this.$refs.scroller;
      let bscroll = refScroller?.bscroll;
      bscroll && bscroll.refresh();
    },
    acceptPosition(position) {},
    showMap() {
      console.log("showMap");
      this.mapVisible = true;
      let mp = this.$refs.Map.initMap();
      console.log(mp);
    },
    refresh(){
      let refScroller = this.$refs.scroller;
      let bscroll = refScroller.bscroll;
      setTimeout(()=> {
        newGoogsList.value = goodList1;
        bscroll.finishPullDown()
        this.beforePullUpTip = '上拉加载更多'
        refScroller.isRefreshing = false;
      },1000)
    },
    loadMore(){
      console.log(newGoogsList.value.length > 7);
      let refScroller = this.$refs.scroller;
      let bscroll = refScroller.bscroll;
      if(this.newGoogsList.length > 7 ){
        setTimeout(()=> {
          bscroll.finishPullUp();
          bscroll.refresh();
          refScroller.isPullUpLoad = false;
          this.beforePullUpTip = '没有更多了！'
          console.log(this.beforePullUpTip, refScroller);
        },2000)
        return
      }
      console.log('触发了加载');
      setTimeout(()=> {
        newGoogsList.value  = [
          ...this.newGoogsList,
          ...[
            {
              id: "1351afgqegq1",
              name: "现代简约床",
              url: "/imgs/bed/bed2.png",
              description: "美家沙发",
              prcie: 2600,
              sealCount: 1299,
            },
            {
              id: "1351afgqegq1",
              name: "中式沙发",
              url: "/imgs/sofa/sofa2.png",
              description: "中式沙发",
              prcie: 2988,
              sealCount: 1299,
            },
            {
              id: "wrh2326463hhefd1",
              url: "/imgs/bed/bed3.png",
              name: "儿童床",
              description: "儿童床",
              prcie: 1988,
              sealCount: 11888,
            },
            {
              id: "wrh2326463hhefd1",
              url: "/imgs/sofa/sofa3.png",
              name: "现代简约沙发",
              description: "现代简约沙发",
              prcie: 1988,
              sealCount: 11888,
            },
          ]
        ]
        console.log('数据加载完成');
        this.$nextTick(()=> {
          bscroll.finishPullUp()
          bscroll.refresh()
          refScroller.isPullUpLoad = false
          console.log('滚动组件刷新');
        })
      },2000)
    },
    goodClick(good){
      console.log(good);
      
      this.$router.push({
        name: 'goodDetail',
        params: {
          id: good.id
        }
      })
    }
  },
});
</script>

<style lang="scss">
.home {
  width: 100%;
  height: calc(100% - 60px);
  box-sizing: border-box;
  overflow: hidden;
  .scroll-outer-wrap{
    padding: 20px;
  }
  header {
    margin-top: 20px;
    .search-bar {
      width: 100%;
      margin: 0 auto;
      .van-field__control {
        background-color: rgba(245, 245, 247, 1);
        border-radius: 6px;
      }
    }
  }
}

.main-content {
  margin-top: 20px;
  .banner {
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
      box-sizing: border-box;
      li {
        border-radius: 4px;
        .col-item {
          margin-bottom: 18px;
        }
      }
    }
  }
}
</style>