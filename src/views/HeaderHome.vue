<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Home</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/"
              exact
              active-class="link--active"
              >Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{
                name: 'users-id-profile',
                params: { id: 1 },
                query: { lang: 'ja', page: 2 },
                hash: '#next-user',
              }"
              exact
              active-class="link--active"
              >Users
            </router-link>
          </li>
          <li class="nav-item">
            <button
              type="button"
              class="btn btn-secondary ms-2"
              @click="increment"
            >
              +1
            </button>
            <button
              type="button"
              class="btn btn-secondary ms-2"
              @click="decrement"
            >
              -1
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    increment() {
      // mutations・commitの組み合わせになるので、ソースコードを読み解いていく時にVuexのstoreの値を書き換えているという事が一目でわかる
      // this.$store.state.count++; ←これだと値を参照している or 変更しているをsの場で判断する必要があり大変
      this.$store.commit("increment", 2);
    },
    decrement() {
      this.$store.commit("decrement", 2);
    },
  },
};
</script>

<style scoped>
.link--active {
  font-size: 20px;
}
</style>