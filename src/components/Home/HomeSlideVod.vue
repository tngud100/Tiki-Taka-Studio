<template>
  <section class="schedule-section">
    <div class="title-con">
      <p class="company">우리의 콘텐츠는</p>
      <p class="title">Our Content</p>
      <p class="subtitle">다양한 콘텐츠를 제작하고 있습니다.</p>
      <p class="subtitle">"피파에 실축을 더하다"</p>
      <p class="subtitle-mobile">
        다양한 콘텐츠를 제작하고 있습니다<br />
        "피파에 실축을 더하다"
      </p>
    </div>
    <div class="Schedule-con">
      <div class="swiper" ref="bannerRef">
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
import { onMounted, ref, nextTick } from "vue";
import Swiper from "swiper";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Autoplay]);

import { gsap, ScrollTrigger } from "gsap/all";

export default {
  name: "HomeSlideVod",
  data() {
    return {
      // videoUrl: [
      //   "https://www.youtube.com/embed/dVyLFjjs3J4?rel=0&enablejsapi=1",
      //   "https://www.youtube.com/embed/AjBQvuHZ86o?rel=0&enablejsapi=1",
      //   "https://www.youtube.com/embed/-TZdot4JA7w?rel=0&enablejsapi=1",
      //   "https://www.youtube.com/embed/E16qlkAKwtY?rel=0&enablejsapi=1",
      //   "https://www.youtube.com/embed/1gED0_NSmXU?rel=0&enablejsapi=1",
      //   "https://www.youtube.com/embed/xJAKV0DVlWE?rel=0&enablejsapi=1",
      //   "https://www.youtube.com/embed/auUgzMmrqP8?rel=0&enablejsapi=1",
      //   "https://www.youtube.com/embed/wh-DCVr1wOY?rel=0&enablejsapi=1",
      //   "https://www.youtube.com/embed/NIRhxNNKXdE?rel=0&enablejsapi=1",
      //   "https://www.youtube.com/embed/Tl_oXL9YQEM?rel=0&enablejsapi=1",
      // ],
      schedule: [
        {
          video:
            "https://www.youtube.com/embed/ysTO1NYpnAc?rel=0&enablejsapi=1",
          name: "티키앤타카",
          title:
            "임형철-정성민-신보석이 말하는 뉴택틱 전술 활용법 l [피파의 모든 것 20화]",
          date: "2023. 7. 30",
        },
        {
          video:
            "https://www.youtube.com/embed/yzs0nAEZ1-M?rel=0&enablejsapi=1",
          name: "티키앤타카",
          title: "한준희가 직접 만든 낭만 아스날 전술 l [응답하라 낭만피파 4화]",
          date: "2023. 7. 26",
        },
        {
          video:
            "https://www.youtube.com/embed/TUjJRQY9ID8?rel=0&enablejsapi=1",
          name: "티키앤타카",
          title:
            "한준희가 직접 맞추는 피파4 아스날 낭만 스쿼드 l [응답하라 낭만피파 3화]",
          date: "2023. 7. 23",
        },
        {
          video:
            "https://www.youtube.com/embed/x5DLf4QyZ6E?rel=0&enablejsapi=1",
          name: "티키앤타카",
          title: "장지현이 직접 만든 낭만 첼시 전술 l [응답하라 낭만피파 2화]",
          date: "2023. 7. 19",
        },
        {
          video:
            "https://www.youtube.com/embed/HRk4lVGqJmU?rel=0&enablejsapi=1",
          name: "티키앤타카",
          title:
            "장지현이 직접 맞추는 피파4 첼시 낭만 스쿼드 l [응답하라 낭만피파 1화]",
          date: "2023. 7. 16",
        },
        {
          video:
            "https://www.youtube.com/embed/RRi-BcWfPpE?rel=0&enablejsapi=1",
          name: "티키앤타카",
          title: "한준희가 말하는 역대 최고의 조합들 l [피파의 모든 것 19화]",
          date: "2023. 7. 12",
        },
        {
          video:
            "https://www.youtube.com/embed/jIqfSoHX9cc?rel=0&enablejsapi=1",
          name: "티키앤타카",
          title: "한준희가 말하는 최고의 듀오와 트리오 l [피파의 모든 것 18화]",
          date: "2023. 7. 9",
        },
        {
          video:
            "https://www.youtube.com/embed/xaYUG6kN3D0?rel=0&enablejsapi=1",
          name: "티키앤타카",
          title:
            "임형철이 말하는 23토츠 공격수 티어리스트 l [피파의 모든 것 17화]",
          date: "2023. 7. 5",
        },

        {
          video:
            "https://www.youtube.com/embed/w5xwAalXSwQ?rel=0&enablejsapi=1",
          name: "티키앤타카",
          title:
            "임형철이 말하는 23토츠 티어리스트 (수비수, 미드필더) l [피파의 모든 것 16화]",
          date: "2023. 7. 2",
        },
        // {
        //   video:
        //     "https://www.youtube.com/embed/p8VudkQVsEM?rel=0&enablejsapi=1",
        //   name: "티키앤타카",
        //   title:
        //     "한준희가 말하는 모먼트 대비 아이콘 티어리스트 l [피파의 모든 것 15화]",
        //   date: "2023. 6. 27",
        //   num: 7,
        // },
        // {
        //   video:
        //     "https://www.youtube.com/embed/ge9XkYY_rMA?rel=0&enablejsapi=1",
        //   name: "티키앤타카",
        //   title:
        //     "한준희가 말하는 출시하면 떡상 할 아이콘 더 모먼트 l [피파의 모든 것 14화]",
        //   date: "2023. 6. 25",
        //   num: 8,
        // },
      ],
    };
  },
  /* global YT */
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const vod = gsap.timeline({ paused: true });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".schedule-section",
        start: "top-=100px bottom",
        end: "+=50%",
        scrub: true,
        onEnter: () => {
          vod.play();
        },
      },
    });

    vod.to(
      ".schedule-section > .title-con > .company",
      { duration: 1, bottom: 0, opacity: 1 },
      "start"
    );
    vod.to(
      ".schedule-section > .title-con > .title",
      { duration: 1, bottom: 0, opacity: 1 },
      "start+=.3"
    );
    vod.to(
      ".schedule-section > .title-con > .subtitle",
      { duration: 1, bottom: 0, opacity: 1 },
      "start+=.5"
    );
    vod.to(
      ".schedule-section > .title-con > .subtitle-mobile",
      { duration: 1, bottom: 0, opacity: 1 },
      "start+=.5"
    );
    vod.to(
      ".Schedule-con",
      { duration: 1.5, bottom: 0, opacity: 1 },
      "start+=.7"
    );

    let tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady;
  },
  setup() {
    const bannerRef = ref(null);
    const players = ref([]);

    onMounted(() => {
      if (bannerRef.value) {
        const swiperInstance = new Swiper(bannerRef.value, {
          direction: "horizontal",
          loop: false,
          mousewheel: false,
          speed: 300,
          navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          },
        });

        swiperInstance.on("slideChange", () => {
          const player = players.value[swiperInstance.previousIndex];
          if (player && player.stopVideo) {
            player.stopVideo();
          }
        });
      }
    });

    const onYouTubeIframeAPIReady = () => {
      nextTick(() => {
        const iframes = document.querySelectorAll(".swiper-slide iframe");
        for (let i = 0; i < iframes.length; i++) {
          players.value[i] = new YT.Player(iframes[i]);
        }
      });
    };

    return {
      bannerRef,
      onYouTubeIframeAPIReady,
      players,
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
  overflow: hidden;
  width: 100%;
  display: grid;
  justify-content: center;
  .title-con {
    position: relative;
    text-align: left;
    .company {
      font-family: "Pretendard-Regular";
      font-weight: bold;
      position: relative;
      bottom: -30px;
      opacity: 0;
    }
    .title {
      font-family: "Pretendard-Regular";
      font-weight: bold;
      position: relative;
      bottom: -30px;
      opacity: 0;
    }
    .subtitle {
      font-family: "Pretendard-Regular";
      position: relative;
      bottom: -30px;
      opacity: 0;
    }
    .subtitle-mobile {
      font-family: "Pretendard-Regular";
      display: none;
      position: relative;
      bottom: -45px;
      opacity: 0;
    }
  }
}
.Schedule-con {
  display: flex;
  align-items: center;
  justify-content: right;
  border: solid 6px #f5f5f5;
  border-radius: 5px;
  position: relative;
  bottom: -30px;
  opacity: 0;
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
