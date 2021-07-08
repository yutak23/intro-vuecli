import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 2
    },
    getters: {
        // gettersを定義する事でどのコンポーネントでもVuexのStoreの値を取得するものが作れる
        // gettersはコンポーネントのcomputedとほぼ同じような使い方をするイメージでOK
        doubleCount: state => state.count * 2

        // ちなみに、ES6のアロー関数を使わないと以下のように書く事になる
        // doubleCount(state) {
        //     return state.count * 2
        // }
    }
});