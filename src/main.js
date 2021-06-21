import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber);
Vue.directive('border', {
  // フック関数（プロセスのどのタイミングで何をする）を定義できる（定義しない事もできる）
  // コンポーネントのライフサイクルフックと同じようなイメージでOK
  // 以下の中でもbind, updateは最もよく使われる。そのため省略記法もある。
  bind(el, binding, vnode) {
    // ディレクティブが初めて対象の要素に紐づいた時
    // 1度しか呼ばれない
  },
  inserted(el, binding, vnode) {
    // 親Nodeに挿入された時
    // 実際にDOMに（VNode仮想ノードに）描画されるタイミングで、コンポーネントでいう$mountと同じイメージ
  },
  update(el, binding, vnode, oldNode) {
    // コンポーネントが更新される度に（子コンポーネント(のVNode仮想ノード)が更新される前＝親から何かpropsでデータが渡ってくる場合それが渡ってくるが子のVNodeはまだ変わっていないタイミング）
  },
  componentUpdate(el, binding, vnode, oldNode) {
    // コンポーネントが更新される度に（子コンポーネント(のVNode仮想ノード)が更新される前＝親から何かpropsでデータが渡ってくる場合それが渡ってきて子のVNodeも変わったタイミング）
  },
  unbind(el, binding, vnode) {
    // ディレクティブが紐づいている要素から取り除かれた時
    // コンポーネントでいうdestroyedのイメージ
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
