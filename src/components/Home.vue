<template>
  <div>
    <p v-border:solid.round.shadow="{ width: '5px', color: 'red' }">
      {{ tmpData }}
    </p>
    <!-- 複数のフィルタをパイプで設定した場合、末尾のフィルタ関数が適用される -->
    <h2>{{ title | upperCase | lowerCase }}</h2>
    <h4>{{ subTitle | lowerCase | upperCase }}</h4>
  </div>
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
      title: "Welcome to Tokyo",
      subTitle: "Tokyo is a great city",
    };
  },
  filters: {
    lowerCase(value) {
      // this.tmpData; <- カスタムディレクティブ同様にfiltersでもthisは使えない
      // thisを使いたい場合には、computed, methidを用いる
      return value.toLowerCase();
    },
  },
  directives: {
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