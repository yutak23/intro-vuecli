<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">ユーザ１</router-link>
    <router-link to="/users/2">ユーザ２</router-link>
    <hr />
    <h1>User No. {{ id }}</h1>
    <!-- 以下の書き方①・②は動作としては同じで、②が名前付きルートを使った分かりやすい動的なURLの作成方法 -->
    <!-- 書き方① -->
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile'">
      次のユーザ
    </router-link>
    <!-- 書き方② -->
    <router-link
      :to="{ name: 'users-id-profile', params: { id: Number(id) + 1 } }"
    >
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