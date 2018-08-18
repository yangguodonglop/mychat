var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    urls: app.data.URLS,
    username: "",
    phone:"立即绑定",
    email: "立即绑定",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.checkLogin();
    wx.setNavigationBarTitle({
      title: '设置'
    })
  },

logout:function(e){
  app.clearAuth();
  wx.reLaunch({
    url: "/pages/customer/index/index",
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
    app.request(this.data.urls + '/customerInfo', 'get').then((res) => {
      if (res.data.phone == null || res.data.phone == ' ') {
        var phone = '立即绑定';
      } else {
        var phone = res.data.phone;
      }
      if (res.data.email == null || res.data.email == ' ') {
        var email = '立即绑定';
      } else {
        var email = res.data.email;
      }
      that.setData({
        username: res.data.name,
        phone: phone,
        email: email,
      });
      wx.hideLoading();
    }).catch((errMsg) => {
      console.log(errMsg);//错误提示信息
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

  },
  setPhone:function(e){
    var phone = this.data.phone;
    if(phone != '立即绑定'){
      wx.showToast({
        title: '手机号已经绑定！',
        icon: 'none',
        duration: 1000,
        mask: true
      })
      return;
    }
    wx.navigateTo({
      url: '/pages/customer/setting/phone/setphone'
    });
  },
  setEmail: function (e) {
    var email = this.data.email;
    if (email != '立即绑定') {
      wx.showToast({
        title: '邮箱已经绑定！',
        icon: 'none',
        duration: 1000,
        mask: true
      })
      return;
    }
    wx.navigateTo({
      url: '/pages/customer/setting/email/email'
    });
  },
  setUserInfo:function(e){
    wx.navigateTo({
      url: '/pages/customer/setting/userinfo/userinfo'
    });
  }
})