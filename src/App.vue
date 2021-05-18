<template>
  <div>
    <LikeHeader headerText="hello">
      <h1>トータルのいいね数</h1>
      <h2>{{ number }}</h2>
      <!-- 子コンポーネントに定義されているプロパティ値（変数・関数など）（今回だとprops）は、親からは参照できない（コンポーネント間のデータ受け渡しと同じイメージ） -->
      <!-- ※親→子へはhtmlと共にデータの受け渡しもできる -->
      <!-- <p>{{ headerText }}</p> ←これはエラーになる -->
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
/* cssは親・子のいずれでも定義可能だが親が優先される（Vue.jsがhtmlとレンダリングされる際に親・子の順番で属性が付与される仕組みなため） */
h1 {
  color: red;
}
div {
  border: 1px solid blue;
}
</style>