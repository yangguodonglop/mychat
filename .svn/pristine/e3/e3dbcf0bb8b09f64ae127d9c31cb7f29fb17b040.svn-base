// pages/customer/telephone_add/telephone_add.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        name: '',
        phone: ''
    },
    b_name: function(e){
        this.setData({
            name: e.detail.value
        });
    },
    b_phone: function(e){
        this.setData({
            phone: e.detail.value
        });
    },
    up_data: function (e) {
        // console.log(1);
        var name = this.data.name;
        var phone = this.data.phone;
        app.checkLogin();
        app.request(app.data.URLS + '/contact/store', { name: name, phone: phone }, 'POST').then((src) => {
            console.log(JSON.stringify(src));
            wx.showToast({
                title: src.msg,
                icon: 'none'
            });
            if (src.status == 1){
                wx.navigateBack({});
            }
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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