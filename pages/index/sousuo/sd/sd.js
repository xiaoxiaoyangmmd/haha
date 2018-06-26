Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: true,
    selected1: false,
    selected2: false,
    selected3: false,
    selected4:false,
    gangwei: [
      {
        head: '/src/images/11111.jpg',
        name: '仔',
        team: '江苏南通启东召开全国人大代表大会',
        left: '全球专家',
        right: '研究',
      },
      {
        head: '/src/images/11111.jpg',
        name: '仔',
        team: '江苏南通启东召开全国人大代表大会',
        left: '国家专家',
        right: '增产',
      },
      
    ],
  },
  /**
  * 选择函数
  */
  selected: function (event) {
    this.setData({
      selected: true,
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: false,
    })
  },
  selected1: function (event) {
    this.setData({
      selected: false,
      selected1: true,
      selected2: false,
      selected3: false,
      selected4: false,
    })
  },
  selected2: function (event) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: true,
      selected3: false,
      selected4: false,
    })
  },
  selected3: function (event) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: false,
      selected3: true,
      selected4: false,
    })
  },
  selected4:function(event){
    this.setData({
      selected: false,
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: true,
    })
  }

})
