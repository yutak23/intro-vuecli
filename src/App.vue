<template>
  <div class="main">
    <button
      type="button"
      class="btn btn-primary me-1"
      @click="myAnimation = 'slide'"
    >
      Slide
    </button>
    <button type="button" class="btn btn-primary" @click="myAnimation = 'fade'">
      Fade
    </button>
    <p>{{ myAnimation }}</p>
    <button type="button" class="btn btn-primary me-1" @click="show = !show">
      切り替え
    </button>
    <button
      type="button"
      class="btn btn-primary me-1"
      @click="myComponent = 'ComponentA'"
    >
      ComponentA
    </button>
    <button
      type="button"
      class="btn btn-primary me-1"
      @click="myComponent = 'ComponentB'"
    >
      ComponentB
    </button>
    <transition name="fade" mode="out-in">
      <component :is="myComponent"></component>
    </transition>
    <transition name="fade" mode="out-in">
      <p v-if="show" key="bye">さよなら</p>
      <p v-else key="hello">こんにちは</p>
    </transition>
    <transition
      enter-active-class="animate__animated animate__bounce"
      leave-active-class="animate__animated animate__shakeX"
      appear
    >
      <p v-if="show">hello</p>
    </transition>
    <transition :name="myAnimation" appear>
      <p v-if="show">bye</p>
    </transition>
  </div>
</template>

<script>
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";

export default {
  data() {
    return {
      show: true,
      myAnimation: "slide",
      myComponent: "ComponentA",
    };
  },
  components: {
    ComponentA,
    ComponentB,
  },
};
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-leave-to {
  opacity: 0;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 0.5s;
  transition: opacity 1s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
  transition: opacity 1s;
}

@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}

.main {
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>