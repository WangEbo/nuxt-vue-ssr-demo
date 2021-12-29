<template>
  <van-cell-group inset class="search-bar">
    <mh-icon icon="icon-search"></mh-icon>
    <van-field v-model="keyword" label="" placeholder="请输入搜索关键词" @focus="toSearch" @keydown.enter="search()" />
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
    },
    toSearch(){
      this.$router.push('/search', {
        params: {
          api: '/main/search'
        }
      })
    }
  }
})
</script>

<style lang="scss">
.search-bar{
  position: relative;
  .van-field__control{
    width: 100%;
    box-sizing: border-box;
    padding: 10px 13px;
    border-radius: 8px;
  }
  .icon-search{
    position: absolute;
    left: 10px;
    top:13px;
    font-size: 20px;
    color: rgba(153, 153, 153, 1);
  }
}
</style>