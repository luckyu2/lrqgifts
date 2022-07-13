<template>
  <div class="gift-component full-screen">
    <div  class="reBtn"  @click="replays">重置</div>
    <div  class="reBtns" @click="btnHh">重置</div>
    <h1 v-if="giftName !=='谢谢参与'">恭喜你中奖啦！</h1>
    <h1 v-else>你还未中奖，再试试吧</h1>
    <br>
    <h3 v-show="isShowRestart">你还有{{ 3 - btnTiems}}次抽奖机会哦</h3>
    <div class="gift-image-area">
      <img :src="giftImageUrl" alt="" class="gift-image">
    </div>
    <h3>{{ giftName }}</h3>
    <div  class="reBtns" style="bottom: 120px" @click="btnHh">重置</div>
    <div  class="reBtns" style="left: 90px" @click="btnHh">重置</div>
    <div v-show="isShowRestart" class="replay-button" @click="replay">再次抽奖</div>

  </div>
</template>

<script>
import { GLOBAL_KEYS, IS_SHOW_RESTART } from '../gift.setting.js';
export default {
  name: 'Gift',
  data() {
    return {
      giftName: '',
      giftImageUrl: '',
      isShowRestart: true,
      btnTiems:1,
    }
  },
  methods: {
    getTimes(){
      if( this.giftName !=="谢谢参与"){
        this.$toast.center('恭喜亲爱的，你中奖啦')
        this.isShowRestart = false
        this.btnTiems = 3
      }
    },
    getLocalGift() {
      // 剩余抽奖
      this.btnTiems = Number(sessionStorage.getItem('giftTimes'));
      const giftName = localStorage.getItem(GLOBAL_KEYS.NAME_KEY);
      const giftImageUrl = localStorage.getItem(GLOBAL_KEYS.IMAGE_KEY);
      this.giftName = giftName;
      this.giftImageUrl = giftImageUrl;
      this.isShowRestart = IS_SHOW_RESTART;
      if(this.btnTiems >=3) {
        this.$toast.center('你的抽奖机会已用完啦')
        this.isShowRestart = false
      }
    },
    replay() {
       if(this.isShowRestart){
         localStorage.removeItem(GLOBAL_KEYS.EXIST_KEY);
         location.replace('/');
       }

    },
    replays(){
      localStorage.removeItem(GLOBAL_KEYS.EXIST_KEY);
      sessionStorage.removeItem('giftTimes')
      location.replace('/');
    },
    btnHh(){
      this.$toast.center('你点这里干啥呀')
    }
  },
  mounted() {
    this.getLocalGift();
     this.$toast.center('你获得了'+ this.giftName)
    this.getTimes();
  },
}
</script>

<style scoped>
.gift-component {
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.gift-image-area {
  margin: 30px 0 15px 0;
  width: 240px;
  height: 240px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.gift-image {
  display: block;
  width: 220px;
  height: 220px;
}
.replay-button {
  text-align: center;
  position: fixed;
  bottom: 20px;
  width: 100%;
}
  .reBtn{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #fff;
    border: 1px solid #dbd1d1;
    position: fixed;
    bottom: 100px;
    right: 10px;
  }
  .reBtns{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #fff;
    border: 1px solid #e7e3e3;
    position: fixed;
    bottom: 60px;
    left: 10px;
  }
</style>
