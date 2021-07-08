const state = {
    count: 2
}

const getters = {
    doubleCount: state => state.count * 2,
    tripleCount: state => state.count * 3
}

const mutations = {
    increment(state, number) {
        state.count += number;
    },
    decrement(state, number) {
        state.count -= number;
    }
}

const actions = {
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
}

export default {
    state,
    getters,
    mutations,
    actions
}