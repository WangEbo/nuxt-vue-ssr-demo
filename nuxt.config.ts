import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    script: [
      { src: 'https://api.map.baidu.com/api?v=2.0&ak=KTqh50F1A96I0reEvuVuiVEmAOyMhc5m&callback=initialize' }
    ]
  },
  css: [
    'element-plus/dist/index.css',
    '@/assets/css/reset.css'
  ],
  modules: [

  ],
  plugins: [
    
  ],
  nitro: {
    preset: 'server'
  }
})
