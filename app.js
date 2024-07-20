// app.js
// 入口文件
App({
  // 小程序初始化
  onLaunch(){
    console.log("小程序初始化")
  },
  // 小程序启动或切换到前台
  onShow(){ console.log("小程序启动或切换到前台")},
  // 小程序切换到后台
  onHide(){console.log("小程序切换到后台")}
})

// 组件全局注册 app.json中配置usingComponents进行注册
// 局部注册 在页面json中配置usingComponents进行注册
/**
 "usingComponents": {
    "name": "path"
  },
 */