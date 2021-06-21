import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber);

Vue.directive('border', function (el, binding) {
  el.style.borderWidth = binding.value.width;
  el.style.borderColor = binding.value.color;

  // カスタムディレクティブの引数（:hogeのように:(コロン)の後に続くもの）を受け取るにはbinding.argを使う
  // ※ただし、引数は1つしか取れない
  el.style.borderStyle = binding.arg;
});

new Vue({
  render: h => h(App),
}).$mount('#app')
