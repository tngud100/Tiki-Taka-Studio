<template>
  <section class="longvod-section">
    <div class="short-con">
      <div class="short-title">
        <div>
          <p class="title">
            <span style="display: flex; align-items: center"
              ><img
                src="@/assets/logo/shortYoutube.svg"
                style="padding-right: 8px"
              />쇼츠동영상
            </span>
          </p>
          <span class="sub-title">
            <p style="margin: 0; font-size: 16px">짧은 쇼츠 영상으로</p>
            <p style="margin: 0; font-size: 16px">
              중요한 장면을 놓치지 마세요.
            </p>
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
    <!-- <div class="swipe_btn">
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div> -->

    <div class="modal" v-show="showModal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <iframe
          class="youtubeVod"
          v-if="showModal"
          width="400"
          height="711"
          style="border-radius: 0px 0px 5px 5px"
          :src="videoUrl[this.videoIndex]"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <div class="modal-btn">
          <div class="prev-btn" @click="openModal(this.videoIndex - 1)"></div>
          <div class="next-btn" @click="openModal(this.videoIndex + 1)"></div>
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
  name: "HomeLongVod",
  data() {
    return {
      showModal: false,
      videoIndex: Number,
      vodState: false,
      scrollLock: false,

      videoUrl: [
        "https://www.youtube.com/embed/b7D3C09UyP4",
        "https://www.youtube.com/embed/k2IOXI9j270",
        "https://www.youtube.com/embed/aLm0NkmQUy0",
        "https://www.youtube.com/embed/opAfmk5S3us",
        "https://www.youtube.com/embed/5BaWzofXFuE",
        "https://www.youtube.com/embed/A7IPmKh1bOI",
        "https://www.youtube.com/embed/AkwAI15UNgE",
        "https://www.youtube.com/embed/X70MrarcM48",
        "https://www.youtube.com/embed/Y135I3m4zhI",
      ],
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
    openModal(index) {
      const prev_btn = document.querySelector(".prev-btn");
      const next_btn = document.querySelector(".next-btn");
      if (index <= 0) {
        this.videoIndex = 0;
        prev_btn.style.display = "none";
      } else if (index >= this.long.length - 1) {
        this.videoIndex = this.long.length - 1;
        next_btn.style.display = "none";
      } else {
        this.videoIndex = index;
        prev_btn.style.display = "block";
        next_btn.style.display = "block";
      }

      this.showModal = true;
      document.body.classList.add("modal-open");
    },
    closeModal() {
      this.showModal = false;
      document.body.classList.remove("modal-open");
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
            spaceBetween: 30,
          },
          // 화면 너비가 640px 이상일 때
          640: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          // 화면 너비가 320px 이상일 때
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        },

        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
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
//PC XL

// PC
@media screen and (min-width: 1080px) {
  .swiper-container {
    width: 905px;
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .swiper-container {
    width: 660px;
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .swiper-container {
    width: 425px;
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .swiper-container {
    width: 200px;
  }
}

.longvod-section {
  justify-items: center;
  display: flex;
  width: 100%;
  background-color: whitesmoke;
  .short-con {
    margin-bottom: 10px;
    width: 100%;
    margin: 50px 0px 50px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    .short-title {
      width: 300px;
      height: 100%;
      display: flex;
      justify-content: left;

      .title {
        margin-top: 0;
        margin-bottom: 16px;
        font-family: sans-serif;
        font-weight: bold;
        font-size: 24px;
        letter-spacing: -1px;
      }
      .sub-title {
        font-family: sans-serif;
        font-size: 16px;
        color: #8d8d8d;
      }
    }
  }
  .swiper-container {
    position: relative;
    display: flex;
    overflow: hidden;
    z-index: 0;
    height: 110%;
  }
  .vod-content {
    width: 200px !important;
    height: 355px;
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
    margin: 7% auto;
    border-radius: 5px;
    max-width: 400px;
    max-height: 711px;

    .prev-btn {
      background-image: url("@/assets/btn/VodBtn.svg");
      background-repeat: no-repeat;
      background-size: cover;
      /* width: 35px; */
      width: 40px;
      height: 24px;
      /* height: 19px; */
      transform: rotate(90deg) translate3d(-405px, 60px, 0px);
      cursor: pointer;
    }
    .next-btn {
      background-image: url("@/assets/btn/VodBtn.svg");
      background-repeat: no-repeat;
      background-size: cover;
      width: 40px;
      height: 24px;
      transform: translateX(300px);
      transform: rotate(-90deg) translate3d(423px, 420px, 0px);
      cursor: pointer;
    }
  }
}

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
