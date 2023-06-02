<template>
  <section class="HomeLongVod">
    <div class="TextCon">
      <span class="title">최신동영상</span>
      <a class="viewMore" href="https://www.youtube.com/@tikintaka"
        >VIEW MORE +</a
      >
    </div>
    <swiper
      @swiper="setThumbsSwiper"
      :spaceBetween="10"
      :thumbs="{ swiper: thumbsSwiper2 }"
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
          allow="geolocation"
          frameborder="0"
          allowfullscreen
        ></iframe>

        <div class="FirstText">
          <p class="title">티키앤타카</p>
          <p class="subTitle">{{ item.subTitle }}</p>
          <p class="date">{{ item.date }}</p>

          <a class="GoToChannelBtn" :href="item.link"
            ><strong>바로가기</strong></a
          >
        </div>
      </swiper-slide>
    </swiper>

    <swiper
      @swiper="setThumbsSwiper2"
      :spaceBetween="10"
      :slidesPerView="5"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="modules"
      :pagination="true"
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
        @click="clickThumbSwiper(index)"
      >
        <div class="imgCon">
          <img :src="item.img" class="SecondImg" />
        </div>
        <div class="SecondText">
          <p class="title">티키앤타카</p>
          <p class="subTitle">{{ item.subTitle }}</p>
        </div>
      </swiper-slide>
    </swiper>
    <div class="SwiperBtn">
      <div class="swiper-button-prev" @click="prevThumbsSwiper()"></div>
      <div class="swiper-button-next" @click="nextThumbsSwiper()"></div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Scrollbar } from "swiper";

