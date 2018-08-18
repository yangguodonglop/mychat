// pages/select_city/select_city.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        city_tit: ["#", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        show_abc: false,
        page_hei: 0,
        show_txt: '',
        scoll_to: ''
    },
    //手指事件
    t_top: function(e){
        this.sco_to(e);
    },
    t_start: function (e) {
        this.sco_to(e);
        this.setData({
            show_abc: true
        });
    },
    t_move: function (e) {
        this.sco_to(e);
    },
    t_end: function () {
        this.setData({
            show_abc: false
        });
    },
    //页面跳转
    sco_to: function(e){
        var my = e.changedTouches[0].pageY;
        var h = this.data.page_hei;
        var txt = '#';

        if (my < 0.025 * h)
            txt = '#'
        else if (my > h - (0.025 * h))
            txt = 'Z'
        else {
            txt = this.data.city_tit[parseInt((my - 0.025 * h) / ((h - (0.05 * h)) / 27))];
        }

        if (txt != this.data.show_txt) {
            if (txt == '#') {
                this.setData({
                    show_txt: txt,
                    scoll_to: 'aa'
                });
            } else {
                this.setData({
                    show_txt: txt,
                    scoll_to: txt
                });
            }
        }
    },
    checkcity:function(e){
      var city = e.currentTarget.dataset.value;
      wx.showToast({
        title: '切换成功！',
        icon: 'success',
        duration: 1000,
        mask: true
      })
      try {
        wx.setStorageSync('city', city)
      } catch (e) {
      }
      setTimeout(function () {
        wx.switchTab({
          url: "/pages/index/home",
        });
      }, 1500)
    },
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //获取页面高度
        var hei = 0;
        wx.getSystemInfo({
            success: function (res) {
                hei = res.windowHeight;

                // console.log(res.model)
                // console.log(res.pixelRatio)
                // console.log(res.windowWidth)
                // console.log(res.windowHeight)
                // console.log(res.language)
                // console.log(res.version)
            }
        });
        this.setData({
            page_hei: hei
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

    }
})