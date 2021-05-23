<template>
  <div>
    <slot name="title"></slot>
    <hr />
    <slot></slot>
    <hr />
    <slot name="number"></slot>
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