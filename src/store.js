import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 2,
        message: ""
    },
    getters: {
        doubleCount: state => state.count * 2,
        tripleCount: state => state.count * 3,
        message: state => state.message
    },
    mutations: {
        increment(state, number) {
            state.count += number;
        },
        decrement(state, number) {
            state.count -= number;
        },
        updateMessage(state, newMessage) {
            state.message = newMessage;
        }
    },
    actions: {
        increment(context, { number, name }) {
            context.commit('increment', number);
            console.log(name);
        },
        decrement({ commit }, number) {
            commit('decrement', number);
        },
        incrementAsync({ commit }, number) {
            setTimeout(() => {
                commit('increment', number);
            }, 1000)
        },
        updateMessage({ commit }, newMessage) {
            commit("updateMessage", newMessage);
        }
    }
});