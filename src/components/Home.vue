<template>
  <div>
    <p v-border:solid.round.shadow="{ width: '5px', color: 'red' }">
      {{ tmpData }}
    </p>
    <h2>{{ title | upperCase }}</h2>
    <h4>{{ subTitle | upperCase }}</h4>
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
  // フィルターを使わずcomputedでやろうとすると以下のように1つ1つに対してcomputedが必要で手間
  // フィルターを定義し、パイプ(|)でフィルターを指定するとフォーマッティングが簡単にできる（Angularのパイプと同じ）
  // computed: {
  //   upperCaseTitle() {
  //     return this.title.toUpperCase();
  //   },
  //   upperCaseSubTitle() {
  //     return this.subTitle.toUpperCase();
  //   },
  // },
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