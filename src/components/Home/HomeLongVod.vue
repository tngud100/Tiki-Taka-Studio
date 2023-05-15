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
          <div class="img-con" style="height: 175px; border-radius: 5px">
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
          <div class="text-con">
            <span class="text-title">{{ item.title }}</span>
            <!-- <span class="text-desc">{{ item.desc }}</span> -->
          </div>
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
          width="750"
          height="425"
          :src="videoUrl[this.videoIndex]"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <!-- </div>
    </div> -->
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import store from "@/store";

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

      videoUrl: [
        "https://www.youtube.com/embed/NIRhxNNKXdE",
        "https://www.youtube.com/embed/cexutyYCbaM",
        "https://www.youtube.com/embed/AUS7hVUMoKU",
        "https://www.youtube.com/embed/YCqp1kgJjXQ",
        "https://www.youtube.com/embed/HhBFwoWErlo",
        "https://www.youtube.com/embed/ibp7a5t9iJU",
      ],

      long: [
        {
          title: "5연속 공식경기 1위의 불가능한 도전 l [TOP피파 1화]",
          src: require("@/assets/thumbnail/Top피파1.jpg"),
          desc: "게임만 잘해서는 피파 1등이 될 수 없다! 팀도 잘 짜야 진정한 피파 최강자 대한민국 최고의 프로게이머를 찾아보는시간  [TOP피파]",
          num: 0,
        },
        {
          title:
            "장지현의 굴리트 썰! RTN 시즌 근본(?) TOP4 l [피파의 모든것 1-2화]",
          src: require("@/assets/thumbnail/피파의 모든것 1-2화.webp"),
          desc: "피파온라인4와 축구의 다양한 이슈들을 각 분야 전문가와 크리에이터들을 통해 알아보는 [피파의 모든 것]",
          num: 1,
        },
        {
          title:
            "저자본 추천 팀컬러 TOP5 그리고 공식경기 꿀팁 l TSL 우승자 인터뷰",
          src: require("@/assets/thumbnail/TSL 우승자 인터뷰.jpg"),
          desc: "TSL 프리시즌 우승자: 박찬화 선수와의 인터뷰.공식경기 꿀팁까지!",
          num: 2,
        },
        {
          title:
            "사포 쓰고 골 넣는 여기는 TSL l TSL 프리시즌 4강&결승전 Highlight",
          src: require("@/assets/thumbnail/TSL 프리시즌 Highlight 4강,결승.jpg"),
          desc: "대한민국 최정상 프로게이머 TOP16. 6백, 볼돌없는 시원한 닥공 플레이 오직 TSL (Tiki&taka Super League) 에서!",
          num: 3,
        },
        {
          title:
            "시원시원한 닥공 플레이의 정점! l TSL 프리시즌 8강전 Highlight",
          src: require("@/assets/thumbnail/TSL 프리시즌 Highlight 8강.jpg"),
          desc: "대한민국 최정상 프로게이머 TOP16. 6백, 볼돌없는 시원한 닥공 플레이 오직 TSL (Tiki&taka Super League) 에서!",
          num: 4,
        },
        {
          title:
            "최호석 VS 김승섭! 패기와 관록의 대결 l TSL 프리시즌 조별리그 D조 Highlight",
          src: require("@/assets/thumbnail/TSL 프리시즌 Highlight D조.webp"),
          desc: "대한민국 최정상 프로게이머 TOP16. 6백, 볼돌없는 시원한 닥공 플레이 오직 TSL (Tiki&taka Super League) 에서!",
          num: 5,
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["isVideoPlay"]),
  },
  methods: {
    openModal(index) {
      this.videoIndex = index;
      this.showModal = true;
      store.getters.isScrolling = true;
      console.log(store.getters.isScrolling);
    },
    closeModal() {
      this.showModal = false;
      store.getters.isScrolling = false;
      console.log(store.getters.isScrolling);
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
        spaceBetween: 30,
        speed: 300,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
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
    width: 300px !important;
    height: 280px;
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
    margin: 13% auto;
    // padding: 0px 20px 20px 20px;
    border: 1px solid #888;
    border-radius: 5px;
    width: 80%;
    max-width: 750px;
    // max-height: 350px;
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
