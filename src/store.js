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
    // mutations（state(状態)を変更する処理）は非同期では書けない
    // 理由：例えば、HeaderHome.vueで、increment(2)が呼ばれた時に、その実装だけを見て非同期処理なのか？同期処理なのか？は分からず混乱するが、
    //       Vuexは様々なコンポーネントで使われることが前提になっているので、コンポーネントのソースコードを見て挙動が判断できないと辛いため
    mutations: {
        increment(state, number) {
            state.count += number;

            // 以下のような実装はできない
            // setTimeout(() => {
            //     state.count += number;
            // }, 10)
        },
        decrement(state, number) {
            state.count -= number;
        }
    }
});