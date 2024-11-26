<template>
  <section class="mainvod-section">
    <div class="vod-title"><span class="title">최신 동영상</span></div>
    <div class="vod-box">
      <div class="first-con pc">
        <div
          class="sub-vod vod0"
          @mouseover="firsts[0].hoverImage = true"
          @mouseleave="firsts[0].hoverImage = false"
          @click="openModal(firsts[0].num)"
        >
          <div class="thumbnail">
            <img
              :src="firsts[0].hoverImage ? firsts[0].hover : firsts[0].img"
              style="width: 100%; height: 100%"
              class="img"
            />
          </div>
          <div class="text">
            <p class="title">{{ firsts[0].title }}</p>
            <p class="sub-title">{{ firsts[0].subTitle }}</p>
          </div>
        </div>

        <div class="main-vod">
          <iframe
            width="100%"
            height="100%"
            borderRadius="5px"
            :src="videoUrl[1]"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div
          class="sub-vod vod1"
          @mouseover="firsts[2].hoverImage = true"
          @mouseleave="firsts[2].hoverImage = false"
          @click="openModal(firsts[2].num)"
        >
          <div class="thumbnail">
            <img
              :src="firsts[2].hoverImage ? firsts[2].hover : firsts[2].img"
              style="width: 100%; height: 100%"
              class="img"
            />
          </div>
          <div class="text">
            <p class="title">{{ firsts[2].title }}</p>
            <p class="sub-title">{{ firsts[2].subTitle }}</p>
          </div>
        </div>
      </div>
      <div class="second-con pc">
        <div
          v-for="(card, index) in seconds"
          :class="'sub-vod vod' + (index + 3)"
          :key="index"
          @click="openModal(index + 3)"
          @mouseover="card.hoverImage = true"
          @mouseleave="card.hoverImage = false"
        >
          <div class="thumbnail">
            <img
              :src="card.hoverImage ? card.hover : card.img"
              style="width: 100%; height: 100%"
              class="img"
            />
          </div>
          <div class="text">
            <p class="title">{{ card.title }}</p>
            <p class="sub-title">티키앤타카</p>
          </div>
        </div>
      </div>

      <!-- 반응형 모바일 버전 레이아웃 -->
      <div class="first-con mobile">
        <div class="main-vod">
          <iframe
            width="100%"
            height="100%"
            :src="videoUrl[1]"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div class="mobile-vod">
          <div class="sub-vod" @click="openModal(firsts[0].num)">
            <div class="thumbnail">
              <img
                :src="firsts[0].img"
                style="width: 100%; height: 100%"
                class="img"
              />
            </div>
            <div class="text">
              <p class="title">{{ firsts[0].title }}</p>
              <p class="sub-title">티키앤타카</p>
            </div>
          </div>
          <div
            v-for="(card, index) in seconds"
            class="sub-vod"
            :key="index"
            @click="openModal(index + 2)"
          >
            <div class="thumbnail">
              <img :src="card.img" style="width: 100%" class="img" />
            </div>
            <div class="text">
              <p class="title">{{ card.title }}</p>
              <p class="sub-title">티키앤타카</p>
            </div>
          </div>

          <div class="advertise sub-vod">
            <span>광고 배너</span>
          </div>
        </div>
      </div>
    </div>

    <ModalPopup />
  </section>
</template>

<script>
import ModalPopup from "@/components/Home/YoutubePopupModal.vue";

import { mapGetters, mapActions } from "vuex";

import { gsap, ScrollTrigger } from "gsap/all";

