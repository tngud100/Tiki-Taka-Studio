<template>
  <section class="longvod-section">
    <div class="long-title">
      <span class="title">유튜브 쇼츠</span>
    </div>
    <!-- <div class="vod-con">
      <div class="card-con"> -->
    <div class="swiper-container" ref="swiperRef">
      <div class="swiper-wrapper">
        <div
          class="vod-content swiper-slide"
          @click="openModal"
          v-for="(item, index) in long"
          :key="index"
        >
          <div class="img-con" style="height: 444px; border-radius: 5px">
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
          width="434"
          height="771"
          :src="videoUrl[this.videoIndex]"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <!-- </div>
    </div> -->
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

      videoUrl: "https://www.youtube.com/embed/aLm0NkmQUy0?autoplay=1",
      long: [
        {
          title: "쇼츠영상1",
          src: "https://i.ytimg.com/vi/b7D3C09UyP4/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBfHlZPUeUX3EpzZBSqZ_eU2I4C_A",
          desc: "youtube1",
        },
        {
          title: "쇼츠영상2",
          src: "https://i.ytimg.com/vi/k2IOXI9j270/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLCtDmMM6oj-MvwAm9nDfFOzRV6B2g",
          desc: "youtube1",
        },
        {
          title: "쇼츠영상3",
          src: "https://i.ytimg.com/vi/aLm0NkmQUy0/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDDuqeQ0X50GkI1pwCuHnMjO1Undw",
          desc: "youtube1",
        },
        {
          title: "쇼츠영상4",
          src: "https://i.ytimg.com/vi/opAfmk5S3us/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBTNtN2w5_0NOSZ0RsoaSZO4-Dekw",
          desc: "youtube1",
        },
        {
          title: "쇼츠영상5",
          src: "https://i.ytimg.com/vi/5BaWzofXFuE/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLAU3z9l7Ch0BTPXCKLIF2atoxO3ig",
          desc: "youtube1",
        },
        {
          title: "쇼츠영상6",
          src: "https://i.ytimg.com/vi/A7IPmKh1bOI/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBxopjMCwaKoxCCkcaes9tkzvL9vQ",
          desc: "youtube1",
        },
        {
          title: "쇼츠영상7",
          src: "https://i.ytimg.com/vi/AkwAI15UNgE/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLC5ysOlg1QZhdawM9rxI2bvsJUVIA",
          desc: "youtube1",
        },
        {
          title: "쇼츠영상8",
          src: "https://i.ytimg.com/vi/X70MrarcM48/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLC1gaKCzG_Y9DHRMEw1v-sZhK7oNg",
          desc: "youtube1",
        },
        {
          title: "쇼츠영상9",
          src: "https://i.ytimg.com/vi/Y135I3m4zhI/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLD07V14W_IGywZpoSEMFr-98reWIg",
          desc: "youtube1",
        },
      ],
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
  setup() {
    const swiperRef = ref(null);

    onMounted(() => {
      swiperRef.value = new Swiper(swiperRef.value, {
        direction: "horizontal",
        loop: false,
        mousewheel: false,
        slidesPerView: 5, // only one slide per view
        spaceBetween: 47,
        speed: 300,
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false,
        // },

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
  width: 100vw;
  .long-title {
    margin-top: 50px;
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
  }
  .vod-content {
    width: 230px !important;
    border-radius: 5px;
    //   .img-con {
    //   }
    .text-con {
      display: grid;
      padding: 16px;
      .text-title {
        font-family: "pretendard-Regular";
        font-weight: bold;
        font-size: 18px;
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
  //   overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  .modal-content {
    background-color: #fefefe;
    margin: 3% auto;
    padding: 0px 20px 20px 20px;
    border: 1px solid #888;
    border-radius: 5px;
    width: 23%;
    max-width: 750px;
    max-height: 462px;
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
