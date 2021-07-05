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
            props: {
                default: true,
                header: false
            },
            children: [
                { path: "posts", component: UserPosts },
                { path: "profile", component: UsersProfile, name: 'users-id-profile' }]
        },
        {
            path: "/hello",
            redirect: "/"
        },
        {
            path: "*",
            redirect: "/"
        }
    ],
    scrollBehavior(to, from, savePosition) {
        console.log("to", to);
        console.log("from", from);
        console.log("savePosition", savePosition);
        if (savePosition) {
            return savePosition;
        }

        if (to.hash) {
            return {
                selector: "#next-user",
                offset: { x: 0, y: 100 }
            }
        }

        return { x: 0, y: 0 };
    }
});