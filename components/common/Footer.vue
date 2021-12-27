<template>
  <!-- 通用底部 -->
  <footer class="com-footer">
    <ul class="footer-ul">
      <li v-for="(item, i) in list" :key="i">
    
        <nuxt-link :to="item.page">{{item.text}}</nuxt-link>
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
          icon: '',
          page: '/home',
        },
        {
          text: '发现',
          icon: '',
          page: '/find',
        },
        {
          text: '我的',
          icon: '',
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
      }
    }
    
  }
</style>