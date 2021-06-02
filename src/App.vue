<template>
  <div class="container-sm">
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="increaseNumber"></LikeNumber>
    <button @click="currenComponent = 'Home'">Home</button>
    <button @click="currenComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currenComponent"></component>
    </keep-alive>
    <div>
      <h2>イベントのフォーム</h2>
      <div class="mb-3">
        <label for="title" class="form-label">タイトル</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="eventData.title"
        />
        <p>{{ eventData.title }}</p>
      </div>
    </div>
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
      eventData: {
        title: "タイトル",
      },
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