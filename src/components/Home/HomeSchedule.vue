<template>
  <section class="schedule-section">
    <div class="Title-con"><span class="title">TNT 프로그램</span></div>
    <div class="Schedule-con">
      <div class="swiper" ref="bannerRef" :style="{}">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide slide-con"
            v-for="(item, index) in schedule"
            :key="index"
          >
            <img :src="item.src" class="banner-img" />
            <div class="TextCon">
              <p class="textTitle">{{ item.title }}</p>
              <p class="subTitle">{{ item.subTitle }}</p>
              <a
                class="viewMore"
                href="https://www.youtube.com/@tikintaka/playlists"
                ><strong>바로가기</strong></a
              >
            </div>
          </div>
        </div>
        <div class="swiper-btn">
          <div
            class="swiper-button-prev swiper-btn"
            style="
              color: black;
              background-color: #f5f5f5;
              position: relative;
              width: 77px;
              height: 77px;
              border-radius: 10px 0px 0px 10px;
            "
          ></div>
          <div
            class="swiper-button-next swiper-btn"
            style="
              color: black;
              background-color: #f5f5f5;
              position: relative;
              width: 77px;
              height: 77px;
            "
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from "vue";
import Swiper from "swiper";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Autoplay]);

export default {
  name: "TestPageTrash",
  data() {
    return {
      schedule: [
        {
          src: require("@/assets/pairing/mon/Top피파.svg"),
          title: "TOP피파",
          subTitle: "대한민국 최고의 프로게이머를 찾아보는 시간",
        },
        {
          src: require("@/assets/pairing/mon/TSL.svg"),
          title: "TOP피파",
          subTitle: "대한민국 최고의 프로게이머를 찾아보는 시간",
        },
        {
          src: require("@/assets/pairing/mon/피파의모든것.svg"),
          title: "TOP피파",
          subTitle: "대한민국 최고의 프로게이머를 찾아보는 시간",
        },
      ],
    };
  },
  mounted() {},

  setup() {
    const bannerRef = ref(null);

    onMounted(() => {
      bannerRef.value = new Swiper(bannerRef.value, {
        direction: "horizontal",
        loop: false,
        mousewheel: false,
        speed: 300,

        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
      });
    });
    return {
      bannerRef,
    };
  },
};
</script>

<style lang="scss" scoped>
//PC XL
// @media screen and (min-width: 1300px) {
//   .announcer-con {
//     width: 450px;
//     margin-left: 20px;
//   }
//   .schedule-con {
//     width: 800px;
//     .text-con {
//       width: 125px;
//       .text-title {
//         font-size: 20px;
//       }
//     }
//     .pairing-box {
//       width: 650px;
//       .date {
//         width: 100px;
//         font-size: 15px;
//       }
//       .detail {
//         width: 550px;
//         .title {
//           font-size: 15px;
//           width: 200px;
//         }
//         .sub-title {
//           font-size: 15px;
//           margin-left: 20px;
//           width: 250px;
//         }
//       }
//     }
//   }
// }
// // PC
// @media screen and (min-width: 1080px) and (max-width: 1300px) {
//   .announcer-con {
//     width: 400px;
//     margin-left: 10px;
//   }
//   .schedule-con {
//     width: 650px;
//     .text-con {
//       width: 75px;
//       .text-title {
//         font-size: 18px;
//       }
//     }
//     .pairing-box {
//       width: 500px;
//       .date {
//         width: 100px;
//         font-size: 13px;
//       }
//       .detail {
//         width: 550px;
//         .title {
//           font-size: 13px;
//           width: 150px;
//         }
//         .sub-title {
//           font-size: 13px;
//           margin-left: 20px;
//           width: 250px;
//         }
//       }
//     }
//   }
// }

// // 노트북
// @media screen and (min-width: 760px) and (max-width: 1080px) {
//   .announcer-con {
//     width: 290px;
//     margin-left: 10px;
//   }
//   .schedule-con {
//     width: 450px;
//     display: grid !important;
//     padding: 0px !important;
//     .text-con {
//       width: 125px;
//       justify-content: left !important;
//       border-right: none !important;

//       .text-title {
//         font-size: 18px;
//       }
//     }
//     .pairing-box {
//       width: 410px;
//       margin-left: 0px !important;

