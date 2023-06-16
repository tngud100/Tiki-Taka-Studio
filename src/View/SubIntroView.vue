<template>
  <Header />
  <SubIntro />
  <FooterMain />
</template>

<script>
import Header from "../components/Header/HeaderSub.vue";
import SubIntro from "@/components/Sub/SubIntro.vue";
import FooterMain from "../components/Footer/FooterMain.vue";

export default {
  name: "SubIntroPage",
  components: {
    Header,
    SubIntro,
    FooterMain,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
