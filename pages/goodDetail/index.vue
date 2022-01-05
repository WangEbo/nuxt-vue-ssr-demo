<template>
  <div class="good-detail-page">
    <van-tabs v-model:active="activeName">
      <van-tab title="商品" name="a">
        <!-- tab1  商品概要 -->
        <div id="good-info">
          <div class="top-banner">
            <n-swiper :bannerList="detail.banner"></n-swiper>
          </div>
          <div class="good-description">
            <p class="simple-des">
              {{detail.description}}
            </p>
            <p class="price">
              <span>￥</span>{{detail.price}}
            </p>
          </div>
          <!-- <div class="category-select">
            品类选择
          </div> -->
          <div class="place-store">
            <van-cell is-link @click="chooseStoreVisible = true" >
              <span>已选择最近仓库：</span><span class="choosed-store">{{choosedStore.name}}</span>
            </van-cell>
            <van-action-sheet v-model:show="chooseStoreVisible" :actions="storeList" @select="storeChange" />
          </div>
        </div>
      </van-tab>
      <van-tab title="评价" name="b">
          <!-- tab2  晒单评论  -->
        <div id="comment-scroller">
          <scroller ref="scroller" class="home" 
            :pulldown="true" 
            :pullup="true" 
            @pulldown="refreshComment" 
            @pullUp="loadMoreComment"
            :beforePullUpTip="beforePullUpTip">
            <div class="s-content-wrap">
              <ul class="tags-list">
                <li class="tag-li"></li>
              </ul>
              <ul class="comment-list">
                <li class="comment-li" v-for="(item,i) in commentList" :key="i">
                  <comment-card :comment="item"></comment-card>
                </li>
              </ul>
            </div>
          </scroller>
          
        </div>
      </van-tab>
      <van-tab title="详情" name="c">
        <!-- tab3  商品详细参数 -->
        <div id="good-dimension">
          <div class="title">商品参数:</div>
          
          <ul class="dimension-table">
            <li v-for="(item,i) in detail.dimension" :key="i">
              <span>{{item.name}}</span>
              <span>{{item.value}}</span>
            </li>
          </ul>
        </div>
      </van-tab>
    </van-tabs>
    <van-action-bar>
      <!-- <van-action-bar-icon icon="chat-o" text="客服" @click="onClickIcon" /> -->
      <van-action-bar-icon icon="cart-o" text="购物车" @click="viewShopCar" />
      <!-- <van-action-bar-icon icon="shop-o" text="店铺" @click="onClickIcon" /> -->
      <van-action-bar-button type="warning" @click="addToShopCar" text="加入购物车" />
      <van-action-bar-button type="danger" @click="toShop" text="立即购买" />
    </van-action-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { StoreItem, CommentItem } from "~~/types"
