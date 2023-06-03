<template>
  <Header />
  <Ask />
  <FooterMain />
</template>

<script>
import Header from "../components/Header/HeaderSub.vue";
import Ask from "@/components/Sub/SubAsk.vue";
import FooterMain from "../components/Footer/FooterMain.vue";

export default {
  name: "SubNewsPage",
  components: {
    Header,
    Ask,
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
