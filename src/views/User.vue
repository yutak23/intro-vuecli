<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">ユーザ１</router-link>
    <router-link to="/users/2">ユーザ２</router-link>
    <hr />
    <h1>User No. {{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  created() {
    console.log("created");
  },
  watch: {
    $route(to, from) {
      console.log("$routeのwatch");
      console.log(to);
      console.log(from);
    },
  },
};
</script>