//       .pairing-con {
//         justify-content: left !important;
//       }
//       .date {
//         width: 40px;
//         font-size: 11px;
//       }
//       .detail {
//         width: 350px;
//         .title {
//           font-size: 11px;
//           width: 150px;
//         }
//         .sub-title {
//           font-size: 11px;
//           margin-left: 20px;
//           width: 250px;
//         }
//       }
//     }
//   }
// }

// // 테블릿
// @media screen and (min-width: 640px) and (max-width: 759px) {
//   .schedule-section {
//     display: flex;
//     flex-wrap: wrap;
//   }
//   .announcer-con {
//     width: 616px;
//     height: 180px;
//     margin-top: 20px;
//   }
//   .schedule-con {
//     width: 616px;
//     display: grid !important;
//     padding: 0px !important;
//     .text-con {
//       width: 125px;
//       justify-content: left !important;
//       border-right: none !important;
//       margin: 12px;
//       padding: 0px !important;
//       .text-title {
//         font-size: 20px;
//       }
//     }
//     .pairing-box {
//       width: 600px;
//       margin-left: 0px !important;
//       margin: 0px 0px 12px 12px;

//       .pairing-con {
//         justify-content: left !important;
//       }
//       .date {
//         width: 60px;
//         font-size: 13px;
//       }
//       .detail {
//         width: 500px;
//         .title {
//           font-size: 13px;
//           width: 80px;
//         }
//         .sub-title {
//           font-size: 13px;
//           margin-left: 20px;
//           width: 400px;
//         }
//       }
//     }
//   }
// }

// // 모바일
// @media screen and (min-width: 320px) and (max-width: 639px) {
//   .schedule-section {
//     display: flex;
//     flex-wrap: wrap;
//   }
//   .announcer-con {
//     width: calc(100% - 8px);
//     height: 180px;
//     margin-top: 20px;
//   }
//   .schedule-con {
//     width: calc(100% - 8px);
//     display: grid !important;
//     padding: 0px !important;
//     border: 0px !important;
//     border-top: solid 1px rgba(0, 0, 0, 0.2) !important;
//     border-radius: 0px !important;
//     .text-con {
//       width: 100% !important;
//       justify-content: center !important;
//       border-right: none !important;

//       margin: 20px;
//       padding: 0px !important;
//       .text-title {
//         font-size: 20px;
//       }
//     }
//     .pairing-box {
//       width: 100% !important;
//       margin-left: 0px !important;
//       margin: 0px 0px 12px 12px;

//       .pairing-con {
//         justify-content: left !important;
//       }
//       .date {
//         width: 10%;
//         font-size: 11px;
//       }
//       .detail {
//         width: 80%;
//         .title {
//           font-size: 11px;
//           width: 25%;
//         }
//         .sub-title {
//           font-size: 11px;
//           margin-left: 20px;
//           width: 75%;
//         }
//       }
//     }
//   }
// }

.schedule-section {
  width: 100%;
  display: grid;
  margin-top: 100px;
  margin-bottom: 60px;
  justify-content: center;
  .Title-con {
    margin-bottom: 20;
    .title {
      font-family: "Pretendard-Regular";
      font-size: 30px;
      font-weight: bold;
    }
  }
  .Schedule-con {
    width: 1300px;
    display: flex;
    align-items: center;
    justify-content: right;
    border: solid 6px #f5f5f5;
    border-radius: 5px;
    .slide-con {
      width: 100%;
      display: flex;
      align-items: center;
      .banner-img {
        width: 630px;
        height: 300px;
        object-fit: cover;
        border-radius: 5px;
      }
      .TextCon {
        height: auto;
        margin-left: 40px;
        .textTitle {
          font-family: "Pretendard-Regular";
          font-size: 22px;
          font-weight: bold;
        }
        .subTitle {
          font-family: "Pretendard-Regular";
          font-size: 18px;
        }
      }
      .viewMore {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 140px;
        height: 48px;
        margin-top: 50px;
        border-radius: 50px;
        border: solid 1px #805bea;
        text-decoration: none;

        strong {
          font-size: 18px;
          font-family: "Pretendard-Regular";
          font-weight: bold;
          color: #805bea;
        }
      }
    }

    .swiper-btn {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      right: 0;
      bottom: 0;
    }
  }
}
</style>
