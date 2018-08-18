var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    urls: app.data.COMMON,
    region: ['广东省', '广州市', '海珠区'],
  },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.checkLogin();
    wx.setNavigationBarTitle({
      title: '添加收货地址'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  blurName: function (e) {
    var name = e.detail.value.replace(/\s/g, "");
    this.setData({
      name: name
    })
  },
  blurPhone: function (e) {
    var phone = e.detail.value.replace(/\s/g, "");
    this.setData({
      phone: phone
    })
  },
  blurAddress: function (e) {
    var address = e.detail.value.replace(/\s/g, "");
    this.setData({
      address: address
    })
  },
  createAddress:function(){
    var name = this.data.name;
    var phone = this.data.phone;
    var address = this.data.address;
    var region = this.data.region;
    var province = region[0];
    var city = region[1];
    var area = region[2];
    if (name == undefined) {
      wx.showToast({
        title: '收货人不能为空！',
        icon: 'none',
        duration: 1000,
        mask: true
      })
      return;
    }
    if (phone == undefined) {
      wx.showToast({
        title: '手机号码不能为空！',
        icon: 'none',
        duration: 1000,
        mask: true
      })
      return;
    }
    if (!(/^1[34578]\d{9}$/.test(phone))) {
      wx.showToast({
        title: '手机号格式不对！',
        icon: 'none',
        duration: 1000,
        mask: true
      })
      return;
    }

    if (address == undefined) {
      wx.showToast({
        title: '请填写详细地址！！',
        icon: 'none',
        duration: 1000,
        mask: true
      })
      return;
    }
    var data = {
      name:name,
      phone:phone,
      province: province,
      city:city,
      area:area,
      address:address
    }
    app.request(this.data.urls + '/storeAddress', data, 'POST').then((res) => {
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
          url: '/pages/address/index/index'
        });
      }, 1500)

      wx.hideLoading();
      return;
    }).catch((errMsg) => {
      wx.showToast({
        title: '添加失败！',
        icon: 'none',
        duration: 2000
      })
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