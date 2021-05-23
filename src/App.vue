<template>
  <div>
    <!-- templateが1つ（デフォルト）しかない場合、子コンポーネントにv-slotを記述する事でスロットプロパティを使える -->
    <!-- <LikeHeader v-slot:default="slotProps"> ←1つしかtemplateしかない時、それはdefaultなのでそれも省略可能-->
    <LikeHeader v-slot="slotProps">
      <p>{{ slotProps }}</p>
      <h2>みなさん</h2>
      <h4>いいねをたくさんもらいましょう</h4>
      <p>よろしくお願いします</p>
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