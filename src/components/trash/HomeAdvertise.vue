<template>
  <section class="advertise-section">
    <div class="adver-con"><img :src="banner.img" class="img" /></div>
  </section>
</template>

<script>
export default {
  name: "HomeAdvertise",
  data() {
    return {
      banner: {
        img: require("@/assets/banner/belem.svg"),
      },
    };
  },
};
</script>

<style lang="scss" scoped>
//PC XL
@media screen and (min-width: 1300px) {
  .adver-con {
    width: 1300px;
  }
  .img {
    width: 1260px;
    height: 150px;
    object-fit: cover;
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .adver-con {
    width: 1080px;
  }
  .img {
    width: 1080px;
    height: 150px;
    object-fit: cover;
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .adver-con {
    width: 760px;
  }
  .img {
    width: 760px;
    height: 150px;
    object-fit: cover;
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .adver-con {
    width: 640px;
  }
  .img {
    width: 640px;
    height: 150px;
    object-fit: cover;
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .adver-con {
    width: 320px;
  }
  .img {
    width: 320px;
    height: 150px;
    object-fit: cover;
  }
}
.advertise-section {
  margin: 50px 0;
  display: flex;
  justify-content: center;
  width: 100%;
  .adver-con {
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    // background-color: rgb(167, 192, 192);
  }
}
</style>
