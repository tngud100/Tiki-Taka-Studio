<template>
  <section class="HomeVod">
    <div class="title-con">
      <div class="bgIcon">
        <img :src="bgicon" alt="bgIcon" />
      </div>
      <p class="company">우리의 이야기는</p>
      <p class="title">Our Program</p>
      <p class="subtitle">저희는 자체적인 프로그램으로 다양한 영상을</p>
      <p class="subtitle">
        지속적으로 꾸준히 업로드하고 콘텐츠를 제작하고 있습니다.
      </p>
      <div class="btn-box">
        <router-link to="/intro">
          <div class="btn"><span class="btn-text">VIEW MORE</span></div>
        </router-link>
      </div>
    </div>

    <carousel-3d :display="3">
      <Slide v-for="(slide, i) in videoUrl" :key="slide" :index="i">
        <iframe
          borderRadius="5px"
          :src="slide"
          allow="geolocation"
          frameborder="0"
          allowfullscreen
          class="YoutubePlayer"
        ></iframe>
      </Slide>
    </carousel-3d>
  </section>
</template>

<script>
import { Carousel3d, Slide } from "vue3-carousel-3d";

export default {
  name: "HomeSwiperVod",
  components: {
    Carousel3d,
    Slide,
  },

  data() {
    return {
      bgicon: require("@/assets/service/bg_element1.svg"),
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
    };
  },
};
</script>

<style lang="scss" scoped>
.HomeVod {
  width: 1200px;
  display: flex;
  margin: 250px auto 200px;
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
    color: #101010;
  }
  .title {
    font-family: "Pretendard-Regular";
    font-size: 30px;
    font-weight: bold;
    color: #101010;
    padding-bottom: 18px;
  }
  .subtitle {
    font-family: "Pretendard-Regular";
    font-size: 18px;
    color: #101010;
  }
}
.btn-box {
  width: 50%;
  margin: 20px 0px 10px 0px;
  .btn {
    width: 150px;
    height: 50px;
    border: solid 1px rgb(0, 0, 0);
    justify-content: center;
    text-align: center;
    align-items: center;
    display: flex;
    border-radius: 5px;

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
    border: solid 1px #805bea;
    color: #805bea;
    .btn-text {
      color: #805bea;
    }
  }
}
.carousel-3d-container {
  width: 75%;
  margin-left: 50px;
  // height: 200px !important;
  .carousel-3d-slider {
    width: 500px !important;
    aspect-ratio: 16 / 9 !important;
    .carousel-3d-slide {
      width: 100% !important;
      .YoutubePlayer {
        width: 100%;
        height: 100%;
        aspect-ratio: 16 / 9;
        pointer-events: none;
      }
    }
    .current {
      .YoutubePlayer {
        pointer-events: auto !important;
      }
    }
  }
}
</style>
