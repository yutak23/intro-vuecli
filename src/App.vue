<template>
  <div>
    <!-- templateが1つ（デフォルト）しかない場合、子コンポーネントにv-slotを記述する事でスロットプロパティを使える -->
    <!-- 以下のように他のtemplate(slot)がある場合、省略記法は使えないので注意。以下のエラーが出る。
         Default slot must use '<template>' on a custom element when there are other named slots.
           
         <LikeHeader v-slot="slotProps"> ←他のtemplate（slot）があるのでこれは使えない
         他のtemplate（slot）が存在する場合は以下のようにデフォルトスロットを明示的に定義する必要がある -->
    <LikeHeader>
      <template v-slot:default="slotProps">
        <p>{{ slotProps }}</p>
        <h2>みなさん</h2>
        <h4>いいねをたくさんもらいましょう</h4>
        <p>よろしくお願いします</p>
      </template>
      <template v-slot:title="slotProps2">
        <p>{{ slotProps2 }}</p>
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