<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="increaseNumber"></LikeNumber>
    <button @click="currenComponent = 'Home'">Home</button>
    <button @click="currenComponent = 'About'">About</button>
    <component :is="currenComponent"></component>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About";
import Home from "./components/Home";

export default {
  data() {
    return {
      number: 10,
      currenComponent: "Home",
    };
  },
  components: {
    LikeHeader,
    About,
    Home,
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