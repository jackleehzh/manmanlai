// pages/create/create.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iscs: true,

    iscc0: false, 
    iscc1: false, 
    iscc2: false, 
    iscc3: false, 
    iscc4: false, 
    iscc5: false, 

    isci00: false,
    isci01: false,
    isci02: false,
    isci03: false,
    isci04: false,
    isci05: false,

    category0: '',
    c0item0label: '',
    c0item0prompt: '',
    shiyongchangjing : '',

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

  shiyongchangjingInput: function(e){
    this.setData({ shiyongchangjing: e.detail.value})
    
  },

  category0Input: function (e) {
    this.setData({ category0: e.detail.value })

  },

  c0item0labelInput: function(e) {
    this.setData({ c0item0label: e.detail.value })
  },

  c0item0promptInput: function (e) {
    this.setData({ c0item0prompt: e.detail.value })
  },

  preview: function(){
    this.setData({ iscs: false })
    
    this.setData({ iscc0: false })

    this.setData({ isci00: false })

    this.setData({ iscreated: true })
  },

  backToCreate: function () {
    this.setData({ iscc0: true })

    this.setData({ isci00: true })

    this.setData({ iscreated: false })
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