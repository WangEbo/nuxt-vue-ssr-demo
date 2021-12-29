<template>
  <van-swipe-cell class="shop-item"  :before-close="beforeClose">
    <div class="shop-good">
      <div class="check-wrap">
        <van-checkbox v-model="detail.checked" checked-color="#ee0a24"></van-checkbox>
      </div>
      <div class="good-detail">
        <div class="good-left">
          <img :src="detail.url" alt="">
        </div>
        <div class="good-right">
          <p class="good-name">{{detail.name}}</p>
          <p class="good-price">￥{{detail.prcie}}</p>

        </div>
      </div>
    </div>
    <template #right>
      <van-button square text="删除" @click="del" type="danger" class="delete-button" />
    </template>
  </van-swipe-cell>
</template>

<script lang="ts">
import { ref, defineComponent, PropType } from 'vue'
import { GoodItem } from '~~/types'
export default defineComponent({
  props: {
    detail: {
      type: Object as PropType<GoodItem>
    }
  },
  methods: {
    beforeClose(options){

    },
    del(){
      console.log('删除');
      
    }
  }
})
</script>

<style lang="scss">
  .shop-item{
    box-shadow: 0px 0px 3px rgba(218, 220, 235, 1);
    border-radius: 24px;
    background-color: #fff;
    
    .check-wrap{
      margin-right: 20px;
      .van-checkbox{
        height: 100%;
      }
    }
    .shop-good{
      display: flex;
      height: 60px;
      padding: 16px;
        .good-detail{
          display: flex;
          flex: 1;
          color: rgba(17, 17, 17, 1);
            .good-left{
             
              margin-right: 20px;
              width: 60px;
              height: 60px;
              img{
                display: block;
                height: 100%;
              }
            }
            .good-right{
              font-family: SourceHanSansCN-Medium;
              .good-name{
                font-size: 14px;
              }
              .good-price{

              }
            }
        }
    }

    .delete-button{
      height: 100%;
    }
  }
</style>