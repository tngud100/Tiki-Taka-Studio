<template>
  <Header>
    <nav class="nav">
      <ul class="menu-list">
        <div class="left-list btn">
          <li v-for="(list, index) in menuL" :key="index" class="list">
            <a :href="list.href" class="a">{{ list.name }}</a>
          </li>
        </div>
        <span class="nav-name"
          ><router-link to="/" :style="nameStyle">TNT Studio</router-link></span
        >
        <div class="right-list btn">
          <li v-for="(list, index) in menuR" :key="index" class="list">
            <router-link :to="list.href" class="a">{{ list.name }}</router-link>
          </li>
        </div>
      </ul>
      <!-- <ul class="menu-list">
              
            </ul> -->
    </nav>
  </Header>
</template>

<script>
export default {
  name: "HeaderSub",
  data() {
    return {
      menuL: [
        {
          name: "커뮤니티",
          href: "http://xn--ef5bu9n7vbido5j.com/?page=0&sort=1&mod=0",
        },
        {
          name: "유튜브",
          href: "https://www.youtube.com/@tikintaka",
        },
        {
          name: "SNS",
          href: "https://www.instagram.com/tikintaka_official",
        },
      ],
      menuR: [
        {
          name: "공지사항",
          href: "/news",
        },
        {
          name: "이벤트",
          href: "/events",
        },
        {
          name: "문의",
          href: "/ask",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
// PC XL
@media screen and (min-width: 1500px) {
  nav {
    padding: 12px 0px;
  }
  .menu-list {
    width: 1500px;
    .nav-name {
      width: 1500px;
      font-size: 30px;
    }
    .btn {
      width: 300px;
    }
  }
  .list {
  }
  .a {
    font-size: 18px;
  }
}
//PC
@media screen and (min-width: 1080px) and (max-width: 1500px) {
  nav {
    padding: 12px 0px;
  }
  .menu-list {
    width: 1050px;
    .nav-name {
      width: 1050px;
      font-size: 30px;
    }
    .btn {
      width: 300px;
    }
  }
  .a {
    font-size: 18px;
  }
}
// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  nav {
    padding: 12px 0px;
  }
  .menu-list {
    width: 740px;
    .nav-name {
      width: 740px;
      font-size: 25px;
    }
    .btn {
      width: 190px;
    }
  }
  .a {
    font-size: 15px;
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
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
      justify-content: right !important;
      width: 100%;
      padding-right: 25px;
    }
  }
  .a {
    font-size: 14px;
    margin-left: 35px;
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
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
      justify-content: right !important;
      width: 100%;
      padding-right: 25px;
    }
  }
  .a {
    font-size: 14px;
    margin-left: 35px;
  }
}

header {
  background-color: whitesmoke;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
  transition: background-color 0.2s ease;
  nav {
    width: 100%;
  }
}

.menu-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    a {
      text-decoration: none;
      color: black;
    }
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

    justify-content: space-between;
    transition: all 0.3s ease;
    .list {
    }
  }
}
.a {
  font-family: "Pretendard-Regular";
  font-weight: bold;
  color: rgb(0, 0, 0);
  text-decoration: none;
}
</style>
