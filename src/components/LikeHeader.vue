<template>
  <div>
    <slot></slot>
    <hr />
    <slot test="test"></slot>
    <hr />
    <slot sample="hoge"></slot>
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