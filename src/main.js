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

// axios.getなどが呼ばれたときに、まずこのinterceptors.requestの内容が実行され、その後axios.getの内容が実行される
// 使い処：tokenを付けるなどの処理を実装する
//        エラー発生時にモーダルを画面に表示させる
const interceptersRequest = axios.interceptors.request.use(
  config => {
    // このようにHTTP requestのconfigを修正したりできる
    // config.headers["hoge"] = "hoge";
    console.log("interceptors request", config);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// axios.getなどが呼ばれて何かしらが返ってきた時（.then()のres）、まずこのinterceptors.responseの内容が実行され、その後axios.getの.then(res => ...)のresにreturnの値が返る
const interceptersResponse = axios.interceptors.response.use(
  response => {
    console.log("interceptors response", response);
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

// axios.interceptors.requestのidをeject()の第1引数に渡す事で、axiosのuseを取り消す処理を書く事ができる
axios.interceptors.request.eject(interceptersRequest);
axios.interceptors.response.eject(interceptersResponse);

new Vue({
  render: h => h(App),
}).$mount("#app")
