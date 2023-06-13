<template>
  <section class="banner-section">
    <div class="carousel">
      <div class="image-container" id="imgs">
        <video :controls="false" muted autoplay loop class="banner-img">
          <source :src="mov" type="video/mp4" />
        </video>
        <!-- <div class="banner-img"></div> -->
        <!-- <img
          :src="img.src2560"
          v-for="(img, index) in imgs"
          :key="index"
          style="max-width: 100%; max-height: 100%; object-fit: cover"
        /> -->
      </div>
      <div class="filter" />
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap/all";
export default {
  name: "HomeBanner",
  data() {
    return {
      mov: require("@/assets/banner/1920_2.mp4"),
      // imgs: [
      //   {
      //     src2560: require("@/assets/banner/banner2560.svg"),
      //     src1920: require("@/assets/banner/banner1920.svg"),
      //     src320: require("@/assets/banner/banner320.svg"),
      //   },
      //   {
      //     src: require("@/assets/banner/mainBanner.svg"),
      //   },
      // {
      //   src: require("@/assets/banner/youtubetiki.svg"),
      // },
      // {
      //   src: require("@/assets/banner/youtubetiki.svg"),
      // },
      // ],
    };
  },
  mounted() {
    let tl = gsap.timeline();
    tl.to(".image-container", {
      height: "600px",
      ease: 0.5,
      duration: 1.3,
      delay: 4.5,
    });
    // const banner = document.getElementById("image-container");
    // const img = document.querySelectorAll("#imgs img");
    //   let idx = 0;
    //   function run() {
    //     idx++;
    //     if (idx >= img.length) {
    //       idx = 0;
    //     }
    //     imgs.style.transform = `translateX(${-idx * imgs.clientWidth}px)`;
    //     setTimeout(run, 5000);
    //   }
    //   run();
  },
};
</script>

<style lang="scss" scoped>
//PC XL
@media screen and (min-width: 1300px) {
  .image-container {
    height: 600px;
    .banner-img {
    }
  }
}
// PC
@media screen and (min-width: 760px) and (max-width: 1300px) {
  .image-container {
    height: 600px;
    .banner-img {
    }
  }
}
//노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .image-container {
    height: 600px;

    .banner-img {
    }
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 760px) {
  .image-container {
    height: 320px !important;
    .banner-img {
    }
  }
}

.banner-section {
  .carousel {
    // box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    width: 100%;
    height: auto;

    .image-container {
      display: flex;
      transition: transform 0.5s ease-in-out;
      transform: translateX(0);
      width: 100%;
      height: 100%;
      .banner-img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        // background-size: cover;
        // background-position: center;
      }
    }
    .filter {
      background-color: rgba(0, 0, 0, 0.3);
      -webkit-mask-image: linear-gradient(-355deg, transparent 64%, black 68%);
      position: absolute;
      top: 0;
    }
  }
}
.Title {
}
.Sub-Title {
  font-size: 16px;
  font-weight: 400;
}

a {
  text-decoration: none;
}
@keyframes openingPC {
  from {
    height: 100vh;
  }
  to {
    height: 600px;
  }
}
@keyframes openingMobile {
  from {
    height: 100vh;
  }
  to {
    height: 320px;
  }
}
</style>
