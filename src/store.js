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
    mutations: {
        increment(state, number) {
            state.count += number;
        },
        decrement(state, number) {
            state.count -= number;
        }
    },
    actions: {
        increment(context, number) {
            context.commit('increment', number);
        },
        // 以下の{ commit }はES6の書き方でcontextのcommitだけを使うという意味で直接呼び出せる
        decrement({ commit }, number) {
            commit('decrement', number);
        },
        // actionsを使う事で非同期処理も書ける
        incrementAsync({ commit }, number) {
            setTimeout(() => {
                commit('increment', number);
            }, 1000)
        }
    }
});