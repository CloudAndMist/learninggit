Page({  
  data: {  

  },  

  //导航至心理咨询
  bindViewTap1:function() {
    wx.navigateTo({
      url: "/pages/img1/img1"
    })
  },
  //导航至心理课程
  bindViewTap2() {
    wx.navigateTo({
      url: "/pages/img2/img2"
    })
  }
})  