<template>
  <Header />
  <HomeBanner />
  <!-- <TestPageTrash /> -->
  <!-- <HomeSlogan /> -->
  <HomeInfo />
  <HomeService />
  <!-- <HomeStudioEquipment />
  <HomeStudioLental /> -->
  <!-- <HomeLongVod /> -->
  <HomeSwiperVod />
  <!-- <HomeShortVod /> -->
  <!-- <HomeNewsEvents /> -->
  <HomeNewsEdu />
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
import HomeService from "../components/Home/HomeService.vue";

// import HomeShortVod from "../components/Home/HomeShortVod.vue";
// import HomeStudioLental from "../components/Home/HomeStudioLental.vue";
// import HomeStudioEquipment from "../components/Home/HomeStudioEquipment.vue";
// import TestPageTrash from "../components/trash/TestPageTrash.vue";
// import HomeLongVod from "../components/Home/HomeLongVod.vue";
import HomeSwiperVod from "../components/Home/HomeSwiperVod.vue";
// import HomeNewsEvents from "../components/Home/HomeNewsEvents.vue";
import HomeNewsEdu from "../components/Home/HomeNewsEdu.vue";
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
    HomeService,
    // HomeShortVod,
    // TestPageTrash,
    // HomeStudioLental,
    // HomeStudioEquipment,
    // HomeAdverse,
    // HomeLongVod,
    HomeSwiperVod,
    // HomeNewsEvents,
    HomeNewsEdu,
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
