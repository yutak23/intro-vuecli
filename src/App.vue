<template>
  <div class="container-sm mt-5">
    <h3>掲示板に投稿する</h3>
    <form>
      <div class="mb-3">
        <label for="name" class="form-label">ニックネーム</label>
        <input type="text" class="form-control" id="name" v-model="name" />
      </div>
      <div class="mb-3">
        <label for="comment" class="form-label">コメント</label>
        <textarea class="form-control" id="comment" v-model="comment" />
      </div>
    </form>
    <h2>掲示板</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      comment: "",
    };
  },
};
</script>