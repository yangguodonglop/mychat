// pages/customer/discount/getcoupon/list.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    urls: app.data.COMMON,
    data:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.checkLogin();
    wx.setNavigationBarTitle({
      title: '领取优惠券'
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
    this.getData();
  },
  //获取优惠券列表
  getData: function () {
    var that = this;
    app.request(this.data.urls + '/get_coupon', 'GET').then((res) => {
      that.setData({
        data: res.data
      });
      wx.hideLoading();
    }).catch((errMsg) => {
      wx.hideLoading();
    });
  },
  //领取
  getCoupon:function(e){
    var id = e.currentTarget.dataset.id;
    var data = {
      id:id
    }
    var that = this;
    app.request(this.data.urls + '/doGetCoupon', data, 'POST').then((res) => {
     if(res.status == 0){
       wx.showToast({
         title: res.msg,
         icon: 'none',
         duration: 1000,
         mask: true
       })
       return;
     }
     wx.showToast({
       title: res.msg,
       icon: 'success',
       duration: 1000,
       mask: true
     })
     that.getData();
      wx.hideLoading();
    }).catch((errMsg) => {
      wx.hideLoading();
    });
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