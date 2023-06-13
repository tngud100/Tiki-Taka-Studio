<template>
  <Header />
  <HomeBanner />
  <!-- <TestPageTrash /> -->
  <!-- <HomeSlogan /> -->
  <HomeInfo />
  <HomeSchedule />
  <!-- <HomeStudioEquipment /> -->
  <!-- <HomeShortVod /> -->
  <HomeLongVod />
  <HomeNewsEvents />
  <!-- <HomeAdverse /> -->
  <FooterMain />
</template>
<!-- <HomeYoutubeVod /> -->
<!-- <HomePairing /> -->

<script>
import Header from "../components/Header/HeaderMain.vue";
import HomeBanner from "../components/Home/HomeBanner.vue";
// import HomeSlogan from "../components/Home/HomeSlogan.vue";
import HomeInfo from "../components/Home/HomeInfo.vue";

// import HomeShortVod from "../components/Home/HomeShortVod.vue";
import HomeSchedule from "../components/Home/HomeStudioLental.vue";
// import HomeStudioEquipment from "../components/Home/HomeStudioEquipment.vue";
// import TestPageTrash from "../components/trash/TestPageTrash.vue";
import HomeLongVod from "../components/Home/HomeLongVod.vue";
import HomeNewsEvents from "../components/Home/HomeNewsEvents.vue";
// import HomeAdverse from "../components/Home/HomeAdvertise.vue";
import FooterMain from "../components/Footer/FooterMain.vue";
// import HomeYoutubeVod from "../components/Home/HomeYoutubeVod";
// import HomePairing from "../components/Home/HomePairing.vue";
export default {
  name: "HomeView",
  components: {
    Header,
    HomeBanner,
    // HomeSlogan,
    HomeInfo,
    // HomeShortVod,
    // TestPageTrash,
    HomeSchedule,
    // HomeStudioEquipment,
    // HomeAdverse,
    HomeLongVod,
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
