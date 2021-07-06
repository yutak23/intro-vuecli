<template>
  <div>
    <router-view name="header"></router-view>
    <main class="container-sm">
      <transition name="fade" mode="out-in" @before-enter="beforeEnter">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    beforeEnter() {
      // this.$root：これはmain.jsの一番上の階層にあるVueインスタンスの事
      // ※単なるthisはここで言えば、App.vueというsingle file componentのVueインスタンス
      // this.$root.$emit：これにより、main.jsのVueインスタンスにtriggerScrollというイベントを発火させることができ、そのイベントをscrollBehavior関数が検知する事で非同期のscrollBehaviorの振る舞いが実装されている
      this.$root.$emit("triggerScroll");
    },
  },
};
</script>

<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
</style>