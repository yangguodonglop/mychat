var app = getApp();
// pages/search/search.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
      actionid:1,
      datalist:[],
      sort_none:true,
      sortid:0,
      key:'',
      ss: true,
    },
    //获得搜索框内容
    ss_input: function(e){
        this.setData({
            key: e.detail.value
        });
    },
    //切换标题
    but_action: function(e){
        let dataid = e.currentTarget.dataset.id;
        this.setData({
          actionid: dataid,
        });
        this.getdata(dataid, this.data.sortid, this.data.key);
    },
    //显示搜索框
    showSearch: function(){
        this.setData({
            ss: !this.data.ss
        });
    },
    //搜索
    search:function(e){
        // console.log(this.data.key);
        this.getdata(this.data.actionid, this.data.sortid, this.data.key);
    },
    sortlist:function(){
      this.setData({
        sort_none: !this.data.sort_none
      });
    },
    onsort:function(e){
      var sortid = e.currentTarget.dataset.id;
      this.getdata(this.data.actionid, sortid, this.data.key);
      this.setData({
        sortid: sortid,
        sort_none:true
      });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      if (options.key != undefined) {
        this.data.key = options.key;
      }  
      this.getdata(this.data.actionid, this.data.sortid, this.data.key);
    },
    getdata: function (itme,sortid,key){
      switch (sortid) {
        case '1':
          var is_new = 1;
          var sort = '';
          break;
        case '2':
          var is_new = '';
          var sort = 'desc';
          break;
        case '3':
          var is_new = '';
          var sort = 'asc';
          break;
        default:
          var is_new = '';
          var sort = '';
          break;
      }
      var data = { type: itme };
      if (is_new !='') { data['is_new'] = is_new; }
      if (sort != '') { data['sort'] = sort; }
      if (itme == '5'){
        if (key != '') {data['city'] = key; } else {data['city'] = '武汉'; }
        var that = this;
        wx.request({
          url: app.data.URLS + '/searchTourAround',
          data: data,
          success: function (res) {
            that.setData({
              datalist: res.data.data.data,
            });
          },
          fail: function (err) {
            reject('integral');
          }
        })
      }else{
        if (key != '') { data['key'] = key;}
        var that = this;
        wx.request({
          url: app.data.URLS + '/search',
          data: data,
          success: function (res) {
            that.setData({
              datalist: res.data.data.data,
            });
          },
          fail: function (err) {
            reject('integral');
          }
        })
      }
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