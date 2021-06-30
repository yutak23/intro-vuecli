<template>
  <div>
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
                to="/users"
                exact
                active-class="link--active"
                >Users
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main class="container-sm">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.link--active {
  font-size: 20px;
}
</style>