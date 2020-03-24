//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    testList:[{"name":"gaoge","age":24},{"name":"goge","age":23}]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
