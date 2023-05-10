<template>
  <header class="nav">
    <nav>
      <a href="/">
        <img :src="image" style="width: 50px; height: 50px" alt="" />
      </a>
      <ul class="menu-list">
        <li v-for="(list, index) in menu" :key="index">
          <router-link :to="list">{{ list }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderMain",
  data: () => ({
    image: require("@/assets/header/logo.png"),
    menu: ["Business", "Creator", "Contact"],
  }),
  mounted() {
    const navbar = document.querySelector(".nav");

    window.addEventListener("wheel", (e) => {
      if (e.wheelDeltaY > 0) {
        navbar.style.top = "0%";
      }
      if (e.wheelDeltaY < 0) {
        navbar.style.top = "-10%";
      }
    });
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: rgb(255, 255, 255);
  color: #383838;
  position: fixed;
  top: 0%;
  width: 100vw;
  z-index: 1;
  transition: all 0.3s ease;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 12px;
  width: 80%;
  height: 50px;
}
.menu-list {
  display: flex;

  li {
    list-style: none;
    margin-left: 3rem;
  }
}

a {
  color: #4e4e4e;
  text-decoration: none;
}
</style>
