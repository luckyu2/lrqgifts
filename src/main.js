import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import LuckDraw from 'vue-luck-draw'
import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.use(LuckDraw)

// vue2-toast吐司提示
import 'vue2-toast/lib/toast.css'
import  Toast from  'vue2-toast'
Vue.use(Toast, {
  type: 'center',
  duration: 1500,
  wordWrap: true,
  width: '240px'
})

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')
