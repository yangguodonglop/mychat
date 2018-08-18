// pages/integral/item/item.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
      urls: app.data.URLS,
      list:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      app.checkLogin();
      wx.setNavigationBarTitle({
        title: '积分兑换列表'
      });
      var that = this;
      app.request(this.data.urls + '/integral/conversionLog', 'GET').then((res) => {
  console.log(res)
        that.setData({
        list:res.data
        });
      
        wx.hideLoading();
      }).catch((errMsg) => {
        wx.hideLoading();
      });
    },

  exchange_good:function(e){
    wx.navigateTo({
      url: '/pages/integral/details/index?id=' + e.target.dataset.id
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