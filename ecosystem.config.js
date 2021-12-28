module.exports = {//pm2启动配置
    apps: [
      {
        // 生产环境
        name: "prod",
        // 项目启动入口文件
        script: ".output/server/index.mjs",
        // 项目环境变量
        env: {
            "NODE_ENV": "production",
            "NUXT_PORT": 3000,
            "NUXT_HOST": "0.0.0.0"
        }
      },
  　　{
        // 测试环境
        name: "test",
        // 项目启动入口文件
        script: ".output/server/index.mjs",
        // 项目环境变量
        env: {
            "NODE_ENV": "test",
            "NUXT_PORT": 3000,
            "NUXT_HOST": "0.0.0.0"
        }
      }
  ] }
  