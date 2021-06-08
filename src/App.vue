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
      <p>タイトル</p>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="title"
          placeholder="タイトル"
          v-model="eventData.title"
        />
        <label for="title">タイトル</label>
      </div>

      <!-- 上記のv-modelを使った双方向データバインディングは、以下のように":valueと@input"で書き換えできる -->
      <!-- ※<input>タグでtype="text"の場合の話でその他のチェックボックス・ラジオボタンなどでは違うので注意 -->
      <!-- （ちなみに、v-model.lazyは@changeで同じ事が実現できる） -->
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="title2"
          placeholder="タイトル"
          :value="eventData.title"
          @input="eventData.title = $event.target.value"
        />
        <label for="title2">タイトル</label>
      </div>
      <p>{{ eventData.title }}</p>
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
        title: "",
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