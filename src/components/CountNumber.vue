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
  mixins: [tokyoNumber],
  data() {
    return {
      title: "Welcome to Los",
    };
  },
  created() {
    console.log("created in component");
  },
};
</script>