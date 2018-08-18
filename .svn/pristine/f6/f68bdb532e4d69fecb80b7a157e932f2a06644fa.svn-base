//app.js
var QQMapWX = require('/libs/qqmap-wx-jssdk.js');
var qqmapsdk;
App({
  data: {
    URLS: 'http://mapi.xinlv123.com/xltx/mobile',
    FROM: 'http://www.xinlv123.com',
    COMMON: 'http://mapi.xinlv123.com/xltx',
    DETAILS: 'http://mapi.xinlv123.com/xltx/mobile/goods/details?id='
  },
  onLaunch: function () {
    qqmapsdk = new QQMapWX({
      key: 'mVWtnTft5j36ie527eZIKQ7UhziRJYqZ0PKVwJKaTVk='
    });
    //获取地址


    try {
      var city = wx.getStorageSync('city')
      if (!city) {
        wx.request({
          url: this.data.URLS +'/getNowCity', 
          success: function (res) {
            try {
              wx.setStorageSync('city', res.data)
            } catch (e) {
            }
          }
        })
      }
    } catch (e) {
  

    }

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
//     // 登录
//     wx.checkSession({
//       success: function () {
     
//         //session_key 未过期，并且在本生命周期一直有效
//       },
//       fail: function () {
//         // session_key 已经失效，需要重新执行登录流程
//         wx.login({
//           success: function (res) {
//             if (res.code) {
//               //发起网络请求
//               wx.request({
//                 url: 'http://mapi.xinlv123.com/xltx/appmini',
//                 data: {
//                   code: res.code
//                 },
//                 success: function (res) {
//                   console.log(res)
//                   try {
//                     wx.setStorageSync('openid', res.data.openid);
//                   } catch (e) {
//                   }
//                 }
//               })
//             } else {
//               console.log('登录失败！' + res.errMsg)
//             }
//           }
//         })

//   }
// })
  },

  //登录用户请求方法
  request: function (url, data = '', method) {
    var promise = new Promise((resolve, reject) => {
      //init
      var status = 1;
      var that = this;
      var methodData = data;
      try {
        var token = wx.getStorageSync('token')
        if (token) {
          var token = token;
        }
      } catch (e) {
        this.clearAuth();
   
      }

      //获取过期时间
      try {
        var expired_at = wx.getStorageSync('expired_at')
        if (expired_at) {
          var expired_at = expired_at;
        }
      } catch (e) {
        this.clearAuth();
      
      }

      //获取token刷新时间
      try {
        var refresh_expired_at = wx.getStorageSync('refresh_expired_at')
        if (refresh_expired_at) {
          var refresh_expired_at = refresh_expired_at;
        }
      } catch (e) {
        this.clearAuth();
      }
      var myDate = new Date();
      if (Date.parse(myDate) < Date.parse(refresh_expired_at)) {
        if (Date.parse(myDate) > Date.parse(expired_at)) {
          var that = this;
          //token过期重新获取
          wx.request({
            url: this.data.COMMON + '/token/refresh',
            data: {
              token: token,
            },
            method: 'POST',
            success: function (res) {
              if (res.statusCode == "201") {
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
                var status = 2;
                return;
              }else{
                that.clearAuth();
              }
            },
            fail: function (res) {
              wx.clearStorage();
              wx.redirectTo({
                url: "/pages/auth/login/login",
              });
            }
          })

        }else{
          var status = 2;
        }
      } else {
        //token失效 重新登录
        that.clearAuth();
      }
    
      /*
      //自动添加签名字段到postData，makeSign(obj)是一个自定义的生成签名字符串的函数
      postData.signature = that.makeSign(postData);
      */
      //网络请求
      if(status == 2){
        wx.request({
          url: url,
          data: methodData,
          method: method,
          header: { 'Authorization': 'Bearer ' + token },
          success: function (res) {//服务器返回数据
            resolve(res.data);
          },
          error: function (e) {
            reject('网络出错');
          }
        })
      }
    });
    return promise;
  },

  //检查是否登录 登录是否过期
  checkLogin: function () {
    //获取token
    try {
      var token = wx.getStorageSync('token')
      if (token) {
        var token = token;
      }
    } catch (e) {
      this.clearAuth();
            wx.redirectTo({
              url: "/pages/auth/login/login",
            });
    }

    //获取过期时间
    try {
      var expired_at = wx.getStorageSync('expired_at')
      if (expired_at) {
        var expired_at = expired_at;
      }
    } catch (e) {
      this.clearAuth();
      wx.redirectTo({
        url: "/pages/auth/login/login",
      });
    }

    //获取token刷新时间
    try {
      var refresh_expired_at = wx.getStorageSync('refresh_expired_at')
      if (refresh_expired_at) {
        var refresh_expired_at = refresh_expired_at;
      }
    } catch (e) {
      this.clearAuth();
      wx.redirectTo({
        url: "/pages/auth/login/login",
      });
    }
    var myDate = new Date();
    if (Date.parse(myDate) < Date.parse(refresh_expired_at)) {
      if (Date.parse(myDate) > Date.parse(expired_at)) {
        //token过期重新获取
        var that = this;
        wx.request({
          url: this.data.COMMON + '/token/refresh',
          data: {
            token: token,
          },
          method:'POST',
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

              return;
            }else{
              that.clearAuth();
            }
          },
          fail: function (res) {
            that.clearAuth();
            wx.redirectTo({
              url: "/pages/auth/login/login",
            });
          }
        })

      }
    } else {
      //token失效 重新登录
      that.clearAuth();
      wx.redirectTo({
        url: "/pages/auth/login/login",
      });
    }

  },
  //商品详情
  toGoodDetails:function(id){
    wx.navigateTo({
      url: '/pages/details/index/index?id=' + id
    });
  },

  //清除登录装
  clearAuth:function(){

    try {
      wx.removeStorageSync('token')
    } catch (e) {
      // Do something when catch error
    }
    try {
      wx.removeStorageSync('expired_at')
    } catch (e) {
      // Do something when catch error
    }
    try {
      wx.removeStorageSync('refresh_expired_at')
    } catch (e) {
      // Do something when catch error
    }

  }
})
