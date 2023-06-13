<template>
  <section class="Service-con">
    <!-- <p class="Sevice-Title">서비스 소개</p> -->
    <div class="Service-cardCon">
      <div
        v-for="(item, index) in service"
        :key="index"
        :class="'service-card card' + index"
      >
        <div class="icon-con">
          <img :src="item.img" alt="icon" class="icon" />
        </div>
        <p class="Title">{{ item.title }}</p>
        <p class="subTitle">{{ item.desc1 }}</p>
        <p class="subTitle">{{ item.desc2 }}</p>
        <p class="subTitle">{{ item.desc3 }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap, ScrollTrigger } from "gsap/all";
export default {
  name: "StudioEquipment",
  data() {
    return {
      rentalState: 0,
      studioState: 0,
      service: [
        {
          img: require("@/assets/studio/certification.svg"),
          title: "스튜디오 대여",
          desc1: "약 40평의",
          desc2: "공간과 장비를",
          desc3: "합리적인 가격에 대여",
        },
        {
          img: require("@/assets/studio/insta.svg"),
          title: "최첨단 방송장비",
          desc1: "카메라, 조명, 음향",
          desc2: "모든걸 한방에 해결!",
          desc3: "전문 오퍼레이터 지원",
        },
        {
          img: require("@/assets/studio/personal.svg"),
          title: "양방향 방송제작",
          desc1: "양방향 방송",
          desc2: "",
          desc3: "",
        },
        // {
        //   img: require("@/assets/studio/locate.svg"),
        //   title: "비대면 토탈솔루션",
        //   desc1: "비대면 방송",
        //   desc2: "타운홀 미팅",
        //   desc3: "비디오 컨퍼런스, 등",
        // },
        {
          img: require("@/assets/studio/message.svg"),
          title: "실시간 스트리밍 서비스",
          desc1: "유튜브",
          desc2: "아프리카TV",
          desc3: "양방향 소통 가능",
        },
      ],
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const equip = gsap.timeline({ paused: true });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".studioLental-section",
        start: "top+=150px bottom",
        end: "+=50%",
        scrub: true,
        onEnter: () => {
          equip.play();
        },
      },
    });
    equip.to(".card0", { duration: 1, bottom: 0, opacity: 1 }, "start+=1");
    equip.to(".card1", { duration: 1, bottom: 0, opacity: 1 }, "start+=1.2");
    equip.to(".card2", { duration: 1, bottom: 0, opacity: 1 }, "start+=1.4");
    equip.to(".card3", { duration: 1, bottom: 0, opacity: 1 }, "start+=1.6");
  },
};
</script>

<style lang="scss" scoped>
//PC XL
@media screen and (min-width: 1300px) {
  .Service-cardCon {
    width: 1300px;
    .card1 {
      margin-left: 60px;
    }
    .card2 {
      margin-left: 60px;
    }
    .card3 {
      margin-left: 60px;
    }
    .service-card {
      height: 280px;
      padding: 20px 10px;
      .icon-con {
        padding: 20px 0px;
        .icon {
          width: 40px;
          height: 40px;
        }
      }
      .Title {
        font-size: 24px;
      }
      .subTitle {
        font-size: 20px;
        letter-spacing: -1.7px;
      }
    }
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .Service-cardCon {
    width: 1080px;
    .card1 {
      margin-left: 24px;
    }
    .card2 {
      margin-left: 24px;
    }
    .card3 {
      margin-left: 24px;
    }
    .service-card {
      height: 280px;
      padding: 30px 10px;
      .icon-con {
        padding: 12px 0px;
        .icon {
          width: 40px;
          height: 40px;
        }
      }
      .Title {
        font-size: 20px;
      }
      .subTitle {
        font-size: 18px;
        letter-spacing: -1.7px;
      }
    }
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .Service-cardCon {
    width: 760px;
    .card1 {
      margin-left: 24px;
    }
    .card2 {
      margin-left: 24px;
    }
    .card3 {
      margin-left: 24px;
    }
    .service-card {
      height: 200px;
      padding: 10px 8px;
      .icon-con {
        padding: 12px 0px;
        .icon {
          width: 40px;
          height: 40px;
        }
      }
      .Title {
        font-size: 16px;
      }
      .subTitle {
        font-size: 14px;
        letter-spacing: -1.7px;
      }
    }
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .Service-cardCon {
    width: 640px;
    flex-wrap: wrap !important;

    .service-card {
      margin: 12px;
      width: calc(50% - 24px) !important;
      height: 200px;
      padding: 10px 8px;
      .icon-con {
        padding: 12px 0px;
        .icon {
          width: 40px;
          height: 40px;
        }
      }
      .Title {
        font-size: 16px;
      }
      .subTitle {
        font-size: 14px;
        letter-spacing: -1.7px;
      }
    }
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .Service-cardCon {
    width: calc(100% - 20px);
    flex-wrap: wrap !important;
    margin: 0px auto 0px auto;
    .service-card {
      margin: 12px;
      width: calc(50% - 24px) !important;
      height: 200px;
      padding: 10px 8px;
      .icon-con {
        padding: 12px 0px;
        .icon {
          width: 40px;
          height: 40px;
        }
      }
      .Title {
        font-size: 16px;
      }
      .subTitle {
        font-size: 14px;
        letter-spacing: -1.7px;
      }
    }
  }
}
.Service-con {
  display: grid;
  justify-content: center;
  margin: 15px auto 0px auto;

  .Service-cardCon {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;

    .service-card {
      width: 25%;
      border: solid 1px rgb(163, 163, 163);
      text-align: center;
      border-radius: 5px;
      bottom: -30px;
      position: relative;
      opacity: 0;
      .icon-con {
        .icon {
        }
      }
      .Title {
        font-family: "Pretendard-Regular";
        font-weight: bold;
      }
      .subTitle {
        font-family: "Pretendard-Regular";
        color: #727272;
      }
    }
    .service-card:hover {
      border: solid 1px #805bea;
    }
  }
}
</style>
