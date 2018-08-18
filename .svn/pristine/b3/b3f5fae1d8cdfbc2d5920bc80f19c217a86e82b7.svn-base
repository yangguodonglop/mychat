// pages/all_tours/all_tours.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
      urls: app.data.URLS,
        _num: 0,
        dt1: '',
        dt2: '',
        dt3: '',
        dt4: ''
    },
    //点击选项卡
    select: function (e) {
        var item = e.target.dataset.id;
        this.setData({
            _num: item
        });
        this.is_get();
    },
    //滑动切换选项卡
    selec: function (e) {
        var item = e.detail.current;
        this.setData({
            _num: item
        });
        this.is_get();
    },
    //判断是否需要加载网络
    is_get: function(){
        
        var n = 1;
        var urls = '/getDataList';
        var city = '';
        if (this.data._num == 0 && this.data.dt1 == '')
            n = 3;
        else if (this.data._num == 1 && this.data.dt2 == '')
            n = 1;
        else if (this.data._num == 2 && this.data.dt3 == '')
            n = 2;
        else if (this.data._num == 3 && this.data.dt4 == '') {
            n = 0
            city = '武汉';
            urls = '/getTourAroundList';
        }else
            return
        var _self = this;
        this.get_data(urls, n, city).then((res) => {
            // console.log(JSON.stringify(res.data.data));
            switch (this.data._num) {
                case 0:
                    _self.setData({
                        dt1: res.data.data
                    });
                    break;
                case 1:
                    _self.setData({
                        dt2: res.data.data
                    });
                    break;
                case 2:
                    _self.setData({
                        dt3: res.data.data
                    });
                    break;
                case 3:
                    _self.setData({
                        dt4: res.data.data
                    });
                    break;
            }
        }); 
    },
    //请求网络
    get_data: function(urls, n, city){
        var promise = new Promise((resolve, reject)=>{
            wx.request({
                url: app.data.URLS + urls,
                data: { paginate: '30', city: city, type: n},
                header: {
                    'content-type': 'application/json' // 默认值
                },
                success: function (res) {
                    resolve(res.data);
                }
            })
        });
        return promise;
    },
    //跳转
    tolink: function (e) {
        var id = e.currentTarget.id;
        wx.navigateTo({
            url: '/pages/details/index/index?id=' + id
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

      if (options.s_type != undefined){
         this.setData({
           _num: options.s_type
         })
      }
      try {
        var city = wx.getStorageSync('city')
        if (!city) {
        var city = '武汉';
        }
      } catch (e) {
      }
      this.setData({
        city:city
      })
    },
    formSubmit: function (e) {
      var data = e.detail.value;
      wx.request({
        url: this.data.urls +'/customization/store', 
        data: data,
        method:'POST',
        success: function (res) {
         if(res.data.status == 1){
           wx.showToast({
             title: res.data.msg,
             icon: 'success',
             duration: 1000,
             mask: true
           })
           setTimeout(function () {
             wx.switchTab({
               url: "/pages/customer/index/index",
             });
           }, 1500)
           return;
         }
          if(res.data.status_code == 422){
            wx.showToast({
              title: res.data.errors[0].code,
              icon: 'none',
              duration: 1000,
              mask: true
            })
            return;
          }
          
        },
        fail: function () {
          
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
        this.is_get();
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