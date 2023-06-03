<template>
  <section class="mainvod-section">
    <div class="vod-title"><span class="title">최신 동영상</span></div>
    <div class="vod-box">
      <div class="first-con">
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
            <p class="sub-title">{{ firsts[0].subTitle }}</p>
          </div>
        </div>
        <!-- <div class="main-vod" @click="openModal(firsts[1].num)">
          <img :src="firsts[1].img" style="width: 100%; height: 100%" />
        </div> -->
        <div class="main-vod">
          <iframe
            width="100%"
            height="100%"
            :src="videoUrl[1]"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div
          class="advertise sub-vod"
          style="display: flex; justify-content: center; align-items: center"
        >
          <span>광고 배너</span>
          <!-- <img src="@/assets/thumbnail/Top피파1.jpg" width="100%" />
          <div class="text">
            <p class="title">title</p>
            <p class="sub-title">subtitle</p>
          </div> -->
        </div>
      </div>
      <div class="second-con">
        <div
          v-for="(card, index) in seconds"
          class="sub-vod"
          :key="index"
          @click="openModal(index + 2)"
        >
          <div class="thumbnail">
            <img :src="card.src" style="width: 100%" class="img" />
          </div>
          <div class="text">
            <p class="title">{{ card.title }}</p>
            <p class="sub-title">티키앤타카</p>
          </div>
        </div>
      </div>
    </div>

    <div class="modal" v-show="showModal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <iframe
          v-if="showModal"
          width="750"
          height="425"
          style="border-radius: 5px"
          :src="videoUrl[this.videoIndex]"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap, ScrollTrigger } from "gsap/all";

export default {
  name: "HomeMainVod",
  data() {
    return {
      videoIndex: Number,
      showModal: false,
      videoUrl: [
        "https://www.youtube.com/embed/NIRhxNNKXdE",
        "https://www.youtube.com/embed/Y3ArHWkokWA",
        "https://www.youtube.com/embed/AUS7hVUMoKU",
        "https://www.youtube.com/embed/YCqp1kgJjXQ",
        "https://www.youtube.com/embed/HhBFwoWErlo",
        "https://www.youtube.com/embed/ibp7a5t9iJU",
      ],
      firsts: [
        {
          img: require("@/assets/thumbnail/Top피파1.jpg"),
          title: "5연속 공식경기 1위의 불가능한 도전 l [TOP피파 1화]",
          subTitle:
            "게임만 잘해서는 피파 1등이 될 수 없다! 팀도 잘 짜야 진정한 피파 최강자 대한민국 최고의 프로게이머를 찾아보는시간  [TOP피파]",
          num: 0,
        },
        {
          img: require("@/assets/thumbnail/피파의 모든것 1-2화.webp"),
          title: "",
          subTitle: "",
          num: 1,
        },
        {
          src: "",
          title: "",
          subTitle: "",
        },
      ],
      seconds: [
        {
          title:
            "저자본 추천 팀컬러 TOP5 그리고 공식경기 꿀팁 l TSL 우승자 인터뷰",
          src: require("@/assets/thumbnail/TSL 우승자 인터뷰.jpg"),
          desc: "TSL 프리시즌 우승자: 박찬화 선수와의 인터뷰.공식경기 꿀팁까지!",
          num: 2,
        },
        {
          title: "사포 쓰고 골 넣는 여기는 TSL l TSL 프리시즌 4강&결승전 ",
          src: require("@/assets/thumbnail/TSL 프리시즌 Highlight 4강,결승.jpg"),
          desc: "대한민국 최정상 프로게이머 TOP16. 6백, 볼돌없는 시원한 닥공 플레이 오직 TSL (Tiki&taka Super League) 에서!",
          num: 3,
        },
        {
          title: "시원시원한 닥공 플레이의 정점! l TSL 프리시즌 8강전 ",
          src: require("@/assets/thumbnail/TSL 프리시즌 Highlight 8강.jpg"),
          desc: "대한민국 최정상 프로게이머 TOP16. 6백, 볼돌없는 시원한 닥공 플레이 오직 TSL (Tiki&taka Super League) 에서!",
          num: 4,
        },
        {
          title:
            "최호석 VS 김승섭! 패기와 관록의 대결 l TSL 프리시즌 조별리그 D조 ",
          src: require("@/assets/thumbnail/TSL 프리시즌 Highlight D조.webp"),
          desc: "대한민국 최정상 프로게이머 TOP16. 6백, 볼돌없는 시원한 닥공 플레이 오직 TSL (Tiki&taka Super League) 에서!",
          num: 5,
        },
      ],
    };
  },
  methods: {
    openModal(index) {
      this.videoIndex = index;
      this.showModal = true;
      document.body.classList.add("modal-open");
    },
    closeModal() {
      this.showModal = false;
      document.body.classList.remove("modal-open");
    },
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const vod = gsap.timeline({ paused: true });

    vod.to(".main-vod", { duration: 1, top: 0, opacity: 1 }, "start");

    gsap.timeline({
      scrollTrigger: {
        trigger: ".mainvod-section",
        start: "top center",
        end: "+=100%",
        scrub: true,
        animation: vod,
        onEnter: () => {
          vod.play();
        },
        onLeave: () => {},
      },
    });
  },
};
</script>

<style lang="scss" scoped>
//PC XL
@media screen and (min-width: 1300px) {
  .vod-title {
    width: 1300px;
  }
  .vod-box {
    width: 1300px;
    .first-con {
      .sub-vod {
        width: 290px;
        height: 330px;
        .thumbnail {
          width: 290px;
          height: 160px;
        }
        .text {
          .title {
            padding: 20px;
            font-size: 18px;
          }
          .sub-title {
            padding: 0px 12px 0px 20px;
            font-size: 14px;
          }
        }
      }
      .main-vod {
        width: 604px;
        height: 330px;
      }
      .advertise {
        width: 290px;
      }
    }
    .second-con {
      .sub-vod {
        width: 290px;
        height: 270px;
      }
    }
  }
}
// PC
@media screen and (min-width: 1300px) and (max-width: 1550px) {
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1299px) {
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1079px) {
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
}

.mainvod-section {
  height: auto;
  .vod-title {
    margin: 50px auto 10px auto;
    padding: 12px;
    // width: 70%;
    display: flex;
    justify-content: center;
    text-align: center;
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
        margin: 12px;
        box-shadow: 0px 0px 1px rgba(0, 0, 0, 1);
        transition: all 0.3s ease;

        cursor: pointer;
        .thumbnail {
          overflow: hidden;
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
        margin: 12px;
        box-shadow: 0px 0px 1px rgba(0, 0, 0, 1);
        top: -15px;
        position: relative;
        opacity: 0;
      }
      .advertise {
        margin: 12px;
      }
    }
  }
}

.sub-vod:hover {
  transform: scale(1.1);
}
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  .modal-content {
    background-color: #fefefe;
    margin: 13% auto;
    // padding: 0px 20px 20px 20px;
    border: 1px solid #888;
    border-radius: 5px;
    width: 80%;
    max-width: 750px;
    max-height: 462px;
  }
}
//
.close {
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  width: 100%;
  text-align: center;
  float: right;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
