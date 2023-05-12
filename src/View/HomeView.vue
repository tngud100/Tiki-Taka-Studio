<template>
  <Header />
  <HomeBanner />
  <HomeVod />
  <HomePairing />
</template>

<script>
import Header from "../components/Header/HeaderMain.vue";
import HomeBanner from "../components/Home/HomeBanner.vue";
import HomeVod from "../components/Home/HomeVod.vue";
import HomePairing from "../components/Home/HomePairing.vue";
export default {
  name: "HomeView",
  components: {
    Header,
    HomeBanner,
    HomeVod,
    HomePairing,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
