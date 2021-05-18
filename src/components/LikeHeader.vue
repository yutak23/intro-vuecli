<template>
  <div>
    <!-- vue.jsのhtmlを子コンポーネントに受け渡すには<slot>を用いる -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  // propsはあくまでデータ（オブジェクト）のみの受け渡ししかできない
  props: ["headerText"],
};
</script>
