import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 2
    },
    getters: {
        doubleCount: state => state.count * 2,
        tripleCount: state => state.count * 3
    },
    // mutations以外でもVuexのstore.stateの値を変更できるが、mutationsに値変更機能を限定する事で実装をシンプルにできる
    // ※一般的にはVuexを使うならmutationsを使い、コンポーネント側で値変更の処理はしないようにする
    mutations: {
        increment(state, number) {
            state.count += number;
        },
        decrement(state, number) {
            state.count -= number;
        }
    }
});