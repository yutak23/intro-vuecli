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
    ...mapGetters("count", ["doubleCount", "tripleCount"]),
    /** mapGettersを使わない時は以下のように書く */
    // doubleCount() {
    //   return this.$store.getters["count/doubleCount"];
    // },
    // tripleCount() {
    //   return this.$store.getters["count/tripleCount"];
    // },
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