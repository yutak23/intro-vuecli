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
   * 以下のようにオプションmixinsの配列に、ミックインさせたいものを書く事でミックスインが使える
   * ミックスイン：Vue.jsのインスタンスのオプションを共通化させて再利用できるようにするもの
   *              ※インスタンスのオプション：以下に定義されている"data(){}", "filters(){}"などのこと
   */
  mixins: [tokyoNumber],

  // ミックスインにより以下はいらなくなる
  //   data() {
  //     return {
  //       title: "Welcome to Tokyo",
  //       subTitle: "Tokyo is a great city",
  //       number: 0,
  //     };
  //   },
  //   filters: {
  //     upperCase(value) {
  //       return value.toUpperCase();
  //     },
  //     lowerCase(value) {
  //       return value.toLowerCase();
  //     },
  //   },
};
</script>