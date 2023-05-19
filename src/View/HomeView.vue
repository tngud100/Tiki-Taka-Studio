<template>
  <Header />
  <HomeBanner />
  <HomeMainVod />
  <HomeShortVod />
  <HomeAdverse />
  <HomePairing />
  <HomeNewsEvents />
  <FooterMain />
</template>

<script>
import Header from "../components/Header/HeaderMain.vue";
import HomeBanner from "../components/Home/HomeBanner.vue";
import HomeMainVod from "../components/Home/HomeMainVod";
import HomeShortVod from "../components/Home/HomeShortVod.vue";
import HomeAdverse from "../components/Home/HomeAdvertise.vue";
import HomePairing from "../components/Home/HomePairing.vue";
import HomeNewsEvents from "../components/Home/HomeNewsEvents.vue";
import FooterMain from "../components/Footer/FooterMain.vue";
export default {
  name: "HomeView",
  components: {
    Header,
    HomeBanner,
    HomeMainVod,
    HomeAdverse,
    HomeShortVod,
    HomePairing,
    HomeNewsEvents,
    FooterMain,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
.modal-open {
  overflow: hidden;
}
</style>
