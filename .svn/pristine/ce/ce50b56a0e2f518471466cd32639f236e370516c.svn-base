// pages/order/list/list.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    urls: app.data.URLS,
    switchs: [
      '全部订单',
      '待付款',
      '进行中',
      '已完成'
    ],
    currentTabsIndex: 0,
    dataList: [],
    dataList1: [],
    nowstr: '',
    isChecked: true,
    isChecked1: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    app.checkLogin();
    if (option.type != undefined){
      this.data.nowstr = option.type;
    }  
    wx.setNavigationBarTitle({
      title: '我的订单'
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
  onShow: function (e) {
    this.getData();
  },
  delete_order:function(e){
    var id = e.currentTarget.dataset.id;
    var data = {
      id:id
    }
    app.request(this.data.urls + '/order/delete', data, 'POST').then((res) => {
      var that = this;
      var now = that.data.nowstr;
     
      if(res.status == 1){
        wx.showToast({
          title: res.msg,
          icon: 'success',
          duration: 1000,
          mask: true
        })
        app.request(this.data.urls + '/orderList?type=' + now, 'GET').then((res) => {
          var that = this;
          that.dataList = res.data
          for (var i = 0; i < res.data.length; i++) {
            if (that.dataList[i].status == 1) {
              that.dataList[i].status = "立即预购"
            } else {
              that.dataList[i].status = "重新预购"
            }
          }
          that.setData({
            dataList: res.data,
            isChecked: true,
            isChecked1: true
          });
          wx.hideLoading();
        }).catch((errMsg) => {

          wx.hideLoading();
        });
        return;
      }
      if(res.status == 0){
        wx.showToast({
          title: res.msg,
          icon: 'none',
          duration: 1000,
          mask: true
        })
        return;
      }
       
    }).catch((errMsg) => {
      wx.showToast({
        title: '操作失败！',
        icon: 'none',
        duration: 1000,
        mask: true
      })
      return;
      wx.hideLoading();
    });
  },
  getData: function () {
    var order_type = parseInt(this.data.nowstr)+1;
    app.request(this.data.urls + '/orderList?type='+ order_type, 'GET').then((res) => {
  
      var that = this;
      switch (that.data.nowstr) {
        case '0':
          that.dataList = res.data
          for (var i = 0; i < res.data.length; i++) {
            if (that.dataList[i].status == 1) {
              that.dataList[i].status = "立即预购"
            } else {
              that.dataList[i].status = "重新预购"
            }
          }
          that.setData({
            currentTabsIndex: that.data.nowstr,
            dataList: res.data,
            isChecked: false,
            isChecked1: false
          });
          break;
        case '1':
          that.dataList = res.data
          for (var i = 0; i < res.data.length; i++) {
            if (that.dataList[i].status == 1) {
              that.dataList[i].status = "立即预购"
            } else {
              that.dataList[i].status = "重新预购"
            }
          }
          that.setData({
            currentTabsIndex: that.data.nowstr,
            dataList: res.data,
            isChecked: true,
            isChecked1: true
          });
          break;
        case '2':
          that.dataList = res.data
          for (var i = 0; i < res.data.length; i++) {
            if (that.dataList[i].status == 2) {
              that.dataList[i].status = "申请退款"
            }
          }
          that.setData({
            currentTabsIndex: that.data.nowstr,
            dataList: res.data,
            isChecked1: true,
            isChecked: false
          });
          break;
        case '3':
          that.dataList = res.data.order_refunds
          that.dataList = res.data.order_end
          that.setData({
            currentTabsIndex: that.data.nowstr,
            dataList: res.data.order_refunds,
            dataList1: res.data.order_end,
            isChecked: false,
            isChecked1: false
          });

          break;
      }
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

  },
  switchtab: function (e) {
    //获取索引，改变选中样式
    var that = this;
    var index = e.currentTarget.dataset['index'];
    var nowindex = index + 1

    //匹配选中菜单，获取数据
    switch (nowindex) {
      case 1:
        this.setData({
          currentTabsIndex: index
        })
        break;
      case 2:
        this.setData({
          currentTabsIndex: index
        })
        break;
      case 3:
        this.setData({
          currentTabsIndex: index
        })
        break;
      case 4:
        this.setData({
          currentTabsIndex: index
        })
        break;
    }
    var nowtype = that.data.currentTabsIndex + 1
    app.request(this.data.urls + '/orderList?type='+ nowtype, 'GET').then((res) => {
      switch (nowtype) {
        case 1:
          that.dataList = res.data;
          for (var i = 0; i < res.data.length; i++) {
            if (that.dataList[i].status == 1) {
              that.dataList[i].status = "立即预购"
            } else {
              that.dataList[i].status = "重新预购"
            }
          }
          that.setData({
            dataList: res.data,
            isChecked: false,
            isChecked1: false
          });
          break;
        case 2:
          that.dataList = res.data;
        
          for (var i = 0; i < res.data.length; i++) {
            if (that.dataList[i].status == 1) {
              that.dataList[i].status = "立即预购"
            } else {
              that.dataList[i].status = "重新预购"
            }
          }
          that.setData({
            dataList: res.data,
            dataList1:[],
            isChecked: true,
            isChecked1: true
          });
          break;
        case 3:
          that.dataList = res.data;
         
          for (var i = 0; i < res.data.length; i++) {
            if (that.dataList[i].status == 2) {
              that.dataList[i].status = "申请退款"
            }
          }      
          that.setData({
            dataList: res.data,
            dataList1: [],
            isChecked1: true,
            isChecked: false
          })
          break;
        case 4:
          that.dataList = res.data.order_refunds
          that.dataList = res.data.order_end
          that.setData({
            dataList: res.data.order_refunds,
            dataList1: res.data.order_end,
            isChecked: false,
            isChecked1: false
          });
          break;
      }
      wx.hideLoading();
    }).catch((errMsg) => {
     
      wx.hideLoading();
    });

  },
  //执行重新付款或退款操作
operation:function(e){
  var o_type = this.data.currentTabsIndex;
  var id = e.currentTarget.dataset.id;
  var price = e.currentTarget.dataset.price;

  this.setData({
    currentTabsIndex:1
  })
  //重新支付
  if(o_type == 1){
    wx.navigateTo({
      url: '/pages/order/payment/payment?order_id='+id+'&price='+price
    });
  }
  //申请退款
  if (o_type == 2) {
    var data = {
      id: id
    }
    app.request(this.data.urls + '/order/refund', data, 'PUT').then((res) => {
      var that = this;
      if (res.status == 1) {
        wx.showToast({
          title: res.msg,
          icon: 'success',
          duration: 1000,
          mask: true
        })
        app.request(this.data.urls + '/orderList?type=3', 'GET').then((res) => {
          var that = this;
          that.dataList = res.data
          for (var i = 0; i < res.data.length; i++) {
            if (that.dataList[i].status == 1) {
              that.dataList[i].status = "立即预购"
            } else {
              that.dataList[i].status = "重新预购"
            }
          }
          that.setData({
            dataList: res.data,
            isChecked: true,
            isChecked1: true
          });
          wx.hideLoading();
        }).catch((errMsg) => {

          wx.hideLoading();
        });
        return;
      }
      if (res.status == 0) {
        wx.showToast({
          title: res.msg,
          icon: 'none',
          duration: 1000,
          mask: true
        })
        return;
      }

    }).catch((errMsg) => {
      wx.showToast({
        title: '操作失败！',
        icon: 'none',
        duration: 1000,
        mask: true
      })
      return;
      wx.hideLoading();
    });
  }
},


})