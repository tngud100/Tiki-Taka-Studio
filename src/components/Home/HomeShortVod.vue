<template>
  <section class="longvod-section">
    <div class="long-title">
      <span class="title">최신 동영상</span>
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
          <!-- <div class="text-con">
            <span class="text-title">{{ item.title }}</span>
            <span class="text-desc">{{ item.desc }}</span>
          </div> -->
        </div>
        <!-- <div class="swipe_btn">
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div> -->
      </div>
    </div>

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
import "swiper/swiper-bundle.css";

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
      if (index <= 0) {
        // const deActivateBtn = document.querySelector(".prev-btn");
        // deActivateBtn.style.backgroundImage =
        //   "url('@/assets/btn/VodBtnDeactive.svg')";
        this.videoIndex = 0;
      } else if (index >= this.long.length - 1) {
        this.videoIndex = this.long.length - 1;
      } else {
        this.videoIndex = index;
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
        slidesPerView: 6, // only one slide per view
        spaceBetween: 30,
        speed: 300,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
          1440: {
            slidesPerView: 5,
          },
          1600: {
            slidesPerView: 6,
          },
          1920: {
            slidesPerView: 6,
          },
          2560: {
            slidesPerView: 8,
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
.longvod-section {
  justify-items: center;
  display: grid;
  width: 100%;
  .long-title {
    margin-bottom: 10px;
    width: 70vw;
    padding: 12px;
    display: flex;
    justify-content: left;
    text-align: center;
    .title {
      font-family: sans-serif;
      font-weight: bold;
      font-size: 24px;
    }
  }
  .swiper-container {
    display: flex;
    overflow: hidden;
    width: 70%;
    padding: 20px;
    z-index: 0;
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
    }
    .next-btn {
      background-image: url("@/assets/btn/VodBtn.svg");
      background-repeat: no-repeat;
      background-size: cover;
      width: 40px;
      height: 24px;
      transform: translateX(300px);
      transform: rotate(-90deg) translate3d(423px, 420px, 0px);
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
