// pages/integral/makeorder/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    urls: app.data.URLS,
    good_price: '',
    price: '',
    default_address:[],
    goods:[],
    goods_id:"",
    num: '1',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '确认订单'
    })

    if (options.id != undefined) {
      this.setData({
        goods_id: options.id
      })
    }
    this.getData();
  },
//获取商品信息
getData:function(){
  var that = this;
  app.request(this.data.urls + '/integral/order?id=' + this.data.goods_id, 'GET').then((res) => {
    that.setData({
      default_address: res.data.default_address,
      goods:res.data.product,
      good_price: res.data.product.price,
      price: res.data.product.price,
    });
    wx.hideLoading();
  }).catch((errMsg) => {
    wx.hideLoading();
  });
},
//切换地址
  checkaddress:function(){
    wx.navigateTo({
      url: '/pages/address/index/index'
    });
  },

  but_del: function () {
    var num = this.data.num;
    num--;
    if (this.data.num <= 0) {
      this.setData({
        num: 1,
        price: this.data.good_price
      })
      return
    }
    var price = this.data.good_price * num;
    this.setData({
      num: num,
      price: price
    })
  },

  but_add: function () {
    var num = this.data.num;
    num++
    var price = this.data.good_price * num;
    this.setData({
      num: num,
      price: price
    })
  },

  //兑换
  exchange:function(){
    var that = this;
    wx.showModal({
      title: '积分兑换',
      content: '是否要兑换此商品？',
      success: function (res) {
        if (res.confirm) {
          var data = {
            product_id: that.data.goods_id,
            num: that.data.num
          }
      
          app.request(that.data.urls + '/integral/exchange', data, 'POST').then((res) => {
          if(res.status == 0){
            wx.showToast({
              title: res.msg,
              icon: 'none',
              duration: 1000,
              mask: true
            })
            return;
          }
          if (res.status == 1) {
            wx.showToast({
              title: res.msg,
              icon: 'success',
              duration: 1000,
              mask: true
            })
            setTimeout(function () {
              wx.switchTab({
                url: "/pages/integral/index/index",
              });
            }, 1500)
            return;
          }
        
            wx.hideLoading();
          }).catch((errMsg) => {
            wx.hideLoading();
          });
        } else if (res.cancel) {
          
        }
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
    this.getData();
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