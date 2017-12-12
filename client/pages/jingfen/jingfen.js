// pages/form/jingfen.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    length: 6,
    items: [
      { name: 'USA', value: '博思清' },
      { name: 'CHN', value: '奥派', checked: 'true' },
      { name: 'BRA', value: '维思通' },
    ],

    items2: [
      { name: 'USA', value: '上午' },
      { name: 'CHN', value: '下午', checked: 'true' },
      { name: 'BRA', value: '晚上' },
    ],

    items3: [
      { name: 'USA', value: '白菜' },
      { name: 'CHN', value: '萝卜', checked: 'true' },
      { name: 'BRA', value: '西红柿' },
    ],
  },

  checkChange: function (e) {
    console.log('check发生change事件，携带value值为：', e.detail.value)
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