var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/images/new_fx.jpg',
   
    ],
    dataList: [],
    dataList1: [],
    dataList2:[],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    urls: app.data.URLS
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '发现'
    });
    this.getData();
   
  },
  tolink: function (e) {
    var id = e.currentTarget.dataset.id;
    app.toGoodDetails(id);
  },
  //搜索
  toSearch:function(e){
    var key = e.currentTarget.dataset.key;
    if(key == ''){
      wx.navigateTo({
        url: '/pages/search/search'
      });
      return
    }
    wx.navigateTo({
      url: '/pages/search/search?key='+key
    });
  },
  getData: function () {
    let _this=this
    wx.request({
      url: _this.data.urls + '/find',
      success: function (res) {
      
        _this.setData({
          dataList: res.data.data.find,
          dataList1: res.data.data.sift,
			  	dataList2: res.data.data.path
        });
      },
      fail: function (err) {
  
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