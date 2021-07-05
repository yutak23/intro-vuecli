import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Users from './views/User.vue';
import UserPosts from './views/UsersPosts.vue';
import UsersProfile from './views/UsersProfile.vue';
import HeaderHome from "./views/HeaderHome.vue";
import HeaderUsers from "./views/HeaderUsers.vue";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            components: {
                default: Home,
                header: HeaderHome
            }
        },
        {
            path: '/users/:id/',
            components: {
                default: Users,
                header: HeaderUsers
            },
            /** 名前付きビューを用いる場合には、書くビュー毎にpropsを設定する必要があるので注意 */
            props: {
                default: true,
                header: false
            },
            children: [
                { path: "posts", component: UserPosts },
                { path: "profile", component: UsersProfile, name: 'users-id-profile' }]
        }
    ]
});