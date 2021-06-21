<template>
  <p v-border:solid.round.shadow="{ width: '5px', color: 'red' }">
    {{ tmpData }}
  </p>
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
  data() {
    return {
      tmpData: "hello",
    };
  },
  directives: {
    border(el, binding) {
      // this.tmpData = "こんにちは"; <- カスタムディレクティブではthisは使えないので注意！
      // Error in directive border bind hook: "TypeError: Cannot set property 'tmpData' of undefined" という警告と、TypeError: Cannot set property 'tmpData' of undefinedというエラーが出る
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