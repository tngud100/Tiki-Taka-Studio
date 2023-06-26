<template>
  <section class="schedule-section">
    <div class="title-con">
      <p class="company">우리의 이야기는</p>
      <p class="title">Our Program</p>
      <p class="subtitle">저희는 자체적인 프로그램으로 다양한 영상을</p>
      <p class="subtitle">
        지속적으로 꾸준히 업로드하고 콘텐츠를 제작하고 있습니다.
      </p>
      <p class="subtitle-mobile">
        저희는 자체적인 프로그램으로 다양한 영상을 지속적으로 꾸준히 업로드하고
        콘텐츠를 제작하고 있습니다.
      </p>
    </div>
    <div class="Schedule-con">
      <div class="swiper" ref="bannerRef" :style="{}">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide slide-con"
            v-for="(item, index) in schedule"
            :key="index"
          >
            <iframe
              borderRadius="5px"
              :src="item.video"
              allow="geolocation"
              frameborder="0"
              allowfullscreen
              class="banner-img"
            ></iframe>
            <!-- <img :src="item.src" class="banner-img" /> -->
            <div class="TextCon">
              <p class="company">{{ item.name }}</p>
              <p class="textTitle">{{ item.title }}</p>
              <p class="textTitle">{{ item.subTitle }}</p>
              <p class="subTitle">{{ item.date }}</p>
              <a
                class="viewMore"
                href="https://www.youtube.com/@tikintaka/playlists"
                ><strong>바로가기</strong></a
              >
            </div>
          </div>
        </div>
        <div class="swiper-btnBox">
          <div
            class="swiper-button-prev swiper-btn"
            style="
              color: black;
              background-color: #f5f5f5;
              position: relative;
              width: 100%;
              height: 100%;
              border-radius: 10px 0px 0px 10px;
            "
          ></div>
          <div
            class="swiper-button-next swiper-btn"
            style="
              color: black;
              background-color: #f5f5f5;
              position: relative;
              width: 100%;
              height: 100%;
            "
          ></div>
        </div>
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

