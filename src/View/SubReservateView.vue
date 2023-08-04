<template>
  <Header />
  <Reservate />
  <FooterMain />
</template>

<script>
import Header from "../components/Header/HeaderSub.vue";
import Reservate from "@/components/Sub/SubReservate.vue";
import FooterMain from "../components/Footer/FooterMain.vue";

export default {
  name: "SubNewsPage",
  components: {
    Header,
    Reservate,
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
