<template>
  <Header />
  <News />
  <FooterMain />
</template>

<script>
import Header from "../components/Header/HeaderSub.vue";
import News from "@/components/Sub/SubNews.vue";
import FooterMain from "../components/Footer/FooterMain.vue";

export default {
  name: "SubNewsPage",
  components: {
    Header,
    News,
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
