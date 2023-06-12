<template>
  <section class="studioLental-section">
    <div class="Title-con">
      <span class="title">제공 서비스</span>
    </div>
    <div class="Schedule-con">
      <div class="TextCon">
        <p class="textTitle">티키앤타카 스튜디오는</p>
        <p class="subTitle">다양한 서비스를 제공합니다.</p>
        <router-link to="/studio" class="viewMore"
          ><strong>자세히 보기</strong></router-link
        >
      </div>
      <div class="swiper" ref="studioRef">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide slide-con"
            v-for="(item, index) in schedule"
            :key="index"
          >
            <img :src="item.src" class="banner-img" />
            <p class="banner-text">{{ item.title }}</p>
          </div>
        </div>
      </div>
      <div class="studioBtn">
        <div class="studio-button-prev swiper-button-prev"></div>
        <div class="studio-button-next swiper-button-next"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from "vue";
import Swiper from "swiper";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Autoplay]);

import { gsap, ScrollTrigger } from "gsap/all";

export default {
  name: "HomeStudioLental",
  data() {
    return {
      schedule: [
        {
          src: require("@/assets/studio/studio1.svg"),
          title: "로비A",
        },
        {
          src: require("@/assets/studio/studio2.svg"),
          title: "로비B",
        },
        {
          src: require("@/assets/studio/studio3.svg"),
          title: "로비C",
        },
        {
          src: require("@/assets/studio/studio4.svg"),
          title: "의상실",
        },
        {
          src: require("@/assets/studio/studio5.svg"),
          title: "크로마키(대)",
        },
        {
          src: require("@/assets/studio/studio6.svg"),
          title: "사무공간",
        },
        {
          src: require("@/assets/studio/studio7.svg"),
          title: "개인 방송실",
        },
        {
          src: require("@/assets/studio/studio8.svg"),
          title: "기획실",
        },
      ],
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const lental = gsap.timeline({ paused: true });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".studioLental-section",
        start: "top+=100px bottom",
        end: "+=50%",
        scrub: true,
        onEnter: () => {
          lental.play();
        },
      },
    });
    lental.to(".Schedule-con", { duration: 1, left: 0, opacity: 1 }, "start");
  },

  setup() {
    const studioRef = ref(null);

    onMounted(() => {
      studioRef.value = new Swiper(studioRef.value, {
        direction: "horizontal",
        loop: false,
        mousewheel: false,
        speed: 300,

        spaceBetween: 35,
        navigation: {
          prevEl: ".studio-button-prev",
          nextEl: ".studio-button-next",
        },
        breakpoints: {
          320: {
            spaceBetween: 10,
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          640: {
            spaceBetween: 15,
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          760: {
            spaceBetween: 10,
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1080: {
            spaceBetween: 20,
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1300: {
            spaceBetween: 35,
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        },
      });
    });
    return {
      studioRef,
    };
  },
};
</script>

<style lang="scss" scoped>
//PC XL
@media screen and (min-width: 1300px) {
  .studioLental-section {
    // margin-top: 100px;
    .Title-con {
      margin-bottom: 40px;
      .title {
        font-size: 30px;
      }
    }
    .Schedule-con {
      width: 1300px;
      height: 380px;
      .TextCon {
        width: 210px;
        margin: 50px 80px 0px 50px;
        .textTitle,
        .subTitle {
          font-size: 22px;
        }
        .viewMore {
          width: 148px;
          height: 46px;
          margin-top: 30px;
          strong {
            font-size: 18px;
          }
        }
      }
      .studioBtn {
        left: 50px;
        bottom: 35px;
      }
      .studio-button-prev {
        width: 77px;
        height: 77px;
        left: -50px;
        top: -20px;
      }
      .studio-button-next {
        width: 77px;
        height: 77px;
        right: -104px;
        top: -20px;
      }
      .swiper {
        width: 920px;
        margin-right: 30px;
        .banner-img {
          width: 445px;
          height: 282px;
        }
        .banner-text {
          margin-top: -20px;
          font-size: 18px;
        }
      }
    }
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .studioLental-section {
    // margin-top: 80px;
    .Title-con {
      margin-bottom: 35px;
      .title {
        font-size: 30px;
      }
    }
    .Schedule-con {
      width: 1080px;
      height: 315px;
      .TextCon {
        width: 215px;
        margin: 35px 50px 0px 40px;
        .textTitle,
        .subTitle {
          font-size: 20px;
        }
        .viewMore {
          width: 120px;
          height: 37px;
          margin-top: 20px;
          strong {
            font-size: 15px;
          }
        }
      }
      .studioBtn {
        left: 50px;
        bottom: 35px;
        .studio-button-prev {
          width: 65px;
          height: 65px;
          left: -50px;
          top: -8px;
        }
        .studio-button-next {
          width: 65px;
          height: 65px;
          right: -80px;
          top: -8px;
        }
      }

      .swiper {
        width: 775px;
        margin-right: 15px;
        .banner-img {
          width: 360px;
          height: 228px;
        }
        .banner-text {
          margin-top: -20px;
          font-size: 18px;
        }
      }
    }
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .studioLental-section {
    // margin-top: 50px;
    .Title-con {
      margin-bottom: 30px;
      .title {
        font-size: 24px;
      }
    }
    .Schedule-con {
      width: 760px;
      height: 221px;
      .TextCon {
        width: 160px;
        margin: 20px 30px 0px 30px;
        .textTitle,
        .subTitle {
          font-size: 16px;
        }
        .viewMore {
          width: 110px;
          height: 33px;
          margin-top: 15px;
          strong {
            font-size: 14px;
          }
        }
      }
      .studioBtn {
        left: 50px;
        bottom: 35px;
        .studio-button-prev {
          width: 45px;
          height: 45px;
          left: -50px;
          top: 5px;
          --swiper-navigation-size: 25px;
        }
      }
      .studio-button-next {
        width: 45px;
        height: 45px;
        right: -40px;
        top: 5px;
        --swiper-navigation-size: 25px;
      }
    }

    .swiper {
      width: 480px;
      margin-right: 15px;
      .banner-img {
        width: 230px;
        height: 145px;
      }
      .banner-text {
        margin-top: -20px;
        font-size: 16px;
      }
    }
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .studioLental-section {
    // margin-top: 50px;
    .Title-con {
      margin-bottom: 30px;
      text-align: left;
      .title {
        font-size: 24px;
      }
    }
    .Schedule-con {
      width: 640px;
      height: auto;
      padding: 30px 30px 15px 30px;
      display: grid !important;
      justify-content: left;
      text-align: left;
      .TextCon {
        width: 200px;
        .textTitle,
        .subTitle {
          font-size: 20px;
        }
        .viewMore {
          width: 110px;
          height: 33px;
          margin: 15px 0px;
          strong {
            font-size: 14px;
          }
        }
      }
      .studioBtn {
        right: 40px;
        top: 104px;
        .studio-button-prev {
          width: 45px;
          height: 45px;
          left: -50px;
          top: 5px;
          --swiper-navigation-size: 25px;
        }
        .studio-button-next {
          width: 45px;
          height: 45px;
          right: -40px;
          top: 5px;
          --swiper-navigation-size: 25px;
        }
      }
    }

    .swiper {
      width: 100%;
      .banner-img {
        width: 270px;
        height: 170px;
      }
      .banner-text {
        margin-top: 10px !important;
        font-size: 16px;
      }
    }
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .studioLental-section {
    // margin-top: 50px;
    .Title-con {
      margin-bottom: 30px;
      text-align: center;
      .title {
        font-size: 24px;
      }
    }
    .Schedule-con {
      width: calc(100% - 40px);
      height: auto;
      padding: 20px 20px;
      margin: auto;
      display: grid !important;
      justify-content: center;
      text-align: left;
      box-shadow: 1px 1px 5px 0px #c5c5c5;
      .TextCon {
        width: 200px;
        .textTitle,
        .subTitle {
          font-size: 16px;
          line-height: 20px;
        }
        .viewMore {
          width: 90px;
          height: 26px;
          margin: 20px 0px;
          strong {
            font-size: 14px;
          }
        }
      }
      .studioBtn {
        // display: none !important;
        right: 0px;
        bottom: 35px;

        .studio-button-prev {
          width: 30px;
          height: 30px;
          left: -59px;
          top: -202px;
          --swiper-navigation-size: 15px;
        }
        .studio-button-next {
          width: 30px;
          height: 30px;
          right: 0px;
          top: -202px;
          --swiper-navigation-size: 15px;
        }
      }
    }

    .swiper {
      width: 100%;
      .banner-img {
        width: 100%;
        height: 147px;
      }
      .banner-text {
        margin-top: 10px !important;
        font-size: 14px;
      }
    }
  }
}

.studioLental-section {
  width: 100%;
  display: grid;
  justify-content: center;
  .Title-con {
    .title {
      font-family: "Pretendard-Regular";
      font-weight: bold;
    }
  }
  .Schedule-con {
    position: relative;
    display: flex;
    justify-content: right;
    border: solid 6px #f5f5f5;
    border-radius: 5px;
    left: -30px;
    opacity: 0;
    .TextCon {
      height: auto;
      .textTitle,
      .subTitle {
        font-family: "Pretendard-Regular";
        font-weight: bold;
      }
      // .subTitle {
      //   font-family: "Pretendard-Regular";
      //   font-size: 18px;
      // }
      .viewMore {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        border: solid 1px #805bea;
        text-decoration: none;

        strong {
          font-family: "Pretendard-Regular";
          font-weight: bold;
          color: #805bea;
        }
      }
    }
    .studioBtn {
      position: absolute;
      display: flex;
      --swiper-theme-color: black;
      z-index: 0;
      .studio-button-prev {
        background-color: whitesmoke;
      }
      .studio-button-next {
        background-color: whitesmoke;
      }
    }
    .swiper {
      .slide-con {
        display: grid;
        justify-content: center;
        align-items: center;
        .banner-img {
          object-fit: cover;
          border-radius: 5px;
        }
        .banner-text {
          text-align: center;
          margin-top: -20px;
          font-family: "Pretendard-Regular";
        }
      }
    }
  }
}
</style>
