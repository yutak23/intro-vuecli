import Vue from "vue";
import Vuex from "vuex";

import count from "./modules/count";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        message: ""
    },
    // ES6の書き方
    getters,
    mutations,
    actions,
    // ES5の書き方
    // getters: getters,
    // mutations: mutations,
    // actions: actions,
    modules: {
        count
    }
});