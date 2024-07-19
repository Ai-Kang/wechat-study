// index.js
Page({
  // api汇总
  testApi() {
    wx.showLoading({
      title: '提示框',
      // 是否展示透明蒙版
      mask: true
    })
    // 关闭提示框
    exportwx.hideLoading()
    // 模态对话框
    wx.showModal({
      title: '是否登录',
      content: '你是否要登录',
      complete: (res) => {
        if (res.cancel) {
          console.log("取消")
        }
        if (res.confirm) {
          console.log("确定")
        }
      }
    })
    // 消息提示
    wx.showToast({
      title: '登录成功',
      icon: "none", // error
      duration: 2000
    })

    // 本地存储
    wx.setStorageSync('key', data) // 同步存储
    wx.getStorageSync("key") // 同步获取
    wx.removeStorageSync('key') // 同步删除
    wx.clearStorageSync() // 同步清空
    wx.setStorage("key", data) // 异步存储
    wx.getStorage("key") // 异步获取
    wx.removeStorage('key') // 异步删除
    wx.clearStorage() // 异步清空

    // 路由跳转,保留当前页面，跳转到应用内的某个页面，但是不能跳转tabber
    wx.navigateTo({
      url: 'url',
    })
    // 路由跳转,关闭当前页面，跳转到应用内的某个页面，但是不能跳转tabber
    wx.redirectTo({
      url: 'url',
    })
    // 路由跳转,跳转到tabbar页面，路径不能携带参数
    wx.switchTab({
      url: 'url',
    })
    // 路由跳转,关闭所有页面，打开应用内某个页面
    wx.reLaunch({
      url: 'url',
    })
    // 路由跳转,关闭当前页面，返回上一页面或多级页面
    wx.navigateBack({
        delta: 1
      })
  },

  // 上拉加载，app.js or page.js 中配置距离页面底部距离。onReachBottomDistance,默认50px
  // 在page.js中定义onReachBottom事件监听用户上拉加载
  onReachBottom() {
    console.log("用户上拉分页了")
  },

  // 下拉刷新，app.js or page.js 中配置允许下拉刷新，同时可以配置窗口、loading样式等
  // 在page.js中定义onPullDownRefresh事件监听用户上拉加载
  onPullDownRefresh() {
    console.log("用户下拉刷新了")
  },

  // 页面加载
  onLoad(options) {

  },
  // 页面展示
  onShow() {
    wx.request({
      url: 'url',
      method: "GET",
      // 请求参数
      data: {},
      // 请求头
      header: {},
      // 返回数据格式，默认json
      dataType: "json",
      // 成功回调
      success(res) {

      },
      // 失败回调
      fail(res) {

      },
      // 无论成功还是失败
      complete(res) {}
    })
  },
  // 页面渲染完成
  onReady() {},
  // 页面卸载
  onUnload() {},
  // 页面隐藏
  onHide() {}
})