<template>
  <section class="news-event-section">
    <div class="title-con">
      <!-- <div class="bgIcon">
        <img :src="bgicon" alt="icon" />
      </div> -->
      <p class="company">우리의 소식은</p>
      <p class="title">Our News</p>
      <!-- <p class="subtitle">TNT Studio의 소식을 누구보다</p>
      <p class="subtitle">빨리 접할 수 있도록 최선을 다 합니다</p> -->
    </div>
    <div class="container">
      <div class="news">
        <!-- <div class="title-con">
          <span class="title">공지사항</span>
          <router-link to="/news" class="detail">VIEW MORE +</router-link>
        </div> -->
        <hr class="hr-margin" />
        <div class="fix-contain">
          <router-link
            :to="'news' + item.num"
            v-for="(item, index) in news"
            :key="index"
            class="list-con pc"
          >
            <span class="num">{{ item.num }}</span>
            <div class="con">
              <span class="list-title">{{ item.title }}</span>
              <span class="list-detail"> - {{ item.subtitle }}</span>
            </div>
            <span class="date"> {{ item.date }}</span>
          </router-link>
        </div>
        <div class="fix-contain">
          <router-link
            :to="'news' + (index + 1)"
            v-for="(item, index) in news_mobile"
            :key="index"
            class="list-con mobile"
          >
            <span class="num">{{ item.num }}</span>
            <div class="con">
              <span class="list-title">{{ item.title }}</span>
              <span class="list-detail"> - {{ item.subtitle }}</span>
            </div>
            <span class="date"> {{ item.date }}</span>
          </router-link>
        </div>
      </div>
      <!-- <div class="announcer-con">
        <div class="swiper" ref="bannerRef">
          <div class="swiper-wrapper">
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
          <div class="swiper-button-prev swiper-btn"></div>
          <div class="swiper-button-next swiper-btn"></div>

        </div>
      </div> -->
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

