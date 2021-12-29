<template>
  <div class="my">
    <div class="avator-wrap">
      <div class="avator">
        <img :src="userInfo.avatorUrl" alt="">        
      </div>
      <div class="user-info">
        <p class="user-name">{{userInfo.name}}</p>
      </div>
    </div>
    <div class="opt-bar">
      <ul>
        <li v-for="item,i in optList" :key="i">
          <nuxt-link :to="item.path">
            <mh-icon :icon="item.icon"></mh-icon>
            <span class="opt-name">{{item.name}}</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script  lang="ts">
import { ref, defineComponent } from "vue"
import { UnserInfo } from "~~/types"
export default defineComponent({
  setup(){
    let userInfo = ref({} as UnserInfo);
    setTimeout(()=> {
      userInfo.value = {
        name: 'EBo Wang',
        avatorUrl: '/imgs/avator.jpg'
      }
    })
    return {
      userInfo
    }
  },
  data(){
    return {
      optList: [
        {
          name: '收藏',
          path: '/favorite',
          icon: 'icon-shoucang',
        },
        {
          name: '订单',
          path: '/order',
          icon: 'icon-quanbudingdan',
        },

      ]
    }
  }
})
</script>

<style lang="scss">
.my{
  .opt-bar{
    ul{
      display: flex;
      justify-content: space-around;
      li{
        flex: 1;
        text-align: center;
        .opt-name{
          display: block;
          font-size: 14px;
        }
      }
    }
  }
  a{
    font-size: 22px;
    color: #3b3a3a;
  }
  .router-link-active:visited{
    color: unset;
  }
  .router-link-active.router-link-exact-active{
    color: #3c72f0;
  }
}

.avator-wrap{
  display: flex;
  background-color: #f0ebeb;
  margin-bottom: 15px;
  border-bottom: 1px solid #aaa7a7;
  padding: 4%;
  box-sizing: border-box;
  .avator{
    width: 100px;
    height: 100px;
    margin-right: 20px;
    background-color: #3b3a3a;
    border-radius: 8px;
  }
}
</style>