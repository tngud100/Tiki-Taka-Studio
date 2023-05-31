<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :loop="true"
    :spaceBetween="10"
    :thumbs="{ swiper: thumbsSwiper }"
    :modules="modules"
    class="mySwiper2"
  >
    <swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide
    ><swiper-slide
      ><img src="https://swiperjs.com/demos/images/nature-10.jpg"
    /></swiper-slide>
  </swiper>
  <swiper
    @swiper="setThumbsSwiper"
    :loop="true"
    :spaceBetween="10"
    :slidesPerView="4"
    :navigation="true"
    :freeMode="true"
    :watchSlidesProgress="true"
    :modules="modules"
    class="mySwiper"
  >
    <!-- <div v-for="(item, index) in firsts" :key="index">
      <swiper-slide><img :src="item.img" /></swiper-slide>
    </div> -->
    <swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide
    ><swiper-slide
      ><img src="https://swiperjs.com/demos/images/nature-10.jpg"
    /></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      thumbsSwiper: null,
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
  setup() {
    return {
      modules: [FreeMode, Navigation, Thumbs],
    };
  },
  method: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: left;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

body {
  background: #000;
  color: #000;
}

.swiper {
  width: 1300px;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  width: 1300px;
  margin-top: 120px;
}

.mySwiper {
  height: 200px;
  width: 1300px;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 700px;
  height: 400px;
  object-fit: cover;
}
</style>
