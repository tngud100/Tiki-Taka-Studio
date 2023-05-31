<template>
  <swiper
    :spaceBetween="10"
    :thumbs="{ swiper: thumbsSwiper }"
    :modules="modules"
    :allowTouchMove="false"
    class="FirstSwiper"
  >
    <swiper-slide
      :class="'FirstCon slide' + index"
      v-for="(item, index) in SwiperImages"
      :key="index"
    >
      <iframe
        width="700px"
        height="390px"
        borderRadius="5px"
        :src="videoUrl[item.num]"
        frameborder="0"
        allowfullscreen
      ></iframe>
      <!-- <img
        class="FirstImg"
        :src="item.img"
        @click="updateThumbsSwiper(index)"
      /> -->
      <div class="FirstText">
        <p class="title">티키앤타카</p>
        <p class="subTitle">{{ item.subTitle }}</p>

        <div class="GoToChannelBtn"><strong>바로가기</strong></div>
      </div>
    </swiper-slide>
  </swiper>

  <swiper
    @swiper="setThumbsSwiper"
    :spaceBetween="10"
    :slidesPerView="5"
    :freeMode="true"
    :watchSlidesProgress="true"
    :modules="modules"
    :pagination="true"
    :navigation="true"
    :scrollbar="true"
    :style="{
      '--swiper-navigation-color': 'black',
      '--swiper-pagination-color': 'black',
    }"
    class="SecondSwiper"
  >
    <swiper-slide
      v-for="(item, index) in SwiperImages"
      :key="index"
      :class="'SecondCon slide' + index"
    >
      <img :src="item.img" class="SecondImg" />
      <div class="SecondText">
        <p class="title">티키앤타카</p>
        <p class="subTitle">{{ item.subTitle }}</p>
      </div>
    </swiper-slide>
    <!-- <div class="swipe_btn">
      <div class="swiper-button-prev" @click="updateThumbsSwiper(index)"></div>
      <div class="swiper-button-next" @click="updateThumbsSwiper(index)"></div>
    </div> -->
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

export default {
  name: "TestPageTrash",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      thumbsSwiper: null,
      modules: [FreeMode, Navigation, Thumbs],
      videoUrl: [
        "https://www.youtube.com/embed/NIRhxNNKXdE",
        "https://www.youtube.com/embed/wh-DCVr1wOY",
        "https://www.youtube.com/embed/xJAKV0DVlWE",
        "https://www.youtube.com/embed/AUS7hVUMoKU",
        "https://www.youtube.com/embed/YCqp1kgJjXQ",
        "https://www.youtube.com/embed/HhBFwoWErlo",
        "https://www.youtube.com/embed/ibp7a5t9iJU",
      ],
      SwiperImages: [
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
          title: "한준희가 말하는 출시되어야하는 아이콘 [피파의 모든것 5화]",
          img: require("@/assets/thumbnail/출시되어야하는 아이콘GIF.webp"),
          subTitle:
            "각 분야 전문가와 크리에이터들을 통해 알아보는 [피파의 모든 것]",
          hover: require("@/assets/thumbnail/출시되어야하는 아이콘GIF.webp"),
          hoverImage: false,
          num: 2,
        },
        {
          title:
            "저자본 추천 팀컬러 TOP5 그리고 공식경기 꿀팁 l TSL 우승자 인터뷰",
          img: require("@/assets/thumbnail/TSL 우승자 인터뷰.jpg"),
          subTitle:
            "TSL 프리시즌 우승자: 박찬화 선수와의 인터뷰.공식경기 꿀팁까지!",
          hover: require("@/assets/thumbnail/TSL 우승자 인터뷰GIF.webp"),
          hoverImage: false,
          num: 3,
        },
        {
          title: "사포 쓰고 골 넣는 여기는 TSL l TSL 프리시즌 4강&결승전 ",
          img: require("@/assets/thumbnail/TSL 프리시즌 Highlight 4강,결승.jpg"),
          subTitle:
            "대한민국 최정상 프로게이머 TOP16. 6백, 볼돌없는 시원한 닥공 플레이 오직 TSL (Tiki&taka Super League) 에서!",
          hover: require("@/assets/thumbnail/TSL 프리시즌 Highlight 4강,결승GIF.webp"),
          hoverImage: false,
          num: 4,
        },
        {
          title: "시원시원한 닥공 플레이의 정점! l TSL 프리시즌 8강전 ",
          img: require("@/assets/thumbnail/TSL 프리시즌 Highlight 8강.jpg"),
          subTitle:
            "대한민국 최정상 프로게이머 TOP16. 6백, 볼돌없는 시원한 닥공 플레이 오직 TSL (Tiki&taka Super League) 에서!",
          hover: require("@/assets/thumbnail/TSL 프리시즌 Highlight 8강GIF.webp"),
          hoverImage: false,
          num: 5,
        },
        {
          title:
            "최호석 VS 김승섭! 패기와 관록의 대결 l TSL 프리시즌 조별리그 D조 ",
          img: require("@/assets/thumbnail/TSL 프리시즌 Highlight D조.webp"),
          subTitle:
            "대한민국 최정상 프로게이머 TOP16. 6백, 볼돌없는 시원한 닥공 플레이 오직 TSL (Tiki&taka Super League) 에서!",
          hover: require("@/assets/thumbnail/TSL 프리시즌 Highlight D조GIF.webp"),
          hoverImage: false,
          num: 6,
        },
      ],
    };
  },

  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
    updateThumbsSwiper(index) {
      if (this.thumbsSwiper) {
        this.thumbsSwiper.slideTo(index);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.FirstSwiper {
  width: 1300px;
  margin-top: 40px;
  margin-bottom: 50px;

  .FirstCon {
    display: flex;
    align-items: center;
    height: 390px;

    .FirstImg {
    }
    .FirstText {
      overflow: hidden;
      margin-left: 80px;
      width: 360px;
      .title {
        font-size: 20px;
        color: #b0b0b0;
        font-family: "Pretendard-Regular";
        margin-bottom: 20px;
      }
      .subTitle {
        font-size: 24px;
        color: #000000;
        font-family: "Pretendard-Regular";
        font-weight: bold;

        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .GoToChannelBtn {
        width: 140px;
        height: 48px;
        margin-top: 50px;
        border-radius: 50px;
        border: solid 1px black;
        display: flex;
        justify-content: center;
        align-items: center;
        strong {
          font-size: 18px;
          font-family: "Pretendard-Regular";
        }
      }
    }
  }
}
.SecondSwiper {
  width: 1300px;
  height: 190px;
  margin-bottom: 50px;

  .SecondCon {
    .SecondImg {
      object-fit: cover;
      height: 120px;
      border-radius: 5px;
    }
    .SecondText {
      .title {
        font-size: 14px;
        color: #b0b0b0;
        font-family: "Pretendard-Regular";
      }
      .subTitle {
        font-size: 16px;
        color: #000000;
        font-family: "Pretendard-Regular";
        font-weight: bold;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
