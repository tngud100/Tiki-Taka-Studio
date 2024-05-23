<template>
  <Header>
    <nav class="nav">
      <ul class="menu-list">
        <div class="logo-con">
          <router-link v-if="isScrolledUp" to="/" class="logo">
            <img
              :src="logo[0].mainLogo"
              alt="logo"
              style="object-fit: cover; width: 100%; height: 100%"
            />
          </router-link>
          <router-link v-if="!isScrolledUp" to="/" class="logo"
            ><img
              :src="logo[0].scrollLogo"
              alt="scrolllogo"
              style="object-fit: cover; width: 100%; height: 100%"
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
          <li v-for="(list, index) in menuIcon" :key="index">
            <a v-if="isScrolledUp" :href="list.href">
              <img
                :src="menuIcon[index].src"
                alt="icon"
                style="object-fit: cover; width: 100%; height: 100%"
              />
            </a>
            <a v-if="!isScrolledUp" :href="list.href">
              <img
                :src="scrollMenuIcon[index].src"
                alt="icon"
                style="object-fit: cover; width: 100%; height: 100%"
              />
            </a>
          </li>
        </div>
        <div class="ham" ref="hamElement" @click="stopScrolling">
          <div class="bar_con">
            <span class="bar1 bar"></span>
            <span class="bar2 bar"></span>
            <span class="bar3 bar"></span>
          </div>
        </div>
      </ul>
    </nav>
  </Header>
  <Menu v-if="isMenuState" />
</template>

