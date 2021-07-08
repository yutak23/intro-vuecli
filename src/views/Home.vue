<template>
  <div>
    <h3>Home</h3>
    <button type="button" class="btn btn-primary" @click="toUsers">
      Usersのページに行く
    </button>
    <p>{{ count }}</p>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
    <!--
      v-modelを使わないパターン
      <input
        type="text"
        class="form-control"
        :value="message"
        @input="updateMessage"
      />
    -->
    <input type="text" class="form-control" v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    count() {
      return 1;
    },
    ...mapGetters(["doubleCount", "tripleCount"]),
    // 以下のようにSetter的な使い方をする事でv-modelを実現できる
    // ※computedのset()はあんまり使わない
    message: {
      get() {
        return this.$store.getters.message;
      },
      set(value) {
        this.$store.dispatch("updateMessage", value);
      },
    },
  },
  methods: {
    /** v-modelを使わないパターン */
    // updateMessage(event) {
    //   this.$store.dispatch("updateMessage", event.target.value);
    // },
    toUsers() {
      this.$router.push({
        name: "users-id-profile",
        params: { id: 1 },
      });
    },
  },
};
</script>