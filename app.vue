<template>
  <div>
    <router-view></router-view>
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
