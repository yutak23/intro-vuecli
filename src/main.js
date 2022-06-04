import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';

import router from './router';
// ./store/indexの/indexは省略可
import store from './store';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/main.css';

Vue.config.productionTip = false;

axios.defaults.baseURL =
	'https://firestore.googleapis.com/v1/projects/vuejs-http-80ec1/databases/(default)/documents';

const interceptersRequest = axios.interceptors.request.use(
	(config) => {
		console.log('interceptors request', config);
		return config;
	},
	(error) => Promise.reject(error)
);

const interceptersResponse = axios.interceptors.response.use(
	(response) => {
		console.log('interceptors response', response);
		return response;
	},
	(error) => Promise.reject(error)
);

axios.interceptors.request.eject(interceptersRequest);
axios.interceptors.response.eject(interceptersResponse);

// refresh Tokenを取得する前に、main.jsでnew Vue()が走らないようにするため
store.dispatch('autoLogin').then(() => {
	new Vue({
		router,
		store,
		render: (h) => h(App)
	}).$mount('#app');
});
