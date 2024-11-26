<template>
  <section class="shortvod-section">
    <div class="short-con">
      <div class="short-title">
        <div>
          <p class="title">
            <span class="title-text"
              ><img
                :src="shortLogo.src"
                class="short-icon"
                style="padding-right: 8px"
              />쇼츠동영상
            </span>
          </p>
          <span class="sub-title">
            <p style="margin: 0">중요한 장면만 담은</p>
            <p style="margin: 0">저희의 콘텐츠를 놓치지 마세요.</p>
          </span>
          <span class="sub-title-mobile">
            <p style="margin: 0">짧은 영상으로 콘텐츠를 즐겨보세요.</p>
          </span>
        </div>
      </div>
      <!-- <div class="vod-con">
        <div class="card-con"> -->
      <div class="swiper-container" ref="swiperRef">
        <div class="swiper-wrapper">
          <div
            class="vod-content swiper-slide"
            @click="openModal(index)"
            v-for="(item, index) in long"
            :key="index"
          >
            <div class="img-con" style="border-radius: 5px">
              <img
                :src="item.src"
                style="
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  border-radius: 5px;
                "
              />
            </div>
          </div>
        </div>
        <div class="swiper-scrollbar"></div>
      </div>
    </div>
    <ModalPopup />
  </section>
</template>

<script>
import ModalPopup from "@/components/Sub/ProgramDetail/ShortsPopupModal.vue";

import { mapGetters, mapActions } from "vuex";

import { onMounted, ref } from "vue";
import Swiper from "swiper";
import SwiperCore, { Navigation, Autoplay, Scrollbar } from "swiper";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Autoplay, Scrollbar]);

import { gsap, ScrollTrigger } from "gsap/all";

