<template>
  <div>
    <router-view name="header"></router-view>
    <main class="container-sm">
      <!-- router-viewはある意味動的コンポーネントみたいなものなのでトランジションも適応可能 -->
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
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