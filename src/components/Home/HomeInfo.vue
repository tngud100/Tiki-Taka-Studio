<template>
  <section class="info-section">
    <div class="info-con">
      <div class="container">
        <div class="content">
          <span class="company">TNT Studio는</span>
          <p class="Title">Our Studio</p>
          <div class="text-con">
            <span class="describe">
              <div class="desc-text">
                전문성을 두루 갖추어 시청자의 관점에서 보고 싶을 만한 콘텐츠를
                제작하는
                <span class="h3"> 콘텐츠 제작 스튜디오</span>
                입니다.
              </div>
              <br />
            </span>
          </div>
          <div class="btn-box">
            <div class="btn">
              <router-link to="/intro">
                <span class="btn-text">VIEW MORE</span>
              </router-link>
            </div>
          </div>
        </div>
        <div class="desc-image">
          <img :src="infoPhone" alt="phone" style="width: 100%; height: 100%" />
          <img :src="infoPhoneSecondText" alt="phone" class="phone-text2" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap, ScrollTrigger } from "gsap/all";

export default {
  name: "HomeInfo",
  data() {
    return {
      infoPhone: require("@/assets/info/infophone.svg"),
      infoPhoneFirstText: require("@/assets/info/infophone_firstText.svg"),
      infoPhoneSecondText: require("@/assets/info/infophone_afterText.svg"),
      phoneText_pos: "",
      phoneText_width: 0,
    };
  },
  mounted() {
    const viewportWidth = window.innerWidth;
    console.log(viewportWidth);
    if (viewportWidth >= 1300) {
      this.phoneText_pos = "translate3d(-448px, 147px, 10px)";
      this.phoneText_width = 450;
    } else if (viewportWidth < 1300 && viewportWidth >= 1080) {
      this.phoneText_pos = "translate3d(-350px, 115px, 10px)";
      this.phoneText_width = 350;
    } else if (viewportWidth < 1080 && viewportWidth >= 760) {
      this.phoneText_pos = "translate3d(-300px, 98px, 10px)";
      this.phoneText_width = 300;
    } else if (viewportWidth < 760 && viewportWidth >= 640) {
      this.phoneText_pos = "translate3d(-250px, 80px, 10px)";
      this.phoneText_width = 250;
    } else {
      this.phoneText_pos = "translate3d(-23px, -10px, 10px)";
      this.phoneText_width = viewportWidth - 50;
    }

    gsap.registerPlugin(ScrollTrigger);

    const info = gsap.timeline({ paused: true });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".info-section",
        start: "top-=100px center",
        end: "+=50%",
        scrub: true,
        onEnter: () => {
          info.play();
        },
      },
    });
    info.to(
      ".info-con > .container > .content > .company",
      { duration: 1, bottom: 0, opacity: 1 },
      "start"
    );
    info.to(
      ".info-con > .container > .content > .Title",
      { duration: 1, bottom: 0, opacity: 1 },
      "start+=.3"
    );
    info.to(
      ".info-con > .container > .content > .text-con",
      { duration: 1, bottom: 0, opacity: 1 },
      "start+=.5"
    );
    info.to(".btn-box", { duration: 1, bottom: 0, opacity: 1 }, "start+=.7");
    info.to(".desc-image", { duration: 1, right: 0, opacity: 1 }, "start+=.4");
    info.to(
      ".phone-text2",
      {
        duration: 1,
        boxShadow: "0px 0px 7px 5px #EEEEF6",
        width: this.phoneText_width,
        transform: this.phoneText_pos,
      },
      "start+=1.2"
    );
  },
};
</script>

