<template>
  <div>
    <h3>Home</h3>
    <button type="button" class="btn btn-primary" @click="toUsers">
      Usersのページに行く
    </button>
    <p>{{ doubleCount }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    doubleCount() {
      // 以下はどちらも同じ結果だが、Vuexのgettersを使う事でコンポーネント側で勝手に処理を書き換えられるというのを防げるメリットがある
      // return this.$store.state.count * 2;
      return this.$store.getters.doubleCount;
    },
  },
  methods: {
    toUsers() {
      this.$router.push({
        name: "users-id-profile",
        params: { id: 1 },
      });
    },
  },
};
</script>