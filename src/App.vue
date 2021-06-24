<template>
  <div class="main">
    <button type="button" class="btn btn-primary" @click="show = !show">
      切り替え
    </button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
    <transition name="slide">
      <!-- transitionが単一の要素のみしかダメだが、以下のようにタグが1つという意味なので子がいてもOK
           また、コンポーネントを単一の要素してしてtransitionの中に書く事はできる -->
      <div v-if="show">
        <p>bye</p>
        <p>bye2</p>
        <p>bye3</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 5s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 5s;
}
.fade-leave-to {
  opacity: 0;
}

/* enter, enter-to, leave, leave-toは、keyframesに指定しているので定義する必要がない（Vue.jsが勝手にやってくれる） */
/* .slide-enter {
} */
.slide-enter-active {
  animation: slide-in 0.5s;
}
/* .slide-enter-to {
}
.slide-leave {
} */
.slide-leave-active {
  animation: slide-in 0.5s reverse;
}
/* .slide-leave-to {
} */

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