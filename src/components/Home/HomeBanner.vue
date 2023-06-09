<template>
  <section class="banner-section">
    <div class="carousel">
      <div class="image-container" id="imgs">
        <div class="banner-img"></div>
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
export default {
  name: "HomeBanner",
  data() {
    return {
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
    //   const imgs = document.getElementById("imgs");
    //   const img = document.querySelectorAll("#imgs img");
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
    .banner-img {
      background-image: url("@/assets/banner/banner2560.svg");
      height: 600px !important;
      width: 100%;
    }
  }
}
// PC
@media screen and (min-width: 760px) and (max-width: 1300px) {
  .image-container {
    .banner-img {
      background-image: url("@/assets/banner/banner1300.svg");
      height: 600px !important;
      width: 100%;
    }
  }
}

// 노트북
// @media screen and (min-width: 760px) and (max-width: 1080px) {
//   .image-container {
//     .banner-img {
//       background-image: url("@/assets/banner/banner1920.svg");
//     }
//     height: 600px;
//   }
// }

// 테블릿
// @media screen and (min-width: 640px) and (max-width: 759px) {
//   .image-container {
//     .banner-img {
//       background-image: url("@/assets/banner/banner320.svg");
//     }
//     height: 320px;
//   }
// }

// 모바일
@media screen and (min-width: 320px) and (max-width: 760px) {
  .image-container {
    .banner-img {
      background-image: url("@/assets/banner/banner760.svg");
      height: 320px !important;
      width: 100%;
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
      .banner-img {
        background-size: cover;
        background-position: center;
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
</style>
