<template>
  <span class="icon iconfont" :class="[icon]"></span>
</template>

<script>
  export default{
    props: {
      icon: {
        type: String,
        require: true
      }
    }
  }
</script>