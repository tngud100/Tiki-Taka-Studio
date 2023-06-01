<template>
  <Header />
  <HomeBanner />
  <HomeLongVod />
  <HomeShortVod />
  <HomeNewsEvents />
  <HomeSchedule />
  <HomeAdverse />
  <FooterMain />
</template>
<!-- <HomeYoutubeVod /> -->
<!-- <HomePairing /> -->

<script>
import Header from "../components/Header/HeaderMain.vue";
import HomeBanner from "../components/Home/HomeBanner.vue";
import HomeSchedule from "../components/Home/HomeSchedule.vue";
import HomeLongVod from "../components/trash/TestPageTrash.vue";
// import HomeYoutubeVod from "../components/Home/HomeYoutubeVod";
import HomeShortVod from "../components/Home/HomeShortVod.vue";
import HomeAdverse from "../components/Home/HomeAdvertise.vue";
// import HomePairing from "../components/Home/HomePairing.vue";
import HomeNewsEvents from "../components/Home/HomeNewsEvents.vue";
import FooterMain from "../components/Footer/FooterMain.vue";
export default {
  name: "HomeView",
  components: {
    Header,
    HomeBanner,
    HomeSchedule,
    HomeLongVod,
    // HomeYoutubeVod,
    HomeAdverse,
    HomeShortVod,
    // HomePairing,
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
