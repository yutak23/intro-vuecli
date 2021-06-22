<template>
  <div>
    <p v-border:solid.round.shadow="{ width: '5px', color: 'red' }">
      {{ tmpData }}
    </p>
    <h2>{{ title | upperCase }}</h2>
    <h4>{{ subTitle | lowerCase }}</h4>
    <p>{{ number }}</p>
    <button type="button" class="btn btn-primary" @click="number++">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tmpData: "hello",
      title: "Welcome to Tokyo",
      subTitle: "Tokyo is a great city",
      number: 0,
    };
  },
  filters: {
    upperCase(value) {
      console.log("filters", "upperCase");
      return value.toUpperCase();
    },
    lowerCase(value) {
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