<style lang="scss" scoped>
//PC XL
@media screen and (min-width: 1300px) {
  .info-section {
    background-image: url("@/assets/info/homeBG.svg");
  }
  .info-con {
    width: 1200px;
    padding: 100px 0px 0px 0px;
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .content {
        .company {
          font-size: 18px;
        }
        .Title {
          font-size: 30px;
        }
        .text-con {
          .describe {
            .desc-text {
              width: 350px;
              font-size: 16px;
              .h3 {
                font-size: 16px;
                font-weight: bold;
              }
            }
          }
        }
        .btn-box {
          .btn {
            width: 150px;
            height: 50px;
            .btn-text {
              font-size: 16px;
            }
          }
        }
      }
      .desc-image {
        width: 450px;
        margin: 0px 60px;
        .phone-text2 {
          width: 410px;
          transform: translate3d(-430px, 152px, 10px);
        }
      }
    }
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .info-section {
    background-image: url("@/assets/info/homeBG.svg");
  }
  .info-con {
    width: 1000px;
    padding: 100px 0px 0px 0px;
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .content {
        .company {
          font-size: 18px;
        }
        .Title {
          font-size: 34px;
        }
        .text-con {
          .describe {
            width: 280px;
            font-size: 16px;
            .h3 {
              font-size: 16px;
              font-weight: bold;
            }
          }
        }
      }
      .btn-box {
        .btn {
          width: 150px;
          height: 50px;
          .btn-text {
            font-size: 16px;
          }
        }
      }
      .desc-image {
        width: 350px;
        margin: 0px 50px;
        .phone-text2 {
          width: 315px;
          transform: translate3d(-332px, 121px, 10px);
        }
      }
    }
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .info-section {
    background-image: url("@/assets/info/homeBG.svg");
  }
  .info-con {
    width: 700px;
    padding: 50px 0px 0px 0px;
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .content {
        .company {
          font-size: 16px;
        }
        .Title {
          font-size: 28px;
        }
        .text-con {
          .describe {
            .desc-text {
              width: 200px;
              font-size: 14px;
              .h3 {
                font-size: 14px;
                font-weight: bold;
              }
            }
          }
        }
        .btn-box {
          .btn {
            width: 120px;
            height: 40px;
            .btn-text {
              font-size: 14px;
            }
          }
        }
      }
      .desc-image {
        width: 300px;
        margin: 0px 10px;
        .phone-text2 {
          width: 270px;
          transform: translate3d(-285px, 102px, 10px);
        }
      }
    }
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .info-section {
    background-image: url("@/assets/info/homeBG720.svg");
  }
  .info-con {
    width: 600px;
    padding: 40px 0px 0px 0px;
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .content {
        .company {
          font-size: 16px;
        }
        .Title {
          font-size: 28px;
        }
        .text-con {
          .describe {
            .desc-text {
              width: 200px;
              font-size: 14px;
              .h3 {
                font-size: 14px;
                font-weight: bold;
              }
            }
          }
        }
        .btn-box {
          .btn {
            width: 120px;
            height: 40px;
            .btn-text {
              font-size: 14px;
            }
          }
        }
      }
      .desc-image {
        width: 250px;
        .phone-text2 {
          width: 225px;
          transform: translate3d(-237px, 84px, 10px);
        }
      }
    }
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .info-section {
    background-image: url("@/assets/info/homeBG720.svg");
  }
  .info-con {
    width: calc(100% - 24px);
    padding: 40px 0px 40px 0px;
    .container {
      display: grid;
      justify-content: center;
      align-items: center;
      text-align: center;
      .content {
        .company {
          font-size: 14px;
        }
        .Title {
          font-size: 24px;
          margin: 0px !important;
        }
        .text-con {
          padding: 12px;
          .describe {
            justify-content: center !important;

            .desc-text {
              width: 200px;
              font-size: 14px;
              .h3 {
                font-size: 14px;
                font-weight: bold;
              }
            }
          }
        }
        .btn-box {
          margin: 20px auto 10px auto !important;
          .btn {
            width: 120px;
            height: 40px;
            .btn-text {
              font-size: 14px;
            }
          }
        }
      }
      .desc-image {
        width: calc(100% - 20px);
        margin: 50px auto;
        .phone-text2 {
          width: calc(100% - 40px);
          left: 8%;
          top: 26%;
          transform: translate3d(-15px, 2px, 10px);
        }
      }
    }
  }
}
.info-section {
  width: 100%;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  .info-con {
    display: flex;
    justify-content: center;
    margin: auto;
    .container {
      width: 100%;
      .content {
        display: grid;
      }
      .desc-image {
        position: relative;
        right: -100px;
        opacity: 0;
        .phone-text2 {
          position: absolute;
          box-shadow: 0px 0px 0px 0px #eeeef6;
        }
      }

      .company {
        font-family: "Pretendard-Regular";
        font-weight: bold;
        color: #101010;
        margin: 0px 0px 10px 0px;
        bottom: -30px;
        position: relative;
        opacity: 0;
      }
      .Title {
        margin: 0px 0px 10px 0px;
        font-family: "Pretendard-Regular";
        font-weight: bold;
        color: #101010;
        bottom: -30px;
        position: relative;
        opacity: 0;
      }
      .text-con {
        margin: 20px 0px 10px 0px;
        position: relative;
        opacity: 0;
        bottom: -45px;
        .describe {
          display: grid;
          justify-content: left;
          align-items: center;
          .desc-text {
            font-family: "Pretendard-Regular";
            color: #101010;
          }
        }
      }
      .btn-box {
        margin: 20px 0px 10px 0px;
        position: relative;
        opacity: 0;
        bottom: -45px;
        .btn {
          border: solid 1px #101010;
          border-radius: 5px;
          display: flex;
          justify-content: center;
          text-align: center;
          align-items: center;

          cursor: pointer;
          .btn-text {
            font-family: "sans-serif";
            color: #101010;
          }
        }
        a {
          text-decoration: none;
        }
        .btn:hover {
          border: solid 1px #805bea;
          color: #805bea;
          .btn-text {
            color: #805bea;
          }
        }
      }
    }
  }
}
</style>
