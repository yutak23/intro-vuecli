<template>
  <div>
    <slot name="title"></slot>
    <!-- 以下には親で名前付きでないslotで定義されているもの＝デフォルト（フォールバックコンテンツ）が表示される -->
    <slot></slot>
    <hr />
    <p>いいねの数</p>
    <slot name="number"></slot>
  </div>
</template>

<script>
export default {
  props: ["headerText"],
};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>