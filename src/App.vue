<template>
  <div>
    <LikeHeader headerText="hello">
      <h2>みなさん</h2>

      <template v-slot:title="slotProps">
        <h2>こんにちは</h2>
        <h2>{{ slotProps.user.firstName }}</h2>
      </template>

      <h4>いいねをたくさんもらいましょう</h4>
      <p>よろしくお願いします</p>

      <template v-slot:number>
        <h2>{{ number }}</h2>
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