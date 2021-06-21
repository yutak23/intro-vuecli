import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber);

// bindとupdateは基本同じ内容になる
// ex）値を受け取って赤色とか黄色に変えるとかは、bind・updateの両方でやる事になりほぼ同じ内容になる
// ので、bind・updateは1つの関数として書ける
Vue.directive('border', function (el) {
  // el : カスタムディレクティブを定義している要素そのもの
  // 今回で言えば "<p></p>" がelになるので以下のようにそのstyleを指定するとかできる
  el.style.border = 'solid black 2px'
});

new Vue({
  render: h => h(App),
}).$mount('#app')
