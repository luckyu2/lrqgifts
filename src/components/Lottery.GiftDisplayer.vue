<template>
  <div class="lottery-gift-displayer-component full-screen">
    <div class="erkang-bg-top"></div>
    <div class="erkang-bg-bottom">
      <h2>{{ name }}</h2>
      <div class="border-area">
        <img class="gift-image" :src="image" alt="Gift">
      </div>
      <p style="font-weight: bold">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LotteryGiftDisplayer',
  data() {
    return {}
  },
  props: ['name', 'image', 'description'],
}
</script>

<style scoped>
.lottery-gift-displayer-component {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.erkang-bg-top {
  width: 20rem;
  height: 20rem;
  background-image: url("https://pic.imgdb.cn/item/62cd3c53f54cd3f9375e8fe4.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: 1;
  position: relative;
  top: -25%;
}
.erkang-bg-bottom {
  width: 20rem;
  height: 26rem;
  background-image: url("https://pic.imgdb.cn/item/62cd3c53f54cd3f9375e8fdc.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: 2;
  position: absolute;
  top: 25%;
  padding: 200px 70px 70px 51px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.border-area {
  width: 170px;
  height: 170px;
  background-color: white;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px;
}
.gift-image {
  display: block;
  width: 150px;
  height: 150px;
}
</style>
