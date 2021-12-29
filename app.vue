<template>
  <div id="app">
    <NuxtPage></NuxtPage>
    <common-footer></common-footer>
  </div>
</template>

<script lang="ts">
  export default {
    setup(props, ctx){
      console.log(props);
      console.log(ctx);
    }
  }
</script>
<style lang="scss">
  #app{
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .the-header{
    width: 200px;
    height: 200px;
    background-color: red;
  }
</style>