let detail = ref({ //详情
  banner: [],
  name: '',
  price: 0,
  description: '',
  dimension: [
    { name: "", value: '' }
  ]
})
let storeList = ref([] as StoreItem[])
let commentList = ref([] as CommentItem[])
export default defineComponent({
  setup(){
    return {  
      detail,
      storeList,
      commentList,//评价,
    }
  },
  data() {
    return {
      activeName: '',
      chooseStoreVisible: false,
      choosedStore: {} as StoreItem,
      beforePullUpTip: '没有更多了..'
    }
  },
  created() {
    this.getDetail()
    this.getStoreList()
    this.getCommentList()
  },
  mounted() {
    console.log(this.$route);
  },
  methods: {
    viewShopCar() {

    },
    addToShopCar() {
      console.log('加入购物车');
    },
    toShop(){

    },
    storeChange(item){
      this.choosedStore = item
      this.chooseStoreVisible = false
    },
    onClickButton() {
      console.log('立即购买');
    },
    getDetail() {
      setTimeout(() => {
        detail.value = {
          name: '马阿拉斯基床',
          description: 'MALM 马尔姆高床架，带2个储物盒 白色/鲁瑞 150x200 厘米',
          price: 3299,
          banner: [
            
            {
              url: "/imgs/good_detail/gd1.webp",
            },
            {
              url: "/imgs/good_detail/gd2.webp",
            },
            {
              url: "/imgs/good_detail/gd3.webp",
            },
            {
              url: "/imgs/good_detail/gd4.webp",
            },
            {
              url: "/imgs/good_detail/gd5.webp",
            },
            {
              url: "/imgs/good_detail/gd0.webp",
            },
          ],
          dimension: [
            {
              name: "抽屉高度（内部）",
              value: "15 厘米"
            },
            {
              name: "长度",
              value: "209 厘米"
            },
            {
              name: "宽度",
              value: "166 厘米"
            },
            {
              name: "抽屉宽度（内部）",
              value: "97 厘米"
            },
            {
              name: "抽屉深度（内部）",
              value: "59 厘米"
            },
            {
              name: "床尾板高",
              value: "38 厘米"
            },
            {
              name: "床头板高",
              value: "100 厘米"
            },
            {
              name: "床垫长",
              value: "200 厘米"
            },
            {
              name: "床垫宽",
              value: "150 厘米"
            },
            {
              name: "高度",
              value: "100 厘米"
            }
          ],
        }
        console.log(detail);
      }, 500);
    },
    getStoreList(){
      setTimeout(()=> {
        storeList.value = [
          {
            address: '广东省-东莞仓库天河路22号',
            name: '东莞仓库',
            id: '13135sq',
          },
          {
            address: '湖北省-武汉市硚口区东林经济开发区166号',
            name: '武汉市仓库',
            id: '13125y3y5sq',
          },
          {
            address: '湖北省-大冶市临空经济开发区10号',
            name: '大冶市仓库',
            id: '1313qewg5sq',
          },
        ]
        this.choosedStore = storeList.value[0]
        console.log(this.choosedStore);
        
      },200)
    },
    getCommentList(){
      setTimeout(() => {
        commentList.value = [
          {
            nicoName: '小鸭杂',
            content: '用着很顺手，推荐给身边的朋友反应也比较好',
            rate: 5,
            avator: '/imgs/avatar.jpg',
            cTime: '2020-01-18 20:08:19',
          },
          {
            nicoName: '小黄鱼',
            content: '还不错，用一段时间再来',
            rate: 4.5,
            avator: '/imgs/avatar.jpg',
            cTime: '2021-02-12 21:10:19',
          },
          {
            nicoName: '黑马牛求',
            content: '刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，刷个评论，路过五毛，',
            rate: 4,
            avator: '/imgs/avatar.jpg',
            cTime: '2021-02-12 21:10:19',
          }
        ]
      }, 500);
    },
    refreshComment(){

    },
    loadMoreComment(){

    }
  }
})
</script>

<style lang="scss">
.good-detail-page {
  padding: 0 20px;
  height: 100%;
  .van-tabs{
    height: calc(100% - 60px);

    .van-tab_wrap{
      .van-tabs__nav--line{
        z-index: 2;
      }
    }
  }
  .van-action-bar {
    bottom: 60px;
  }
}

// 商品
#good-info{
  .good-description{
    p.simple-des{
      font-size: 14px;
      color: #333;
      font-weight: 600;
      margin: 0 15px;
    }
  }
  .price{
    float: right;
    font-size: 18px;
    color: #333;
    vertical-align: top;
    span{
      font-size: 10px;
    }
  }
  .place-store{
    margin: 15px 0;
    .van-cell {
      line-height: 30px;
    }
    .choosed-store{
      color: #333;
    }
    .van-cell__right-icon{
      line-height: 30px;
    }
    .van-popup--bottom{
      z-index: 10000!important;
    }
  }
  
}

// 评论
#comment-scroller{
  .comment-li + .comment-li{
    margin-top: 20px;
  }
}


//详情
#good-dimension{
  .title{
    font-size: 14px;
    color: #333;
    margin-bottom: 15px;
  }
  .dimension-table{
    border: 1px solid #999;
    li + li{
      border-top: 1px solid #999;
    }
    li{
      line-height: 20px;
      display: flex;
      span{
        flex: 1;
        padding: 3px 0 3px 8px;
        box-sizing: border-box;
        font-size: 12px;
        color: #999;
      }
      span:nth-child(2){
        border-left: 1px solid #999;
      }
    }
  }
}
</style>