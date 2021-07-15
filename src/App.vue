<template>
  <main>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container-fluid">
        <template v-if="isAuthenticated">
          <router-link class="navbar-brand" to="/"> 掲示板 </router-link>
        </template>
        <div class="navbar-brand" v-else>掲示板へようこそ</div>
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
          <ul class="nav nav-pills me-auto">
            <template v-if="!isAuthenticated">
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  to="/login"
                  exact
                  active-class="active"
                >
                  ログイン
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  to="/register"
                  exact
                  active-class="active"
                >
                  登録
                </router-link>
              </li>
            </template>
          </ul>
          <button class="btn btn-secondary" type="button" @click="logout">
            ログアウト
          </button>
        </div>
      </div>
    </nav>
    <div class="container-sm main-area">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.idToken !== null;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped>
main {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.main-area {
  flex: auto;
}
</style>