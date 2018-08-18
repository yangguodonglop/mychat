var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
check: '2',
urls: app.data.COMMON,
VerifyCode: "获取短信验证码", 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '欣旅天下-注册'
    })
  },
  check:function(e){
    let id = e.currentTarget.dataset.id;
    var that = this;
    console.log(id);
    if(id == 2){
      that.setData({
        check: 1
      });
    }
    if (id == 1) {
      that.setData({
        check: 2
      });
    }
  
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
  blurCode: function (e) {
    var code = e.detail.value.replace(/\s/g, "");
    this.setData({
      code: code
    })
  },
  //点击发送验证码，获取手机号码，往后台发送数据
  setVerify: function (e) {
    var linkTel = this.data.phone;
  
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
    var total_micro_second = 60 * 1000;    //表示60秒倒计时，想要变长就把60修改更大
    //验证码倒计时
    count_down(this, total_micro_second);
    wx.request({
      url: _Url,
      method: 'POST',
      data: {
        phone: linkTel,
        type: '2'
      },
      success: function (res) {
        if (res.data.status == "1") {
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 1000,
            mask: true
          })
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

  //注册
  doRegister:function(e){
    var phone = this.data.phone;
    var password = this.data.password;
    var code = this.data.code;
    if (phone == undefined || password == undefined) {
      wx.showToast({
        title: '账号密码不能为空！',
        icon: 'none',
        duration: 1000,
        mask: true
      })
      return;
    }
    if (code == undefined) {
      wx.showToast({
        title: '验证码不能为空！',
        icon: 'none',
        duration: 1000,
        mask: true
      })
      return;
    }
    var data = {
      phone: phone,
      password: password,
      code: code
    }
    wx.request({
      url: this.data.urls + '/register',
      method: 'POST',
      data: data,
      success: function (res) {
        if (res.statusCode == "201") {
          wx.showToast({
            title: '注册成功！',
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
          title: '注册失败',
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
function count_down(that, total_micro_second) {
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