Page({
  data: {
    currentIndex:0,
    leftMenuList:[],
    rightTestList:[],
    clouddata:{
      left:["专业测评","娱乐测评"],
      right:[
        [
          {
            title:"情感创伤测试",
            img:"https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00167-2510.jpg",
            type:"情感",
            des:"重大感情创伤，需要有很强的心理承受能力。如果不能够冷静就可能会冲动的作为不好的行动，这不管对谁都是不好的，不管是什么关系，好聚也要好散，毕竟生活不只是眼前的苟且，最关键的是长远的诗和远方。也许在当时的那一刹那是急需要发泄的，但是要找到正确的发泄方式，其中报复是最愚蠢最毁灭自己的方式。"
          },
          {
            title:"抑郁测试",
            img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=405757228,3196131689&fm=26&gp=0.jpg",
            type:"健康",
            des:"抑郁症是最常见的抑郁障碍，以显著而持久的心境低落为主要临床特征，是心境障碍的主要类型。临床可见心境低落与其处境不相称，情绪的消沉可以从闷闷不乐到悲痛欲绝，自卑抑郁，甚至悲观厌世，可有自杀企图或行为；甚至发生木僵；部分病例有明显的焦虑和运动性激越；严重者可出现幻觉、妄想等精神病性症状。每次发作持续至少2周以上、长者甚或数年，多数病例有反复发作的倾向，每次发作大多数可以缓解，部分可有残留症状或转为慢性。"
          },
          {
            title:"影子人格测试",
            img:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=333358049,3511313393&fm=26&gp=0.jpg",
            type:"性格",
            des:"背叛是伤害中最为严重的一种情感关系的扼杀行为，当感情破裂以后，很多人都会陷入无穷无尽的内心矛盾挣扎之中，毕竟以前的他（她）那么爱自己，而在此时此刻又剩下孤身的自己。爱与恨的交织根本无法理清头绪，痛可以说不是对方直接给予的，更为重要的是曾经的信任和数不尽甜蜜的回忆堆积而成的痛苦情绪。"
          },
          {
            title:"大脑优势评估",
            img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1622435809,957750092&fm=15&gp=0.jpg",
            type:"能力",
            des:"大脑优势是指大脑皮层对神经系统和心理活动控制和大脑两半球功能的侧性分化特征。如左右半球分别控制对侧运动功能，接受和分析对侧传人的感觉信息；左半球主要涉及语言、文字和计算等功能，而右半球主要涉及图形、音乐和空间知觉等功能。"
          },
          {
            title:"恋爱体质测试",
            img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=395487156,3062274823&fm=26&gp=0.jpg",
            type:"情感",
            des:"体质是由先天遗传和后天获得所形成的，恋爱体质也是如此。"
          },
          {
            title:"爱情底色测试",
            img:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3840350717,2210481427&fm=26&gp=0.jpg",
            type:"情感",
            des:"不管是恋人还是夫妻，相处除了欣赏爱慕之外，彼此的忠诚度是维系关系的基本和必须，那是对爱人的一份尊重，更是对感情认真的一种态度，而且可以说绝大多数走入婚姻的夫妻，开始也都遵循着忠诚的信念来对待关系，可不知不觉中不管出于什么诱因，最终做出不忠伤害对方的行为，当伤害成为现实，不管是情有可原还是不可饶恕，都成为了不可回避的现实问题，被摧毁的信任，被刺痛的心，该如何治愈处理这创伤后的心灵"
          }
        ],
        [
          {
            title:"假面人格测试",
            img:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4112329300,1871547202&fm=26&gp=0.jpg",
            type:"人际",
            des:"人格面具，这个词来源于希腊文，本义是指使演员能在一出剧中扮演某个特殊角色而戴的面具。人格面具是荣格的精神分析理论之一也被荣格称为从众求同原型。瑞士心理学家荣格认为，集体无意识的内容主要是原型。"
          },
          {
            title:"原生家庭边界评估",
            img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1060753041,4225328984&fm=26&gp=0.jpg",
            type:"亲子",
            des:"我们应该正确衡量原生家庭和新生家庭的关系。当我们的家庭还是原生家庭时，子女应当孝敬父母，父母应当关心子女的生活。"
          }
        ]
      ]
    }
  },  

  //首次加载页面时，调用onload
  onLoad: function(options){
    this.getCates();
  },

  //从服务器获取数据，录入clouddata
  getCates(){
    // request({
    //   url:""
    // })
    //   .then(res=>{
    //     this.data.clouddata=res.data.message;
    //     let leftMenuList = this.data.clouddata.left;
    //     let rightTestList = this.data.clouddata.right[0];
    //     this.setData({
    //       leftMenuList,
    //       rightTestList
    //     })
    //   })
    let left = this.data.clouddata.left;
    let right = this.data.clouddata.right[0];
    this.setData({
      leftMenuList:left,
      rightTestList:right
    })
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
  },

  //左侧菜单点击事件,重新渲染右侧列表
  switchRightTab(e){
    const {index}=e.currentTarget.dataset;
    let hhh = this.data.clouddata.right[index];
    this.setData({
      currentIndex:index,
      rightTestList:hhh
    })
  }
})  