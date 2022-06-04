import Vue from 'vue';
import Vuex from 'vuex';

import axios from '../axios-auth';
import axiosRefresh from '../axios-refresh';
// eslint-disable-next-line import/no-cycle
import router from '../router';

const apiKey = 'AIzaSyDck1HyE9xePRxXQfdXIfe_4g35ds3AARI';

const errorHandler = (error) => {
	if (error.response) {
		console.log(error.response.status);
		console.log(error.response.data);
		console.log(error.message);
	} else {
		console.log(error.message);
	}
};

Vue.use(Vuex);

const vuex = new Vuex.Store({
	state: {
		idToken: null
	},
	getters: {
		idToken: (state) => state.idToken
	},
	mutations: {
		updadeIdToken(state, idToken) {
			state.idToken = idToken;
		}
	},
	actions: {
		async autoLogin({ commit, dispatch }) {
			const idToken = localStorage.getItem('idToken');
			if (!idToken) return;

			const now = new Date();
			const expiryTimeMs = localStorage.getItem('expiryTimeMs');
			const refreshToken = localStorage.getItem('refreshToken');
			const isExpired = now.getTime() >= expiryTimeMs;

			if (isExpired) {
				// トークンが切れていたらリフレッシュトークンで新しいトークンを取得
				await dispatch('refreshIdToken', refreshToken);
			} else {
				// オートログインした後、トークン有効残り時間を計算しリフレッシュトークンでトークンを取得させるようにする必要がある
				const expiresInMs = expiryTimeMs - now.getTime();
				setTimeout(() => {
					dispatch('refreshIdToken', refreshToken);
				}, expiresInMs);
				commit('updadeIdToken', idToken);
			}
		},
		async register({ dispatch }, authData) {
			const data = {
				email: authData.email,
				password: authData.password,
				returnSecureToken: true
			};

			try {
				const response = await axios.post(
					`/accounts:signUp?key=${apiKey}`,
					data
				);

				dispatch('setAuthData', {
					idToken: response.data.idToken,
					expiresIn: response.data.expiresIn,
					refreshToken: response.data.refreshToken
				});

				router.push('/');
			} catch (error) {
				errorHandler(error);
			}
		},
		async login({ dispatch }, authData) {
			const data = {
				email: authData.email,
				password: authData.password,
				returnSecureToken: true
			};

			try {
				const response = await axios.post(
					`/accounts:signInWithPassword?key=${apiKey}`,
					data
				);
				dispatch('setAuthData', {
					idToken: response.data.idToken,
					expiresIn: response.data.expiresIn,
					refreshToken: response.data.refreshToken
				});
				router.push('/');
			} catch (error) {
				errorHandler(error);
			}
		},
		logout({ commit }) {
			commit('updadeIdToken', null);
			localStorage.removeItem('idToken');
			localStorage.removeItem('expiryTimeMs');
			localStorage.removeItem('refreshToken');
			router.push('/login');
		},
		async refreshIdToken({ dispatch }, refreshToken) {
			const resRefresh = await axiosRefresh.post(`/token?key=${apiKey}`, {
				grant_type: 'refresh_token',
				refresh_token: refreshToken
			});
			dispatch('setAuthData', {
				idToken: resRefresh.data.id_token,
				expiresIn: resRefresh.data.expires_in,
				refreshToken: resRefresh.data.refresh_token
			});
		},
		setAuthData({ commit, dispatch }, authData) {
			commit('updadeIdToken', authData.idToken);

			const now = new Date();
			const expiryTimeMs = now.getTime() + authData.expiresIn * 1000;
			localStorage.setItem('idToken', authData.idToken);
			localStorage.setItem('expiryTimeMs', expiryTimeMs);
			localStorage.setItem('refreshToken', authData.refreshToken);

			setTimeout(() => {
				dispatch('refreshIdToken', authData.refreshToken);
			}, authData.expiresIn * 1000);
		}
	}
});
export default vuex;
