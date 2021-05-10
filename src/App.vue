<template>
  <div>
    <LikeHeader></LikeHeader>
    <LikeNumber></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader";

export default {
  components: {
    // LikeHeader: LikeHeader,
    LikeHeader, // ES6の書き方（key・valueが同じなら省略可）
  },
};
</script>
