// pages/usbox/usbox.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    idx: 0,
    isLoading: false,
    isFinish: false
  },
  getData: function () {
    this.setData({ isLoading: true })
    var _this = this
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/us_box',
      data: {
        count: 20,
        start: this.data.idx
      },
      header: {
        "content-type": "application/xml"
      },
      success: function (res) {
        var data = res.data.subjects
        _this.setData({
          list: _this.data.list.length === 0 ? data : _this.data.list.concat(data),
          idx: _this.data.idx + 20,
          isLoading: false
        })
        if (_this.data.idx >= data.length) { _this.setData({isFinish:true}) }
        console.log(res.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
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