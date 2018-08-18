// pages/customer/telephone/telephone.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cityArray: '',
    //                 { "type": "A" },
    // { "city": "阿坝", "city_en": "AB", "type": "city" },
    // { "city": "阿克苏", "city_en": "AB", "type": "city" },
    // { "city": "阿坝", "city_en": "AB", "type": "city" },
    // { "city": "阿克苏", "city_en": "AB", "type": "city" },
    // { "city": "阿坝", "city_en": "AB", "type": "city" },
    // { "city": "阿克苏", "city_en": "AB", "type": "city" },
    // { "type": "B" },
    // { "city": "白城", "city_en": "BC", "type": "city" },
    // { "city": "白沙", "city_en": "BS", "type": "city" },
    // { "city": "白城", "city_en": "BC", "type": "city" },
    // { "city": "白沙", "city_en": "BS", "type": "city" },
    // { "city": "白城", "city_en": "BC", "type": "city" },
    // { "city": "白沙", "city_en": "BS", "type": "city" },
    // { "city": "白城", "city_en": "BC", "type": "city" },
    // { "city": "白沙", "city_en": "BS", "type": "city" },
    },
    open_page: function (e) {
        wx.navigateTo({
            url: '../telephone_add/telephone_add',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        app.checkLogin();
        // this.get_data();
    },
    get_data: function(){
        app.request(app.data.URLS + '/contact', '', 'GET').then((src) => {
            // console.log(JSON.stringify(src));
            this.setData({
                cityArray: src
            });
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
        this.get_data();
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