<script>
import Menu from "@/components/Header/MenuBar.vue";
export default {
  name: "HeaderMain",
  components: {
    Menu,
  },
  data: () => ({
    isScrolledUp: false,
    isMenuState: false,
    scrollLock: false,
    logo: [
      {
        mainLogo: require("@/assets/header/logo.svg"),
        scrollLogo: require("@/assets/header/scrollLogo.svg"),
      },
    ],

    menuIcon: [
      // {
      //   name: "커뮤니티",
      //   href: "http://xn--ef5bu9n7vbido5j.com/?page=0&sort=1&mod=0",
      //   src: require("@/assets/header/tkLogo.svg"),
      // },
      {
        name: "유튜브",
        href: "https://www.youtube.com/@tikintaka",
        src: require("@/assets/header/youtubeLogo.svg"),
      },
      {
        name: "SNS",
        href: "https://www.instagram.com/tikintaka_official/",
        src: require("@/assets/header/instaLogo.svg"),
      },
    ],
    menuList: [
      {
        name: "회사소개",
        href: "/intro",
      },
      {
        name: "서비스",
        href: "/studio",
      },
      {
        name: "프로그램",
        href: "/program",
      },
      // {
      //   name: "예약하기",
      //   href: "/reservate",
      // },
      {
        name: "회사소식",
        href: "/news",
      },
      {
        name: "문의/예약",
        href: "/ask",
      },
    ],
    scrollMenuIcon: [
      // {
      //   name: "커뮤니티",
      //   href: "http://xn--ef5bu9n7vbido5j.com/?page=0&sort=1&mod=0",
      //   src: require("@/assets/header/scrollTkLogo.svg"),
      // },
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
  }),
  mounted() {
    this.$nextTick(() => {
      const hamElement = this.$refs.hamElement;

      hamElement.addEventListener("click", function () {
        this.classList.toggle("active");
      });
    });

    // const header = document.querySelector("Header");
    // const bar = document.querySelectorAll(".bar");
    // const list = document.querySelectorAll(".list");

    // window.addEventListener("scroll", () => {
    //   if (window.scrollY <= 0) {
    //     header.style.backgroundColor = "rgba(0,0,0,0)";
    //     header.style.borderBottom = "0px solid #e6e6e6";
    //     for (let i = 0; i < list.length; i++) {
    //       list[i].style.color = "white";
    //     }
    //     for (let i = 0; i < bar.length; i++) {
    //       bar[i].style.backgroundColor = "white";
    //     }
    //     this.isScrolledUp = true;
    //     console.log(this.isScrolledUp);
    //   } else {
    //     header.style.borderBottom = "1px solid #e6e6e6";
    //     header.style.backgroundColor = "rgba(255,255,255,1)";
    //     for (let i = 0; i < list.length; i++) {
    //       list[i].style.color = "black";
    //     }
    //     for (let i = 0; i < bar.length; i++) {
    //       bar[i].style.backgroundColor = "black";
    //     }

    //     this.isScrolledUp = false;
    //     console.log(this.isScrolledUp);
    //   }
    // });
  },
  beforeUnmount() {
    this.removeStopEvent();
  },
  methods: {
    stopScrolling() {
      this.scrollLock = !this.scrollLock;
      this.isMenuState = !this.isMenuState;
      // const bar = document.querySelectorAll(".bar");

      if (this.scrollLock) {
        // for (let i = 0; i < bar.length; i++) {
        //   bar[i].style.backgroundColor = "black";
        // }
        window.addEventListener("wheel", this.stopEvent, {
          passive: false,
        });
        window.addEventListener("touchmove", this.stopEvent, {
          passive: false,
        });
      } else {
        // if (window.scrollY <= 0) {
        //   for (let i = 0; i < bar.length; i++) {
        //     bar[i].style.backgroundColor = "white";
        //   }
        // } else {
        //   for (let i = 0; i < bar.length; i++) {
        //     bar[i].style.backgroundColor = "black";
        //   }
        // }
        this.removeStopEvent();
      }
    },
    stopEvent(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    removeStopEvent() {
      window.removeEventListener("wheel", this.stopEvent, {
        passive: false,
      });
      window.removeEventListener("touchmove", this.stopEvent, {
        passive: false,
      });
    },
    // stopScrolling() {
    //   this.scrollLock = !this.scrollLock;
    //   this.menu_state = !this.menu_state;
    // },
  },
};
</script>

<style lang="scss" scoped>
//PC XL
@media screen and (min-width: 1300px) {
  .nav {
    width: 1300px;
    height: 80px;
    .menu-list {
      .logo {
        width: 117px;
        height: 50px;
      }
      a {
        margin: 0px 25px;
        font-size: 18px;
      }
      .menu-icon {
        a {
          margin: 0px 10px;
          width: 26px;
          height: 26px;
        }
      }
    }
    .ham {
      display: none;
    }
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .nav {
    width: 1080px;
    height: 70px;
    .menu-list {
      .logo-con {
        .logo {
          width: 117px;
          height: 50px;
        }
      }
      a {
        margin: 0px 25px;
        font-size: 18px;
      }
      .menu-icon {
        a {
          width: 26px;
          margin: 0px 10px;
          height: 26px;
        }
      }
    }
    .ham {
      display: none;
    }
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .nav {
    width: 760px;
    height: 60px;
    .menu-list {
      .logo-con {
        .logo {
          width: 90px;
          height: 38px;
        }
      }
      a {
        margin: 0px 15px;
        font-size: 16px;
      }
      .menu-icon {
        a {
          margin: 0px 10px;
          width: 24px;
          height: 24px;
        }
      }
    }
    .ham {
      display: none;
    }
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .nav {
    width: 640px;
    height: 55px;
    .menu-list {
      .logo-con {
        padding: 15px;
        .logo {
          width: 80px;
          height: 35px;
        }
      }
      .menu-li {
        display: none !important;
        a {
          margin: 0px 15px;
          font-size: 14px;
        }
      }
      .menu-icon {
        display: none !important;

        a {
          width: 20px;
          margin: 0px 6px;
          height: 20px;
        }
      }
    }
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .nav {
    width: 100%;
    height: 50px;
    .menu-list {
      .logo-con {
        padding: 12px;
        .logo {
          width: 60px;
          height: 26px;
        }
      }
      .menu-li {
        a {
          display: none !important;
          margin: 0px 4px;
          font-size: 14px;
        }
      }
      .menu-icon {
        display: none !important;
        a {
          width: 18px;
          height: 18px;
          margin: 0px 4px;
        }
      }
    }
  }
}

header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: white;
  border-bottom: 1px solid rgb(230, 230, 230);
  // transition: background-color 0.3s ease;
  .nav {
    margin: auto;
    .menu-list {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo-con {
        .logo {
          display: block;
        }
      }
      .menu-li {
        display: flex;
        list-style: none;
        a {
          text-decoration: none;
          color: rgb(0, 0, 0);
          font-family: "Pretendard-Regular";
        }
        a:hover {
          color: #805bea !important;
        }
      }
      .menu-icon {
        display: flex;
        list-style: none;
        a {
          text-decoration: none;
          color: rgb(0, 0, 0);
          display: block;
        }
      }
    }
  }
}

.ham {
  width: 60px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .bar {
    width: 30px;
    height: 3px;
    background-color: rgb(0, 0, 0);
    display: block;
    border-radius: 3px;
    transition: all 0.125s;
  }
  .bar1 {
    margin-bottom: 4px;
  }
  .bar2 {
    opacity: 1;
  }
  .bar3 {
    margin-top: 4px;
  }
}
.ham.active {
  span {
    transition: all 0.3s;
  }
  .bar1 {
    margin-bottom: -4px;
    transform: rotate(-45deg);
  }
  .bar2 {
    opacity: 0;
  }
  .bar3 {
    margin-top: -2px;
    transform: rotate(45deg);
  }
}
</style>
