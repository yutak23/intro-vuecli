<template>
  <div>
    <h3>Home</h3>
    <button type="button" class="btn btn-primary" @click="toUsers">
      Usersのページに行く
    </button>
    <p>{{ count }}</p>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
    <!-- <p>{{ myComponentDoubleCount }}</p> -->
    <!-- <p>{{ myComponentTripleCount }}</p> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  // mapGettersはES6のスプレッド演算子を使う事で、他のcomputedと共存させる事ができる
  computed: {
    count() {
      return 1;
    },
    ...mapGetters(["doubleCount", "tripleCount"]),
  },
  // 以下のようにmapGettersの中身をオブジェクトにし、computedの名前をコンポーネント側で指定する事も可能
  // computed: mapGetters({
  //   myComponentDoubleCount: "doubleCount",
  //   myComponentTripleCount: "tripleCount",
  // }),
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