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
      <p>開催場所</p>
      <select class="form-select" v-model="eventData.location">
        <option v-for="location in locations" :key="location">
          {{ location }}
        </option>
      </select>
      <p>{{ eventData.location }}</p>

      <select class="form-select" v-model="eventData.locations" multiple>
        <option v-for="location in locations" :key="location">
          {{ location }}
        </option>
      </select>
      <p>{{ eventData.locations }}</p>
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
        location: "東京",
        locations: [],
      },
      locations: ["東京", "名古屋", "大阪"],
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