export default {
  name: "TestPageTrash",
  data() {
    return {
      videoUrl: [
        "https://www.youtube.com/embed/dVyLFjjs3J4?rel=0&enablejsapi=1",
        "https://www.youtube.com/embed/AjBQvuHZ86o?rel=0&enablejsapi=1",
        "https://www.youtube.com/embed/-TZdot4JA7w?rel=0&enablejsapi=1",
        "https://www.youtube.com/embed/E16qlkAKwtY?rel=0&enablejsapi=1",
        "https://www.youtube.com/embed/1gED0_NSmXU?rel=0&enablejsapi=1",
        "https://www.youtube.com/embed/xJAKV0DVlWE?rel=0&enablejsapi=1",
        "https://www.youtube.com/embed/auUgzMmrqP8?rel=0&enablejsapi=1",
        "https://www.youtube.com/embed/wh-DCVr1wOY?rel=0&enablejsapi=1",
        "https://www.youtube.com/embed/NIRhxNNKXdE?rel=0&enablejsapi=1",
        "https://www.youtube.com/embed/Tl_oXL9YQEM?rel=0&enablejsapi=1",
      ],
      schedule: [
        {
          video:
            "https://www.youtube.com/embed/dVyLFjjs3J4?rel=0&enablejsapi=1",
          name: "티키앤타카",
          title: "대한민국 최고의 프로게이머를 찾아보는 시간",
          date: "2023.06.21",
          num: 0,
        },
        {
          video:
            "https://www.youtube.com/embed/AjBQvuHZ86o?rel=0&enablejsapi=1",
          name: "티키앤타카",
          title:
            "박찬우 임형철이 말하는 인테르 vs 맨시티 우승팀 l [피파의 모든것 9화]",
          date: "2023. 6. 08",
          num: 1,
        },
        {
          video:
            "https://www.youtube.com/embed/-TZdot4JA7w?rel=0&enablejsapi=1",
          name: "티키앤타카",
          title:
            "한준희가 말하는 아이콘 모먼트 최고의 선수 l [피파의 모든것 8화]",
          date: "2023. 6. 06",
          num: 2,
        },
        {
          video:
            "https://www.youtube.com/embed/E16qlkAKwtY?rel=0&enablejsapi=1",
          name: "티키앤타카",
          title: "한준희가 말하는 아이콘 모먼트 양발선수 l [피파의 모든것 7화]",
          date: "2023. 6. 04",
          num: 3,
        },
        {
          video:
            "https://www.youtube.com/embed/1gED0_NSmXU?rel=0&enablejsapi=1",
          name: "티키앤타카",
          title: "한준희가 말하는 아이콘 모먼트 평가 l [피파의 모든것 6화]",
          date: "2023. 6. 01",
          num: 4,
        },
        {
          video:
            "https://www.youtube.com/embed/xJAKV0DVlWE?rel=0&enablejsapi=1",
          name: "티키앤타카",
          title: "한준희가 말하는 출시되어야하는 아이콘  l [피파의 모든것 5화]",
          date: "2023. 5. 28",
          num: 5,
        },

        {
          video:
            "https://www.youtube.com/embed/wh-DCVr1wOY?rel=0&enablejsapi=1",
          name: "티키앤타카",
          title:
            "한준희가 말하는 아이콘 재평가 Feat. 한국 선수 양발에 대한 생각 l [피파의 모든것 4화]",
          date: "2023. 5. 27",
          num: 6,
        },
        {
          video:
            "https://www.youtube.com/embed/NIRhxNNKXdE?rel=0&enablejsapi=1",
          name: "티키앤타카",
          title: "5연속 공식경기 1위의 불가능한 도전 l [TOP피파 1화]",
          date: "2023. 5. 21",
          num: 7,
        },
        {
          video:
            "https://www.youtube.com/embed/Tl_oXL9YQEM?rel=0&enablejsapi=1",
          name: "티키앤타카",
          title: "연속 공식경기 1위의 불가능한 도전 l [TOP피파 1화]",
          date: "2023. 5. 14",
          num: 8,
        },
      ],
    };
  },
  mounted() {},

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
  .schedule-section {
    margin-top: 150px;
    margin-bottom: 100px;
    .title-con {
      margin-bottom: 30px;
      .company {
        font-size: 20px;
      }
      .title {
        font-size: 30px;
        padding-bottom: 18px;
      }
      .subtitle {
        font-size: 18px;
      }
    }
  }
  .Schedule-con {
    width: 1200px;
    .slide-con {
      .banner-img {
        width: 630px;
      }
      .TextCon {
        margin-left: 40px;
        .company {
          font-size: 18px;
        }
        .textTitle {
          font-size: 20px;
          width: 300px;
          padding: 4px 0px;
          line-height: 26px;
        }
        .subTitle {
          font-size: 16px;
        }
      }
    }
    .viewMore {
      width: 140px;
      height: 48px;
      margin-top: 50px;
      border-radius: 50px;

      strong {
        font-size: 18px;
      }
    }
    .swiper-btnBox {
      width: 150px;
      height: 77px;
    }
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .schedule-section {
    margin-top: 130px;
    margin-bottom: 100px;
    .title-con {
      margin-bottom: 30px;
      .company {
        font-size: 20px;
      }
      .title {
        font-size: 30px;
        padding-bottom: 18px;
      }
      .subtitle {
        font-size: 18px;
      }
    }
  }
  .Schedule-con {
    width: 1000px;
    .slide-con {
      .banner-img {
        width: 550px;
      }
      .TextCon {
        margin-left: 40px;
        .company {
          font-size: 18px;
        }
        .textTitle {
          font-size: 20px;
          width: 300px;
          padding: 4px 0px;
          line-height: 26px;
        }
        .subTitle {
          font-size: 16px;
        }
      }
    }
    .viewMore {
      width: 140px;
      height: 48px;
      margin-top: 50px;
      border-radius: 50px;

      strong {
        font-size: 18px;
      }
    }
    .swiper-btnBox {
      width: 150px;
      height: 77px;
    }
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .schedule-section {
    margin-top: 80px;
    margin-bottom: 80px;
    .title-con {
      margin-bottom: 30px;
      .company {
        font-size: 18px;
      }
      .title {
        font-size: 28px;
        padding-bottom: 18px;
      }
      .subtitle {
        font-size: 16px;
      }
    }
  }
  .Schedule-con {
    width: 700px;
    .slide-con {
      .banner-img {
        width: 400px;
      }
      .TextCon {
        margin-left: 40px;
        width: 250px;
        .company {
          font-size: 16px;
        }
        .textTitle {
          font-size: 18px;
          width: 175px;
          padding: 4px 0px;
          line-height: 26px;
        }
        .subTitle {
          font-size: 15px;
        }
      }
    }
    .viewMore {
      width: 100px;
      height: 32px;
      margin-top: 20px;
      border-radius: 50px;

      strong {
        font-size: 16px;
      }
    }
    .swiper-btnBox {
      width: 100px;
      height: 55px;
      .swiper-btn {
        --swiper-navigation-size: 30px;
      }
    }
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .schedule-section {
    margin-top: 70px;
    margin-bottom: 30px;
    .title-con {
      margin-bottom: 30px;
      .company {
        font-size: 18px;
      }
      .title {
        font-size: 24px;
        padding-bottom: 18px;
      }
      .subtitle {
        font-size: 16px;
      }
    }
  }
  .Schedule-con {
    width: 600px;
    .slide-con {
      display: grid !important;
      .banner-img {
        width: 588px;
        border-radius: 0px !important;
      }
      .TextCon {
        width: 80%;
        padding: 12px;
        .company {
          font-size: 16px;
        }
        .textTitle {
          font-size: 18px;
          padding: 4px 0px;
          line-height: 26px;
        }
        .subTitle {
          font-size: 15px;
        }
      }
    }
    .viewMore {
      width: 126px;
      height: 42px;
      margin-top: 20px;
      border-radius: 50px;

      strong {
        font-size: 16px;
      }
    }
    .swiper-btnBox {
      width: 150px;
      height: 70px;
      .swiper-btn {
        --swiper-navigation-size: 40px;
      }
    }
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .schedule-section {
    margin-top: 120px;
    margin-bottom: 30px;
    .title-con {
      width: calc(100vw - 6px);
      margin-bottom: 21px;
      padding: 12px;
      .company {
        font-size: 14px;
      }
      .title {
        font-size: 24px;
        padding-bottom: 18px;
      }
      .subtitle {
        display: none;
      }
      .subtitle-mobile {
        display: block !important;
        font-size: 14px;
      }
    }
  }
  .Schedule-con {
    width: calc(100vw - 30px);
    margin: auto;

    .slide-con {
      display: grid !important;
      .banner-img {
        width: 100%;
        border-radius: 0px !important;
      }
      .TextCon {
        width: 80%;
        padding: 12px;
        .company {
          font-size: 14px;
        }
        .textTitle {
          font-size: 18px;
          padding: 4px 0px;
          line-height: 26px;
        }
        .subTitle {
          font-size: 14px;
        }
      }
    }
    .viewMore {
      width: 100px;
      height: 33px;
      margin-top: 20px;
      border-radius: 50px;

      strong {
        font-size: 14px;
      }
    }
    .swiper-btnBox {
      width: 100px;
      height: 55px;
      .swiper-btn {
        --swiper-navigation-size: 30px;
      }
    }
  }
}
.schedule-section {
  width: 100%;
  display: grid;
  justify-content: center;
  .title-con {
    position: relative;
    text-align: left;
    .company {
      font-family: "Pretendard-Regular";
      font-weight: bold;
    }
    .title {
      font-family: "Pretendard-Regular";
      font-weight: bold;
    }
    .subtitle {
      font-family: "Pretendard-Regular";
      font-weight: bold;
    }
    .subtitle-mobile {
      font-family: "Pretendard-Regular";
      display: none;
    }
  }
}
.Schedule-con {
  display: flex;
  align-items: center;
  justify-content: right;
  border: solid 6px #f5f5f5;
  border-radius: 5px;
  .slide-con {
    width: 100%;
    display: flex;
    align-items: center;
    .banner-img {
      aspect-ratio: 16 / 9;
      object-fit: cover;
      border-radius: 5px;
    }
    .TextCon {
      height: auto;
      .company {
        font-family: "Pretendard-Regular";
        color: #898989;
      }
      .textTitle {
        font-family: "Pretendard-Regular";
        font-weight: bold;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .subTitle {
        font-family: "Pretendard-Regular";
        color: #898989;
      }
    }
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

  .swiper-btnBox {
    position: absolute;
    display: flex;
    justify-content: center;
    right: 0;
    bottom: 0;
    .swiper-btn {
      margin-top: 0;
      left: 0;
      top: 0;
    }
  }
}
</style>
