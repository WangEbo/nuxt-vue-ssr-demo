import { defineNuxtPlugin } from "#app";
import Vant from 'vant'

//plugins 文件夹下可引入外部插件
// 目前在 nuxt 中无法按需引入样式，因此采用手动引入的方式
import 'vant/lib/index.css';
import './vantVar.css'
export default defineNuxtPlugin(nuxtApp => {
  Vant.install(nuxtApp.vueApp)
})