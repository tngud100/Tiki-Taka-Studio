<template>
  <section class="schedule-section">
    <div class="schedule-con">
      <div class="text-con">
        <span class="text-title">업로드일정</span>
      </div>
      <div class="pairing-box">
        <div
          v-for="(pairing, index) in pairings"
          :key="index"
          class="pairing-con"
        >
          <div class="date">{{ pairing.date }}</div>
          <div class="detail">
            <span class="title">{{ pairing.title }}</span>
            <span class="sub-title">{{ pairing.subtitle }}</span>
          </div>
        </div>
      </div>
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
  </section>
</template>

<script>
import { onMounted, ref } from "vue";
import Swiper from "swiper";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

import { gsap, ScrollTrigger } from "gsap/all";

SwiperCore.use([Navigation, Autoplay]);

export default {
  name: "HomeScheduleList",
  data() {
    return {
      pairings: [
        {
          date: "05/30",
          title: "아이콘 더 모먼트 스탯 분석",
          subtitle: "아이콘 파헤치기",
        },
        {
          date: "06/04",
          title: "아이콘 더 모먼트 이야기",
          subtitle: "아이콘 파헤치기",
        },
        {
          date: "06/07",
          title: "챔스 결승 1편",
          subtitle: "챔피언스 리그 결승",
        },
        {
          date: "06/14",
          title: "챔스 결승 2편",
          subtitle: "챔피언스 리그 결승",
        },
        {
          date: "06/18",
          title: "토츠 1편",
          subtitle: "FIFA22 토츠 선수",
        },
        {
          date: "06/29",
          title: "토츠 2편",
          subtitle: "FIFA22 토츠 선수",
        },
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
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const schedule = gsap.timeline({ paused: true });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".schedule-section",
        start: "top+=100px bottom",
        end: "+=50%",
        scrub: true,
        onEnter: () => {
          schedule.play();
        },
      },
    });
    schedule.to(
      ".schedule-con",
      { duration: 0.5, left: 0, opacity: 1 },
      "start"
    );
    schedule.to(
      ".announcer-con",
      { duration: 0.5, right: 0, opacity: 1 },
      "start+=.2"
    );
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
  .announcer-con {
    width: 450px;
    margin-left: 20px;
  }
  .schedule-con {
    width: 800px;
    .text-con {
      width: 125px;
      .text-title {
        font-size: 20px;
      }
    }
    .pairing-box {
      width: 650px;
      .date {
        width: 100px;
        font-size: 15px;
      }
      .detail {
        width: 550px;
        .title {
          font-size: 15px;
          width: 200px;
        }
        .sub-title {
          font-size: 15px;
          margin-left: 20px;
          width: 250px;
        }
      }
    }
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .announcer-con {
    width: 400px;
    margin-left: 10px;
  }
  .schedule-con {
    width: 650px;
    .text-con {
      width: 75px;
      .text-title {
        font-size: 18px;
      }
    }
    .pairing-box {
      width: 500px;
      .date {
        width: 100px;
        font-size: 13px;
      }
      .detail {
        width: 550px;
        .title {
          font-size: 13px;
          width: 150px;
        }
        .sub-title {
          font-size: 13px;
          margin-left: 20px;
          width: 250px;
        }
      }
    }
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .announcer-con {
    width: 290px;
    margin-left: 10px;
  }
  .schedule-con {
    width: 450px;
    display: grid !important;
    padding: 0px !important;
    .text-con {
      width: 125px;
      justify-content: left !important;
      border-right: none !important;

      .text-title {
        font-size: 18px;
      }
    }
    .pairing-box {
      width: 410px;
      margin-left: 0px !important;

      .pairing-con {
        justify-content: left !important;
      }
      .date {
        width: 40px;
        font-size: 11px;
      }
      .detail {
        width: 350px;
        .title {
          font-size: 11px;
          width: 150px;
        }
        .sub-title {
          font-size: 11px;
          margin-left: 20px;
          width: 250px;
        }
      }
    }
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .schedule-section {
    display: flex;
    flex-wrap: wrap;
  }
  .announcer-con {
    width: 616px;
    height: 180px;
    margin-top: 20px;
  }
  .schedule-con {
    width: 616px;
    display: grid !important;
    padding: 0px !important;
    .text-con {
      width: 125px;
      justify-content: left !important;
      border-right: none !important;
      margin: 12px;
      padding: 0px !important;
      .text-title {
        font-size: 20px;
      }
    }
    .pairing-box {
      width: 600px;
      margin-left: 0px !important;
      margin: 0px 0px 12px 12px;

      .pairing-con {
        justify-content: left !important;
      }
      .date {
        width: 60px;
        font-size: 13px;
      }
      .detail {
        width: 500px;
        .title {
          font-size: 13px;
          width: 80px;
        }
        .sub-title {
          font-size: 13px;
          margin-left: 20px;
          width: 400px;
        }
      }
    }
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .schedule-section {
    display: flex;
    flex-wrap: wrap;
  }
  .announcer-con {
    width: calc(100% - 8px);
    height: 180px;
    margin-top: 20px;
  }
  .schedule-con {
    width: calc(100% - 8px);
    display: grid !important;
    padding: 0px !important;
    border: 0px !important;
    border-top: solid 1px rgba(0, 0, 0, 0.2) !important;
    border-radius: 0px !important;
    .text-con {
      width: 100% !important;
      justify-content: center !important;
      border-right: none !important;

      margin: 20px;
      padding: 0px !important;
      .text-title {
        font-size: 20px;
      }
    }
    .pairing-box {
      width: 100% !important;
      margin-left: 0px !important;
      margin: 0px 0px 12px 12px;

      .pairing-con {
        justify-content: left !important;
      }
      .date {
        width: 10%;
        font-size: 11px;
      }
      .detail {
        width: 80%;
        .title {
          font-size: 11px;
          width: 25%;
        }
        .sub-title {
          font-size: 11px;
          margin-left: 20px;
          width: 75%;
        }
      }
    }
  }
}

.schedule-section {
  width: 100%;
  display: flex;
  margin-bottom: 60px;
  justify-content: center;
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
  .schedule-con {
    padding: 20px 0px;
    display: flex;
    justify-content: center;
    border: solid 1px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    left: -30px;
    opacity: 0;
    position: relative;
    .text-con {
      width: 125px;
      display: flex;
      justify-content: center;
      padding: 12px;
      border-right: solid 1px rgba(66, 66, 66, 0.3);

      .text-title {
        font-family: "pretendard-Regular";
        font-weight: bold;
      }
    }
    .pairing-box {
      margin-left: 12px;
      background-color: white;
      .pairing-con {
        display: flex;
        justify-content: space-between;
        padding: 12px;
        .date {
          font-family: "pretendard-Regular";
          font-weight: bold;
        }
        .detail {
          margin-left: 15px;
          display: flex;
          align-items: center;
          .title {
            font-family: "pretendard-Regular";
            font-weight: bold;
          }
          .sub-title {
            font-family: "pretendard-Regular";
            font-weight: bold;
            margin-left: 20px;
          }
        }
      }
    }
    .pairing-con:hover {
      cursor: pointer;
      background-color: whitesmoke;
    }
  }
}
</style>
