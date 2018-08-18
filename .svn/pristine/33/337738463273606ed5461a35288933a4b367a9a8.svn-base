
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
      urls: app.data.COMMON,
        _num: 0,
        data1: [],
        data2: [],
        data3: []
    },
    //领取优惠券
    getCoupon:function(){
      wx.navigateTo({
        url: '/pages/customer/discount/getcoupon/list'
      });
    },
    //点击选项卡
    select: function (e) {
        var item = e.target.dataset.id;
        this.setData({
            _num: item
        });
        var coupon_type = parseInt(this.data._num) + 1;
        this.getData(coupon_type);
    },
    //滑动切换选项卡
    selec: function (e) {
        var item = e.detail.current;
        this.setData({
            _num: item
        });
        var coupon_type = parseInt(this.data._num) + 1;
        this.getData(coupon_type);
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      app.checkLogin();
      wx.setNavigationBarTitle({
        title: '优惠券列表'
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
      var coupon_type = parseInt (this.data._num)+1;
      this.getData(coupon_type);
    },
    //获取优惠券列表
    getData: function (coupon_type) {
      var that = this;
      app.request(this.data.urls + '/coupon/list?status=' + coupon_type, 'GET').then((res) => {
        if(res.status == 0){
          return
        }
        var coupon_type = (that.data._num) + 1;
        if (coupon_type == 1){
          that.setData({
              data1:res.data
          });
        } else if (coupon_type == 2){
          that.setData({
            data2: res.data
          });
        }else{
          that.setData({
            data3: res.data
          });
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

    }
})