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
        // パスが同じ時はすぐにscrollBehaviorを実行する
        if (to.path.match("^/users/") && from.path.match("^/users/")) {
            this.app.$root.$nextTick(() => this.app.$root.$emit('triggerScroll'));
        }

        return new Promise(resolve => {
            // this：new Router()のインスタンス自体の事
            // this.app：new Router()インスタンスが挿入・適用されるVueインスタンス（今回で言えばmain.jsのVueインスタンス）
            // this.app === this.app.$root
            // $once($on)：$emitで発火させたeventの処理を書ける構文（triggerScrollという$emitが発火した時にcallback関数が実行される）
            this.app.$root.$once('triggerScroll', () => {
                let position = { x: 0, y: 0 };

                if (savePosition) {
                    position = savePosition;
                }

                if (to.hash) {
                    position = {
                        selector: "#next-user",
                        offset: { x: 0, y: 100 }
                    }
                }

                resolve(position);
            });
        });
    }
});