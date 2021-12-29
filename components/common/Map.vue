<template>
  <div class="map-warp" >
    <div class="map-container" ref="map"></div>
  </div>
</template>

<script lang="ts">
import { getLocation } from '../../utils/common'
import { ref } from 'vue'

let curLocation = {};
export default {
  setup(){
    console.log(('获取定位'));
    getLocation((position)=> {
      curLocation = position
      console.log(curLocation.coords.latitude);
      
    })
  },
  data(){
    return {

    }
  },
  emits: ['acceptPosition'],
  mounted(){

  },
  methods: {
    initMap(){
      var mp = new BMap.Map(this.$refs.map);  
      if(curLocation.latitude){
        mp.centerAndZoom(new BMap.Point(curLocation.coords.latitude, curLocation.coords.longitude), 11);
      }else{
        mp.centerAndZoom(new BMap.Point(121.491, 31.233), 11);  
      }
      return mp
    }
  }
}
</script>

<style lang="scss">
.map-warp{
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 99999;
  top: 0;
  left: 0;
  background-color: #fff;
  .map-container{
    width: 100%;
    height: 100%;
  }
}
</style>