import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber);

// テキストなどであるフォーマットにしたいという時にはフィルターを使うと簡単
Vue.filter('upperCase', (value) => {
  return value.toUpperCase();
})

new Vue({
  render: h => h(App),
}).$mount('#app')
