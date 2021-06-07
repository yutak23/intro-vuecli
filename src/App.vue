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
      <p>参加条件</p>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="10"
          value="10代"
          v-model="eventData.target"
        />
        <label class="form-check-label" for="10">10代</label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="20"
          value="20代"
          v-model="eventData.target"
        />
        <label class="form-check-label" for="20">20代</label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="30"
          value="30代"
          v-model="eventData.target"
        />
        <label class="form-check-label" for="30">30代</label>
      </div>
      <p>{{ eventData.target }}</p>
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
        target: [],
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