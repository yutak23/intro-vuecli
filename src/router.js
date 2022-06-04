import Vue from 'vue';
import Router from 'vue-router';

import Comments from './views/CommentsPage.vue';
import Login from './views/LoginPage.vue';
import Register from './views/RegisterPage.vue';
// eslint-disable-next-line import/no-cycle
import store from './store';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Comments,
			beforeEnter(to, from, next) {
				if (store.getters.idToken) {
					next();
				} else {
					next('/login');
				}
			}
		},
		{
			path: '/login',
			component: Login,
			beforeEnter(to, from, next) {
				if (store.getters.idToken) {
					next('/');
				} else {
					next();
				}
			}
		},
		{
			path: '/register',
			component: Register,
			beforeEnter(to, from, next) {
				if (store.getters.idToken) {
					next('/');
				} else {
					next();
				}
			}
		}
	]
});
export default router;
