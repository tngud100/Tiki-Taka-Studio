<template>
  <Header />
  <Studio />
  <FooterMain />
</template>

<script>
import Header from "../components/Header/HeaderSub.vue";
import Studio from "@/components/Sub/SubStudio.vue";
import FooterMain from "../components/Footer/FooterMain.vue";

export default {
  name: "SubNewsPage",
  components: {
    Header,
    Studio,
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
