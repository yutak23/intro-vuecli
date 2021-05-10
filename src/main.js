import Vue from 'vue'

// single file component Vueのコンポーネントはこれの事
// importされる事でコンポーネントになるもの＝.vueファイル
import App from './App.vue'

Vue.config.productionTip = false

console.log(App);

new Vue({
  render: h => h(App),
}).$mount('#app')
