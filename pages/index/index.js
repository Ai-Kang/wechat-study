// index.js
Page({
  // 页面加载
  onLoad(options) {
    // wx.login({
    //   success: (res) => {
    //   },
    // })
    wx.showModal({
      title: '用户登录',
      content: '当前状态未登录，是否登录',
      complete: (res) => {
        if (res.cancel) {}
        if (res.confirm) {}
      }
    })
  },
  // 页面展示
  onShow(){
    wx.request({
      url: 'url',
      method:"GET",
      // 请求参数
      data: {},
      // 请求头
      header: {},
      // 返回数据格式，默认json
      dataType: "json",
      // 成功回调
      success(res)=>{

      },
      // 失败回调
      fail(res)=>{
        
      },
      // 无论成功还是失败
      complete(res)=>{}
    })
  },
  // 页面渲染完成
  onReady(){},
  // 页面卸载
  onUnload(){},
  // 页面隐藏
  onHide(){}
})