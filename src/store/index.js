import Vue from "vue";
import Vuex from "vuex";

import axios from "../axios-auth";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        idToken: null
    },
    getters: {
        idToken: state => state.idToken
    },
    mutations: {
        updadeIdToken(state, idToken) {
            state.idToken = idToken;
        }
    },
    actions: {
        async register({ commit }, authData) {
            const data = {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true,
            };

            try {
                const response = await axios.post(`/accounts:signUp?key=${apiKey}`, data);
                commit('updadeIdToken', response.data.idToken);
                router.push('/');
            } catch (error) {
                errorHandler(error);
            }
        },
        async login({ commit }, authData) {
            const data = {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true,
            };

            try {
                const response = await axios.post(`/accounts:signInWithPassword?key=${apiKey}`, data);
                commit('updadeIdToken', response.data.idToken)
                router.push('/');
            } catch (error) {
                errorHandler(error);
            }
        }
    }
});

const apiKey = "AIzaSyDck1HyE9xePRxXQfdXIfe_4g35ds3AARI";
const errorHandler = (error) => {
    if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
        console.log(error.message);
    } else {
        console.log(error.message);
    }
};