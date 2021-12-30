<template>
  <!-- 购物车 -->
  <div class="shop-car">
    <div class="shop-list-wrap">
      <ul>
        <li v-for="(item, i) in shopList" :key="i">
          <shop-item :detail="item"></shop-item>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { GoodItem } from '~~/types'
export default defineComponent({
  setup(){
    let shopList = ref([] as GoodItem[]);
    setTimeout(() => {
      shopList.value = [
        {
          id: '1313521sdvsads',
          name: '美家沙发',
          url: "/imgs/sofa/sofa2.png",
          description: "美家沙发",
          prcie: 5700,
          sealCount: 1299,
        },
      ]
    }, 500);
    return {
      shopList
    }
  }
})
</script>

<style lang="scss">
  .shop-car{
    padding: 20px;
  }
</style>