<template>
  <div
    class="title-text"
    :style="{ backgroundImage: `url(${currentBgImage})` }"
  >
    <!-- <span class="main-title">{{ titleData }}</span> -->
  </div>
</template>

<script>
// import { debounce } from 'lodash';

export default {
  name: "SubTitle",
  props: {
    titleData: String,
    bgImage: Array,
  },
  data() {
    return {
      currentBgImage: "",
    };
  },
  methods: {
    handleResize() {
      const width = window.innerWidth;
      console.log(this.bgImage[0]);
      console.log(this.bgImage[1]);
      console.log(this.bgImage[2]);

      if (width > 1300) {
        this.currentBgImage = this.bgImage[0];
      } else if (width > 760) {
        this.currentBgImage = this.bgImage[1];
      } else {
        this.currentBgImage = this.bgImage[2];
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="scss" scoped>
.title-text {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 320px;
  position: relative;
  background-position: center center;
  background-size: cover;
  // background-color: cadetblue;
  .main-title {
    font-family: "Pretendard-Regular";
    font-weight: bold;
    color: rgb(129, 129, 129);
  }
}

//PC XL
@media screen and (min-width: 1300px) {
  .main-title {
    font-size: 80px;
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .main-title {
    font-size: 72px;
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .main-title {
    font-size: 68px;
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .main-title {
    font-size: 60px;
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .main-title {
    font-size: 55px;
  }
}
</style>
