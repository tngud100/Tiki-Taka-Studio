<template>
  <Header />
  <Events />
  <FooterMain />
</template>

<script>
import Header from "../components/Header/HeaderSub.vue";
import Events from "@/components/Sub/SubEvents.vue";
import FooterMain from "../components/Footer/FooterMain.vue";

export default {
  name: "SubNewsPage",
  components: {
    Header,
    Events,
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
