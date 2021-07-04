import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Users from './views/User.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/users/:id', component: Users, props: true }
    ]
});