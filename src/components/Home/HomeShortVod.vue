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
            <p style="margin: 0">짧은 쇼츠 영상으로</p>
            <p style="margin: 0">중요한 장면을 놓치지 마세요.</p>
          </span>
          <span class="sub-title-mobile">
            <p style="margin: 0">쇼츠 영상으로 만나보세요.</p>
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
import ModalPopup from "@/components/Home/ShortsPopupModal.vue";

import { mapGetters, mapActions } from "vuex";

import { onMounted, ref } from "vue";
import Swiper from "swiper";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Autoplay]);

export default {
  name: "HomeShortVod",
  components: {
    ModalPopup,
  },
  computed: {
    ...mapGetters(["shortsVideoIndex", "shortsShowModal"]),
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
          src: "https://i.ytimg.com/vi/b7D3C09UyP4/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBfHlZPUeUX3EpzZBSqZ_eU2I4C_A",
          desc: "youtube1",
          num: 0,
        },
        {
          title: "쇼츠영상2",
          src: "https://i.ytimg.com/vi/k2IOXI9j270/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLCtDmMM6oj-MvwAm9nDfFOzRV6B2g",
          desc: "youtube1",
          num: 1,
        },
        {
          title: "쇼츠영상3",
          src: "https://i.ytimg.com/vi/aLm0NkmQUy0/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDDuqeQ0X50GkI1pwCuHnMjO1Undw",
          desc: "youtube1",
          num: 2,
        },
        {
          title: "쇼츠영상4",
          src: "https://i.ytimg.com/vi/opAfmk5S3us/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBTNtN2w5_0NOSZ0RsoaSZO4-Dekw",
          desc: "youtube1",
          num: 3,
        },
        {
          title: "쇼츠영상5",
          src: "https://i.ytimg.com/vi/5BaWzofXFuE/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLAU3z9l7Ch0BTPXCKLIF2atoxO3ig",
          desc: "youtube1",
          num: 4,
        },
        {
          title: "쇼츠영상6",
          src: "https://i.ytimg.com/vi/A7IPmKh1bOI/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBxopjMCwaKoxCCkcaes9tkzvL9vQ",
          desc: "youtube1",
          num: 5,
        },
        {
          title: "쇼츠영상7",
          src: "https://i.ytimg.com/vi/AkwAI15UNgE/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLC5ysOlg1QZhdawM9rxI2bvsJUVIA",
          desc: "youtube1",
          num: 6,
        },
        {
          title: "쇼츠영상8",
          src: "https://i.ytimg.com/vi/X70MrarcM48/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLC1gaKCzG_Y9DHRMEw1v-sZhK7oNg",
          desc: "youtube1",
          num: 7,
        },
        {
          title: "쇼츠영상9",
          src: "https://i.ytimg.com/vi/Y135I3m4zhI/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLD07V14W_IGywZpoSEMFr-98reWIg",
          desc: "youtube1",
          num: 8,
        },
      ],
    };
  },
  methods: {
    ...mapActions(["setShortsShowModal", "setShortsVideoNumber"]),
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
        slidesPerView: 4, // only one slide per view
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
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      });
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
    margin: 30px 0px 30px 0px !important;
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
    .short-title {
      width: 100%;
      margin-bottom: 10px;
      justify-content: center;
      .vod-content {
        width: 250px !important;
        height: 444px;
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
    margin-bottom: 10px;
    margin: 50px 0px 50px 0px;

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
        .title-text {
          display: flex;
          align-items: center;
        }
      }
      .sub-title,
      .sub-title-mobile {
        font-family: sans-serif;
        color: #8d8d8d;
      }
    }
  }
  .swiper-container {
    position: relative;
    display: flex;
    overflow: hidden;
    z-index: 0;
    height: 105%;
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
