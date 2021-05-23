<template>
  <div>
    <slot :user="user" sample="sample"></slot>
    <slot></slot>
    <hr />
    <p>いいねの数</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: "Jack",
        lastName: "Donald",
      },
    };
  },
};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>