<template>
  <div>
    <router-view name="header"></router-view>
    <main class="container-sm">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>