import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber);

/**
 * 以下のようにミックスインをグローバル登録すると、
 * 全てのコンポーネントでそのミックスインがマージ(適用)されるので使う際には要注意
 * コンポーネントにマージ(適用)される場合、以下の順番になる
 * 1.グローバルミックスインのオプション -> 2.ローカルミックスインのオプション -> 3.コンポーネントのオプション
 *
 * ※基本的にグローバルミックスインは使わない
 *   使う場面は、プラグインなどで全てのコンポーネントに適用させたい何かを定義した時などに限定される 
 */
Vue.mixin({
  created() {
    console.log("global mixin");
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
