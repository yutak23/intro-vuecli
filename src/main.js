import Vue from "vue"
import App from "./App.vue"

import router from "./router";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false

// beforeEach()：全てのページ遷移前に特定の処理を実行するために使うメソッド
// 一般的には、あるページに遷移させないなどのガードの処理を書く
// 具体的には、ログイン前であればログイン画面にリダイレクトさせる、というような処理を書く
router.beforeEach((to, from, next) => {
  console.log("global-beforeEach");

  // 単純に以下のように書いてしまうと、/に遷移しようとした時にまたbeforeEach()が実行され、また…という無限ループになる
  // next("/"); <- これはNG
  // そのため以下のようにif文と組み合わせて使うのが一般的
  // またrouterのリンクの書き方は色々できるのでオブジェクトにしたり、名前付きルートを使ったりもできる
  if (to.path === "/users/1") {
    next("/");
    console.log("\"/\" へリダイレクト")
    // next({ path: "/" });
    // next({
    //   name: "users-id-profile",
    //   params: { id: 5 },
    // });    
  }
  next();

  // false：ページ遷移をしないという設定
  // next(false);
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount("#app")
