<template>
  <div>
    <p>About</p>
    <input type="text" />
  </div>
</template>

<script>
export default {
  destroyed() {
    console.log("About destroyed");
  },
};
</script>