<template>
  <div>
    <slot name="title"></slot>
    <hr />
    <slot></slot>
    <hr />
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>