
var app = getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    urls: app.data.URLS,
    good_price: '',
    price: '',
    action: false,
    isshow:false,
    datetime: '日期选择',
    date: Date.parse(new Date()),
    num:'1' ,
    name: '',
    phone: '',
    contents: '',
    thumb:' ',
    title:' ',
  },
  bindDateChange: function (e) {
    this.setData({
      datetime: e.detail.value
    })
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },

  onLoad: function (options) {
    app.checkLogin();
    wx.setNavigationBarTitle({
      title: '订单填写'
    });
    var that = this;
    app.request(this.data.urls + '/order?id='+options.id, 'GET').then((res) => {
      that.setData({
        product_id: options.id,
        title: res.data.title,
        good_price: res.data.suggest_price,
        price: res.data.suggest_price,
        thumb:res.data.thumb
      });
      wx.hideLoading();
    }).catch((errMsg) => {
      wx.hideLoading();
    });
  },
  toggle: function (e) {
    var that = this;
    var togglenow = this.data.isshow
    if (togglenow == false) {
      this.setData({ isshow: true })
    }
    if (togglenow == true) {
      this.setData({ isshow: false })
    }
  },
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
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
    var price = this.data.good_price *num;
    this.setData({
      num: num,
      price: price
    })
  },
  getname: function (e) {
  
    var val = e.detail.value;
    this.setData({
      name: val
    });
  },  
  getphone: function (e) {
    
    var val = e.detail.value;
    this.setData({
      phone: val
    });
  }, 
  getcontents: function (e) {
    var val = e.detail.value;
    this.setData({
      contents: val
    });
  }, 
  linkUrl: function () {
    if (this.data.datetime == '日期选择') {
      wx.showModal({
        content: '请选择出行日期',
      })  
      return
    }
    if (this.data.num <= 0) {
      wx.showModal({
        content: '请填写正确数量',

      }) 
      return
    }
    if (this.data.name == '') {
      wx.showModal({
        content: '请输入出游人姓名',
      })      
       return
    };
    if (this.data.phone == '') {
      wx.showModal({
        content: '手机号码必须填写',

      })   
      return
    } 
    if (!(/^1[34578]\d{9}$/.test(this.data.phone))) {
      wx.showModal({
        content: '手机号码填写错误',
      })   
      return
    };
    if (this.data.isshow == false) {
      wx.showModal({
        content: '请仔细阅读条款',
      })   
      return
    }
    var data = {
      product_id: this.data.product_id,
      num:this.data.num,
      phone:this.data.phone,
      name:this.data.name,
      contents:this.data.contents,
      start_time: this.data.datetime
    }
    app.request(this.data.urls + '/makeOrder', data, 'POST').then((res) => {
      console.log(res)
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
          url: '/pages/order/payment/payment?order_id=' + res.data.order_id +'&price='+res.data.price
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

  },

})