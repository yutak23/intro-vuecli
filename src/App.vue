<template>
  <div>
    <LikeHeader>
      <p>{{ slotProps }}</p>
      <h2>みなさん</h2>
      <h4>いいねをたくさんもらいましょう</h4>
      <p>よろしくお願いします</p>
      <template v-slot:[title]>
        <p>動的なスロット名の定義</p>
      </template>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="number = $event"></LikeNumber>
    <LikeNumber :total-number="number" @my-click="increaseNumber"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";

export default {
  data() {
    return {
      number: 10,
      title: "title",
    };
  },
  components: {
    LikeHeader,
  },
  methods: {
    increaseNumber(value) {
      console.log(`increaseNumber : ${value}`);
      this.number = value;
    },
  },
};
</script>

<style scoped>
h1 {
  color: red;
}
div {
  border: 1px solid blue;
}
</style>