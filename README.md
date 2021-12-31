# nuxt-vue-ssr-demo
基于nuxt和vue3的服务端渲染架子

#### node version ^16.13.1，npm verison ^8.3.0 ，安装好对应环境再安装依赖

#### 插件/UI库
- swiper
- better-scroll
- vant

### 启动
npm i 
npm run dev

### 启动构建并开启服务器
npm i pm2 -g
npm run build
npm run prod
- 其中，pm2 配置文件在escosystent.config.js ，可支持配置多环境构建，支持自定义环境变量