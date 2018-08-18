var app = getApp();
var QR = require("../../utils/qrcode.js");
Page({
    /**
   * 页面的初始数据
   */
    data: {
        imgUrls: [],
        menus: [],
        dt1: [],
        dt2: [],
        dt3: [],
        dt4: [],
        dt5: [],
        urls: app.data.URLS,
        toView: '',
        scrollTop: 100,
        tit_fix: 'index_tit_fix1',
        action_tit: true,
        action_tit1: false,
        action_tit2: false,
        action_tit3: false,
        action_tit4: false,
        tit_top: [],
        card: false,
        card_user: '',
        city: ""
    },
    canvasId: "qrcCanvas",

    toSearch: function (e) {
      wx.navigateTo({
        url: '/pages/search/search'
      });
      return
    },

    /**
   * 生命周期函数--监听页面加载
   */
    onLoad: function (options) {
        var that = this;
        this.setCity();
        this.getBanner();
        this.getMenu();
        this.getData();
        this.getCard();

    },
    //关闭
    close: function () {
        if (!this.data.card) {
            wx.pageScrollTo({
                scrollTop: 0
            });
        }
        this.setData({
            card: !this.data.card
        });
    },
    setCity: function () {
        try {
            var city = wx.getStorageSync('city')
            if (city) {
                var city = city;
            } else {
                var city = '武汉';
            }
        } catch (e) {
            var city = '武汉';
        }

        this.setData({
            city: city
        })
    },
    onShow: function () {
        this.setCity();
        this.getData();
    },
    onRedirectUrl: function (e) {
        let url = e.currentTarget.dataset.url;
        var _self = this;
        if (url == '/pages/tickets/index' || url == '/pages/integral/index/index'){
          wx.switchTab({
            url: url
          });
          return;
        }
        if (url == 'javascript:void ();') {
            wx.pageScrollTo({
                scrollTop: _self.data.tit_top[5].top - 90
            })
            return;
        }
        
        wx.navigateTo({
            url: url
        });
    },
    onReady: function () {

    },
    //获取当地代理商
    getCard() {
        var that = this;
        wx.request({
            url: this.data.urls + '/agentInfo',
            success: function (res) {

                that.createQrCode(res.data.data.url, that.canvasId);
                that.setData({
                    card_user: res.data.data,
                });
            },
            fail: function (err) {
                reject('banner');
            }
        })
    },
    createQrCode: function (str, canvasId) {
        //调用插件中的draw方法，绘制二维码图片
        var w = wx.getSystemInfoSync().windowWidth;
        QR.api.draw(str, canvasId, w / 2.585, w / 2.585);

    },
    getBanner: function () {
        var that = this;
        wx.request({
            url: this.data.urls + '/banner',
            success: function (res) {
                that.setData({
                    imgUrls: res.data.data
                });
            },
            fail: function (err) {
                reject('banner');
            }
        })
    },
    getMenu: function () {
        var that = this;
        wx.request({
            url: this.data.urls + '/menu',
            success: function (res) {
                that.setData({
                    menus: res.data.data
                });
            },
            fail: function (err) {
                reject('menu');
            }
        })
    },
    getData: function () {
        var that = this;
        wx.request({
            url: this.data.urls + '/recommend?city=' + this.data.city,
            success: function (res) {
                that.setData({
                    dt1: res.data.data.recommend,
                    dt2: res.data.data.abroad,
                    dt3: res.data.data.inland,
                    dt4: res.data.data.tour_around,
                    dt5: res.data.data.theme
                });
                var query = wx.createSelectorQuery();
                query.select('#tit_fix').boundingClientRect();
                query.select('#recommend').boundingClientRect();
                query.select('#abroad').boundingClientRect();
                query.select('#inland').boundingClientRect();
                query.select('#tour_around').boundingClientRect();
                query.select('#theme').boundingClientRect();
                query.exec(function (res) {
                    that.setData({
                        tit_top: res
                    });
                })
            },
            fail: function (err) {
                reject('recommend');
            }
        })
    },

    onPageScroll: function (e) {
        if (this.data.card) {
            if (e.scrollTop > 0) {
                wx.pageScrollTo({
                    scrollTop: 0
                });
            }
        }

        //   document.getElementById('gt_img1');
        //console.log(e);
        if (e.scrollTop > this.data.tit_top[1].top - 90) {
            this.setData({
                tit_fix: 'index_tit_fix'
            })
        } else {
            this.setData({
                tit_fix: 'index_tit_fix1'
            })
        }
        var that = this;
        if (e.scrollTop < this.data.tit_top[1].bottom - 90) {
            that.setData({
                action_tit: true,
                action_tit1: false,
                action_tit2: false,
                action_tit3: false,
                action_tit4: false,
            });
        } else if (this.data.tit_top[1].bottom - 90 < e.scrollTop && e.scrollTop < this.data.tit_top[2].bottom - 90) {
            that.setData({
                action_tit: false,
                action_tit1: true,
                action_tit2: false,
                action_tit3: false,
                action_tit4: false,
            });
        } else if (this.data.tit_top[2].bottom - 90 < e.scrollTop && e.scrollTop < this.data.tit_top[3].bottom - 90) {
            that.setData({
                action_tit: false,
                action_tit1: false,
                action_tit2: true,
                action_tit3: false,
                action_tit4: false,
            });
        } else if (this.data.tit_top[3].bottom - 90 < e.scrollTop && e.scrollTop < this.data.tit_top[4].bottom - 90) {
            that.setData({
                action_tit: false,
                action_tit1: false,
                action_tit2: false,
                action_tit3: true,
                action_tit4: false,
            });
        } else if (this.data.tit_top[4].bottom - 90 < e.scrollTop) {
            that.setData({
                action_tit: false,
                action_tit1: false,
                action_tit2: false,
                action_tit3: false,
                action_tit4: true,
            });
        }
    },
    action_tit: function (e) {
        //console.log(e);
        var id = e.target.id;
        var that = this;
        that.setData({
            action_tit: false,
            action_tit1: false,
            action_tit2: false,
            action_tit3: false,
            action_tit4: false,
        });
        switch (id) {
            case 'action_tit':
                that.setData({
                    action_tit: true
                });
                wx.pageScrollTo({
                    scrollTop: this.data.tit_top[1].top - 90
                })
                break;
            case 'action_tit1':
                that.setData({
                    action_tit1: true
                });
                wx.pageScrollTo({
                    scrollTop: this.data.tit_top[2].top - 90
                })
                break;
            case 'action_tit2':
                that.setData({
                    action_tit2: true
                });
                wx.pageScrollTo({
                    scrollTop: this.data.tit_top[3].top - 90
                })
                break;
            case 'action_tit3':
                that.setData({
                    action_tit3: true
                });
                wx.pageScrollTo({
                    scrollTop: this.data.tit_top[4].top - 90
                })
                break;
            case 'action_tit4':
                that.setData({
                    action_tit4: true
                });
                wx.pageScrollTo({
                    scrollTop: this.data.tit_top[5].top - 90
                })
                break;
        }
    },
    tolink: function (e) {
        var id = e.currentTarget.id;
        wx.navigateTo({
            url: '/pages/details/index/index?id=' + id
        });
    },
    searchlink: function () {
        wx.navigateTo({
            url: '/pages/search/search'
        });
    },
    open_tours: function (e) {
        wx.navigateTo({
            url: '../all_tours/all_tours',
        })
    }
})
