<template>
  <section class="HomeLongVod">
    <!-- <div class="title-con">
      <div class="bgIcon">
        <img :src="bgicon" alt="bgIcon" />
      </div>
      <p class="company">우리의 이야기는</p>
      <p class="title">Our Program</p>
      <p class="subtitle">저희는 자체적인 프로그램으로 다양한 영상을</p>
      <p class="subtitle">
        지속적으로 꾸준히 업로드하고 콘텐츠를 제작하고 있습니다.
      </p>
    </div>
    <div class="btn-box">
      <router-link to="/intro">
        <div class="btn"><span class="btn-text">VIEW MORE</span></div>
      </router-link>
    </div>-->
    <div class="TextCon">
      <span class="title"></span>
      <a class="viewMore" href="https://www.youtube.com/@tikintaka"
        >VIEW MORE +</a
      >
    </div>
    <swiper
      @swiper="setThumbsSwiper"
      :spaceBetween="10"
      :thumbs="{ swiper: thumbsSwiper2 }"
      :modules="modules"
      :allowTouchMove="true"
      class="FirstSwiper"
    >
      <swiper-slide
        :class="'FirstCon slide' + index"
        v-for="(item, index) in SwiperImages"
        :key="index"
      >
        <iframe
          borderRadius="5px"
          :src="videoUrl[item.num]"
          allow="geolocation"
          frameborder="0"
          allowfullscreen
          class="YoutubePlayer"
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
          slidesPerView: 2.2,
          spaceBetween: 10,
        },
        360: {
          slidesPerView: 2.5,
          spaceBetween: 13,
        },
        400: {
          slidesPerView: 2.8,
          spaceBetween: 14,
        },
        500: {
          slidesPerView: 3.3,
          spaceBetween: 14,
        },
        640: {
          slidesPerView: 3.5,
          spaceBetween: 15,
        },
        760: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1080: {
          slidesPerView: 5,
          spaceBetween: 20,
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
      bgicon: require("@/assets/service/bg_element1.svg"),
      players: [],
      thumbsSwiper: null,
      thumbsSwiper2: null,
      SwiperNum: 0,
      modules: [FreeMode, Navigation, Thumbs, Scrollbar],
      videoUrl: [
        "https://www.youtube.com/embed/dVyLFjjs3J4?rel=0&enablejsapi=1",
        "https://www.youtube.com/embed/AjBQvuHZ86o?rel=0&enablejsapi=1",
        "https://www.youtube.com/embed/-TZdot4JA7w?rel=0&enablejsapi=1",
        "https://www.youtube.com/embed/E16qlkAKwtY?rel=0&enablejsapi=1",
        "https://www.youtube.com/embed/1gED0_NSmXU?rel=0&enablejsapi=1",
        "https://www.youtube.com/embed/xJAKV0DVlWE?rel=0&enablejsapi=1",
        "https://www.youtube.com/embed/auUgzMmrqP8?rel=0&enablejsapi=1",
        "https://www.youtube.com/embed/wh-DCVr1wOY?rel=0&enablejsapi=1",
        "https://www.youtube.com/embed/NIRhxNNKXdE?rel=0&enablejsapi=1",
        "https://www.youtube.com/embed/Tl_oXL9YQEM?rel=0&enablejsapi=1",
      ],
      SwiperImages: [
        {
          img: require("@/assets/thumbnail/thumbnail10.webp"),
          subTitle:
            "박찬우 임형철이 말하는 인테르 vs 맨시티 22챔스 떡상 선수 l [피파의 모든것 10화]",
          link: "https://www.youtube.com/watch?v=dVyLFjjs3J4",
          // hoverImage: false,
          date: "2023. 6. 10",
          num: 0,
        },
        {
          img: require("@/assets/thumbnail/thumbnail09.jpg"),
          subTitle:
            "박찬우 임형철이 말하는 인테르 vs 맨시티 우승팀 l [피파의 모든것 9화]",
          link: "https://www.youtube.com/watch?v=AjBQvuHZ86o",
          date: "2023. 6. 08",
          num: 1,
        },
        {
          img: require("@/assets/thumbnail/thumbnail08.webp"),
          subTitle:
            "한준희가 말하는 아이콘 모먼트 최고의 선수 l [피파의 모든것 8화]",
          link: "https://www.youtube.com/watch?v=-TZdot4JA7w",
          date: "2023. 6. 06",
          num: 2,
        },
        {
          img: require("@/assets/thumbnail/thumbnail07.webp"),
          subTitle:
            "한준희가 말하는 아이콘 모먼트 양발선수 l [피파의 모든것 7화]",
          link: "https://www.youtube.com/watch?v=E16qlkAKwtY",
          date: "2023. 6. 04",
          num: 3,
        },
        {
          img: require("@/assets/thumbnail/thumbnail06.jpg"),
          subTitle: "한준희가 말하는 아이콘 모먼트 평가 l [피파의 모든것 6화]",
          link: "https://www.youtube.com/watch?v=1gED0_NSmXU",
          date: "2023. 6. 01",
          num: 4,
        },
        {
          img: require("@/assets/thumbnail/thumbnail05.webp"),
          subTitle:
            "한준희가 말하는 출시되어야하는 아이콘  l [피파의 모든것 5화]",
          link: "https://www.youtube.com/watch?v=xJAKV0DVlWE",
          date: "2023. 5. 28",
          num: 5,
        },
        {
          img: require("@/assets/thumbnail/thumbnail04.webp"),
          subTitle:
            "한준희가 말하는 아이콘 재평가 Feat. 한국 선수 양발에 대한 생각 l [피파의 모든것 4화]",
          link: "https://www.youtube.com/watch?v=auUgzMmrqP8",
          date: "2023. 5. 27",
          num: 6,
        },
        {
          img: require("@/assets/thumbnail/thumbnail03.webp"),
          subTitle:
            "한준희, 스카우터와 말하는 아이콘 재평가 떡상해야 할 선수들 l [피파의 모든것 3화]",
          link: "https://www.youtube.com/watch?v=wh-DCVr1wOY",
          date: "2023. 5. 21",
          num: 7,
        },
        {
          img: require("@/assets/thumbnail/thumbnail02.jpg"),
          subTitle: "5연속 공식경기 1위의 불가능한 도전 l [TOP피파 1화]",
          link: "https://www.youtube.com/watch?v=NIRhxNNKXdE",
          date: "2023. 5. 14",
          num: 8,
        },
        {
          img: require("@/assets/thumbnail/thumbnail01.webp"),
          subTitle:
            "극강의 가성비! 1,000억 대한민국 활용법 l TSL 우승자 박찬화 득점모음",
          link: "https://www.youtube.com/watch?v=Tl_oXL9YQEM",
          date: "2023. 5. 11",
          num: 9,
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
      .YoutubePlayer {
        width: 694px;
        height: 390px;
      }
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
        width: 210px;
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
      .YoutubePlayer {
        width: 622px;
        height: 350px;
      }
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
      .YoutubePlayer {
        width: 609px;
        height: 260px;
      }
      .FirstText {
        width: 260px;
        .title {
          font-size: 16px;
          margin-bottom: 15px;
          margin-top: 30px !important;
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
  .HomeLongVod {
    margin-top: 50px;
  }
  .TextCon {
    width: 600px;
    margin: auto;
    .title {
      font-size: 24px;
    }
    .viewMore {
      font-size: 16px;
    }
  }
  .FirstSwiper {
    width: 600px;
    margin-bottom: 30px !important;
    .FirstCon {
      display: grid !important;
      height: auto;
      .YoutubePlayer {
        width: 600px;
        height: 338px;
      }
      .FirstText {
        margin-left: 0px !important;
        width: 100% !important;
        padding: 12px !important;
        .title {
          font-size: 16px;
          margin-bottom: 5px;
          margin-top: 30px !important;
        }
        .subTitle {
          font-size: 18px;
          width: 360px;
        }
        .GoToChannelBtn {
          width: 130px;
          height: 45px;
          margin-top: 15px;
          margin-bottom: 30px !important;
          strong {
            font-size: 18px;
          }
        }
        .date {
          font-size: 14px;
          margin-top: 10px !important;
        }
      }
    }
  }
  .SecondSwiper {
    width: 600px;
    height: 115px;
    margin-bottom: 30px;
    .SecondCon {
      .imgCon {
        width: 160px;
        height: 88px;
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
    display: none !important;
    // top: -95px;
    // --swiper-navigation-size: 30px;
  }
  .swiper-slide-thumb-active .imgCon {
    height: 80px !important;
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .HomeLongVod {
    margin: 50px auto 0px auto;
    width: calc(100% - 24px);
  }
  .TextCon {
    width: 100%;
    margin: auto;
    .title {
      font-size: 24px;
    }
    .viewMore {
      font-size: 16px;
    }
  }
  .FirstSwiper {
    width: 100%;
    height: auto;
    margin-bottom: 30px !important;
    .FirstCon {
      display: grid !important;
      height: auto;
      width: 100%;

      .YoutubePlayer {
        width: 100%;
        aspect-ratio: 16 / 9;
      }
      .FirstText {
        margin-left: 0px !important;
        width: 100% !important;
        padding: 0px 12px 0px 12px !important;

        .title {
          font-size: 16px;
          margin-bottom: 5px;
          margin-top: 12px !important;
          padding-top: 12px !important;
        }
        .subTitle {
          font-size: 18px;
          width: 70%;
        }
        .GoToChannelBtn {
          width: 130px;
          height: 45px;
          margin-top: 15px;
          margin-bottom: 30px;
          strong {
            font-size: 18px;
          }
        }
        .date {
          font-size: 14px;
          margin-top: 10px !important;
        }
      }
    }
  }
  .SecondSwiper {
    width: 90%;
    height: 115px;
    .SecondCon {
      .imgCon {
        width: 120px;
        height: 66px;
      }
      .SecondText {
        width: 100%;
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
    display: none !important;
    // top: -95px;
    // --swiper-navigation-size: 30px;
  }
  .swiper-slide-thumb-active .imgCon {
    height: 57px !important;
  }
}

.HomeLongVod {
  display: grid;
  justify-content: center;
  background-image: url(@/assets/Vodbackground.svg);
  z-index: -2;
}
.title-con {
  position: relative;
  text-align: left;
  .bgIcon {
    position: absolute;
    top: 0;
    left: -30px;
    z-index: -1;
  }
  .company {
    font-family: "Pretendard-Regular";
    font-size: 20px;
  }
  .title {
    font-family: "Pretendard-Regular";
    font-size: 38px;
    font-weight: bold;
    padding-bottom: 18px;
  }
  .subtitle {
    font-family: "Pretendard-Regular";
    font-size: 18px;
  }
}
.btn-box {
  margin: 20px 0px 10px 0px;
  .btn {
    width: 150px;
    height: 50px;
    border: solid 1px rgb(0, 0, 0);
    display: none;
    justify-content: center;
    text-align: center;
    align-items: center;

    cursor: pointer;
    .btn-text {
      font-family: "sans-serif";
      color: rgb(0, 0, 0);
    }
  }
  a {
    text-decoration: none;
  }
  .btn:hover {
    background-color: #f3f2ff;
    color: black;
    .btn-text {
      color: rgb(2, 2, 2);
    }
  }
}
.TextCon {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    font-family: "Pretendard-Regular";
    font-weight: bold;
  }
  .viewMore {
    font-family: sans-serif;
    font-weight: bold;
    color: #805bea;
    text-decoration: none;
    text-align: center;
  }
}
.FirstSwiper {
  margin-top: 30px;
  margin-bottom: 50px;

  .FirstCon {
    display: flex;
    align-items: center;
    justify-content: left;

    .FirstImg {
    }
    .FirstText {
      margin-left: 0px;
      width: 360px;
      height: 100%;
      align-items: center;
      padding: 0px 80px;
      background-color: #f3f2ff;

      .title {
        color: #b0b0b0;
        font-family: "Pretendard-Regular";
        margin-top: 60px;
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
  z-index: 0;
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
