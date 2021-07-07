import Vue from "vue";
import Router from "vue-router";

const Home = () => import(/* webpackChunkName: "Home" */ "./views/Home.vue");
const Users = () => import(/* webpackChunkName: "Users" */ "./views/User.vue");
const UserPosts = () => import(/* webpackChunkName: "UserPosts" */ "./views/UsersPosts.vue");
const UsersProfile = () => import(/* webpackChunkName: "UsersProfile" */ "./views/UsersProfile.vue");
const HeaderHome = () => import(/* webpackChunkName: "HeaderHome" */ "./views/HeaderHome.vue");
const HeaderUsers = () => import(/* webpackChunkName: "HeaderUsers" */ "./views/HeaderUsers.vue");

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            components: {
                default: Home,
                header: HeaderHome
            }
        },
        {
            path: "/users/:id/",
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
                { path: "profile", component: UsersProfile, name: "users-id-profile" }]
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
            this.app.$root.$nextTick(() => this.app.$root.$emit("triggerScroll"));
        }

        return new Promise(resolve => {
            this.app.$root.$once("triggerScroll", () => {
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