import Vue from "vue"
import App from "./App.vue"

import axios from "axios";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false

// 以下のようにaxios.defaults.・・・でデフォルトの設定できる
// 何かの設定をする際には、main.jsで行うようにする（各コンポーネントで使う際に以下の設定が反映された状態になるため）
axios.defaults.baseURL = "https://firestore.googleapis.com/v1/projects/vuejs-http-80ec1/databases/(default)/documents";
// axios.defaults.headers.common["Authorization"] = "hogehoge";
// axios.defaults.headers.get["Accept"] = "application/json";

new Vue({
  render: h => h(App),
}).$mount("#app")
