<template>
  <section class="news-event-section">
    <div class="container">
      <div class="news">
        <div class="title-con">
          <span class="title">공지사항</span>
          <router-link to="/news" class="detail">VIEW MORE +</router-link>
        </div>
        <hr class="hr-margin" />
        <router-link
          :to="'news' + (index + 1)"
          v-for="(item, index) in news"
          :key="index"
          class="list-con pc"
        >
          <span class="list-title">{{ item.title }}</span>
          <span class="list-detail"> - {{ item.subtitle }}</span>
        </router-link>
        <router-link
          :to="'news' + (index + 1)"
          v-for="(item, index) in news_mobile"
          :key="index"
          class="list-con mobile"
        >
          <span class="list-title">{{ item.title }}</span>
          <span class="list-detail"> - {{ item.subtitle }}</span>
        </router-link>
      </div>
      <div class="announcer-con">
        <div class="swiper" ref="bannerRef">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">
              <img :src="img[0].src" class="banner-img" />
            </div>
            <div class="swiper-slide">
              <img :src="img[1].src" class="banner-img" />
            </div>
            <div class="swiper-slide">
              <img :src="img[2].src" class="banner-img" />
            </div>
            ...
          </div>
          <!-- If we need navigation buttons -->
          <div class="swiper-button-prev swiper-btn"></div>
          <div class="swiper-button-next swiper-btn"></div>

          <!-- If we need scrollbar -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap, ScrollTrigger } from "gsap/all";

import { onMounted, ref } from "vue";

import Swiper from "swiper";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Autoplay]);

export default {
  name: "HomeNewsEvents",
  data() {
    return {
      news: [
        {
          title: "TNT Studio Grand Opening",
          subtitle: "2023년 6월 10일, TNT Studio가 그랜드 오픈을 하였습니다!",
        },
        // {
        //   title: "공지1",
        //   subtitle: "이러이러한 공지사항이 있으며 ",
        // },
        // {
        //   title: "공지1",
        //   subtitle: "이러이러한 공지사항이 있으며 ",
        // },
        // {
        //   title: "공지1",
        //   subtitle: "이러이러한 공지사항이 있으며 ",
        // },
      ],
      news_mobile: [
        {
          title: "TNT Studio Grand Opening",
          subtitle: "2023년 6월 10일, TNT Studio가 그랜드 오픈을 하였습니다!",
        },
        // {
        //   title: "공지1",
        //   subtitle: "이러이러한 공지사항이 있으며 ",
        // },
        // {
        //   title: "공지1",
        //   subtitle: "이러이러한 공지사항이 있으며 ",
        // },
      ],
      img: [
        {
          src: require("@/assets/pairing/mon/Top피파.svg"),
        },
        {
          src: require("@/assets/pairing/mon/TSL.svg"),
        },
        {
          src: require("@/assets/pairing/mon/피파의모든것.svg"),
        },
      ],
    };
  },
  methods: {},
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const news_event = gsap.timeline({ paused: true });

    news_event.to(".title", { duration: 0.5, left: 0, opacity: 1 }, "start");
    news_event.to(
      ".list-title",
      { duration: 0.5, left: 0, opacity: 1 },
      "start+=.2"
    );
    news_event.to(
      ".list-detail",
      { duration: 0.5, left: 0, opacity: 1 },
      "start+=.4"
    );
    news_event.to(
      ".announcer-con",
      { duration: 0.5, right: 0, opacity: 1 },
      "start+=.4"
    );

    gsap.timeline({
      scrollTrigger: {
        trigger: ".news-event-section",
        start: "top-=20% bottom",
        end: "+=50%",
        scrub: true,
        animation: news_event,
        onEnter: () => {
          news_event.play();
        },
      },
    });
  },
  setup() {
    const bannerRef = ref(null);

    onMounted(() => {
      bannerRef.value = new Swiper(bannerRef.value, {
        direction: "horizontal",
        loop: false,
        mousewheel: false,
        speed: 300,

        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
      });
    });
    return {
      bannerRef,
    };
  },
};
</script>

