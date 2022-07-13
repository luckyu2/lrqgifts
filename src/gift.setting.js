
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = true;

// 首页配置
export const homeConfig = {
  // 标题
  title: '琪琪快乐抽奖',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: '早起的鸟儿有虫吃，早到的人儿有奖拿', },
    { key: 's', wording: '万一幸运鹅就是你呢', },
    { key: 'd', wording: '奖品抽到手,快乐马上有', },
  ],
  // 最终解释权归属人
  owner: 'yss',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 3000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8,null是随机
  targetGiftIndex: null,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
// export const gifts = [
//   { key: 'q', name: 'Dior双飞套装', alias: 'Dior双飞', image: 'https://pic.imgdb.cn/item/62cd3c8ff54cd3f9375efa61.png',  description: '「经典迷人色彩，彰显奢华魅力」' },
//   { key: 'w', name: '知乎严选VIP', alias: 'VIP', image: 'https://pic.imgdb.cn/item/62cd3c8ef54cd3f9375efa13.png',  description: '“为你承包一辈子的VIP”' },
//   { key: 'e', name: '兰蔻小黑瓶套装', alias: '小黑瓶套装', image: 'https://pic.imgdb.cn/item/62cd3c8ff54cd3f9375efa1a.png',  description: '「强维稳，快修护」' },
//   { key: 'r', name: '520红包', alias: '520', image: 'https://pic.imgdb.cn/item/62cd3c8ff54cd3f9375efa3f.png',  description: '“想给你唱一百首情歌”' },
//   { key: 't', name: 'Dior星空套装', alias: 'Dior星空', image: 'https://pic.imgdb.cn/item/62cd3c8ff54cd3f9375efa22.png',  description: '「百变唇妆，精美雕琢」' },
//   { key: 'y', name: '1314红包', alias: '1314', image: 'https://pic.imgdb.cn/item/62cd3c8ff54cd3f9375efa3f.png',  description: '“从今往后，我都会在你旁边”' },
//   { key: 'u', name: '99红包', alias: '99', image: 'https://pic.imgdb.cn/item/62cd3c8ff54cd3f9375efa3f.png',  description: '“想和你一起长长久久”' },
//   { key: 'i', name: '美发套装', alias: '美发', image: 'https://pic.imgdb.cn/item/62cd3c8ff54cd3f9375efa44.png',  description: '「不同造型需求，全面满足」' },
// ];
export const gifts = [
  { key: 'w', name: '知乎严选VIP月卡', alias: 'VIP', image: 'https://pic.imgdb.cn/item/62cd3c8ef54cd3f9375efa13.png',  description: '“为你承包一辈子的VIP”' },
  { key: 'q', name: '谢谢参与', alias: '谢谢参与', image: 'https://pic.imgdb.cn/item/62ce26c1f54cd3f937626513.png',  description: '「谢谢参与，祝下次中奖」' },
  { key: 'r', name: '52.00红包', alias: '52.00', image: 'https://pic.imgdb.cn/item/62cd3c8ff54cd3f9375efa3f.png',  description: '“想给你唱一百首情歌”' },
   { key: 'e', name: '谢谢参与', alias: '谢谢参与', image: 'https://pic.imgdb.cn/item/62ce26c1f54cd3f937626513.png',  description: '「谢谢参与，祝下次中奖」' },
  { key: 'u', name: '99红包', alias: '99', image: 'https://pic.imgdb.cn/item/62cd3c8ff54cd3f9375efa3f.png',  description: '“想和你一起长长久久”' },
   { key: 't', name: '谢谢参与', alias: '谢谢参与', image: 'https://pic.imgdb.cn/item/62ce26c1f54cd3f937626513.png',  description: '「谢谢参与，祝下次中奖」' },
  { key: 'y', name: '1314红包', alias: '1314', image: 'https://pic.imgdb.cn/item/62cd3c8ff54cd3f9375efa3f.png',  description: '“从今往后，我都会在你旁边”' },
    { key: 'i', name: '谢谢参与', alias: '谢谢参与', image: 'https://pic.imgdb.cn/item/62ce26c1f54cd3f937626513.png',  description: '「谢谢参与，祝下次中奖」' },
];