export default {
  name: "HomeLongVod",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      players: [],
      thumbsSwiper: null,
      thumbsSwiper2: null,
      SwiperNum: 0,
      modules: [FreeMode, Navigation, Thumbs, Scrollbar],
      videoUrl: [
        "https://www.youtube.com/embed/NIRhxNNKXdE?rel=0&enablejsapi=1",
        "https://www.youtube.com/embed/xJAKV0DVlWE?rel=0&enablejsapi=1",
        "https://www.youtube.com/embed/cexutyYCbaM?rel=0&enablejsapi=1",
        "https://www.youtube.com/embed/AUS7hVUMoKU?rel=0&enablejsapi=1",
        "https://www.youtube.com/embed/YCqp1kgJjXQ?rel=0&enablejsapi=1",
        "https://www.youtube.com/embed/HhBFwoWErlo?rel=0&enablejsapi=1",
        "https://www.youtube.com/embed/ibp7a5t9iJU?rel=0&enablejsapi=1",
      ],
      SwiperImages: [
        {
          title: "5연속 공식경기 1위의 불가능한 도전 l [TOP피파 1화]",
          img: require("@/assets/thumbnail/Top피파1.jpg"),
          subTitle:
            "게임만 잘해서는 피파 1등이 될 수 없다! 팀도 잘 짜야 진정한 피파 최강자 대한민국 최고의 프로게이머를 찾아보는시간  [TOP피파]",
          link: "https://www.youtube.com/watch?v=NIRhxNNKXdE",
          hoverImage: false,
          date: "2023. 5. 14",
          num: 0,
        },
        {
          title: "한준희가 말하는 출시되어야하는 아이콘 [피파의 모든것 5화]",
          img: require("@/assets/thumbnail/출시되어야하는 아이콘GIF.webp"),
          subTitle:
            "각 분야 전문가와 크리에이터들을 통해 알아보는 [피파의 모든 것]",
          link: "https://www.youtube.com/watch?v=xJAKV0DVlWE",
          hoverImage: false,
          date: "2023. 5. 28",
          num: 1,
        },
        {
          title:
            "장지현의 굴리트 썰! RTN 시즌 근본(?) TOP4 l [피파의 모든것 2화]",
          img: require("@/assets/thumbnail/피파의 모든것 1-2화.webp"),
          subTitle:
            "각 분야 전문가와 크리에이터들을 통해 알아보는 [피파의 모든 것]",
          link: "https://www.youtube.com/watch?v=cexutyYCbaM",
          hoverImage: false,
          date: "2023. 5. 04",
          num: 2,
        },
        {
          title:
            "저자본 추천 팀컬러 TOP5 그리고 공식경기 꿀팁 l TSL 우승자 인터뷰",
          img: require("@/assets/thumbnail/TSL 우승자 인터뷰.jpg"),
          subTitle:
            "TSL 프리시즌 우승자: 박찬화 선수와의 인터뷰.공식경기 꿀팁까지!",
          link: "https://www.youtube.com/watch?v=AUS7hVUMoKU",
          hoverImage: false,
          date: "2023. 4. 28",
          num: 3,
        },
        {
          title: "사포 쓰고 골 넣는 여기는 TSL l TSL 프리시즌 4강&결승전 ",
          img: require("@/assets/thumbnail/TSL 프리시즌 Highlight 4강,결승.jpg"),
          subTitle:
            "대한민국 최정상 프로게이머 TOP16. 6백, 볼돌없는 시원한 닥공 플레이 오직 TSL (Tiki&taka Super League) 에서!",
          link: "https://www.youtube.com/watch?v=YCqp1kgJjXQ",
          hoverImage: false,
          date: "2023. 4. 26",
          num: 4,
        },
        {
          title: "시원시원한 닥공 플레이의 정점! l TSL 프리시즌 8강전 ",
          img: require("@/assets/thumbnail/TSL 프리시즌 Highlight 8강.jpg"),
          subTitle:
            "대한민국 최정상 프로게이머 TOP16. 6백, 볼돌없는 시원한 닥공 플레이 오직 TSL (Tiki&taka Super League) 에서!",
          link: "https://www.youtube.com/watch?v=HhBFwoWErlo",
          hoverImage: false,
          date: "2023. 4. 24",
          num: 5,
        },
        {
          title:
            "최호석 VS 김승섭! 패기와 관록의 대결 l TSL 프리시즌 조별리그 D조 ",
          img: require("@/assets/thumbnail/TSL 프리시즌 Highlight D조.webp"),
          subTitle:
            "대한민국 최정상 프로게이머 TOP16. 6백, 볼돌없는 시원한 닥공 플레이 오직 TSL (Tiki&taka Super League) 에서!",
          link: "https://www.youtube.com/watch?v=ibp7a5t9iJU",
          hoverImage: false,
          date: "2023. 4. 23",
          num: 6,
        },
      ],
    };
  },
  /* global YT */
  mounted() {
    let tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady;
  },

  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
      swiper.on("slideChange", () => {
        const player = this.players[swiper.previousIndex];
        if (player && player.stopVideo) {
          player.stopVideo();
        }
      });
    },
    setThumbsSwiper2(swiper) {
      this.thumbsSwiper2 = swiper;
    },
    clickThumbSwiper(index) {
      this.SwiperNum = index;
      this.thumbsSwiper.slideTo(this.SwiperNum);
      this.thumbsSwiper2.slideTo(this.SwiperNum);
    },
    prevThumbsSwiper() {
      if (this.SwiperNum <= 0) {
        return;
      }

      if (this.thumbsSwiper2 && this.thumbsSwiper) {
        this.SwiperNum -= 1;
        this.thumbsSwiper.slideTo(this.SwiperNum);
        this.thumbsSwiper2.slideTo(this.SwiperNum);
      }
    },
    nextThumbsSwiper() {
      if (this.SwiperNum >= this.SwiperImages.length - 1) {
        return;
      }

      if (this.thumbsSwiper2 && this.thumbsSwiper) {
        this.SwiperNum += 1;
        this.thumbsSwiper.slideTo(this.SwiperNum);
        this.thumbsSwiper2.slideTo(this.SwiperNum);
      }
    },

    onYouTubeIframeAPIReady() {
      this.$nextTick(() => {
        const interval = setInterval(() => {
          if (window.YT && window.YT.Player) {
            clearInterval(interval);
            const iframes = this.$el.querySelectorAll("iframe");
            for (let i = 0; i < iframes.length; i++) {
              this.players[i] = new YT.Player(iframes[i]);
            }
          }
        }, 100);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.HomeLongVod {
  display: grid;
  justify-content: center;
  margin-top: 100px;
}
.TextCon {
  width: 1300px;
  display: flex;
  justify-content: space-between;
  .title {
    font-size: 30px;
    font-family: "Pretendard-Regular";
    font-weight: bold;
  }
  .viewMore {
    font-size: 18px;
    font-family: sans-serif;
    font-weight: bold;
    color: #805bea;
    text-decoration: none;
  }
}
.FirstSwiper {
  width: 1300px;
  margin-top: 30px;
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
        font-size: 18px;
        color: #b0b0b0;
        font-family: "Pretendard-Regular";
        margin-bottom: 20px;
      }
      .subTitle {
        font-size: 22px;
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
        border: solid 1px #805bea;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        strong {
          font-size: 18px;
          font-family: "Pretendard-Regular";
          color: #805bea;
        }
      }
      .date {
        font-size: 16px;
        font-family: "Pretendard-Regular";
        margin-top: 15px;
        color: #b0b0b0;
      }
    }
  }
}
.SecondSwiper {
  width: 1180px;
  height: 190px;
  margin-bottom: 50px;

  .SecondCon {
    width: 220px;
    cursor: pointer;
    .imgCon {
      width: 220px;
      height: 123px;
      border-radius: 5px;
      overflow: hidden;
      .SecondImg {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.5s ease;
      }
    }
    .SecondText {
      width: 220px;
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
.SwiperBtn {
  position: relative;
  top: -160px;
  --swiper-theme-color: black;
}
.swiper-slide-thumb-active .imgCon {
  height: 114px !important;
  border: solid 5px #805bea;
}

.SecondCon:hover {
  .SecondImg {
    transform: scale(1.2);
  }
}
</style>
