<template>
  <section class="service-section">
    <div class="title-con">
      <img :src="bgIcon[0].titleIcon" alt="titleIcon" class="title-icon" />
      <p class="company">우리가 제공하는 것은</p>
      <p class="title">Our Service</p>
      <div class="subTitle-con">
        <p class="subTitle">크리에이터에게 보다 즐겁고 성장하기 쉬운 환경을</p>
        <p class="subTitle">제공하기 위한 아래의 서비스 입니다.</p>
        <p class="subTitle-mobile">
          크리에이터에게 보다 즐겁고 성장하기 쉬운 환경을 제공하기 위한 아래의
          서비스 입니다.
        </p>
      </div>
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
import { gsap, ScrollTrigger } from "gsap/all";

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
          desc: "100평 규모의 스튜디오와",
          desc1: "전문 촬영 장비",
          desc2: "대여",
        },
        {
          class: "education left",
          img: require("@/assets/service/test1.svg"),
          subtitle: "education",
          title: "크리에이터 교육",
          desc: "크리에이터 전문",
          desc1: "강사진의 교육",
          desc2: "자격증 발급",
        },
        {
          class: "advertise right",
          img: require("@/assets/service/test2.svg"),
          subtitle: "advertisement",
          title: "광고 대행",
          desc: "확실한 타깃의 채널을 이용해",
          desc1: "브랜드와 제품을",
          desc2: "효과적으로 마케팅",
        },
      ],
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const service = gsap.timeline({ paused: true });
    const video = gsap.timeline({ paused: true });
    const rental = gsap.timeline({ paused: true });
    const education = gsap.timeline({ paused: true });
    const advertise = gsap.timeline({ paused: true });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".service-section",
        start: "top+=100px bottom",
        end: "+=50%",
        scrub: true,
        onEnter: () => {
          service.play();
        },
      },
    });
    service.to(
      ".service-section > .title-con > .company",
      { duration: 1.5, bottom: 0, opacity: 1 },
      "start"
    );
    service.to(
      ".service-section > .title-con > .title",
      { duration: 1.5, bottom: 0, opacity: 1 },
      "start+=.3"
    );
    service.to(
      ".service-section > .title-con > .subTitle-con",
      { duration: 1.5, bottom: 0, opacity: 1 },
      "start+=.5"
    );

    video.to(".video", { duration: 1, left: 0, opacity: 1 }, "start");
    rental.to(".rental", { duration: 1, right: 0, opacity: 1 }, "start");
    education.to(".education", { duration: 1, left: 0, opacity: 1 }, "start");
    advertise.to(".advertise", { duration: 1, right: 0, opacity: 1 }, "start");

    gsap.timeline({
      scrollTrigger: {
        trigger: ".video",
        start: "top+=100px bottom",
        end: "+=50%",
        scrub: true,
        onEnter: () => {
          video.play();
        },
      },
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: ".rental",
        start: "top+=100px bottom",
        end: "+=50%",
        scrub: true,
        onEnter: () => {
          rental.play();
        },
      },
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: ".education",
        start: "top+=100px bottom",
        end: "+=50%",
        scrub: true,
        onEnter: () => {
          education.play();
        },
      },
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: ".advertise",
        start: "top+=100px bottom",
        end: "+=50%",
        scrub: true,
        onEnter: () => {
          advertise.play();
        },
      },
    });
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
    display: grid;
    padding: 12px;
    .title-icon {
      width: 80px;
      height: 65px;
      display: none;
    }
    .company {
      font-size: 14px;
    }
    .title {
      font-size: 24px;
    }
    .subTitle-con {
      width: 300px;
      .subTitle {
        display: none;
      }
      .subTitle-mobile {
        font-size: 14px;
        display: block !important;
      }
    }
  }
  .container {
    height: 112%;
    .container-bg {
      top: -2%;
    }
    .service-container {
      width: calc(100% - 24px);
      .card {
        .img-con {
          width: 57%;
          padding: 12px;
        }
        .text-con {
          .service-title {
            line-height: 22px;
            padding-bottom: 10px;
            .title {
              font-size: 18px;
              padding-top: 10px;
            }
            .subtitle {
              font-size: 16px;
            }
          }
        }
        .desc-con {
          line-height: 19px;
          .desc {
            font-size: 14px;
          }
        }
      }
      .left {
        .text-con {
        }
      }
      .right {
        .text-con {
        }
      }
      .rental {
        top: 20px;
      }
      .education {
        top: 50px;
      }
      .advertise {
        top: 70px;
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
      bottom: -30px;
      position: relative;
      opacity: 0;
    }
    .title {
      font-weight: bold;
      font-family: "Pretendard-Regular";
      color: #101010;
      bottom: -30px;
      padding: 0px 0px 18px 0px;
      position: relative;
      opacity: 0;
    }
    .subTitle-con {
      position: relative;
      opacity: 0;
      bottom: -45px;
      .subTitle {
        font-family: "Pretendard-Regular";
      }
      .subTitle-mobile {
        font-family: "Pretendard-Regular";
        display: none;
      }
    }
  }
  .container {
    position: relative;
    overflow: hidden;
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
          // text-overflow: ellipsis;
          // overflow: hidden;
          // word-break: break-word;
          // display: -webkit-box;
          // -webkit-box-orient: vertical;
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
        left: -50px;
        position: relative;
        opacity: 0;
        .text-con {
          justify-content: center;
        }
      }
      .right {
        flex-direction: row-reverse;
        right: -50px;
        position: relative;
        opacity: 0;
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
