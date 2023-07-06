<template>
  <section class="film-section">
    <div class="title-con">
      <p class="kategori">영상 제작</p>
      <p class="desc">약 100평의 공간과 장비를 합리적인 가격에 대여</p>
      <div class="img-con">
        <img :src="process" alt="Process" class="process-img" />
      </div>
      <!-- <span class="prepare">준비중입니다</span> -->
    </div>
  </section>
</template>

<script>
export default {
  name: "MakeFilmPage",
  data() {
    return {
      process: require("@/assets/studio/makeFilmProcess.svg"),
    };
  },
};
</script>

<style lang="scss" scoped>
//PC XL
@media screen and (min-width: 1300px) {
  .title-con {
    margin: 100px 0px;
    .kategori {
      font-size: 20px;
    }
    .desc {
      padding: 20px;
      font-size: 20px;
    }
    .img-con {
      width: 1000px;
      padding-top: 60px;
    }
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .title-con {
    margin: 100px 0px;
    .kategori {
      font-size: 20px;
    }
    .desc {
      padding: 20px;
      font-size: 20px;
    }
    .img-con {
      width: 1000px;
      padding-top: 60px;
    }
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .title-con {
    margin: 70px 0px;
    .kategori {
      font-size: 20px;
    }
    .desc {
      padding: 15px;
      font-size: 20px;
    }
    .img-con {
      width: 700px;
      padding-top: 60px;
    }
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .title-con {
    margin: 50px 0px;
    .kategori {
      font-size: 20px;
    }
    .desc {
      padding: 10px;
      font-size: 20px;
    }
    .img-con {
      width: 600px;
      padding-top: 60px;
    }
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .title-con {
    margin: 50px 0px;
    .kategori {
      font-size: 20px;
    }
    .desc {
      padding: 10px;
      font-size: 16px;
    }
    .img-con {
      width: calc(100% - 40px);
      padding-top: 40px;
    }
  }
}

.film-section {
  .title-con {
    .kategori {
      text-align: center;
      font-family: "Pretendard-Regular";
      font-weight: bold;
    }
    .desc {
      text-align: center;
      font-family: "Pretendard-Regular";
    }
    .img-con {
      margin: auto;
      .process-img {
        width: 100%;
        height: 100%;
      }
    }

    // .prepare {
    //   text-align: center;
    //   font-family: "Pretendard-Regular";
    //   font-weight: bold;
    //   font-size: 24px;
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    //   margin-top: 100px;
    //   color: #c1c1c1;
    // }
  }
}
</style>
