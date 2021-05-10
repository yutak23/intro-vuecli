<template>
  <!-- template内は1つの要素のみで構成されないとエラーになるので以下はNG
       ErrorMsg : The template root requires exactly one element
       ので、divタグで囲む必要がある -->
  <!-- <p>いいね({{ number }})</p>
  <button @click="increment">+1</button> -->
  <div>
    <p>いいね({{ number }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      number: 5,
    };
  },
  methods: {
    increment() {
      this.number += 1;
    },
  },
};
</script>

<style></style>
