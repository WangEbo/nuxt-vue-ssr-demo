<template>
  <van-cell-group inset class="search-bar">
    <van-field v-model="keyword" label="" placeholder="请输入搜索关键词" @keydown.enter="search()" />
    
  </van-cell-group>
  <van-row v-show="historyList.length" class="search-history">
    <!-- <van-col span="8">span: 8</van-col> -->
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
  width: 92%;
  margin: 0 auto;
  .van-field__control{
    width: 100%;
    box-sizing: border-box;
    padding: 3px 5px;
    border: 1px solid #858282;
    border-radius: 8px;
  }
}
</style>