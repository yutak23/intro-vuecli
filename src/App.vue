<template>
  <div class="main">
    <button type="button" class="btn btn-primary" @click="show = !show">
      切り替え
    </button>
    <!-- トランジションのname属性がない場合、デフォルトではname="v"になるのでcssもv-…のようになる -->
    <transition name="fade">
      <p v-if="show">hello</p>
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
  /* 現れる時の最初の状態をここに定義する */
  opacity: 0;
}
.fade-enter-active {
  /* 現れる時（現れている最中）のトランジション・アニメーションの状態をここに定義する 
     何秒間かけてどのようなアニメーションを付けたいのか？  */
  transition: opacity 5s;
}
.fade-enter-to {
  /* 現れる時の最後の状態をここに定義する */
  opacity: 1; /* ← 本来これはデフォルトなので宣言する必要はないが今回はあえて */
}
.fade-leave {
  /* 消える時の最初の状態をここに定義する */
  opacity: 1; /* ← 本来これはデフォルトなので宣言する必要はないが今回はあえて */
}
.fade-leave-active {
  /* 消える時（消えている最中）のトランジション・アニメーションの状態をここに定義する 
     何秒間かけてどのようなアニメーションを付けたいのか？  */
  transition: opacity 5s;
}
.fade-leave-to {
  /* 消える時の最後の状態をここに定義する */
  opacity: 0;
}
.main {
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>