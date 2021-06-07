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
      <p>参加費</p>
      <!-- 本来nameでradioをひとくくりにするがv-modelでそれを実現する事もできる -->
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          id="free"
          value="無料"
          v-model="eventData.price"
        />
        <label class="form-check-label" for="free">無料</label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          id="paid"
          value="有料"
          v-model="eventData.price"
        />
        <label class="form-check-label" for="paid">有料</label>
      </div>
      <p>{{ eventData.price }}</p>
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
        price: "無料",
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