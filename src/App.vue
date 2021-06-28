<template>
  <div class="main">
    <button
      type="button"
      class="btn btn-primary me-1"
      @click="myAnimation = 'slide'"
    >
      Slide
    </button>
    <button type="button" class="btn btn-primary" @click="myAnimation = 'fade'">
      Fade
    </button>
    <p>{{ myAnimation }}</p>
    <button type="button" class="btn btn-primary me-1" @click="show = !show">
      切り替え
    </button>
    <br /><br />
    <!-- :css="false"：JavaScriptのアニメーションのみを有効化する時には、css属性にfalseをbindしてあげる事で、以下の効果が得られる
         ①意図しないアニメーションの動きにならないようにする（name属性が未定義でもv-enter, ...は暗黙に存在するので）
         ②CSSのトランジション・アニメーションの処理をskipさせられるのでパフォーマンスを向上させる
         ※:cssとv-bindさせているのは、文字列のfalseをcss属性に渡すのではなく、booleanのfalseをcss属性に渡すため -->
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div class="circle" v-if="show"></div>
    </transition>
    <br />
    <button
      type="button"
      class="btn btn-primary me-1"
      @click="myComponent = 'ComponentA'"
    >
      ComponentA
    </button>
    <button
      type="button"
      class="btn btn-primary me-1"
      @click="myComponent = 'ComponentB'"
    >
      ComponentB
    </button>
    <transition name="fade" mode="out-in">
      <component :is="myComponent"></component>
    </transition>
    <transition name="fade" mode="out-in">
      <p v-if="show" key="bye">さよなら</p>
      <p v-else key="hello">こんにちは</p>
    </transition>
    <transition
      enter-active-class="animate__animated animate__bounce"
      leave-active-class="animate__animated animate__shakeX"
      appear
    >
      <p v-if="show">hello</p>
    </transition>
    <transition :name="myAnimation" appear>
      <p v-if="show">bye</p>
    </transition>
  </div>
</template>

<script>
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";

export default {
  components: {
    ComponentA,
    ComponentB,
  },
  data() {
    return {
      show: true,
      myAnimation: "slide",
      myComponent: "ComponentA",
    };
  },
  methods: {
    /*
     * JavaScriptsでアニメーション（JavaScriptフック関数）
     * ※afterEnter, beforeLeave, afterLeave, leaveCancelledは今回は不要（以下の3つだけでアニメーションを作るのは良くある形）
     */
    beforeEnter(el) {
      // 現れる前
      el.style.transform = "scale(0)";
    },
    enter(el, done) {
      // 現れる時（イメージはtransitionのCSSの"-enter-active"の部分）
      // 引数のdone：done()の用に関数として宣言し、アニメーションが終わった事をVue.jsに伝えるための関数
      // done()関数の役割：非同期処理を実行できるようにするためのもの
      // ※CSSのアニメーションが定義されている場合にはdone()は省略可能（CSSのアニメーションが未定義ならdone()は必須）
      // ※CSS・JavaScriptのアニメーションの両方を定義して同時に使える。done()がない場合は両方のアニメーションが実行されるが、done()がある場合はCSSのアニメーションが実行されていてもdone()が呼ばれた時点でアニメーションは強制終了になる
      let scale = 0;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale += 0.1;
        if (scale > 1) {
          clearInterval(interval);
          done();
        }
      }, 100);
    },
    // afterEnter() {
    //   // 現れた後
    //   // ※今回はscale(1)になるので定義不要
    // },
    enterCancelled() {
      // 現れるトランジション・アニメーションがキャンセルされた時
      // ex) アニメーション実行中にDOMが消えたりしてアニメーションが実行できなくなった時
    },
    // beforeLeave() {
    //   // 消える前
    //   // ※今回はscale(1)から消えていくので定義不要
    // },
    leave(el, done) {
      // 消える時（イメージはtransitionのCSSの"-leave-active"の部分）
      let scale = 1;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale -= 0.1;
        if (scale < 0) {
          clearInterval(interval);
          done();
        }
      }, 100);
    },
    // afterLeave() {
    //   // 消えた後
    //   // ※今回は消えた後はscale(0)なので定義不要
    // },
    // leaveCancelled() {
    //   // 消えるトランジション・アニメーションがキャンセルされたとき
    //   // ※v-showの時だけ実行される
    // },
  },
};
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-leave-to {
  opacity: 0;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 0.5s;
  transition: opacity 1s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
  transition: opacity 1s;
}

@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}

.main {
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}

.circle {
  width: 200px;
  height: 200px;
  margin: auto;
  border-radius: 100px;
  background-color: deeppink;
}
</style>