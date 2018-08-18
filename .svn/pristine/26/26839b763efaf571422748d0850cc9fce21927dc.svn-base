var app = getApp();
// integral/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        dataindex: 0,
        scrollTop: '',
        onitemid: '',
        title: '',
        height: '',
        data: '',
    },
    scroll: function (e) {
        //console.log(e.detail);
        var data = this.data.data;
        var height = e.detail.scrollHeight / data.length;
        for (var i = 0; i < data.length; i++) {
            if (height * i < e.detail.scrollTop && e.detail.scrollTop < height * (i + 1)) {
                this.setData({
                    dataindex: i
                });
            }
        }
    },
    onitem: function (e) {
        var that = this;
        var id = e.currentTarget.id;
        var data = this.data.data;
        for (var i = 0; i < data.length; i++) {
            var item = 'item' + i;
            if (id == item) {
                this.setData({
                    dataindex: i,
                    onitemid: 'id' + i
                });
            }
        }
    },
    // open_item_list(e) {
    //     var ids = e.target.dataset.id;
    //     wx.navigateTo({
    //         url: '../item/item?id=' + ids,
    //     })
    // },
    //兑换记录
    integrallist:function(){
      wx.navigateTo({
        url: '/pages/integral/item/item' ,
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: '积分商城'
        });
        var that = this;
        // 获取系统信息
        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                    height: res.windowHeight
                });
            }
        })
        var query = wx.createSelectorQuery();
        query.select('#title').boundingClientRect();
        query.exec(function (res) {
            that.setData({
                height: that.data.height - res[0].height
            });
        })
        wx.request({
            url: app.data.URLS + '/integral',
            success: function (res) {
                that.setData({
                    data: res.data.data
                });
            },
            fail: function (err) {
                reject('integral');
            }
        })
    },

    onShow:function()
    {
      try {
        var integral = wx.getStorageSync('integral');
        if (integral) {
          var integral = integral;
        }else{
          var integral = 0;
        }
      } catch (e) {
        var integral = 0;
      }
      this.setData({
        integral: integral
      })
    }
})