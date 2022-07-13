<template>
  <div class="lottery-turntable-component full-screen">
    <LuckyGrid
      class="lucky-grid"
      ref="luckyGrid"
      width="400px"
      height="400px"
      :prizes="prizes"
      :blocks="blocks"
      :buttons="buttons"
      :default-style="defaultStyle"
      :active-style="activeStyle"
      @start="startCallBack"
      @end="endCallBack"
    />
  </div>
</template>

<script>
  import 'vue2-toast/lib/toast.css';
  import  Toast from  'vue2-toast';
import { GLOBAL_KEYS, gifts, homeConfig } from '../gift.setting.js';
export default {
  name: 'LotteryTurntable',
  data() {
    this.defaultStyle = {
      fontColor: "#05fafa",
      fontSize: "14px",
      lineHeight: "20px",
      wordWrap: false,
    };
    this.activeStyle = {
      fontColor: "#fff",
    };
    this.blocks = [
      { padding: "10px", background: "rgba(0, 0, 0, 0)", borderRadius: "10px" },
    ];
    this.buttons = [
      {
        x: 1,
        y: 1,
        background: "rgba(0, 0, 0, 0)",
        fonts: [],
        pointer: true,
        imgs: [
          {
            src: require("../assets/images/button.png"),
            width: "100%",
            top: "0",
          },
        ],
      },
    ];
    return {
      prizes: [],
      times:0
    };
  },

  methods: {
    getGiftList() {
      const prizes = [];
      let axis = [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2], [1, 2], [0, 2], [0, 1],];
      let data = gifts.map(item => {
        return {
          fullName: item.name,
          name: item.alias,
          // img: require(`../../public${item.image}`),
          img: item.image,
          top: '70%',
          times:0
        };
      });

      // let data = [];
      data.forEach((item, index) => {
        prizes.push({
          x: axis[index][0],
          y: axis[index][1],
          title: item.name,
          fullName: item.fullName,
          fonts: [{ text: item.name, top: item.top }],
          imgs: [
            {
              src: require('../assets/images/block-bg.png'),
              activeSrc: require('../assets/images/active-block-bg.png'),
              width: '100%',
              height: '100%',
            },
            {
              src: item.img,
              width: '70%',
              top: '3%',
            },
          ],
        });
      });
      this.prizes = prizes;
    },
    startCallBack () {
      let giftTimes = this.times + 1;
      sessionStorage.setItem('giftTimes',giftTimes)
      // console.log("点击抽奖了",giftTimes)
        this.$refs.luckyGrid.play();
        let targetGiftIndex = homeConfig.targetGiftIndex;
        if (!!targetGiftIndex === false) {
          targetGiftIndex = Math.random() * 8 >> 0;
        }
        setTimeout(() => {
          this.$refs.luckyGrid.stop(targetGiftIndex)
        }, homeConfig.timeout);
    },
    endCallBack (prize) {
      const { imgs, fullName } = prize;
      const imageUrl = imgs[1].src;
      localStorage.setItem(GLOBAL_KEYS.EXIST_KEY, '1');
      localStorage.setItem(GLOBAL_KEYS.NAME_KEY, fullName);
      localStorage.setItem(GLOBAL_KEYS.IMAGE_KEY, imageUrl);
      setTimeout(() => {
        this.$emit('success');
      }, 1200);
    }
  },

  mounted() {
    this.times = Number(sessionStorage.getItem('giftTimes'))
    this.getGiftList();
  },
};
</script>

<style scoped>
.lottery-turntable-component {
  background-color:#f4dee2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.lucky-grid {
  width: 400px;
  height: 400px;
  background: rgba(245, 171, 184,.3);
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}
</style>
