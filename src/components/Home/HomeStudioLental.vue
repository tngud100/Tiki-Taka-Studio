<template>
  <section class="studioLental-section">
    <div class="Title-con">
      <span class="title">콘텐츠 맞춤 대여 서비스</span>
    </div>
    <div class="Schedule-con">
      <div class="TextCon">
        <p class="textTitle">고객 맞춤 스튜디오 대여</p>
        <p class="subTitle">서비스를 한 눈에</p>
        <a class="viewMore" href="https://www.youtube.com/@tikintaka/playlists"
          ><strong>자세히 보기</strong></a
        >
      </div>
      <div class="swiper" ref="bannerRef">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide slide-con"
            v-for="(item, index) in schedule"
            :key="index"
          >
            <img :src="item.src" class="banner-img" />
          </div>
        </div>
      </div>
      <div class="studioBtn">
        <div
          class="studio-button-prev swiper-button-prev"
          style="
            width: 77px;
            height: 77px;
            background-color: whitesmoke;
            left: -50px;
            top: -20px;
          "
        ></div>
        <div
          class="studio-button-next swiper-button-next"
          style="
            width: 77px;
            height: 77px;
            background-color: whitesmoke;
            right: -104px;
            top: -20px;
          "
        ></div>
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
  name: "HomeStudioLental",
  data() {
    return {
      schedule: [
        {
          src: require("@/assets/pairing/mon/Top피파.svg"),
          title: "TOP피파",
          subTitle: "대한민국 최고의 프로게이머를 찾아보는 시간",
        },
        {
          src: require("@/assets/pairing/mon/TSL.svg"),
          title: "TOP피파",
          subTitle: "대한민국 최고의 프로게이머를 찾아보는 시간",
        },
        {
          src: require("@/assets/pairing/mon/피파의모든것.svg"),
          title: "TOP피파",
          subTitle: "대한민국 최고의 프로게이머를 찾아보는 시간",
        },
        {
          src: require("@/assets/pairing/mon/피파의모든것.svg"),
          title: "TOP피파",
          subTitle: "대한민국 최고의 프로게이머를 찾아보는 시간",
        },
      ],
    };
  },
  mounted() {},

  setup() {
    const bannerRef = ref(null);

    onMounted(() => {
      bannerRef.value = new Swiper(bannerRef.value, {
        direction: "horizontal",
        loop: false,
        mousewheel: false,
        speed: 300,
        slidesPerView: 2,
        slidesPerGroup: 2,

        navigation: {
          prevEl: ".studio-button-prev",
          nextEl: ".studio-button-next",
        },
      });
    });

    // function prevThumbsSwiper() {
    //   // if (this.SwiperNum <= 0) {
    //   //   return;
    //   // }

    //   if (this.bannerRef.value) {
    //     console.log(this.bannerRef.value);
    //     this.bannerRef.value.slideTo(0);
    //     this.bannerRef.value.slideTo(1);
    //   }
    // }
    // function nextThumbsSwiper() {
    //   // if (this.SwiperNum >= this.SwiperImages.length - 1) {
    //   //   return;
    //   // }

    //   if (this.bannerRef.value) {
    //     bannerRef.value.slideTo(1);
    //     bannerRef.value.slideTo(2);
    //   }
    // }
    return {
      bannerRef,
      // prevThumbsSwiper,
      // nextThumbsSwiper,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.studioLental-section {
  width: 100%;
  display: grid;
  margin-top: 100px;
  margin-bottom: 60px;
  justify-content: center;
  .Title-con {
    margin-bottom: 20;
    .title {
      font-family: "Pretendard-Regular";
      font-size: 30px;
      font-weight: bold;
    }
  }
  .Schedule-con {
    position: relative;
    width: 1300px;
    height: 380px;
    display: flex;
    justify-content: right;
    border: solid 6px #f5f5f5;
    border-radius: 5px;
    .TextCon {
      width: 210px;
      height: auto;
      margin-left: 50px;
      margin-right: 93px;
      margin-top: 50px;
      .textTitle {
        font-family: "Pretendard-Regular";
        font-size: 22px;
        font-weight: bold;
      }
      .subTitle {
        font-family: "Pretendard-Regular";
        font-size: 18px;
      }
      .viewMore {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 140px;
        height: 48px;
        margin-top: 50px;
        border-radius: 50px;
        border: solid 1px #805bea;
        text-decoration: none;

        strong {
          font-size: 18px;
          font-family: "Pretendard-Regular";
          font-weight: bold;
          color: #805bea;
        }
      }
    }
    .studioBtn {
      position: absolute;
      display: flex;
      --swiper-theme-color: black;
      z-index: 0;
      left: 50px;
      bottom: 35px;
      font-size: 25px;
    }
    .swiper {
      width: 920px;
    }
    .slide-con {
      display: flex;
      justify-content: center;
      align-items: center;
      .banner-img {
        width: 445px;
        height: 282px;
        object-fit: cover;
        border-radius: 5px;
      }
    }

    .swiper-btn {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      right: 0;
      bottom: 0;
    }
  }
}
</style>
