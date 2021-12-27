<template>
    <!-- 主页 -->
    <header>
      主页
    </header>
    <div class="main-content">
      <div class="banner">
        <common-banner :imgList="bannerList"></common-banner>
      </div>
      
    </div>
</template>

<script lang="ts">
export default {
  data(){
    return {
      bannerList: [
        {
          height: '100px',
          background: `url('/assets/imgs/bed/bed (1).jpg') 0 0 no-repeat` ,
          backgroundSize: '100% 100%'
        },
        {
          height: '100px',
          background: `url('/assets/imgs/bed/bed (2).jpg') 0 0 no-repeat` ,
          backgroundSize: '100% 100%'
        },
        {
          height: '100px',
          background: `url('/assets/imgs/bed/bed (3).jpg') 0 0 no-repeat` ,
          backgroundSize: '100% 100%'
        },
      ]
    }
  }
}
</script>

<style>

</style>