export default {
  name: "HomeYoutubeVod",
  components: {
    ModalPopup,
  },
  computed: {
    ...mapGetters("main", ["videoIndex", "showModal"]),
  },
  data() {
    return {
      videoUrl: [
        "https://www.youtube.com/embed/NIRhxNNKXdE",
        "https://www.youtube.com/embed/wh-DCVr1wOY",
        "https://www.youtube.com/embed/xJAKV0DVlWE",
        "https://www.youtube.com/embed/AUS7hVUMoKU",
        "https://www.youtube.com/embed/YCqp1kgJjXQ",
        "https://www.youtube.com/embed/HhBFwoWErlo",
        "https://www.youtube.com/embed/ibp7a5t9iJU",
      ],
      firsts: [
        {
          title: "5연속 공식경기 1위의 불가능한 도전 l [TOP피파 1화]",
          img: require("@/assets/thumbnail/Top피파1.jpg"),
          subTitle:
            "게임만 잘해서는 피파 1등이 될 수 없다! 팀도 잘 짜야 진정한 피파 최강자 대한민국 최고의 프로게이머를 찾아보는시간  [TOP피파]",
          hover: require("@/assets/thumbnail/Top피파1GIF.webp"),
          hoverImage: false,
          num: 0,
        },
        {
          img: require("@/assets/thumbnail/피파의 모든것 1-2화.webp"),
          title: "",
          subTitle: "",
          num: 1,
        },
        {
          title: "한준희가 말하는 출시되어야하는 아이콘 [피파의 모든것 5화]",
          img: require("@/assets/thumbnail/출시되어야하는 아이콘GIF.webp"),
          subTitle:
            "각 분야 전문가와 크리에이터들을 통해 알아보는 [피파의 모든 것]",
          hover: require("@/assets/thumbnail/출시되어야하는 아이콘GIF.webp"),
          hoverImage: false,
          num: 2,
        },
      ],
      seconds: [
        {
          title:
            "저자본 추천 팀컬러 TOP5 그리고 공식경기 꿀팁 l TSL 우승자 인터뷰",
          img: require("@/assets/thumbnail/TSL 우승자 인터뷰.jpg"),
          desc: "TSL 프리시즌 우승자: 박찬화 선수와의 인터뷰.공식경기 꿀팁까지!",
          hover: require("@/assets/thumbnail/TSL 우승자 인터뷰GIF.webp"),
          hoverImage: false,
          num: 3,
        },
        {
          title: "사포 쓰고 골 넣는 여기는 TSL l TSL 프리시즌 4강&결승전 ",
          img: require("@/assets/thumbnail/TSL 프리시즌 Highlight 4강,결승.jpg"),
          desc: "대한민국 최정상 프로게이머 TOP16. 6백, 볼돌없는 시원한 닥공 플레이 오직 TSL (Tiki&taka Super League) 에서!",
          hover: require("@/assets/thumbnail/TSL 프리시즌 Highlight 4강,결승GIF.webp"),
          hoverImage: false,
          num: 4,
        },
        {
          title: "시원시원한 닥공 플레이의 정점! l TSL 프리시즌 8강전 ",
          img: require("@/assets/thumbnail/TSL 프리시즌 Highlight 8강.jpg"),
          desc: "대한민국 최정상 프로게이머 TOP16. 6백, 볼돌없는 시원한 닥공 플레이 오직 TSL (Tiki&taka Super League) 에서!",
          hover: require("@/assets/thumbnail/TSL 프리시즌 Highlight 8강GIF.webp"),
          hoverImage: false,
          num: 5,
        },
        {
          title:
            "최호석 VS 김승섭! 패기와 관록의 대결 l TSL 프리시즌 조별리그 D조 ",
          img: require("@/assets/thumbnail/TSL 프리시즌 Highlight D조.webp"),
          desc: "대한민국 최정상 프로게이머 TOP16. 6백, 볼돌없는 시원한 닥공 플레이 오직 TSL (Tiki&taka Super League) 에서!",
          hover: require("@/assets/thumbnail/TSL 프리시즌 Highlight D조GIF.webp"),
          hoverImage: false,
          num: 6,
        },
      ],
    };
  },
  methods: {
    ...mapActions(["setShowModal", "setVideoNumber"]),
    openModal(index) {
      this.setVideoNumber(index);
      this.setShowModal(true);
      document.body.classList.add("modal-open");
    },
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const vod = gsap.timeline({ paused: true });
    const vodSecond = gsap.timeline({ paused: true });

    vod.to(".vod-title", { duration: 0.5, top: 0, opacity: 1 }, "start");
    vod.to(".main-vod", { duration: 0.5, top: 0, opacity: 1 }, "start");
    vod.to(".vod0", { duration: 0.5, left: 0, opacity: 1 }, "start+=.5");
    vod.to(".vod1", { duration: 0.5, right: 0, opacity: 1 }, "start+=.8");
    vod.play();

    vodSecond.to(".vod3", { duration: 0.3, bottom: 0, opacity: 1 }, "start");
    vodSecond.to(
      ".vod4",
      { duration: 0.3, bottom: 0, opacity: 1 },
      "start+=.2"
    );
    vodSecond.to(
      ".vod5",
      { duration: 0.3, bottom: 0, opacity: 1 },
      "start+=.4"
    );
    vodSecond.to(
      ".vod6",
      { duration: 0.3, bottom: 0, opacity: 1 },
      "start+=.6"
    );

    gsap.timeline({
      scrollTrigger: {
        trigger: ".second-con",
        start: "top bottom",
        end: "+=50%",
        scrub: true,
        animation: vodSecond,
        onEnter: () => {
          vodSecond.play();
        },
      },
    });

    // const vod = gsap.timeline({
    //   paused: true,
    //   scrollTrigger: {
    //     trigger: ".first-con",
    //     start: "0%",
    //     end: "+=50%",
    //     scrub: true,
    //     animation: vod,
    //     onEnter: () => {
    //       vod.play();
    //     },
    //   },
    // });
  },
};
</script>
<style lang="scss" scoped>
//PC XL
@media screen and (min-width: 1300px) {
  .pc {
    display: flex !important;
  }
  .mobile {
    display: none !important;
  }
  .vod-title {
    width: 1300px;
    margin: 60px auto 10px auto;
    .title {
      font-size: 26px !important;
    }
  }
  .vod-box {
    width: 1300px;
    .first-con,
    .second-con {
      .sub-vod {
        margin: 12px;
      }
    }
    .main-vod {
      margin: 12px;
    }
    .advertise {
      margin: 12px;
    }
  }
  .thumbnail {
    width: 100%;
  }
  .text {
    .title {
      padding: 20px;
      font-size: 18px;
    }
    .sub-title {
      padding: 0px 12px 20px 20px;
      font-size: 14px;
    }
  }
  .sub-vod:hover {
    transform: scale(1.1);
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1299px) {
  .pc {
    display: flex;
  }
  .mobile {
    display: none !important;
  }
  .vod-title {
    width: 1080px;
    margin: 40px auto 10px auto;
    .title {
      font-size: 24px !important;
    }
  }
  .vod-box {
    width: 1080px;
    .first-con,
    .second-con {
      .sub-vod {
        margin: 6px;
      }
    }
    .main-vod {
      margin: 6px;
    }
    .advertise {
      margin: 6px;
    }
  }
  .text {
    .title {
      padding: 12px;
      font-size: 15px;
    }
    .sub-title {
      padding: 0px 10px 12px 12px;
      font-size: 13px;
    }
  }
  .sub-vod:hover {
    transform: scale(1.05);
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1079px) {
  .pc {
    display: flex;
  }
  .mobile {
    display: none !important;
  }
  .vod-title {
    width: 760px;
    margin: 30px auto 10px auto;
    .title {
      font-size: 22px !important;
    }
  }
  .vod-box {
    width: 760px;
    .first-con,
    .second-con {
      .sub-vod {
        margin: 6px;
      }
    }
    .main-vod {
      margin: 6px;
    }
    .advertise {
      margin: 6px;
    }
  }
  .text {
    .title {
      padding: 10px;
      font-size: 14px;
    }
    .sub-title {
      padding: 0px 10px 12px 12px;
      font-size: 12px;
    }
  }
  .sub-vod:hover {
    transform: scale(1.05);
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .pc {
    display: none !important;
  }
  .vod-title {
    width: 640px;
    margin: 20px auto 10px auto;

    .title {
      font-size: 20px !important;
    }
  }
  .mobile {
    display: grid !important;
    .vod-box {
      box-shadow: none;
      justify-self: center;
      width: none;
      .sub-vod {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .main-vod {
      width: calc(100% - 24px) !important;
      height: 342px;
      margin: 12px;
      display: flex;
      justify-content: center;
      box-shadow: 0px 0px 0px !important;
    }
    .mobile-vod {
      width: 640px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .sub-vod {
        width: calc(33% - 24px) !important;
        margin: 12px !important;

        .title {
          height: 54px;
          font-size: 15px;
          padding: 8px;
        }
        .sub-title {
          text-align: right;
          padding: 8px;
          font-size: 13px;
        }
      }
    }
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .mainvod-section {
    margin-bottom: 40px !important;
  }
  .pc {
    display: none !important;
  }
  .vod-title {
    width: 320px;
    margin: 10px auto 10px auto;

    .title {
      font-size: 18px !important;
    }
  }
  .mobile {
    display: grid !important;
    .vod-box {
      box-shadow: none;
      justify-self: center;
      width: 320px;
      .sub-vod {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .main-vod {
      width: calc(100% - 8px) !important;
      height: 180px;
      margin: 4px;
      display: flex;
      justify-content: center;
      box-shadow: 0px 0px 0px !important;
    }
    .mobile-vod {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .sub-vod {
        width: calc(50% - 10px) !important;
        margin: 4px !important;

        .title {
          height: 40px;
          font-size: 14px;
          padding: 8px;
        }
        .sub-title {
          text-align: right;
          padding: 8px;
          font-size: 12px;
        }
      }
    }
  }
}

.mainvod-section {
  margin-bottom: 60px;
  height: auto;
  .vod-title {
    padding: 12px;
    // width: 70%;
    display: flex;
    justify-content: center;
    text-align: center;
    top: -15px;
    opacity: 0;
    position: relative;
    .title {
      font-family: "pretendard-Regular";
      font-weight: bold;
      font-size: 26px;
    }
  }
  .vod-box {
    // width: 70%;
    height: auto;
    margin: auto;
    .first-con,
    .second-con {
      display: flex;
      justify-content: center;
      .sub-vod {
        width: 25%;
        border: solid 1px #e9e9e9;
        transition: all 0.3s ease;
        border-radius: 5px;

        cursor: pointer;
        .thumbnail {
          width: 100%;
          overflow: hidden;
          border-radius: 5px;
        }
        .text {
          height: auto;
          .title {
            margin: 0;
            font-family: "pretendard-Regular";
            font-weight: bold;
          }
          .sub-title {
            margin: 0;
            font-family: "pretendard-Regular";
            color: rgb(97, 97, 97);
          }
        }
      }
      .main-vod {
        width: 50%;
        box-shadow: 0px 0px 1px rgba(0, 0, 0, 1);
        border-radius: 5px;
        top: -15px;
        position: relative;
        opacity: 0;
      }
      .vod0 {
        left: -15px;
        opacity: 0;
        position: relative;
      }
      .vod1 {
        right: -15px;
        opacity: 0;
        position: relative;
      }
      @for $i from 3 through 6 {
        .vod#{$i} {
          bottom: -15px;
          opacity: 0;
          position: relative;
        }
      }

      .advertise {
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
