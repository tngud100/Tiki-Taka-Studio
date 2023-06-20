<template>
  <section class="info-section">
    <div class="info-con">
      <div class="container">
        <div class="content">
          <span class="company">우리의 회사는</span>
          <span class="Title"> ABOUT US </span>
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
            <router-link to="/intro">
              <div class="btn"><span class="btn-text">VIEW MORE</span></div>
            </router-link>
          </div>
        </div>
        <div class="desc-image">
          <img :src="infoPhone" alt="phone" style="width: 100%; height: 100%" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeInfo",
  data() {
    return {
      infoPhone: require("@/assets/info/infophone.svg"),
    };
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
    width: 1000px;
    padding: 100px 0px 50px 0px;
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
        .desc-image {
          width: 350px;
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
    width: 800px;
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
        width: 330px;
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
        width: 330px;
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
      }
    }
  }
}
.info-section {
  width: 100%;
  background-size: cover;
  background-position: center;
  .info-con {
    display: flex;
    justify-content: center;
    margin: auto;
    .container {
      width: 100%;
      .content {
        display: grid;
      }

      .company {
        font-family: "Pretendard-Regular";
        font-weight: bold;
        color: rgb(0, 0, 0);
        margin: 0px 0px 10px 0px;
      }
      .Title {
        margin: 0px 0px 10px 0px;
        font-family: "Pretendard-Regular";
        font-weight: bold;
        color: rgb(0, 0, 0);
      }
      .text-con {
        margin: 20px 0px 10px 0px;
        .describe {
          display: grid;
          justify-content: left;
          align-items: center;
          .desc-text {
            font-family: "Pretendard-Regular";
            color: rgb(0, 0, 0);
          }
        }
      }
      .btn-box {
        margin: 20px 0px 10px 0px;
        .btn {
          border: solid 1px rgb(0, 0, 0);
          display: flex;
          justify-content: center;
          text-align: center;
          align-items: center;

          cursor: pointer;
          .btn-text {
            font-family: "sans-serif";
            color: rgb(0, 0, 0);
          }
        }
        a {
          text-decoration: none;
        }
        .btn:hover {
          background-color: #f3f2ff;
          color: black;
          .btn-text {
            color: rgb(2, 2, 2);
          }
        }
      }
    }
  }
}
</style>
