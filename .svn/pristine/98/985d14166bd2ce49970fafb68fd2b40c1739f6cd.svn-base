// pages/customer/invite/invite.js
var app = getApp();
var QR = require("../../../utils/qrcode.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    urls: app.data.URLS,
    invite_url:"",
    invite:"",
    username:""
  },
  canvasId: "qrcCanvas", 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.checkLogin();
    wx.setNavigationBarTitle({
      title: '邀请好友'
    })

    var that = this;
    try {
      var invite = wx.getStorageSync('invite');
    } catch (e) {
      wx.switchTab({
        url: "/pages/customer/index/index",
      });
    }

    try {
      var username = wx.getStorageSync('username');
      this.setData({
        username: username
      })
    } catch (e) {
      wx.switchTab({
        url: "/pages/customer/index/index",
      });
    }
    app.request(this.data.urls + '/customer/inviteUrl?invite=' + invite, 'GET').then((res) => {
      that.createQrCode(res.url, that.canvasId);   
      that.setData({
        invite_url:res.url,
        invite:res.invite
      });
      wx.hideLoading();
    }).catch((errMsg) => {
      wx.hideLoading();
    });
  },
  copyurl:function(){
    var self = this;
    wx.setClipboardData({
      data: self.data.invite_url,
      success: function (res) {
        wx.showToast({
          title: '复制成功！',
          icon: 'success',
          duration: 1000,
          mask: true
        })
      }
    }); 
  },
  copyinvite:function(){
    var self = this;
    wx.setClipboardData({
      data: self.data.invite,
      success: function (res) {
        wx.showToast({
          title: '复制成功！',
          icon: 'success',
          duration: 1000,
          mask: true
        })
      }
    }); 
  },
  createQrCode: function (str, canvasId) {
    //调用插件中的draw方法，绘制二维码图片  
    QR.api.draw(str, canvasId, 140, 140);

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