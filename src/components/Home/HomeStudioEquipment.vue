<template>
  <section class="Service-con">
    <div class="Title-con">
      <span class="title">제공 서비스</span>
    </div>
    <div class="Service-cardCon">
      <div
        v-for="(item, index) in service"
        :key="index"
        :class="'service-card card' + index"
      >
        <router-link to="/studio">
          <div class="icon-con">
            <img :src="item.img" alt="icon" class="icon" />
          </div>
          <p class="Title">{{ item.title }}</p>
          <p class="subTitle">{{ item.desc1 }}</p>
          <p class="subTitle">{{ item.desc2 }}</p>
          <p class="subTitle">{{ item.desc3 }}</p>
        </router-link>
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
          title: "영상 제작",
          desc1: "전문 영상제작팀이",
          desc2: "업체의 목적에 부합하는",
          desc3: "맞춤 영상 제작",
        },
        {
          img: require("@/assets/studio/insta.svg"),
          title: "촬영 공간/장비 대여",
          desc1: "100평 규모의",
          desc2: "스튜디오와 전문 촬영",
          desc3: "장비 대여",
        },
        {
          img: require("@/assets/studio/personal.svg"),
          title: "교육",
          desc1: "1인 크리에이터",
          desc2: "전문 강사진의 교육",
          desc3: "자격증 발급",
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
          title: "광고",
          desc1: "확실한 타깃의",
          desc2: "채널을 이용해 브랜드와",
          desc3: "제품을 효과적으로 마케팅",
        },
      ],
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const equip = gsap.timeline({ paused: true });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".Title-con",
        start: "top bottom",
        end: "+=50%",
        scrub: true,
        onEnter: () => {
          equip.play();
        },
      },
    });
    equip.to(".card0", { duration: 1, bottom: 0, opacity: 1 }, "start");
    equip.to(".card1", { duration: 1, bottom: 0, opacity: 1 }, "start+=.2");
    equip.to(".card2", { duration: 1, bottom: 0, opacity: 1 }, "start+=.4");
    equip.to(".card3", { duration: 1, bottom: 0, opacity: 1 }, "start+=.6");
  },
};
</script>

<style lang="scss" scoped>
//PC XL
@media screen and (min-width: 1300px) {
  .Title-con {
    margin-bottom: 40px;
    .title {
      font-size: 30px;
    }
  }
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
  .Title-con {
    margin-bottom: 35px;
    .title {
      font-size: 30px;
    }
  }
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
  .Title-con {
    margin-bottom: 30px;
    .title {
      font-size: 24px;
    }
  }
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
  .Title-con {
    margin-bottom: 30px;
    text-align: left;
    .title {
      font-size: 24px;
    }
  }
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
  .Title-con {
    margin-bottom: 30px;
    text-align: center;
    .title {
      font-size: 24px;
    }
  }
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
  .Title-con {
    .title {
      font-family: "Pretendard-Regular";
      font-weight: bold;
    }
  }

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
        color: black;
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
a {
  text-decoration: none;
}
</style>
