import { defineNuxtConfig } from 'nuxt3'



// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  
  meta: {
    script: [
      // { src: 'https://api.map.baidu.com/api?v=3.0&ak=KTqh50F1A96I0reEvuVuiVEmAOyMhc5m&callback=initialize' },
      { src: 'https://api.map.baidu.com/getscript?v=3.0&ak=KTqh50F1A96I0reEvuVuiVEmAOyMhc5m&services=&t=20211206192911' }
    ]
  },
  css: [
    '@/assets/css/reset.css', //通用重置样式
    '@/assets/css/icon-fonts/iconfont.css',//iconfonts 
  ],
  modules: [

  ],
  plugins: [

  ],
  nitro: {
    preset: 'server'
  }
})
