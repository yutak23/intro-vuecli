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
    // 何もしないと最終的にindex.js(Store)に集約された時にstate, getters, mutations, actionsが被るとエラーになる
    // →storeのmodulesが増えて行った時、modules間で同じ名前を使うとエラーになるので、以下のようにnamespaced: trueとする事で、modules毎に名前空間を付ける事ができ被らないようにできる
    // ※namespaced: trueを付けると、それぞれの名前が "increment" -> "count/increment" のようになる
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}