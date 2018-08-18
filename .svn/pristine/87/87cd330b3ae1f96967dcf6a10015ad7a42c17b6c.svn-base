// pages/customer/setting/email/email.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    urls: app.data.URLS,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.checkLogin();
    wx.setNavigationBarTitle({
      title: '邮箱绑定'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
blurEmail:function(e){
  var email = e.detail.value.replace(/\s/g, "");
  this.setData({
    email: email
  })
},
  sendEmail:function(){
    var email = this.data.email;
    if (email == undefined) {
      wx.showToast({
        title: '邮箱不能为空！',
        icon: 'none',
        duration: 1000,
        mask: true
      })
      return;
    }
    var data = {
      email:email
    }
    app.request(this.data.urls + '/customer/sendEmail', data, 'POST').then((res) => {
      if (res.status == 0) {
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
      setTimeout(function () {
        wx.navigateTo({
          url: '/pages/customer/setting/index/index'
        });
      }, 1500)
   
      wx.hideLoading();
    }).catch((errMsg) => {
      wx.hideLoading();
    });
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

var validateEmail = function (email) {
  var reg = getRegExp('^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$')
  return reg.test(email)
}
