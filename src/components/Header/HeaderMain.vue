<template>
  <header :style="navStyle">
    <nav class="nav">
      <ul class="menu-list" :style="menuStyle">
        <div class="left-list btn" :style="linkTopStyle">
          <li
            v-for="(list, index) in menuL"
            :key="index"
            class="list"
            :style="linkMarginStyle"
          >
            <router-link :to="list.href" class="a" :style="linkColorStyle">{{
              list.name
            }}</router-link>
          </li>
        </div>
        <span class="nav-name" :style="nameStyle">TNT Studio</span>
        <div class="right-list btn" :style="linkTopStyle">
          <li
            v-for="(list, index) in menuR"
            :key="index"
            class="list"
            :style="linkMarginStyle"
          >
            <router-link :to="list.href" class="a" :style="linkColorStyle">{{
              list.name
            }}</router-link>
          </li>
        </div>
      </ul>
      <!-- <ul class="menu-list">
        
      </ul> -->
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderMain",
  data: () => ({
    image: require("@/assets/header/logo.png"),
    menu: ["Business", "Creator", "Contact"],
    menuL: [
      {
        name: "커뮤니티",
        href: "/",
      },
      {
        name: "유튜브",
        href: "/",
      },
      {
        name: "SNS",
        href: "/",
      },
    ],
    menuR: [
      {
        name: "공지사항",
        href: "/",
      },
      {
        name: "이벤트",
        href: "/",
      },
      {
        name: "문의",
        href: "/",
      },
    ],
    isScrolledUp: true,
  }),
  computed: {
    //header
    navStyle() {
      return {
        backgroundColor: this.isScrolledUp
          ? "rgba(255, 255, 255, 0)"
          : "rgba(255, 255, 255, 1)",
        paddingtop: this.isScrolledUp ? "0%" : "0%",
        position: this.isScrolledUp ? "absolute" : "fixed",
      };
    },
    //btn(router-con)
    linkColorStyle() {
      return {
        color: this.isScrolledUp ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)",
      };
    },
    //router
    linkMarginStyle() {
      if (window.innerWidth >= 760) {
        return {
          margin: this.isScrolledUp
            ? "80px 20px 0px 20px"
            : "0px 20px 0px 20px",
        };
      } else {
        return {
          margin: this.isScrolledUp ? "80px 20px 0px 20px" : "0px 0px 0px 20px",
        };
      }
    },
    //router
    linkTopStyle() {
      return {
        paddingTop: this.isScrolledUp ? "0px" : "0px",
      };
    },
    //menu
    menuStyle() {
      if (window.innerWidth >= 1080) {
        return {
          height: this.isScrolledUp ? "80px" : "20px",
        };
      } else {
        return {
          height: this.isScrolledUp ? "20px" : "20px",
        };
      }
    },
    //navName
    nameStyle() {
      return {
        color: this.isScrolledUp ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)",
      };
    },
  },
  mounted() {
    if (window.innerWidth >= 760) {
      window.addEventListener("scroll", () => {
        this.isScrolledUp = window.scrollY <= 42;
      });
    } else {
      this.isScrolledUp = false;
    }
  },
};
</script>
<style lang="scss" scoped>
// PC XL
@media screen and (min-width: 1550px) {
  .menu-list {
    width: 1500px;
    .nav-name {
      width: 1500px;
      font-size: 30px;
    }
  }
  .list {
    // margin: 90px 20px 0px 20px;
  }
  .a {
    font-size: 18px;
  }
}
//PC
@media screen and (min-width: 1080px) and (max-width: 1550px) {
  .menu-list {
    width: 1050px;
    .nav-name {
      width: 1050px;
      font-size: 30px;
    }
  }
  .a {
    font-size: 18px;
  }
}
// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .menu-list {
    width: 740px;
    .nav-name {
      width: 740px;
      font-size: 25px;
    }
  }
  .a {
    font-size: 15px;
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .nav {
    padding: 4px 0px;
  }
  .menu-list {
    width: 100%;
    .left-list {
      display: none !important;
    }
    .nav-name {
      width: 100%;
      font-size: 22px;
      justify-content: left !important;
    }
    .right-list {
      display: flex !important;
      width: 100%;
      padding-right: 25px;
    }
  }
  .a {
    font-size: 14px;
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .nav {
    padding: 2px 0px;
  }
  .menu-list {
    width: 100%;
    .left-list {
      display: none !important;
    }
    .nav-name {
      width: 100%;
      font-size: 18px;
      justify-content: left !important;
    }
    .right-list {
      display: flex !important;
      width: 100%;
      padding-right: 25px;
    }
  }
  .a {
    font-size: 14px;
  }
}

header {
  color: #ffffff;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 3;
  transition: background-color 0.2s ease;
  nav {
    width: 100%;
    padding: 12px 0px;
  }
}

.menu-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // height: 50px;
  margin: auto;
  padding: 15px;
  list-style-type: none;
  transition: all 0.3s ease;
  .nav-name {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    font-weight: bold;
  }
  .left-list {
    justify-content: left;
  }
  .right-list {
    justify-content: right;
  }
  .btn {
    display: flex;
    padding-top: 0px;
    z-index: 1;
    transition: all 0.3s ease;
    .list {
    }
  }
}
.a {
  font-family: "Pretendard-Regular";
  font-weight: bold;
  color: white;
  text-decoration: none;
}
</style>
