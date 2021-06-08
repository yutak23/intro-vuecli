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
      <EventTitle v-model="eventData.title"></EventTitle>
      <!-- <EventTitle
        :value="eventData.title"
        @input="eventData.title = $event"
      ></EventTitle> -->
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