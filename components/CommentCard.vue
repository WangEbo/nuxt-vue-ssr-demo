<template>
  <div class="commnet-card">
    <div class="row row1">
      <div class="avator">
        <img :src="comment.avator" alt="">
      </div>
      <div class="comment-time">{{comment.cTime}}</div>
    </div>
    <div class="row">
      <van-rate v-model="comment.rate" allow-half />
      <div class="comment-text">
        <p>{{comment.content}}</p>
      </div>
    </div>
    <div class="comment-imgs">
      <ul>
        <li v-for="(item,i) in comment.imgs" :key="i">
          <img :src="item" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { CommentItem } from "~~/types"
export default defineComponent({
  props: {
    comment: {
      type: Object as PropType<CommentItem>,
      require: true,
      default(){
        return {
          nicoName: '', //昵称
          content: '',
          rate: 0,  //评分
          avator: '', //头像
          cTime: '', //评价时间
          imgs: [],//评价图片
        }
      }
    }
  },
})
</script>

<style lang="scss">
.commnet-card{
  .row1{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .avator{
      width: 30px;
      height: 30px;
      
      img{
        display: block;
        height: 100%;
        border-radius: 15px;
      }
    }
    .comment-time{
      font-size: 12px;
      color: #666;
      line-height: 14px;
    }

  }
  .comment-text{
    font-size: 12px;
  }
  .van-rate{
    margin: 8px 0;
  }
}
</style>