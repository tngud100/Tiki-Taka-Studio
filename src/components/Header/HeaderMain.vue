<template>
  <Header>
    <nav class="nav">
      <ul class="menu-list">
        <div class="logo">
          <router-link to="/">
            <img v-if="isScrolledUp" :src="logo[0].mainLogo" alt="logo" />
          </router-link>
          <router-link to="/"
            ><img
              v-if="!isScrolledUp"
              :src="logo[0].scrollLogo"
              alt="scrolllogo"
            />
          </router-link>
        </div>
        <div class="menu-li">
          <li v-for="(list, index) in menuList" :key="index" class="list">
            <router-link :to="list.href" class="list" :style="linkColorStyle">{{
              list.name
            }}</router-link>
          </li>
        </div>

        <div class="menu-icon">
          <li v-for="(list, index) in menuIcon" :key="index" >
            <a :href="list.href">
              <img v-if="isScrolledUp" :src="menuIcon[index].src" alt="icon" />
            </a>
            <a :href="list.href">
              <img v-if="!isScrolledUp" :src="scrollMenuIcon[index].src" alt="icon" />
            </a>
          </li>
        </div>
      </ul>
    </nav>
  </Header>
</template>

<script>
export default {
  name: "HeaderMain",
  data: () => ({
    isScrolledUp: false,
    logo: [
      {
        mainLogo: require("@/assets/header/logo.svg"),
        scrollLogo: require("@/assets/header/scrollLogo.svg"),
      },
    ],

    menuIcon: [
      {
        name: "커뮤니티",
        href: "http://xn--ef5bu9n7vbido5j.com/?page=0&sort=1&mod=0",
        src: require("@/assets/header/tkLogo.svg"),
      },
      {
        name: "유튜브",
        href: "https://www.youtube.com/@tikintaka",
        src: require("@/assets/header/youtubeLogo.svg"),
      },
      {
        name: "SNS",
        href: "https://www.instagram.com/tikintaka_official",
        src: require("@/assets/header/instaLogo.svg"),
      },
    ],
    scrollMenuIcon: [
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
    menuList: [
      {
        name: "공지사항",
        href: "/news",
      },
      {
        name: "이벤트",
        href: "/events",
      },
      {
        name: "스튜디오",
        href: "/studio",
      },
      {
        name: "문의하기",
        href: "/ask",
      },
    ],
  }),
  mounted() {
    const header = document.querySelector("Header");
    const list = document.querySelectorAll(".list");

    window.addEventListener("scroll", () => {
      if (window.scrollY <= 0) {
        header.style.backgroundColor = "rgba(0,0,0,0)";
        for (let i = 0; i < list.length; i++) {
          list[i].style.color = "white";
        }
        this.isScrolledUp = true;
        console.log(this.isScrolledUp);
      } else {
        header.style.backgroundColor = "rgba(255,255,255,1)";
        for (let i = 0; i < list.length; i++) {
          list[i].style.color = "black";
        }

        this.isScrolledUp = false;
        console.log(this.isScrolledUp);
      }
    });
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 3;
  transition: all .3s ease;
  .nav {
    width: 1300px;
    height: 80px;
    margin: auto;
    .menu-list {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        height: 50px;
      }
      .menu-li {
        display: flex;
        list-style: none;
        a {
          margin: 0px 25px;
          text-decoration: none;
          color: white;
          font-family: "Pretendard-Regular";
          font-size: 20px;
        }
      }
      .menu-icon {
        display: flex;
        list-style: none;
        height: 26px;
        a {
          margin: 0px 10px;
          text-decoration: none;
          color: white;
        }
      }
    }
  }
}
</style>
