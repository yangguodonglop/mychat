var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        urls: app.data.URLS,
        status: false,
        username: '用户名',
        sign: '“旅行的意义，就在于不断发现新的世界和新的自己。”',
        integral: '0',
        avatar_url: '/images/wxlogo-1.png',
        invite_num: '0'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: '我的'
        })

    },
    //打开新页面
    open_page: function(e){
        var url = e.currentTarget.dataset.urls;
        wx.navigateTo({
            url: url,
        })
    },
    //地址管理
    setAddress: function (e) {
        wx.navigateTo({
            url: '/pages/address/index/index'
        });
    },
    //设置
    setting: function (e) {
        wx.navigateTo({
            url: '/pages/customer/setting/index/index'
        });
    },
    login: function (e) {
        wx.navigateTo({
            url: '/pages/auth/login/login'
        });
    },
    //积分商城
    integral: function (e) {
        wx.switchTab({
            url: '/pages/integral/index/index'
        });
    },
    //我的订单
    orderList: function (e) {
        let order_type = e.currentTarget.dataset.type;
        wx.navigateTo({
            url: '/pages/order/list/list?type=' + order_type
        });
    },
    //联系客服
    dial: function () {
        wx.makePhoneCall({
            phoneNumber: '4008700392'
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
        this.getCustomerInfo();
    },
    getCustomerInfo: function (e) {
        var that = this;
        app.request(this.data.urls + '/customerInfo', 'GET').then((res) => {
            if (res.data.sign == null || res.data.sign == ' ') {
                var sign = '“旅行的意义，就在于不断发现新的世界和新的自己。”';
            } else {
                var sign = res.data.sign;
            }
            if (res.data.avatar_url == null || res.data.avatar_url == ' ') {
                var avatar_url = '/images/wxlogo-1.png';
            } else {
                var avatar_url = res.data.avatar_url;
            }
            that.setData({
                status: true,
                username: res.data.name,
                sign: sign,
                avatar_url: avatar_url,
                integral: res.data.integral
            });
            try {
              wx.setStorageSync('integral', res.data.integral);
            } catch (e) {
            }
            try {
              wx.setStorageSync('invite', res.data.invite);
            } catch (e) {
            }
            try {
              wx.setStorageSync('username', res.data.name);
            } catch (e) {
            }
            //储存积分
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