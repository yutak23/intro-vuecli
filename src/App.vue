<template>
  <div class="main">
    <button type="button" class="btn btn-primary" @click="show = !show">
      切り替え
    </button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
    <!-- トランジション・アニメーションの両方を定義する場合にはtypeでどちらに合わせるか？を明示的に指定する
         ※指定しない場合、長い方の時間に合わせてv-ifのDOM削除・追加が走る -->
    <transition name="slide" type="animation">
      <p v-if="show">bye</p>
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
/* 以下にはopacity: 1;を定義するところだが、デフォルトでiなので定義不要 */
/* .slide-leave,
.slide-enter-to {
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