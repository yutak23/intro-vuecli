<template>
  <div>
    <p>いいね({{ totalNumber / 2 }})</p>
    <p>いいね({{ halfNumber }})</p>
    <p>いいね({{ testProps }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    totalNumber: {
      type: Number,
      default: 20,
    },
    testProps: {
      type: String,
    },
  },
  computed: {
    halfNumber() {
      return this.totalNumber / 2;
    },
  },
  methods: {
    increment() {
      this.number += 1;
    },
  },
};
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>