<style lang="scss" scoped>
//PC XL
@media screen and (min-width: 1300px) {
  .news-event-section {
    width: 1300px;
    margin: 100px auto 100px auto;
    .announcer-con {
      width: 400px;
      margin-left: 20px;
    }
    .container {
      display: flex;
      justify-content: space-between;
      .mobile {
        display: none !important;
      }
      .pc {
        display: grid !important;
      }
      .title-con {
        .title {
          font-size: 24px;
        }
        .detail {
          font-size: 16px;
        }
      }
      .list-con {
        .list-title {
          font-size: 18px;
        }
        .list-detail {
          font-size: 16px;
        }
      }
    }
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .news-event-section {
    width: 1080px;
    margin: 75px auto 75px auto;
    .announcer-con {
      width: 400px;
      margin-left: 10px;
    }
    .container {
      display: flex;
      justify-content: space-between;
      .mobile {
        display: none !important;
      }
      .pc {
        display: grid !important;
      }

      .title-con {
        .title {
          font-size: 22px;
        }
        .detail {
          font-size: 14px;
        }
      }
      .list-con {
        .list-title {
          font-size: 16px;
        }
        .list-detail {
          font-size: 14px;
        }
      }
    }
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .news-event-section {
    width: 760px;
    margin: 50px auto 50px auto;
    .announcer-con {
      width: 300px;
      margin-left: 10px;
    }
    .container {
      display: flex;
      justify-content: space-between;
      .mobile {
        display: none !important;
      }
      .pc {
        display: grid !important;
      }
      .title-con {
        .title {
          font-size: 20px;
        }
        .detail {
          font-size: 13px;
        }
      }
      .list-con {
        .list-title {
          font-size: 15px;
        }
        .list-detail {
          font-size: 13px;
        }
      }
    }
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .news-event-section {
    width: 640px;
    margin: 50px auto 50px auto;
    .announcer-con {
      width: 640px;
      margin-left: 10px;
    }
    .container {
      display: grid;
      padding: 12px;
      .mobile {
        display: grid !important;
      }
      .pc {
        display: none !important;
      }
      .news {
        margin: 0px 1% 50px 1% !important;
      }
      .title-con {
        .title {
          font-size: 20px;
        }
        .detail {
          font-size: 12px;
        }
      }
      .list-con {
        .list-title {
          font-size: 15px;
        }
        .list-detail {
          font-size: 13px;
        }
      }
    }
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .news-event-section {
    width: 320;
    margin: 30px auto 30px auto;
    .announcer-con {
      width: 320px;
      margin: auto;
    }
    .container {
      display: grid;
      padding: 10px;
      .mobile {
        display: grid !important;
      }
      .pc {
        display: none !important;
      }
      .news {
        margin: 0px 1% 50px 1% !important;
      }
      .title-con {
        .title {
          font-size: 20px;
        }
        .detail {
          font-size: 13px;
        }
      }
      .list-con {
        .list-title {
          font-size: 15px;
        }
        .list-detail {
          font-size: 13px;
        }
      }
    }
  }
}

.news-event-section {
  display: flex;
  justify-content: center;
  align-content: center;
  .container {
    width: 100%;

    .news,
    .events {
      width: 100%;
      margin: 0 1%;

      .hr-margin {
        margin: 12px 0px;
      }
      .title-con {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .title {
          font-family: "pretendard-Regular";
          font-weight: bold;
          position: relative;
          left: -15px;
          opacity: 0;
        }
        .detail {
          font-family: "pretendard-Regular";
          padding: 0px 20px;
          align-self: center;
          text-decoration: none;
          color: black;
          cursor: pointer;
        }
        .detail:hover {
          color: #805bea;
        }
      }
      .list-con {
        display: grid;
        padding: 10px 0px;
        cursor: pointer;
        text-decoration: none;
        .list-title {
          font-family: "pretendard-Regular";
          font-weight: bold;
          position: relative;
          color: black;
          left: -15px;
          opacity: 0;
        }
        .list-detail {
          font-family: "pretendard-Regular";
          color: rgb(109, 109, 109);
          margin: 12px 0px;
          position: relative;
          left: -15px;
          opacity: 0;

          text-overflow: ellipsis;
          overflow: hidden;
          word-break: break-word;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
      }
      .list-con:hover {
        background-color: whitesmoke;
      }
    }
  }
  .announcer-con {
    display: flex;
    justify-content: right;
    border: solid 1px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    z-index: 0;
    right: -30px;
    opacity: 0;
    position: relative;
    .banner-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
    .swiper-btn {
      color: white;
    }
  }
}
</style>