import { mapGetters } from "vuex";
export default {
  name: "HomeNewsEvents",
  computed: {
    ...mapGetters("news", ["getHomeNewsData"]),
    news() {
      return this.getHomeNewsData.map((item) => {
        return {
          num: item.num,
          title: item.title,
          subtitle: item.title,
          date: item.date,
        };
      });
    },
    mobile_data() {
      return this.getHomeNewsData.map((item) => {
        return {
          num: item.num,
          title: item.title,
          subtitle: item.title,
          date: item.date,
        };
      });
    },
    news_mobile() {
      return {
        ...this.mobile_data,
      };
    },
  },

  data() {
    return {
      bgicon: require("@/assets/service/bg_element1.svg"),
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

    news_event.to(
      ".news-event-section > .title-con > .company",
      { duration: 1, left: 0, opacity: 1 },
      "start"
    );
    news_event.to(
      ".news-event-section > .title-con > .title",
      { duration: 1, left: 0, opacity: 1 },
      "start+=.3"
    );
    news_event.to(
      ".news-event-section > .title-con > .subtitle",
      { duration: 1, left: 0, opacity: 1 },
      "start+=.5"
    );
    news_event.to(
      ".news-event-section > .container > .news > .fix-contain",
      { duration: 1, right: 0, opacity: 1 },
      "start+=.7"
    );

    gsap.timeline({
      scrollTrigger: {
        trigger: ".news-event-section",
        start: "top-=140px bottom",
        end: "+=50%",
        scrub: true,
        animation: news_event,
        onEnter: () => {
          news_event.play();
        },
      },
    });

    const news_board = gsap.timeline({
      scrollTrigger: {
        trigger: ".fix-contain",
        animation: news_event,
        onEnter: () => {
          news_event.play();
        },
      },
      repeat: -1,
      repeatDelay: 0,
    });

    for (var i = 0; i <= this.news.length; i++) {
      if (i === this.news.length - 1) {
        return;
      }
      var bottomPXPC = 72 * (i + 1);
      var bottomPXMobile = 62 * (i + 1);
      const durationTime = 1.5;
      var delayStart = 1.5;

      news_board.to(
        ".news-event-section > .container > .news > .fix-contain > .pc",
        { duration: durationTime, bottom: bottomPXPC + "px", delay: delayStart }
      );
      news_board.to(
        ".news-event-section > .container > .news > .fix-contain > .mobile",
        {
          duration: durationTime,
          bottom: bottomPXMobile + "px",
          delay: delayStart,
        }
      );
    }

    // news_board.to(
    //   ".news-event-section > .container > .news > .fix-contain > .list-con",
    //   { duration: 1.5, bottom: 144 + "px" },
    //   "start+=3.5"
    // );
    // news_board.to(
    //   ".news-event-section > .container > .news > .fix-contain > .list-con",
    //   { duration: 1.5, bottom: 218 + "px" },
    //   "start+=5.5"
    // );
    // news_board.to(
    //   ".news-event-section > .container > .news > .fix-contain > .list-con",
    //   { duration: 1.5, bottom: 292 + "px" },
    //   "start+=7.5"
    // );
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
    width: 1200px;
    margin: 100px auto 100px auto;
    display: flex;
    .company {
      font-size: 20px;
    }
    .title {
      font-size: 38px;
    }
    .subtitle {
      font-size: 18px;
    }

    .container {
      display: flex;
      justify-content: space-between;
      width: 70%;
      .mobile {
        display: none !important;
      }
      .pc {
        display: flex !important;
        justify-content: space-between;
        align-items: center;
      }
      .list-con {
        .num {
          font-size: 24px;
        }
        .list-title {
          font-size: 20px;
        }
        .list-detail {
          font-size: 15px;
        }
        .date {
          font-size: 15px;
        }
      }
    }
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .news-event-section {
    width: 1000px;
    margin: 75px auto 75px auto;
    display: flex;
    .company {
      font-size: 20px;
    }
    .title {
      font-size: 30px;
    }
    .subtitle {
      font-size: 18px;
    }

    .container {
      display: flex;
      justify-content: space-between;
      width: 70%;
      .mobile {
        display: none !important;
      }
      .pc {
        display: flex !important;
        justify-content: space-between;
        align-items: center;
      }

      .list-con {
        .num {
          font-size: 24px;
        }
        .list-title {
          font-size: 20px;
        }
        .list-detail {
          font-size: 14px;
        }
        .date {
          font-size: 14px;
        }
      }
    }
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .news-event-section {
    width: 700px;
    margin: 50px auto 50px auto;
    display: flex;
    justify-content: space-between;
    .title-con {
      margin: 0 !important;
      .company {
        font-size: 18px;
      }
      .title {
        font-size: 28px;
      }
      .subtitle {
        font-size: 16px;
      }
    }

    .container {
      width: 70%;
      .mobile {
        display: none !important;
      }
      .pc {
        display: flex !important;
        align-items: center;
        justify-content: space-between;
      }

      .list-con {
        .num {
          font-size: 22px;
        }
        .list-title {
          font-size: 18px;
        }
        .list-detail {
          font-size: 14px;
        }
        .date {
          font-size: 14px;
        }
      }
    }
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .news-event-section {
    width: 600px;
    margin: 100px auto 100px auto;
    display: flex;
    justify-content: space-between;
    .title-con {
      margin: 0 !important;
      .company {
        font-size: 18px;
      }
      .title {
        font-size: 24px;
      }
      .subtitle {
        font-size: 16px;
      }
    }
    .container {
      width: 70%;
      padding: 12px;
      .mobile {
        display: flex !important;
        align-items: center;
        justify-content: space-between;
        padding: 2px 0px;
      }
      .pc {
        display: none !important;
      }

      .list-con {
        padding: 2px 0px;
        .num {
          width: 7% !important;
          font-size: 18px;
        }
        .con {
          width: 59% !important;
          .list-title {
            font-size: 16px;
          }
          .list-detail {
            font-size: 12px;
          }
        }
        .date {
          width: 20% !important;
          font-size: 12px;
        }
      }
    }
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .news-event-section {
    width: calc(100% - 24px);
    margin: 30px auto 70px auto;

    .title-con {
      margin: 0 !important;
      .company {
        font-size: 14px;
      }
      .title {
        font-size: 24px;
      }
      .subtitle {
        font-size: 14px;
      }
    }
    .container {
      display: grid;
      padding: 8px;
      .mobile {
        display: flex !important;
        align-items: center;
        justify-content: space-between;
        padding: 2px 0px;
      }
      .pc {
        display: none !important;
      }

      .list-con {
        padding: 2px 0px;
        .num {
          width: 5% !important;
          font-size: 18px;
        }
        .con {
          width: 50% !important;
          .list-title {
            font-size: 16px;
          }
          .list-detail {
            font-size: 12px;
          }
        }
        .date {
          width: 25% !important;
          font-size: 14px;
        }
      }
    }
  }
}

.news-event-section {
  overflow: hidden;
  justify-content: space-between;
  .title-con {
    // margin: auto;
    position: relative;
    text-align: left;
    // margin: 0px auto 0px auto;
    padding: 12px;
    .bgIcon {
      position: absolute;
      top: 0;
      left: 0px;
      z-index: -1;
    }
    .company {
      font-family: "Pretendard-Regular";
      position: relative;
      left: -30px;
      opacity: 0;
    }
    .title {
      font-family: "Pretendard-Regular";
      font-weight: bold;
      position: relative;
      left: -30px;
      opacity: 0;
    }
    .subtitle {
      font-family: "Pretendard-Regular";
      position: relative;
      left: -30px;
      opacity: 0;
    }
  }

  .container {
    // width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    overflow: hidden;
    height: 100px;

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
        justify-content: space-around;
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
      .fix-contain {
        // height: 72px;
        position: relative;
        overflow: hidden;
        right: -30px;
        opacity: 0;
      }
      .list-con {
        padding: 10px 0px;
        cursor: pointer;
        text-decoration: none;
        position: relative;
        .num {
          font-family: "pretendard-Regular";
          font-weight: bold;
          color: black;
          width: 7%;

          text-align: right;
        }
        .con {
          width: 65%;
          .list-title {
            font-family: "pretendard-Regular";
            font-weight: bold;
            position: relative;
            color: black;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-word;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }
          .list-detail {
            font-family: "pretendard-Regular";
            color: rgb(109, 109, 109);
            position: relative;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-word;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }
        }
        .date {
          width: 15%;
          font-family: "pretendard-Regular";
          font-weight: bold;
          color: black;
        }
      }
      .list-con:hover {
        background-color: whitesmoke;
      }
    }
  }
}
</style>
