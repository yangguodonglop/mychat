var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        urls: app.data.COMMON,
        winWidth: 0,
        winHeight: 0,
        // tab切换  
        currentTab: 0,
        VerifyCode: "获取短信验证码",
    },
    current_page: function(e){
        this.setData({
            currentTab: e.detail.current
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        try {
            var token = wx.getStorageSync('token');
            if (token) {
                setTimeout(function () {
                    wx.switchTab({
                        url: "/pages/customer/index/index",
                    });
                }, 1500)
                return;
            }
        } catch (e) {

        }

        //如果已经登录无法进入此页面
        wx.setNavigationBarTitle({
            title: '欣旅天下-会员登录'
        })
        var that = this;

        /** 
         * 获取系统信息 
         */
        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                    winWidth: res.windowWidth,
                    winHeight: res.windowHeight
                });
            }

        })

  

        // 登录
        wx.checkSession({
            success: function () {
                //session_key 未过期，并且在本生命周期一直有效
            },
            fail: function () {
                // session_key 已经失效，需要重新执行登录流程
                wx.login({
                    success: function (res) {
                 
                        if (res.code) {
                            //发起网络请求
                            wx.request({
                                url: 'http://mapi.xinlv123.com/xltx/appmini',
                                data: {
                                    code: res.code
                                },
                                success: function (res) {
                                    try {
                                        wx.setStorageSync('openid', res.data.openid);
                                    } catch (e) {
                                    }
                                }
                            })
                        } else {
                            console.log('登录失败！' + res.errMsg)
                        }
                    }
                })

            }
        })

    },
    //微信登录
    bindGetUserInfo: function (e) {
        var userInfo = e.detail.userInfo;
        try {
            var openid = wx.getStorageSync('openid')
            if (openid) {
                var openid = openid;
            }
        } catch (e) {
          app.clearAuth();
        }
        var data = {
            id: openid,
            socialite_type: 2,
            nickname: userInfo.nickName,
            avatar_url: userInfo.avatarUrl
        }

        wx.request({
            url: this.data.urls + '/socialiteLogin',
            data: data,
            method: 'POST',
            success: function (res) {
                if (res.statusCode == "201") {
                    wx.showToast({
                        title: '登录成功！',
                        icon: 'success',
                        duration: 1000,
                        mask: true
                    })
                    try {
                        wx.setStorageSync('token', res.data.data.token)
                    } catch (e) {
                    }
                    try {
                        wx.setStorageSync('expired_at', res.data.data.expired_at)
                    } catch (e) {
                    }
                    try {
                        wx.setStorageSync('refresh_expired_at', res.data.data.refresh_expired_at)
                    } catch (e) {
                    }
                    setTimeout(function () {
                        wx.switchTab({
                            url: "/pages/customer/index/index",
                        });
                    }, 1500)
                    return;
                }
                if (res.data.status == "0") {
                    wx.showToast({
                        title: res.data.msg,
                        icon: 'none',
                        duration: 1000,
                        mask: true
                    })
                    return;
                }
            },
            fail: function (res) {
                wx.showToast({
                    title: '登录失败',
                    icon: 'none',
                    duration: 1000,
                    mask: true
                })
                return;
            }
        })
    },
    /** 
     * 点击tab切换 
     */
    swichNav: function (e) {

        var that = this;

        if (this.data.currentTab === e.target.dataset.current) {
            return false;
        } else {
            that.setData({
                currentTab: e.target.dataset.current
            })
        }
    },
    blurTel: function (e) {
        var linkTel = e.detail.value.replace(/\s/g, "");
        this.setData({
            linkTel: linkTel
        })
    },
    blurPhone: function (e) {
        var phone = e.detail.value.replace(/\s/g, "");
        this.setData({
            phone: phone
        })
    },

    blurPassword: function (e) {
        var password = e.detail.value.replace(/\s/g, "");
        this.setData({
            password: password
        })
    },

    blurPassword: function (e) {
        var password = e.detail.value.replace(/\s/g, "");
        this.setData({
            password: password
        })
    },
    blurCode: function (e) {
        var code = e.detail.value.replace(/\s/g, "");
        this.setData({
            code: code
        })
    },

    //点击发送验证码，获取手机号码
    setVerify: function (e) {
        var linkTel = this.data.linkTel;

        if (linkTel == undefined) {
            wx.showToast({
                title: '手机号不能为空！',
                icon: 'none',
                duration: 1000,
                mask: true
            })
            return;
        }
        if (!(/^1[34578]\d{9}$/.test(linkTel))) {
            wx.showToast({
                title: '手机号格式不对！',
                icon: 'none',
                duration: 1000,
                mask: true
            })
            return;
        }
        var _Url = this.data.urls + '/sendSms';
        var that = this;
        wx.request({
            url: _Url,
            method: 'POST',
            data: {
                phone: linkTel,
                type: '5'
            },
            success: function (res) {
                if (res.data.status == "1") {
                    wx.showToast({
                        title: res.data.msg,
                        icon: 'success',
                        duration: 1000,
                        mask: true
                    })
                    var total_micro_second = 60 * 1000;    //表示60秒倒计时，想要变长就把60修改更大
                    //验证码倒计时
                    count_down(that, total_micro_second);
                    return;
                }
                if (res.data.status == "0") {
                    wx.showToast({
                        title: res.data.msg,
                        icon: 'none',
                        duration: 1000,
                        mask: true
                    })
                    return;
                }
            },
            fail: function (res) {
                wx.showToast({
                    title: '短信发送失败！',
                    icon: 'none',
                    duration: 1000,
                    mask: true
                })
                return;
            }
        });
    },

    //登录
    doLogin: function (e) {
        var login_type = this.data.currentTab;
        if (login_type == 0) {
            var phone = this.data.phone;
            var password = this.data.password;
            if (phone == undefined || password == undefined) {
                wx.showToast({
                    title: '账号密码不能为空！',
                    icon: 'none',
                    duration: 1000,
                    mask: true
                })
                return;
            }
            var data = {
                login_type: 1,
                phone: phone,
                password: password
            }
        }
        if (login_type == 1) {
            var phone = this.data.linkTel;
            var code = this.data.code;
            if (phone == undefined || code == undefined) {
                wx.showToast({
                    title: '手机号、验证码不能为空！',
                    icon: 'none',
                    duration: 1000,
                    mask: true
                })
                return;
            }
            var data = {
                login_type: 4,
                phone: phone,
                code: code
            }
        }
        if (!(/^1[34578]\d{9}$/.test(phone))) {
            wx.showToast({
                title: '手机号格式不对！',
                icon: 'none',
                duration: 1000,
                mask: true
            })
            return;
        }
        wx.request({
            url: this.data.urls + '/login',
            method: 'POST',
            data: data,
            success: function (res) {
                if (res.statusCode == "201") {
                    wx.showToast({
                        title: '登录成功！',
                        icon: 'success',
                        duration: 1000,
                        mask: true
                    })
                    try {
                        wx.setStorageSync('token', res.data.data.token)
                    } catch (e) {
                    }
                    try {
                        wx.setStorageSync('expired_at', res.data.data.expired_at)
                    } catch (e) {
                    }
                    try {
                        wx.setStorageSync('refresh_expired_at', res.data.data.refresh_expired_at)
                    } catch (e) {
                    }
                    setTimeout(function () {
                        wx.switchTab({
                            url: "/pages/customer/index/index",
                        });
                    }, 1500)
                    return;
                }
                if (res.data.status == "0") {
                    wx.showToast({
                        title: res.data.msg,
                        icon: 'none',
                        duration: 1000,
                        mask: true
                    })
                    return;
                }
            },
            fail: function (res) {
                wx.showToast({
                    title: '登录失败',
                    icon: 'none',
                    duration: 1000,
                    mask: true
                })
                return;
            }
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
/* 毫秒级倒计时 */
function count_down(that,total_micro_second) {
    if (total_micro_second <= 0) {
      that.setData({
            VerifyCode: "重新发送"
        });
        // timeout则跳出递归
        return;
    }

    // 渲染倒计时时钟
    that.setData({
        VerifyCode: date_format(total_micro_second) + " 秒"
    });

    setTimeout(function () {
        // 放在最后--
        total_micro_second -= 10;
        count_down(that, total_micro_second);
    }, 10)



}

// 时间格式化输出，如03:25:19 86。每10ms都会调用一次
function date_format(micro_second) {
    // 秒数
    var second = Math.floor(micro_second / 1000);
    // 小时位
    var hr = Math.floor(second / 3600);
    // 分钟位
    var min = fill_zero_prefix(Math.floor((second - hr * 3600) / 60));
    // 秒位
    var sec = fill_zero_prefix((second - hr * 3600 - min * 60));// equal to => var sec = second % 60;
    // 毫秒位，保留2位
    var micro_sec = fill_zero_prefix(Math.floor((micro_second % 1000) / 10));

    return sec;
}

// 位数不足补零
function fill_zero_prefix(num) {
    return num < 10 ? "0" + num : num
}