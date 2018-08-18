var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    urls: app.data.URLS, 
    focus: false,
    username: '用户名',
    sign: '“旅行的意义，就在于不断发现新的世界和新的自己。”',
    avatar_url: '/images/wxlogo-1.png',
    hide_name: 'input_hide',
    change_name: '',
    hide_sign:'input_hide',
    change_sign:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '个人信息'
    })
    app.checkLogin();
    this.getUserInfo();
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
  //修改昵称
  changeName:function(){
    this.setData({
      change_name:'input_hide',
      hide_name:'',
      focus: true
    });
  },
  do_change_name:function(e){
    var name = e.detail.value.replace(/\s/g, "");
    if (name == ''){
      this.setData({
        change_name: '',
        hide_name: 'input_hide',
        focus: false
      });
      return;
    }
    var data = {
      name:name
    }
    app.request(this.data.urls + '/customer/changeInfo',data, 'PUT').then((res) => { 
      if (res.status == 0) {
        wx.showToast({
          title: res.msg,
          icon: 'none',
          duration: 1000,
          mask: true
        })
        return;
      }
      wx.showToast({
        title: '修改成功！',
        icon: 'success',
        duration: 1000,
        mask: true
      })
      var that = this;
      that.setData({
        username: res.data.name,
        change_name: '',
        hide_name: 'input_hide',
        focus: false
      })
      return;
      wx.hideLoading();
    }).catch((errMsg) => {
      wx.hideLoading();
    });
  },
  //修改签名
  changeSign:function(){
    this.setData({
      change_sign: 'input_hide',
      hide_sign: '',
      focus: true
    });
  },
  do_change_sign:function(e){
    var sign = e.detail.value.replace(/\s/g, "");
    if (sign == '') {
      this.setData({
        change_sign: '',
        hide_sign: 'input_hide',
        focus: false
      });
      return;
    }
    var data = {
      sign: sign
    }
    app.request(this.data.urls + '/customer/changeInfo', data, 'PUT').then((res) => {
if(res.status == 0){
  wx.showToast({
    title: res.msg,
    icon: 'none',
    duration: 1000,
    mask: true
  })
  return;
}
  
      wx.showToast({
        title: '修改成功！',
        icon: 'success',
        duration: 1000,
        mask: true
      })
      var that = this;
      that.setData({
        sign: res.data.sign,
        change_sign: '',
        hide_sign: 'input_hide',
        focus: false
      })
      return;
      wx.hideLoading();
    }).catch((errMsg) => {
      wx.hideLoading();
    });
  },
  //获取用户信息
  getUserInfo:function(){
    var that = this;
    app.request(this.data.urls + '/customerInfo', 'get').then((res) => {
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
        avatar_url: avatar_url,
        username: res.data.name,
        sign: sign
      });
      try {
        wx.setStorageSync('customer_id', res.data.id);
      } catch (e) {
      }
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

  },
  chooseImageTap: function () {
    let _this = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#f7982a",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            _this.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            _this.chooseWxImage('camera')
          }
        }
      }
    })
  },
  chooseWxImage: function (type) {
    try {
      var customer_id = wx.getStorageSync('customer_id')
      if (customer_id) {
        var customer_id = customer_id;
      }
    } catch (e) {
   
      wx.showToast({
        title: '用户信息获取失败！',
        icon: 'none',
        duration: 1000,
        mask: true
      })
      return;
    }
    let _this = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function (res) {
        _this.setData({
          avatar_url: res.tempFilePaths[0],
        })
        try {
          var customer_id = wx.getStorageSync('customer_id')
          if (customer_id) {
            var customer_id = customer_id;
          }
        } catch (e) {
        }
        var data = {
          customer_id: customer_id,
          width:100,
          height:100
        }
        wx.showLoading({
          title: '头像上传中',
        })
        upload_file(res.tempFilePaths[0], 'Filedata', data,'','');
      }
    })
  },


})

function upload_file(filePath, name, formData, success, fail) {
  var url = 'http://www.xinlv123.com/APP/xltx/changeAvatar_url';
  wx.uploadFile({
    url: url,
    filePath: filePath,
    name: name,
    header: {
      'content-type': 'multipart/form-data'
    }, // 设置请求的 header
    formData: formData,
    success: function (res) {
      wx.showToast({
        title: '头像上传成功',
        icon: 'success',
        duration: 1000,
        mask: true
      })
      return;
    },
    fail: function (res) {
      wx.showToast({
        title: '图像上传失败！',
        icon: 'none',
        duration: 1000,
        mask: true
      })
      return;
    }
  })
}