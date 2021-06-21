<template>
  <div class="container-sm">
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="increaseNumber"></LikeNumber>
    <div class="mt-5">
      <button
        type="button"
        class="btn btn-primary me-2"
        @click="currenComponent = 'Home'"
      >
        Home
      </button>
      <button
        type="button"
        class="btn btn-primary me-2"
        @click="currenComponent = 'About'"
      >
        About
      </button>
      <keep-alive>
        <component :is="currenComponent" class="mt-3"></component>
      </keep-alive>
    </div>
    <div class="mt-5">
      <h2>イベントのフォーム</h2>
      <EventTitle v-model="eventData.title"></EventTitle>
    </div>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About";
import Home from "./components/Home";
import EventTitle from "./components/EventTitle.vue";

export default {
  data() {
    return {
      number: 10,
      currenComponent: "Home",
      eventData: {
        title: "",
      },
    };
  },
  components: {
    LikeHeader,
    About,
    Home,
    EventTitle,
  },
  methods: {
    increaseNumber(value) {
      console.log(`increaseNumber : ${value}`);
      this.number = value;
    },
  },
};
</script>