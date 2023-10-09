const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  productionSourceMap: false,// 生产环境是否要生成 sourceMap
  publicPath: './',  //   部署应用包时的基本 URL
  assetsDir: 'assets',  //   放置静态文件夹目录
})
