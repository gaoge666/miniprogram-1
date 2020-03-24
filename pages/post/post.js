// pages/post/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      date:"JAN 28 2020",
      title:"小时候的冰棍儿与雪糕",
      postImg:["/images/360wallpaper.jpg","/images/2001962.jpg","/images/2001961.jpg","/images/2001943.jpg"],
      avatar:["/images/360wallpaper.jpg","/images/2001962.jpg","/images/2001961.jpg","/images/2001943.jpg"],
      content:"冰棍与雪糕绝对不是同一一个东西。3到5毛钱的雪糕犹如现在的哈根达"+
      "斯，而5分1毛的冰棍儿就像现在的老冰棒。时过境迁，..",
      readingNum:92,
      collectionNum:108,
      commentNum:7
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        console.log("onload:页面被加载")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady页面被渲染")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow页面被显示")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide页面被隐藏")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload页面被卸载")
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