<template>
  <Header />
  <HomeBanner />
  <HomeLongVod />
  <HomeAdverse />
  <!-- <HomeShortVod /> -->
  <!-- <HomeVod /> -->
  <HomePairing />
  <HomeYoutube />
</template>

<script>
import Header from "../components/Header/HeaderMain.vue";
import HomeBanner from "../components/Home/HomeBanner.vue";
import HomeLongVod from "../components/Home/HomeLongVod.vue";
// import HomeShortVod from "../components/Home/HomeShortVod.vue";
// import HomeVod from "../components/Home/HomeVod.vue";

import HomeAdverse from "../components/Home/HomeAdvertise.vue";
import HomePairing from "../components/Home/HomePairing.vue";
import HomeYoutube from "../components/Home/HomeYoutube.vue";
export default {
  name: "HomeView",
  components: {
    Header,
    HomeBanner,
    HomeLongVod,
    HomeAdverse,
    // HomeShortVod,
    // HomeVod,
    HomePairing,
    HomeYoutube,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
