<template>
  <section class="Main-section">
    <div class="carousel">
      <div class="image-container" id="imgs">
        <img :src="img.src" v-for="(img, index) in imgs" :key="index" />
      </div>
      <div class="text-container">
        <span class="Title">방송매체 </span>
        <span class="Sub-Title"></span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      imgs: [
        {
          src: require("@/assets/banner/YoutubeChannel.svg"),
        },
        {
          src: require("@/assets/banner/YoutubeChannel.svg"),
        },
        {
          src: require("@/assets/banner/YoutubeChannel.svg"),
        },
        {
          src: require("@/assets/banner/YoutubeChannel.svg"),
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
.Main-section {
  margin-top: 50px;
}
.carousel {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}
.image-container {
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(0);

  img {
    object-fit: cover;
  }
}
</style>
