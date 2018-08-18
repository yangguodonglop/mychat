// pages/integral//details/index.js
var WxParse = require('../../../wxParse/wxParse.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
     good_id: '',
     thumb:"",
     title:"",
     price:"",
     urls: app.data.URLS,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '积分商品详情'
    })
    if (options.id != undefined) {
      this.data.good_id = options.id;
      this.getData(options.id);
      return
    }  

    // var query = wx.createSelectorQuery();
    // query.select('.wxParse-img').boundingClientRect();
    // query.exec(function (res) {
    //  // console.log(res)
    // })
  },


//获取积分商品详情
getData:function(id){
  var that = this;
  wx.request({
    url: this.data.urls + '/integralDetails?id=' + id+'&type=wechat',
    success: function (res) {
      var article = res.data.data.contents;
      WxParse.wxParse('article', 'html', article, that, 5);
      that.setData({
        thumb:res.data.data.thumb,
        title:res.data.data.title,
        price:res.data.data.price
      })
     
    }, fail:function(){
    
    }
  })
},

//立即兑换
  makeOrder:function(){
    wx.navigateTo({
      url: '/pages/integral/makeorder/index?id=' + this.data.good_id
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
  
  }
})

