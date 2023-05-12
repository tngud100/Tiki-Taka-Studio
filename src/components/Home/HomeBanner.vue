<template>
  <section class="banner-section">
    <div class="carousel">
      <div class="image-container" id="imgs">
        <img :src="img.src" v-for="(img, index) in imgs" :key="index" />
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
          src: require("@/assets/banner/youtube.svg"),
        },
        {
          src: require("@/assets/banner/youtube.svg"),
        },
        {
          src: require("@/assets/banner/youtube.svg"),
        },
        {
          src: require("@/assets/banner/youtube.svg"),
        },
      ],
      menuL: [
        {
          name: "커뮤니티",
          href: "/",
        },
        {
          name: "유튜브",
          href: "/",
        },
        {
          name: "SNS",
          href: "/",
        },
      ],
      menuR: [
        {
          name: "광고문의",
          href: "/",
        },
        {
          name: "이벤트",
          href: "/",
        },
        {
          name: "편성표",
          href: "/",
        },
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
      imgs.style.transform = `translateX(${-idx * window.innerWidth}px)`;
      setTimeout(run, 5000);
    }
    run();
  },
};
</script>

<style lang="scss" scoped>
.banner-section {
  .filter {
    background-color: rgba(0, 0, 0, 0.3);
    -webkit-mask-image: linear-gradient(-355deg, transparent 64%, black 68%);
    position: absolute;
    top: 0;
    width: 100vw;
    height: 540px;
  }
  .carousel {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    overflow: hidden;

    .image-container {
      display: flex;
      transition: transform 0.5s ease-in-out;
      transform: translateX(0);
      img {
        object-fit: cover;
        z-index: -1;

        // -webkit-mask-image: linear-gradient(-5.5deg, transparent 20%, black 21%);
        // mask-image: linear-gradient(-5.5deg, transparent 20%, black 21%);
      }
    }

    // .text-container {
    //   position: absolute;
    //   top: 15%;
    //   width: 100%;
    //   padding: 10px;
    //   .menu-list {
    //     display: flex;
    //     justify-content: space-between;
    //     width: 80%;
    //     margin: auto;
    //     list-style-type: none;
    //     .left-list {
    //       justify-content: left;
    //     }
    //     .right-list {
    //       justify-content: right;
    //     }
    //     .btn {
    //       display: flex;
    //     }
    //     a {
    //       font-family: "Pretendard-Regular";
    //       font-size: 24px;
    //       font-weight: bold;
    //       color: white;
    //     }
    //   }
    // }
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
