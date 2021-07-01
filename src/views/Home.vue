<template>
  <div>
    <h3>Home</h3>
    <button type="button" class="btn btn-primary" @click="toUsers">
      Usersのページに行く
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    toUsers() {
      this.$router.push({ path: "users" });
    },
  },
};
</script>