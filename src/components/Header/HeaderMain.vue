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
        name: "광고문의",
        href: "/",
      },
      {
        name: "이벤트",
        href: "/",
      },
      {
        name: "편성표",
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
      return {
        margin: this.isScrolledUp ? "95px 20px 0px 20px" : "0px 20px 0px 20px",
      };
    },
    //router
    linkTopStyle() {
      return {
        paddingTop: this.isScrolledUp ? "0px" : "0px",
      };
    },
    //menu
    menuStyle() {
      return {
        height: this.isScrolledUp ? "80px" : "20px",
        padding: this.isScrolledUp ? "15px" : "15px",
      };
    },
    //navName
    nameStyle() {
      return {
        color: this.isScrolledUp ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)",
      };
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.isScrolledUp = window.scrollY <= 42;
    });
  },
};
</script>
<style lang="scss" scoped>
header {
  color: #ffffff;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 1;
  transition: background-color 0.2s ease;
  nav {
    padding: 12px;
    width: 100%;
  }
}

.menu-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 50px;
  margin: auto;
  // padding: 15px;
  list-style-type: none;
  transition: all 0.3s ease;
  .nav-name {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    font-family: sans-serif;
    font-size: 30px;
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
      margin: 95px 20px 0px 20px;
    }
  }
}
.a {
  font-family: "Pretendard-Regular";
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-decoration: none;
}
</style>
