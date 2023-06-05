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
      :breakpoints="{
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        760: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1080: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
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
//PC XL
@media screen and (min-width: 1300px) {
  .HomeLongVod {
    margin-top: 100px;
  }
  .TextCon {
    width: 1300px;
    .title {
      font-size: 30px;
    }
    .viewMore {
      font-size: 18px;
    }
  }
  .FirstSwiper {
    width: 1300px;
    .FirstCon {
      height: 390px;
      .FirstText {
        margin-left: 80px;
        width: 360px;
        .title {
          font-size: 18px;
          margin-bottom: 20px;
        }
        .subTitle {
          font-size: 22px;
        }
        .GoToChannelBtn {
          width: 140px;
          height: 48px;
          margin-top: 50px;
          strong {
            font-size: 18px;
          }
        }
        .date {
          font-size: 16px;
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
      .imgCon {
        width: 220px;
        height: 123px;
      }
      .SecondText {
        width: 220px;
        .title {
          font-size: 14px;
        }
        .subTitle {
          font-size: 16px;
        }
      }
    }
  }
  .SwiperBtn {
    top: -160px;
    --swiper-navigation-size: 44px;
  }
  .swiper-slide-thumb-active .imgCon {
    height: 114px !important;
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .HomeLongVod {
    margin-top: 100px;
  }
  .TextCon {
    width: 1080px;
    margin: auto;
    .title {
      font-size: 30px;
    }
    .viewMore {
      font-size: 18px;
    }
  }
  .FirstSwiper {
    width: 1080px;
    .FirstCon {
      height: 350px;
      .FirstText {
        margin-left: 50px;
        width: 360px;
        .title {
          font-size: 18px;
          margin-bottom: 20px;
        }
        .subTitle {
          font-size: 22px;
        }
        .GoToChannelBtn {
          width: 140px;
          height: 48px;
          margin-top: 50px;
          strong {
            font-size: 18px;
          }
        }
        .date {
          font-size: 16px;
        }
      }
    }
  }
  .SecondSwiper {
    width: 980px;
    height: 140px;
    margin-bottom: 50px;
    .SecondCon {
      width: 160px;
      .imgCon {
        width: 160px;
        height: 90px;
      }
      .SecondText {
        width: 160px;
        .title {
          font-size: 14px;
        }
        .subTitle {
          font-size: 16px;
        }
      }
    }
  }
  .SwiperBtn {
    top: -125px;
    --swiper-navigation-size: 35px;
  }
  .swiper-slide-thumb-active .imgCon {
    height: 90px !important;
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .HomeLongVod {
    margin-top: 50px;
  }
  .TextCon {
    width: 760px;
    margin: auto;
    .title {
      font-size: 24px;
    }
    .viewMore {
      font-size: 16px;
    }
  }
  .FirstSwiper {
    width: 760px;
    .FirstCon {
      height: 260px;
      .FirstText {
        margin-left: 10px;
        width: 260px;
        .title {
          font-size: 16px;
          margin-bottom: 15px;
        }
        .subTitle {
          font-size: 18px;
        }
        .GoToChannelBtn {
          width: 100px;
          height: 35px;
          margin-top: 30px;
          strong {
            font-size: 15px;
          }
        }
        .date {
          font-size: 14px;
        }
      }
    }
  }
  .SecondSwiper {
    width: 680px;
    height: 115px;
    margin-bottom: 30px;
    .SecondCon {
      width: 154px;
      .imgCon {
        width: 154px;
        height: 90px;
      }
      .SecondText {
        width: 154px;
        .title {
          font-size: 14px;
        }
        .subTitle {
          display: none !important;
          font-size: 16px;
        }
      }
    }
  }
  .SwiperBtn {
    top: -95px;
    --swiper-navigation-size: 30px;
  }
  .swiper-slide-thumb-active .imgCon {
    height: 80px !important;
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
}

.HomeLongVod {
  display: grid;
  justify-content: center;
}
.TextCon {
  display: flex;
  justify-content: space-between;
  .title {
    font-family: "Pretendard-Regular";
    font-weight: bold;
  }
  .viewMore {
    font-family: sans-serif;
    font-weight: bold;
    color: #805bea;
    text-decoration: none;
  }
}
.FirstSwiper {
  margin-top: 30px;
  margin-bottom: 50px;

  .FirstCon {
    display: flex;
    align-items: center;

    .FirstImg {
    }
    .FirstText {
      overflow: hidden;
      margin-left: 80px;
      width: 360px;
      .title {
        color: #b0b0b0;
        font-family: "Pretendard-Regular";
      }
      .subTitle {
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
        border-radius: 50px;
        border: solid 1px #805bea;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        strong {
          font-family: "Pretendard-Regular";
          color: #805bea;
        }
      }
      .date {
        font-family: "Pretendard-Regular";
        margin-top: 15px;
        color: #b0b0b0;
      }
    }
  }
}
.SecondSwiper {
  .SecondCon {
    cursor: pointer;
    .imgCon {
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
      .title {
        color: #b0b0b0;
        font-family: "Pretendard-Regular";
      }
      .subTitle {
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
  --swiper-theme-color: black;
}
.swiper-slide-thumb-active .imgCon {
  border: solid 5px #805bea;
}

.SecondCon:hover {
  .SecondImg {
    transform: scale(1.2);
  }
}
</style>
