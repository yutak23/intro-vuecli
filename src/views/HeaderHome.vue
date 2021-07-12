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
              @click="increment({ number: 2, name: 'Hello World' })"
            >
              +1
            </button>
          </li>

          <li class="nav-item">
            <button
              type="button"
              class="btn btn-secondary ms-2"
              @click="incrementAsync(2)"
            >
              遅延+1
            </button>
            <button
              type="button"
              class="btn btn-secondary ms-2"
              @click="decrement(2)"
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
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("count", ["increment", "incrementAsync", "decrement"]),
  },
};
</script>

<style scoped>
.link--active {
  font-size: 20px;
}
</style>