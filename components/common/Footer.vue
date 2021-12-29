<template>
  <!-- 通用底部 -->
  <footer class="com-footer">
    <ul class="footer-ul">
      <li v-for="(item, i) in list" :key="i">
        <nuxt-link :to="item.page">
          <mh-icon :icon="item.icon"></mh-icon>
        </nuxt-link>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'com-footer',
  data(){
    return {
      list: [
        {
          text: '首页',
          icon: 'icon-homefill',
          page: '/home',
        },
        {
          text: '发现',
          icon: 'icon-faxian1',
          page: '/find',
        },
        {
          text: '购物车',
          icon: 'icon-shop-car',
          page: '/shopCar',
        },
        {
          text: '我的',
          icon: 'icon-wode-wode',
          page: '/my',
        },
      ]
    }
  }
}
</script>

<style lang="scss">
  .com-footer{
    position: fixed;
    background-color: #fff;
    bottom: 0;
    z-index: 9999;
    box-shadow: 6px 0px 3px #c6c6c6;
    width: 100%;
    height: 60px;
    .footer-ul{
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      li{
        flex: 1;
        line-height: 60px;
        text-align: center;
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
    }
  }

  
</style>