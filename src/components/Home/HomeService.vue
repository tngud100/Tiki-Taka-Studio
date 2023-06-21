<template>
  <section class="service-section">
    <div class="title-con">
      <img :src="bgIcon[0].titleIcon" alt="titleIcon" class="title-icon" />
      <p class="company">우리가 제공하는 것은</p>
      <p class="title">Our Service</p>
      <p class="subTitle">크리에이터에게 보다 즐겁고 성장하기 쉬운 환경을</p>
      <p class="subTitle">
        제공하기 위해 저희는 최선을 다해 지원하고 있습니다.
      </p>
    </div>
    <div class="container">
      <div class="service-container">
        <div
          v-for="(item, index) in service"
          :key="index"
          :class="item.class + ' card'"
        >
          <div class="img-con">
            <img :src="item.img" alt="영상제작img" />
          </div>
          <div class="text-con">
            <div class="service-title">
              <span class="subtitle">{{ item.subtitle }}</span>
              <br />
              <span class="title">{{ item.title }}</span>
            </div>
            <div class="desc-con">
              <p class="desc">{{ item.desc }}</p>
              <p class="desc">{{ item.desc1 }}</p>
              <p class="desc">{{ item.desc2 }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-bg">
        <!-- <div class="bg-icon1">
          <img :src="bgIcon[0].bg1" alt="backIcon1" />
        </div>
        <div class="bg-icon2">
          <img :src="bgIcon[0].bg2" alt="backIcon2" />
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeService",
  data() {
    return {
      bgIcon: [
        {
          titleIcon: require("@/assets/service/bg_element1.svg"),
          bg1: require("@/assets/service/bg_element2.svg"),
          bg2: require("@/assets/service/bg_element3.svg"),
        },
      ],
      service: [
        {
          class: "video left",
          img: require("@/assets/service/test2.svg"),
          subtitle: "video production",
          title: "영상 제작",
          desc: "전문 영상제작팀이",
          desc1: "업체의 목적에 부합하는",
          desc2: "맞춤 영상 제작",
        },
        {
          class: "rental right",
          img: require("@/assets/service/test1.svg"),
          subtitle: "space rental ",
          title: "촬영 공간/장비 대여",
          desc: "100평 규모의",
          desc1: "스튜디오와 전문 촬영",
          desc2: "장비 대여",
        },
        {
          class: "education left",
          img: require("@/assets/service/test1.svg"),
          subtitle: "education",
          title: "크리에이터 교육",
          desc: "크리에이터",
          desc1: "전문 강사진의 교육",
          desc2: "자격증 발급",
        },
        {
          class: "advertise right",
          img: require("@/assets/service/test2.svg"),
          subtitle: "advertisement",
          title: "광고 대행",
          desc: "확실한 타깃의",
          desc1: "채널을 이용해 브랜드와",
          desc2: "제품을 효과적으로 마케팅",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
//PC XL
@media screen and (min-width: 1300px) {
  .title-con {
    width: 1200px;
    margin: 50px auto 30px;
    .title-icon {
      top: -30px;
      left: -40px;
    }
    .company {
      font-size: 20px;
    }
    .title {
      font-size: 30px;
    }
    .subTitle {
      font-size: 18px;
    }
  }
  .container {
    height: 1100px;
    .container-bg {
      top: 5%;
    }
    .service-container {
      width: 1200px;
      .card {
        .img-con {
          width: 400px;
        }
        .text-con {
          .service-title {
            padding-bottom: 16px;
            line-height: 36px;
            .title {
              font-size: 24px;
            }
            .subtitle {
              font-size: 20px;
            }
          }
        }
        .desc-con {
          line-height: 27px;
          .desc {
            font-size: 18px;
          }
        }
      }
      .left {
        .text-con {
          padding-left: 40px;
        }
      }
      .right {
        .text-con {
          padding-right: 40px;
        }
      }
      .rental {
        top: -125px;
      }
      .education {
        top: -300px;
      }
      .advertise {
        top: -450px;
      }
    }
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .title-con {
    width: 1000px;
    margin: 40px auto 30px;
    .title-icon {
    }
    .company {
      font-size: 18px;
    }
    .title {
      font-size: 28px;
    }
    .subTitle {
      font-size: 16px;
    }
  }
  .container {
    height: 850px;
    .container-bg {
      top: 5%;
    }
    .service-container {
      width: 1000px;
      .card {
        .img-con {
          width: 300px;
        }
        .text-con {
          .service-title {
            line-height: 30px;
            padding-bottom: 10px;
            .title {
              font-size: 22px;
            }
            .subtitle {
              font-size: 18px;
            }
          }
        }
        .desc-con {
          line-height: 22px;
          .desc {
            font-size: 16px;
          }
        }
      }
      .left {
        .text-con {
          padding-left: 50px;
        }
      }
      .right {
        .text-con {
          padding-right: 50px;
        }
      }
      .rental {
        top: -100px;
      }
      .education {
        top: -200px;
      }
      .advertise {
        top: -300px;
      }
    }
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .title-con {
    width: 700px;
    margin: 30px auto 30px;
    .title-icon {
      width: 80px;
      height: 65px;
    }
    .company {
      font-size: 18px;
    }
    .title {
      font-size: 28px;
    }
    .subTitle {
      font-size: 16px;
    }
  }
  .container {
    height: 720px;
    .container-bg {
      top: 2%;
    }
    .service-container {
      width: 700px;
      .card {
        .img-con {
          width: 200px;
        }
        .text-con {
          .service-title {
            line-height: 27px;
            padding-bottom: 10px;
            .title {
              font-size: 20px;
            }
            .subtitle {
              font-size: 16px;
            }
          }
        }
        .desc-con {
          line-height: 22px;
          .desc {
            font-size: 14px;
          }
        }
      }
      .left {
        .text-con {
          padding-left: 30px;
        }
      }
      .right {
        .text-con {
          padding-right: 30px;
        }
      }
      .rental {
        top: -20px;
      }
      .education {
        top: -50px;
      }
      .advertise {
        top: -65px;
      }
    }
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .title-con {
    width: 600px;
    margin: 30px auto 50px;
    text-align: center;
    .title-icon {
      width: 80px;
      height: 65px;
      display: none;
    }
    .company {
      font-size: 18px;
    }
    .title {
      font-size: 24px;
    }
    .subTitle {
      font-size: 16px;
    }
  }
  .container {
    height: 1300px;
    .container-bg {
      top: 2%;
    }
    .service-container {
      width: 600px;
      .card {
        .img-con {
          width: 350px;
        }
        .text-con {
          .service-title {
            line-height: 27px;
            padding-bottom: 10px;
            .title {
              font-size: 24px;
            }
            .subtitle {
              font-size: 18px;
            }
          }
        }
        .desc-con {
          line-height: 19px;
          .desc {
            font-size: 16px;
          }
        }
      }
      .left {
        .text-con {
          padding-left: 30px;
        }
      }
      .right {
        .text-con {
          padding-right: 30px;
        }
      }
      .rental {
        top: -20px;
      }
      .education {
        top: -50px;
      }
      .advertise {
        top: -65px;
      }
    }
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .title-con {
    width: 100%;
    margin: 30px auto 50px;
    text-align: center;
    .title-icon {
      width: 80px;
      height: 65px;
      display: none;
    }
    .company {
      font-size: 18px;
    }
    .title {
      font-size: 24px;
    }
    .subTitle {
      font-size: 16px;
    }
  }
  .container {
    height: 1300px;
    .container-bg {
      top: 2%;
    }
    .service-container {
      width: calc(100% -24px);
      .card {
        .img-con {
          width: 65%;
        }
        .text-con {
          .service-title {
            line-height: 27px;
            padding-bottom: 10px;
            .title {
              font-size: 24px;
            }
            .subtitle {
              font-size: 18px;
            }
          }
        }
        .desc-con {
          line-height: 19px;
          .desc {
            font-size: 16px;
          }
        }
      }
      .left {
        .text-con {
          padding-left: 30px;
        }
      }
      .right {
        .text-con {
          padding-right: 30px;
        }
      }
      .rental {
        top: -20px;
      }
      .education {
        top: -50px;
      }
      .advertise {
        top: -65px;
      }
    }
  }
}

.service-section {
  display: grid;
  width: 100%;
  .title-con {
    position: relative;
    .title-icon {
      position: absolute;
      top: -30px;
      left: -40px;
      z-index: -1;
    }
    .company {
      font-weight: bold;
      font-family: "Pretendard-Regular";
      color: #101010;
    }
    .title {
      font-weight: bold;
      font-family: "Pretendard-Regular";
      color: #101010;
      padding: 12px 0px;
    }
    .subTitle {
      font-family: "Pretendard-Regular";
    }
  }
  .container {
    position: relative;
    .container-bg {
      position: absolute;
      background-color: #f3f2ff;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    .service-container {
      margin: auto;
      height: 100%;
      .card {
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        .img-con {
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .text-con {
          display: grid;
          .service-title {
            .title {
              font-weight: bold;
              font-family: "Pretendard-Regular";
            }
            .subtitle {
              font-family: "Pretendard-Regular";
              color: #805bea;
            }
          }
        }
        .desc-con {
          .desc {
            font-family: "Pretendard-Regular";
          }
        }
      }
      .left {
        justify-content: left;
        .text-con {
          justify-content: center;
        }
      }
      .right {
        flex-direction: row-reverse;
        .text-con {
        }
      }
      .rental {
      }
      .education {
      }
      .advertise {
      }
    }
  }
}
</style>
