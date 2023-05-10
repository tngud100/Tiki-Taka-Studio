<template>
  <Header />
  <HomePage />
</template>

<script>
import Header from "../components/Header/HeaderMain.vue";
import HomePage from "../components/Page/HomePage.vue";
export default {
  name: "HomeView",
  components: {
    Header,
    HomePage,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
