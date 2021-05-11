<template>
  <div>
    <p>いいね({{ totalNumber / 2 }})</p>
    <p>いいね({{ halfNumber }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    totalNumber: {
      type: Number,
      // required: true, defaultと共によく使うバリデーション
      default: 20,
      // objectをdefaultに設定する場合は以下のように書く（配列もreturnで書く）
      // default: function () {
      //   return {
      //     number: 5,
      //   };
      // },
    },
  },
  computed: {
    halfNumber() {
      return this.totalNumber / 2; // ←dataプロパティのようにthis.でpropsもアクセス可
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