// pages/customer/feedback/feedback.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        txt: ''
    },
    //提交建议
    up_data: function () {
        // console.log(this.data.txt);
        var txt = this.data.txt;
        wx.request({
            url: app.data.URLS +'/feedback',
            data: {
                contents: txt
            },
            method: 'POST',
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                // console.log(res.data)
                var tt = '提交成功, 2秒后自动退出！';
                if (res.data.status != 1)
                    tt = '提交失败！';

                wx.showToast({
                    title: tt,
                    icon: 'none',
                    duration: 2000//持续的时间
                });
                setTimeout(function(){
                    wx.navigateBack({});
                }, 2000);
            }
        });
    },
    datas: function(e){
        this.setData({
            txt: e.detail.value
        })
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