export default {
  name: "HomeShortVod",
  components: {
    ModalPopup,
  },
  computed: {
    ...mapGetters("main", ["shortsVideoIndex", "shortsShowModal"]),
  },

  data() {
    return {
      showModal: false,
      videoIndex: Number,
      vodState: false,
      scrollLock: false,
      shortLogo: { src: require("@/assets/logo/shortYoutube.svg") },
      long: [
        {
          title: "쇼츠영상1",
          src: "https://i.ytimg.com/vi/alJuOLlv2TM/oar2.jpg?sqp=-oaymwEqCJUDENAFSFqQAgHyq4qpAxkIARUAAIhC2AEB4gEMCBoQAhgGIAE4AUAB&rs=AOn4CLBgzd--fJ3ujujDRJSHrKSb3QR0EQ",
          desc: "youtube1",
          num: 0,
        },
        {
          title: "쇼츠영상2",
          src: "https://i.ytimg.com/vi/p4DqIr2RRcY/oar2.jpg?sqp=-oaymwEqCJUDENAFSFqQAgHyq4qpAxkIARUAAIhC2AEB4gEMCBoQAhgGIAE4AUAB&rs=AOn4CLCIm_w0l6RKrXgrDPPkUu4MBdvJWQ",
          desc: "youtube1",
          num: 1,
        },
        {
          title: "쇼츠영상3",
          src: "https://i.ytimg.com/vi/rtozdeTro_8/oar2.jpg?sqp=-oaymwEqCJUDENAFSFqQAgHyq4qpAxkIARUAAIhC2AEB4gEMCBoQAhgGIAE4AUAB&rs=AOn4CLCFiyJFiDJ0WOQpkxfvEY3cyOcRoA",
          desc: "youtube1",
          num: 2,
        },
        {
          title: "쇼츠영상4",
          src: "https://i.ytimg.com/vi/o8Tx_QmXqUM/oar2.jpg?sqp=-oaymwEqCJUDENAFSFqQAgHyq4qpAxkIARUAAIhC2AEB4gEMCBoQAhgGIAE4AUAB&rs=AOn4CLAL_jHnrenMM1wU3DSbWoL-tawGYA",
          desc: "youtube1",
          num: 3,
        },
        {
          title: "쇼츠영상5",
          src: "https://i.ytimg.com/vi/s1ukR0f10Rw/oar2.jpg?sqp=-oaymwEqCJUDENAFSFqQAgHyq4qpAxkIARUAAIhC2AEB4gEMCBoQAhgGIAE4AUAB&rs=AOn4CLCYqiGL-uy3kHBZZKYaOo1Z1z5zqA",
          desc: "youtube1",
          num: 4,
        },
        {
          title: "쇼츠영상6",
          src: "https://i.ytimg.com/vi/Owg-zAX29AA/oar2.jpg?sqp=-oaymwEqCJUDENAFSFqQAgHyq4qpAxkIARUAAIhC2AEB4gEMCBoQAhgGIAE4AUAB&rs=AOn4CLAQjF40U2cqvaYbidRC3AM__Y6yig",
          desc: "youtube1",
          num: 5,
        },
        {
          title: "쇼츠영상7",
          src: "https://i.ytimg.com/vi/cXZHOG47V64/oar2.jpg?sqp=-oaymwEqCJUDENAFSFqQAgHyq4qpAxkIARUAAIhC2AEB4gEMCBoQAhgGIAE4AUAB&rs=AOn4CLAoaKwifYfJ3LjYH2-m13Wm3AE84g",
          desc: "youtube1",
          num: 6,
        },
        {
          title: "쇼츠영상8",
          src: "https://i.ytimg.com/vi/NNibiCTQ9Hc/oar2.jpg?sqp=-oaymwEqCJUDENAFSFqQAgHyq4qpAxkIARUAAIhC2AEB4gEMCBoQAhgGIAE4AUAB&rs=AOn4CLAS9AyZyL0UH4UXswhGZw5WaLgsJw",
          desc: "youtube1",
          num: 7,
        },
        {
          title: "쇼츠영상9",
          src: "https://i.ytimg.com/vi/Q_JlyamWRPc/oar2.jpg?sqp=-oaymwEqCJUDENAFSFqQAgHyq4qpAxkIARUAAIhC2AEB4gEMCBoQAhgGIAE4AUAB&rs=AOn4CLApBzz9wrlpRHXAVgKaCNnxTSP4OA",
          desc: "youtube1",
          num: 8,
        },
        {
          title: "쇼츠영상10",
          src: "https://i.ytimg.com/vi/yk3CzYScdmY/oar2.jpg?sqp=-oaymwEqCJUDENAFSFqQAgHyq4qpAxkIARUAAIhC2AEB4gEMCBoQAhgGIAE4AUAB&rs=AOn4CLBSCHdwqC2Avkr631hrcX4aTYEb4w",
          desc: "youtube1",
          num: 9,
        },
      ],
    };
  },
  methods: {
    ...mapActions("main", ["setShortsShowModal", "setShortsVideoNumber"]),
    openModal(index) {
      this.setShortsVideoNumber(index);
      this.setShortsShowModal(true);
      document.body.classList.add("modal-shorts-open");

      const prev_btn = document.querySelector(".prev-btn");
      const next_btn = document.querySelector(".next-btn");
      if (this.shortsVideoIndex <= 0) {
        prev_btn.style.display = "none";
      } else if (this.shortsVideoIndex >= this.long.length - 1) {
        next_btn.style.display = "none";
      } else {
        prev_btn.style.display = "block";
        next_btn.style.display = "block";
      }
    },
  },

  setup() {
    const swiperRef = ref(null);

    onMounted(() => {
      swiperRef.value = new Swiper(swiperRef.value, {
        direction: "horizontal",
        loop: false,
        mousewheel: false,
        slidesPerView: 4,
        spaceBetween: 35,
        speed: 300,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: false,
          draggable: true,
        },

        breakpoints: {
          // 화면 너비가 1080px 이상일 때
          1080: {
            slidesPerView: 4,
            spaceBetween: 35,
          },
          // 화면 너비가 760px 이상일 때
          760: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          // 화면 너비가 640px 이상일 때
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          // 화면 너비가 320px 이상일 때
          320: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
        },
      });

      gsap.registerPlugin(ScrollTrigger);

      const shortvod = gsap.timeline({ paused: true });

      gsap.timeline({
        scrollTrigger: {
          trigger: ".shortvod-section",
          start: "top+=100px bottom",
          end: "+=50%",
          scrub: true,
          onEnter: () => {
            shortvod.play();
          },
        },
      });
      shortvod.to(".title", { duration: 0.5, left: 0, opacity: 1 }, "start");
      shortvod.to(
        ".sub-title",
        { duration: 0.5, left: 0, opacity: 1 },
        "start+=.2"
      );
      shortvod.to(
        ".sub-title-mobile",
        { duration: 0.5, left: 0, opacity: 1 },
        "start+=.2"
      );
      shortvod.to(
        ".swiper-container ",
        { duration: 1, bottom: 0, opacity: 1 },
        "start+=.4"
      );
    });

    return {
      swiperRef,
    };
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1300px) {
  .short-con {
    width: 1300px;
    display: flex;
    margin: 75px 0px 75px 0px;

    .short-title {
      width: 300px;
      .vod-content {
        width: 200px !important;
        height: 355px;
      }
      .title {
        font-size: 24px;
        letter-spacing: -1px;
        margin-bottom: 16px;

        justify-content: left;
        .short-icon {
          width: 30px;
          height: 30px;
        }
      }
      .sub-title {
        font-size: 16px;
      }
      .sub-title-mobile {
        display: none;
      }
    }
    .swiper-container {
      width: 905px;
    }
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .short-con {
    width: 1040px;
    display: flex;
    margin: 75px 0px 75px 0px;
    .short-title {
      width: 300px;
      .vod-content {
        width: 200px !important;
        height: 355px;
      }
      .title {
        font-size: 24px;
        letter-spacing: -1px;
        margin-bottom: 16px;

        justify-content: left;
        .short-icon {
          width: 30px;
          height: 30px;
        }
      }
      .sub-title {
        font-size: 16px;
      }
      .sub-title-mobile {
        display: none;
      }
    }
    .swiper-container {
      width: 905px;
    }
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .short-con {
    width: 760px;
    display: flex;
    margin: 50px 0px 50px 0px;
    .short-title {
      width: 260px;
      .vod-content {
        width: 106px !important;
        height: 188px;
      }
      .title {
        font-size: 22px;
        letter-spacing: -1px;
        margin-bottom: 16px;

        justify-content: left;
        .short-icon {
          width: 25px;
          height: 25px;
        }
      }
      .sub-title {
        font-size: 14px;
      }
      .sub-title-mobile {
        display: none;
      }
    }
  }
  .swiper-container {
    width: 425px;
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .short-con {
    width: 640px;
    display: grid;
    margin: 30px 0px 40px 0px;
    .short-title {
      width: 100%;
      justify-content: center;
      .vod-content {
        width: 145px !important;
        height: 257px;
      }
      .title {
        margin: 0;
        font-size: 22px;
        letter-spacing: -1px;
        .title-text {
          justify-content: center;
        }
        .short-icon {
          width: 25px;
          height: 25px;
        }
      }
      .sub-title {
        display: none;
      }
      .sub-title-mobile {
        display: block;
        font-size: 14px;
        margin: 15px 0px 30px 12px !important;
      }
    }
  }
  .swiper-container {
    width: 640px;
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .short-con {
    width: 320px;
    display: grid;
    margin: 30px 0px 40px 0px;
    .short-title {
      width: 100%;
      margin-bottom: 10px;
      justify-content: center;
      .vod-content {
        width: 145px !important;
        height: 257px;
      }
      .title {
        margin: 0;
        font-size: 22px;
        letter-spacing: -1px;
        .title-text {
          justify-content: center;
        }
        .short-icon {
          width: 25px;
          height: 25px;
        }
      }
      .sub-title {
        display: none;
      }
      .sub-title-mobile {
        display: block;
        font-size: 14px;
        margin: 15px 0px 30px 12px !important;
      }
    }
  }
  .swiper-container {
    width: 320px;
  }
}

.shortvod-section {
  justify-content: center;
  display: flex;
  width: 100%;
  background-color: whitesmoke;
  .short-con {
    justify-content: center;
    align-items: center;
    .short-title {
      height: 100%;
      display: flex;

      .title {
        margin-top: 0;
        font-family: sans-serif;
        font-weight: bold;
        letter-spacing: -1px;
        left: -30px;
        position: relative;
        opacity: 0;
        .title-text {
          display: flex;
          align-items: center;
        }
      }
      .sub-title,
      .sub-title-mobile {
        font-family: "Pretendard-Regular";
        color: #8d8d8d;
        left: -30px;
        position: relative;
        opacity: 0;
      }
    }
  }
  .swiper-container {
    position: relative;
    display: flex;
    overflow: hidden;
    z-index: 0;
    height: 105%;
    bottom: -15%;
    opacity: 0;
  }
  .vod-content {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    cursor: pointer;
    //   .img-con {
    //   }
    .text-con {
      display: grid;
      padding: 16px;
      .text-title {
        font-family: "pretendard-Regular";
        font-size: 18px;
        line-height: 25px;
      }
      .text-desc {
        padding-top: 12px;
        font-family: sans-serif;
        font-size: 15px;
      }
    }
  }
}
</style>
