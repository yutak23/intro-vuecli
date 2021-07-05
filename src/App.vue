<template>
  <div>
    <!-- 名前付きビューを使う事で、各<router-view></router-view>に異なるコンポーネントを設定する事ができるようになる -->
    <router-view name="header"></router-view>
    <main class="container-sm">
      <router-view></router-view>
    </main>
  </div>
</template>