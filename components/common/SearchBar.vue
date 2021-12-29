<template>
  <van-cell-group inset class="search-bar">
    <mh-icon icon="icon-search"></mh-icon>
    <van-field v-model="keyword" label="" placeholder="请输入搜索关键词" @keydown.enter="search()" />
  </van-cell-group>
  <van-row v-show="historyList.length" class="search-history">
    <span v-for="(item,i) in historyList" :key="i">{{item}}</span>
  </van-row>
</template>

<script lang="ts">

import { ref, defineComponent } from 'vue';
export default defineComponent({
  name: 'SearchBar',
  setup(){
    let historyList = ref([] as string[])
    return {
      historyList,
      
    }
  },
  data(){
    return {
      keyword: '',
    }
  },
  methods: {
    search(){
      console.log('搜索' + this.keyword)
    }
  }
})
</script>

<style lang="scss">
.search-bar{
  position: relative;
  color: rgba(153, 153, 153, 1);
  .van-field__control{
    width: 100%;
    box-sizing: border-box;
    padding: 10px 13px;
    border-radius: 8px;
    text-indent: 20px;
  }
  .icon-search{
    position: absolute;
    left: 10px;
    top:13px;
    font-size: 18px;
    z-index: 20;
  }
}
</style>