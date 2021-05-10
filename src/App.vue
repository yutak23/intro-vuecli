<template>
  <div>
    <!-- 余談:DOMテンプレート(.htmlファイル)では必ずケバブケースを使うようにする必要があるが、それはHTML→JSの順番でブラウザがファイルを読み込みむが、その際にパスカルケースの大文字小文字は区別されず、意図しない動きになるから 
         Vue.jsのsingle file componentでは、Vue側のrender関数がよしなにやってくれるので気にしなくてOK -->
    <!-- <like-header></like-header> ケバブケース -->
    <LikeHeader></LikeHeader>
    <LikeNumber></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader";

export default {
  components: {
    // LikeHeader: LikeHeader,
    LikeHeader, // パスカルケース
  },
};
</script>
