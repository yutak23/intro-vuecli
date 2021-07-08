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
          </li>

          <li class="nav-item">
            <button
              type="button"
              class="btn btn-secondary ms-2"
              @click="incrementAsync"
            >
              遅延+1
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
    // このように実装すると、コンポーネントでcommitをしない（dispatchでactionsを呼びそこからmutationsを実行する）というルールにする事もできる
    // それによりstore.jsに処理の実装を集中させられる
    increment() {
      this.$store.dispatch("increment", 2);
    },
    incrementAsync() {
      this.$store.dispatch("incrementAsync", 2);
    },
    decrement() {
      this.$store.dispatch("decrement", 2);
    },
  },
};
</script>

<style scoped>
.link--active {
  font-size: 20px;
}
</style>