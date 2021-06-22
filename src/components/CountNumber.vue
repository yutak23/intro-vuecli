<template>
  <div>
    <h2>{{ title | upperCase }}</h2>
    <h4>{{ subTitle | lowerCase }}</h4>
    <p>{{ number }}</p>
    <button type="button" class="btn btn-primary" @click="number++">+1</button>
  </div>
</template>

<script>
import { tokyoNumber } from "@/tokyoNumber";

export default {
  /**
   * 以下のようにミックスインで定義されているオプションと同じオプションがコンポーネント側に定義されている場合、
   * コンポーネントのオプション内容で上書きされる
   */
  mixins: [tokyoNumber],
  data() {
    return {
      title: "Welcome to Los",
    };
  },
  /**
   * ライフサイクルフックについては例外で、ミックスインとコンポーネントの両方が実行される
   * ミックスインのライフサイクルフックメソッドを実行した後にコンポーネントのライフサイクルフックメソッドが実行される
   */
  created() {
    console.log("created in component");
  },
};
</script>