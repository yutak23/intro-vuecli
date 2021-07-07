<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">ユーザ１</router-link>
    <router-link to="/users/2">ユーザ２</router-link>
    <hr />
    <h1>User No. {{ id }}</h1>
    <router-link
      :to="'/users/' + (Number(id) + 1) + '/profile?lang=ja&page=2#next-user'"
    >
      次のユーザ
    </router-link>
    <router-view></router-view>
    <div style="height: 700px"></div>
    <router-link
      id="next-user"
      :to="{
        name: 'users-id-profile',
        params: { id: Number(id) + 1 },
        query: { lang: 'ja', page: 2 },
        hash: '#next-user',
      }"
    >
      次のユーザ
    </router-link>
    <div style="height: 1400px"></div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  // beforeRouteEnter：自身のインスタンス（User.vueのインスタンス）が作成される前に実行されるメソッドで、thisが使えない
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter");

    // this.$route.... <- これは不可

    // 以下のvmはthisと同じでこのUser.vueインスタンスの事
    // vm.idにアクセスできるのは、nextでVueインスタンスが作成されてthisにアクセスできるようになったタイミング(＝非同期)で実行されるから
    next((vm) => {
      console.log(vm.id);
    });
  },
  // beforeRouteUpdate：URLが変わったタイミング（$routeが変化したタイミング）で実行される
  // Vueインスタンスのライフサイクルフックがない代わりに、インスタンス変化(=URLの変化)を捕捉するためにこのbeforeRouteUpdateを使う（watchでも代替可能ではある）
  // ※watchについては https://github.com/yuta-katayama-23/intro-vuecli/commit/acc7728a68450e6804d6933606fe1ade239bd896 を参照
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate");
    next();
  },
  // beforeRouteLeave：ルートが変わりUser.vueインスタンスが破棄されるタイミングで実行される
  // 一般的に、今いるページから離れてよいか？を確認してOKであればページ遷移するなどの使い方をする
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave");

    const isLeave = window.confirm("本当にこのページを離れますか？");
    if (isLeave) {
      next();
    } else {
      next(false);
    }
  },
};
</script>