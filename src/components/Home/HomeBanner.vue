<template>
  <section class="banner-section">
    <div class="carousel">
      <div class="image-container" id="imgs">
        <img
          :src="img.src"
          v-for="(img, index) in imgs"
          :key="index"
          style="max-width: 100%; max-height: 100%; object-fit: contain"
        />
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
      imgs: [
        {
          src: require("@/assets/banner/mainBanner.svg"),
        },
        {
          src: require("@/assets/banner/mainBanner.svg"),
        },
        // {
        //   src: require("@/assets/banner/youtubetiki.svg"),
        // },
        // {
        //   src: require("@/assets/banner/youtubetiki.svg"),
        // },
      ],
    };
  },
  mounted() {
    const imgs = document.getElementById("imgs");
    const img = document.querySelectorAll("#imgs img");
    let idx = 0;
    function run() {
      idx++;
      if (idx >= img.length) {
        idx = 0;
      }
      imgs.style.transform = `translateX(${-idx * imgs.clientWidth}px)`;
      setTimeout(run, 5000);
    }
    run();
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 760px) {
  .banner-section {
    top: 0;
  }
}
// 테블릿
@media screen and (max-width: 760px) {
  .banner-section {
  }
}
// 모바일
@media screen and (min-width: 320px) and (max-width: 759px) {
  .banner-section {
  }
}

.banner-section {
  .carousel {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    width: 100%;
    height: auto;

    .image-container {
      display: flex;
      transition: transform 0.5s ease-in-out;
      transform: translateX(0);
      width: 100%;
      height: 100%;
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
