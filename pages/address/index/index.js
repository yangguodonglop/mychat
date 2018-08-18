var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
address: [],
urls: app.data.COMMON,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '管理收货地址'
    })
    app.checkLogin();

  },
  //设置默认地址
  setDefaultAddress: function(e){
    let id = e.currentTarget.dataset.id;
    var that = this;
    var data = {
      id:id
    }
    app.request(this.data.urls + '/setDefaultAddress', data,'POST').then((res) => {
      if (res.status == 1) {
        wx.showToast({
          title: res.msg,
          icon: 'succes',
          duration: 1000,
          mask: true
        })
        that.getAddressList();
      } else if (res.status == 0) {
        wx.showToast({
          title: res.msg,
          icon: 'none',
          duration: 2000
        })
      }
      wx.hideLoading();
    }).catch((errMsg) => {
      wx.showToast({
        title: '操作失败！',
        icon: 'none',
        duration: 2000
      })
      wx.hideLoading();
    });
   
  },
  //添加
  addAdress: function (e) {
    let url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url
    });
  },
  //删除地址
  deleteAddress:function(e){
    var address_id = e.currentTarget.dataset.id;
    var data = {
      address_id: address_id
    }
    var that = this;
    app.request(this.data.urls + '/deleteAddress', data, 'POST').then((res) => {
      if (res.status == 1) {
        wx.showToast({
          title: res.msg,
          icon: 'succes',
          duration: 1000,
          mask: true
        })
        that.getAddressList();
        wx.hideLoading();
        return;
      }
       if (res.status == 0) {
        wx.showToast({
          title: res.msg,
          icon: 'none',
          duration: 2000
        })
        wx.hideLoading();
        return;
      }
    
    }).catch((errMsg) => {
      wx.showToast({
        title: '操作失败！',
        icon: 'none',
        duration: 2000
      })
      wx.hideLoading();
    });
  },
  //编辑地址
  editAddress:function(e){
    var address_id = e.currentTarget.dataset.id;
    var data = {
      address_id: address_id
    }
  
    wx.navigateTo({
       url: '/pages/address/edit/edit?address_id=' + address_id
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
    this.getAddressList();
  },
  /**
   * 获取用户地址
   */
  getAddressList: function () {
    var that = this;
    app.request(this.data.urls + '/addressList', 'GET').then((res) => {
      that.setData({
        address: res.data
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

  }
})