<template>
  <Header />
  <HomeBanner />
  <HomeLongVod />
  <HomeShortVod />
  <!-- <TestPageTrash /> -->
  <HomeSchedule />
  <HomeNewsEvents />
  <HomeAdverse />
  <FooterMain />
</template>
<!-- <HomeYoutubeVod /> -->
<!-- <HomePairing /> -->

<script>
import Header from "../components/Header/HeaderMain.vue";
import HomeBanner from "../components/Home/HomeBanner.vue";
import HomeLongVod from "../components/Home/HomeLongVod.vue";
import HomeShortVod from "../components/Home/HomeShortVod.vue";
// import TestPageTrash from "../components/trash/TestPageTrash.vue";
import HomeSchedule from "../components/Home/HomeSchedule.vue";
import HomeNewsEvents from "../components/Home/HomeNewsEvents.vue";
import HomeAdverse from "../components/Home/HomeAdvertise.vue";
import FooterMain from "../components/Footer/FooterMain.vue";
// import HomeYoutubeVod from "../components/Home/HomeYoutubeVod";
// import HomePairing from "../components/Home/HomePairing.vue";
export default {
  name: "HomeView",
  components: {
    Header,
    HomeBanner,
    HomeLongVod,
    HomeShortVod,
    // TestPageTrash,
    HomeSchedule,
    HomeAdverse,
    HomeNewsEvents,
    FooterMain,
    // HomeYoutubeVod,
    // HomePairing,
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
