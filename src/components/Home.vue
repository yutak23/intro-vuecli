<template>
  <p v-border:solid.round.shadow="{ width: '5px', color: 'red' }">Home</p>
</template>

<script>
export default {
  destroyed() {
    console.log("Home destroyed");
  },
  deactivated() {
    console.log("Home deactivated");
  },
  activated() {
    console.log("Home activated");
  },
  // カスタムディレクティブをローカル登録する方法は以下
  // ※ただし、これはこのコンポーネントでしか使えないのでそこは要注意
  directives: {
    // border: {}, <- このようにオブジェクトで定義してbind, inserted, update, …をそれぞれ定義する事もできる
    border(el, binding) {
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;

      if (binding.modifiers.round) {
        el.style.borderRadius = "0.5rem";
      }
      if (binding.modifiers.shadow) {
        el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.5)";
      }
    },
  },
};
</script>