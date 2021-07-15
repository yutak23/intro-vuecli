import Vue from "vue";
import Vuex from "vuex";

import axios from "../axios-auth";
import axiosRefresh from "../axios-refresh";
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
        async register({ commit, dispatch }, authData) {
            const data = {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true,
            };

            try {
                const response = await axios.post(`/accounts:signUp?key=${apiKey}`, data);
                commit('updadeIdToken', response.data.idToken);
                setTimeout(() => {
                    dispatch("refreshIdToken", response.data.refreshIdToken);
                }, response.data.expiresIn * 1000);
                router.push('/');
            } catch (error) {
                errorHandler(error);
            }
        },
        async login({ commit, dispatch }, authData) {
            const data = {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true,
            };

            try {
                const response = await axios.post(`/accounts:signInWithPassword?key=${apiKey}`, data);
                commit('updadeIdToken', response.data.idToken);
                setTimeout(() => {
                    dispatch("refreshIdToken", response.data.refreshIdToken);
                }, response.data.expiresIn * 1000);
                router.push('/');
            } catch (error) {
                errorHandler(error);
            }
        },
        async refreshIdToken({ commit, dispatch }, refreshToken) {
            const resRefresh = await axiosRefresh.post(`/token?key=${apiKey}`, {
                grant_type: "refresh_token",
                refresh_token: refreshToken
            });
            commit('updadeIdToken', resRefresh.data.id_token);
            setTimeout(() => {
                dispatch("refreshIdToken", resRefresh.data.refresh_token);
            }, resRefresh.data.expires_in * 1000);
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