// pages/order/list/list.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    urls: app.data.COMMON,
    price:'',
    wechatmini:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.checkLogin();
    wx.setNavigationBarTitle({
      title: '立即支付'
    });
    this.setData({
      price: options.price
    });
    var that = this;
    app.request(this.data.urls + '/wechatpay?order_id=' + options.order_id+ '&pay_type=2&type=miniapp', 'get').then((res) => {
      that.setData({
        wechatmini:res
      });
    });
  },
pay:function(){
  var data = this.data.wechatmini;
  if (data.message == 'Get Wechat API Error:appid and openid not match'){
    wx.showToast({
      title: '请使用微信登录！',
      icon: 'none',
      duration: 1000,
      mask: true
    })
    return;
  }
  wx.requestPayment({
    'timeStamp': data.timeStamp,
    'nonceStr': data.nonceStr,
    'package': data.package,
    'signType': 'MD5',
    'paySign': data.paySign,
    'success': function (res) {
      console.log(res);
    },
    'fail': function (res) {
    }
  })
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

})