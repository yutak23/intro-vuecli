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
        },
        {
            /** redirectは以下のような書き方ができ、最後のnameのやつはHome.vueの「Usersのページに行く」ボタンを押下したのと同じ動きになる */
            path: "/hello",
            redirect: "/"
            // redirect: { path: "/" }
            // redirect: { name: "users-id-profile", params: { id: 1 } }
        },
        /** 以下の設定により、上記のroute設定に合致しないURLは全てredirectで定義しているURLになる */
        {
            path: "*",
            redirect: "/"
        }
    ]
});