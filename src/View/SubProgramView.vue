<template>
  <Header />
  <Program />
  <FooterMain />
</template>

<script>
import Header from "../components/Header/HeaderSub.vue";
import Program from "@/components/Sub/SubProgram.vue";
import FooterMain from "../components/Footer/FooterMain.vue";

export default {
  name: "SubNewsPage",
  components: {
    Header,
    Program,
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
