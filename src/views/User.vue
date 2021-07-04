<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">ユーザ１</router-link>
    <router-link to="/users/2">ユーザ２</router-link>
    <hr />
    <h1>User No. {{ id }}</h1>
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile'">
      次のユーザ
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  /**
   * propsで定義する変数は、vue-routerのパスに書いた":(コロン)～"の～の部分を書く
   * https://router.vuejs.org/ja/guide/essentials/passing-props.html
   */
  props: ["id"],
};
</script>