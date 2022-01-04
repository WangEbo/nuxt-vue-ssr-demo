<template>
  <div class="good-detail-page">
    <van-tabs v-model:active="activeName">
      <van-tab title="商品" name="a">
        <!-- tab1  商品概要 -->
        <div id="good-info">
          <div class="top-banner">
            <n-swiper :bennerList="detail.banner"></n-swiper>
          </div>
          <div class="good-description">
            <p class="simple-des">
              简略描述
            </p>
            <p class="price">
              ￥{{'商品价格'}}
            </p>
          </div>
          <div class="category-select">
            品类选择
          </div>
        </div>
      </van-tab>
      <van-tab title="评价" name="b">
          <!-- tab2  晒单评论  -->
        <div id="comment-scroller">
          <scroller>
            <comment-card></comment-card>
          </scroller>
        </div>
      </van-tab>
      <van-tab title="详情" name="c">
        <!-- tab3  商品详细参数 -->
        <div id="good-dimension">
          商品参数:
          <ul class="parameter-table">
            <li v-for="item in detail.dimension" :key="item">
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

<script>
import { defineComponent } from "vue"
export default defineComponent({
  data() {
    return {
      activeName: '',
      detail: { //详情
        banner: [],
        name: '',
        price: '',
        dimension: [
          { name: "", value: '' }
        ]

      },
      comment: [], //评价
    }
  },
  created() {
    this.getDetail()
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
    onClickButton() {
      console.log('立即购买');
    },
    getDetail() {
      setTimeout(() => {
        this.detail = {
          name: '马阿拉斯基床',
          price: 3299,
          banner: [
            {
              url: "/imgs/bed/sofa.png",
            },
            {
              url: "/imgs/bed/table.png",
            },
            {
              url: "/imgs/bed/table2.png",
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
      }, 500);
    },
    getComment() {
      setTimeout(() => {

      }, 500);
    }
  }
})
</script>

<style lang="scss">
.good-detail {
  .van-action-bar {
    bottom: 60px;
  }
}
</style>