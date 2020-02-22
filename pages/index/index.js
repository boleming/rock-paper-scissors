let time;
Page({
  data: {
    imageUserSrc: '/images/wenhao.jpg',
    imageAiSrc: '',
    newNum: 0,
    animation: true,
    imgs: [
      "/images/shitou.jpg",
      "/images/jiandao.jpg",
      "/images/bu.jpg"
    ]
  },
  onLoad() {
    this.timerGo();
  },
  //初始化拳头一直更改的动画
  timerGo() {
    if (time) {
      clearInterval(time);
    }
    time = setInterval(() => {
      let i = this.getRandom();
      this.setData({
        imageAiSrc: this.data.imgs[i]
      })
    }, 300);
    this.data.animation = true;
  },
  //随机当前的出拳
  getRandom() {
    return Math.floor(Math.random() * 3);
  },
  //用户点击确定出拳
  stoptimer(event) {
    if (this.data.animation) {
      clearInterval(time);
      let i = this.getRandom();
      this.setData({
        imageAiSrc: this.data.imgs[i],
        imageUserSrc: event.currentTarget.dataset.imgsrc
      })
      this.getVictoryNum();
      this.data.animation = false;
    }
  },
  //判断胜利的次数
  getVictoryNum() {
    let num = this.data.newNum;
    if (this.data.imageUserSrc.includes('shitou') && this.data.imageAiSrc.includes('jiandao')) {
      num = this.data.newNum + 1;
    } else if (this.data.imageUserSrc.includes('jiandao') && this.data.imageAiSrc.includes('bu')) {
      num = this.data.newNum + 1;
    } else if (this.data.imageUserSrc.includes('bu') && this.data.imageAiSrc.includes('shitou')) {
      num = this.data.newNum + 1;
    }
    this.setData({
      newNum: num
    })
  }
})