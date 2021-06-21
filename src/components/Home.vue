<template>
  <p v-border>Home</p>
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
};
</script>