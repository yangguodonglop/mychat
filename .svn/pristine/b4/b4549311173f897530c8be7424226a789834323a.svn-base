var app = getApp();
var WxParse = require('../../../wxParse/wxParse.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgs: [],
    title:"",
    suggest_price:"",
    price: "",
    good_id:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    var that = this;
    wx.request({
      url: app.data.DETAILS + options.id,
      success: function (res) {      
      var article = res.data.data.content;
      WxParse.wxParse('article', 'html', article, that, 5);
        that.setData({
          good_id:res.data.data.id,
          imgs: JSON.parse(res.data.data.thumb),
          title:res.data.data.title,
          suggest_price: res.data.data.suggest_price,
          price:res.data.data.price
        })
        wx.hideLoading()
      },
      fail: function (err) {
        wx.hideLoading()
        reject('menu');
      }
    })
  },
  linkUrl:function(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/order/placeorder/placeorder?id='+id
    });
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
    var that = this;
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
  //联系客服
  dial: function () {
    wx.makePhoneCall({
      phoneNumber: '4008700392'
    })
  },
})