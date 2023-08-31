<template>
  <section class="menu_section">
    <div class="menu-box">
      <div class="menu_con">
        <div v-for="(item, i) in menus" :key="i" class="list_con">
          <v-list-item :value="i">
            <v-list-item-title class="menu-list">
              <router-link :to="item.value">
                {{ item.title }}
              </router-link>
            </v-list-item-title>
          </v-list-item>
          <!-- <div class="icon">
              <v-icon>mdi-arrow-up-bold-box</v-icon>
            </div> -->
        </div>
      </div>
      <div
        style="
          width: 100%;
          justify-content: center;
          align-items: center;
          display: flex;
        "
      >
        <!-- <hr style="width: 80%; margin: 15px 0px 30px 0px" color="#e6e6e6" /> -->
      </div>
      <!-- <div class="icon-con">
        <a
          v-for="(item, index) in icon"
          :key="index"
          :href="item.href"
          class="icon"
        >
          <img
            :src="item.src"
            style="width: 100%; height: 100%; object-fit: cover"
          />
        </a>
      </div> -->
    </div>
  </section>
</template>

<script>
// import HeaderNav from "./../header/HeaderNav.vue";

export default {
  name: "MenuBar",
  components: {
    // HeaderNav,
  },
  data() {
    return {
      menus: [
        {
          title: "회사소개",
          value: "/intro",
        },
        {
          title: "서비스",
          value: "/studio",
        },
        {
          title: "프로그램",
          value: "/program",
        },
        {
          title: "회사소식",
          value: "/news",
        },
        {
          title: "문의/예약",
          value: "/ask",
        },
      ],
      icon: [
        {
          name: "커뮤니티",
          href: "http://xn--ef5bu9n7vbido5j.com/?page=0&sort=1&mod=0",
          src: require("@/assets/header/scrollTkLogo.svg"),
        },
        {
          name: "유튜브",
          href: "https://www.youtube.com/@tikintaka",
          src: require("@/assets/header/scrollYoutubeLogo.svg"),
        },
        {
          name: "SNS",
          href: "https://www.instagram.com/tikintaka_official",
          src: require("@/assets/header/scrollInstaLogo.svg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.menu_section {
  background-color: rgb(255, 255, 255);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 5;
  overflow: hidden;
  top: 0;
  display: grid;
  align-items: center;
}
.menu_con {
  .list_con {
    display: flex;
    justify-content: center;
    .menu-list {
      font-family: "Pretendard-Regular";
      font-weight: bold;
      padding: 20px 0px;
      font-size: 24px;
    }
    // .icon {
    //   font-size: 25px;
    //   justify-content: center;
    //   transform: rotateZ(90deg);
    //   align-items: center;
    //   display: flex;
    //   width: 0px;
    // }
  }
}
.icon-con {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    margin: 0px 10px;
    width: 30px;
    height: 30px;
  }
}
a:hover {
  color: #805bea !important;
}

a {
  text-decoration: none;
  color: black;
}
</style>
