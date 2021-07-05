<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">ユーザ１</router-link>
    <router-link to="/users/2">ユーザ２</router-link>
    <hr />
    <h1>User No. {{ id }}</h1>
    <router-link
      :to="'/users/' + (Number(id) + 1) + '/profile?lang=ja&page=2#next-user'"
    >
      次のユーザ
    </router-link>
    <router-view></router-view>
    <div style="height: 700px"></div>
    <router-link
      id="next-user"
      :to="{
        name: 'users-id-profile',
        params: { id: Number(id) + 1 },
        query: { lang: 'ja', page: 2 },
        hash: '#next-user',
      }"
    >
      次のユーザ
    </router-link>
    <div style="height: 1400px"></div>
  </div>
</template>

<script>
export default {
  props: ["id"],
};
</script>