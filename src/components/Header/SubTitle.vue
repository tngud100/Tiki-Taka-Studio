<template>
  <div
    class="title-text"
    :style="{ backgroundImage: `url(${currentBgImage})` }"
  >
    <div class="text-con">
      <span class="sub-title">{{ subTitleData }}</span>
      <span class="main-title">{{ titleData }}</span>
    </div>
  </div>
</template>

<script>
// import { debounce } from 'lodash';

export default {
  name: "SubTitle",
  props: {
    titleData: String,
    subTitleData: String,
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
  align-items: end;
  padding-bottom: 12px;
  width: 100%;
  height: 320px;
  position: relative;
  background-position: center center;
  background-size: cover;
  // background-color: cadetblue;
  .text-con {
    justify-content: left;
    display: grid;
  }
  .main-title {
    margin: 0px auto;
    font-family: "Pretendard-Regular";
    font-weight: bold;
    color: rgb(255, 255, 255);
  }
  .sub-title {
    font-family: "Pretendard-Regular";
    font-weight: bold;
    color: rgb(255, 255, 255);
  }
}

//PC XL
@media screen and (min-width: 1300px) {
  .text-con {
    width: 1300px;
  }
  .main-title {
    font-size: 48px;
  }
  .sub-title {
    font-size: 24px;
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .text-con {
    width: 1080px;
  }
  .main-title {
    font-size: 42px;
  }
  .sub-title {
    font-size: 20px;
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .text-con {
    width: 760px;
  }
  .main-title {
    font-size: 38px;
  }
  .sub-title {
    font-size: 18px;
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .text-con {
    justify-content: center !important;
    width: 640px;
  }
  .main-title {
    font-size: 35px;
  }
  .sub-title {
    text-align: center;
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .text-con {
    justify-content: center !important;
    width: 640px;
  }
  .main-title {
    font-size: 35px;
  }
  .sub-title {
    text-align: center;
  }
}
</style>
