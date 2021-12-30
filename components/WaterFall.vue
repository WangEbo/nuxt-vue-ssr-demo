<template>
  <ul class="water-wrap">
    <li class="water-col" :style="{'margin-right': index < colNum ? gap + 'px' : 0}" v-for="index in colNum" :key="index">
      <div class="col-item" v-for="(item, i) in colList[index-1]" :key="i">
        <slot name="fall-item" :item="item"></slot>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { ref, reactive, defineComponent, PropType } from "vue"
import { GoodItem } from "~~/types";

let colList = ref([]); //处理后的渲染数据
export default defineComponent({
  props: {
    colNum: {  //列数
      type: Number,
      require: true
    },
    gap: {  //列间隔
      type: Number || String,
      default: 20
    },
    list: { //渲染数据
      type: Array as PropType<GoodItem []>,
      require: true 
    }
  },
  setup(props){
    
    return {
      colList
    }
  },
  watch: {
    list: {
      handler(nval, oval){
        this.renderList()
      }
    }
  },
  methods: {
    renderList(){
      let newColList = [];
      let colNum = this.colNum,
          list = this.list;
      for(let i = 0;i< colNum;i++){
        newColList.push([])
      }
      
      //部分场景每块元素需添加高度，添加到最小高度的数组中，这里简化为按顺序添加
      for(let rowIndex = 0;rowIndex*colNum < list.length;rowIndex++){
        for(let m = 1;( m <= colNum && rowIndex*colNum + m <= list.length);m++){
          let curItem = list[m-1 +rowIndex*colNum]
          newColList[m-1].push(curItem)
        }
      }

      colList.value = newColList
      console.log(colList);
    }
  },
  mounted(){

  }
})
</script>

<style lang="scss">
  .water-wrap{
    display: flex;
    flex-direction: row;
  }
</style>