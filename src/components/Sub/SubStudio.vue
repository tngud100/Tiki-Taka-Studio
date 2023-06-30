<template>
  <section class="studio_section">
    <HeaderTitle
      :title-data="title"
      :sub-title-data="subTitle"
      :bg-image="bgImage"
    />
    <div class="Text-con">
      <p class="Title">실시간 / 녹화 방송제작</p>
      <p class="subTitle">
        모두를 위한 스튜디오 이곳에서 함께 콘텐츠를 만들어보세요
      </p>
    </div>
    <!-- 서비스 안내 -->
    <div class="Service-con">
      <p class="Sevice-Title">서비스 소개</p>
      <div class="Service-cardCon">
        <div
          v-for="(item, index) in service"
          :key="index"
          :class="'service-card card' + index"
          @click="ServiceState(index)"
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
    </div>
    <!-- 서비스 상세 내용 -->
    <MakeFilm v-if="serviceState === 0" />
    <EquipmentSpace v-if="serviceState === 1" />
    <Education v-if="serviceState === 2" />
    <Advertise v-if="serviceState === 3" />
    <div class="btn-box">
      <div class="btn">
        <router-link to="/ask">
          <span class="btn-text">문의하기</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap, ScrollTrigger } from "gsap/all";

import HeaderTitle from "@/components/Header/SubTitle.vue";
import EquipmentSpace from "./StudioDetail/EquipmentSapceRental.vue";
import MakeFilm from "./StudioDetail/MakeFilm.vue";
import Education from "./StudioDetail/Education.vue";
import Advertise from "./StudioDetail/Advertise.vue";
export default {
  name: "SubStudio",
  components: {
    HeaderTitle,
    EquipmentSpace,
    MakeFilm,
    Education,
    Advertise,
  },
  data() {
    return {
      title: "서비스",
      subTitle: "Service",
      serviceState: 1,
      bgImage: [
        require("@/assets/banner/studio1920.svg"),
        require("@/assets/banner/studio1300.svg"),
        require("@/assets/banner/studio760.svg"),
      ],
      service: [
        {
          img: require("@/assets/studio/certification.svg"),
          title: "영상 제작",
          desc1: "전문 영상제작팀이",
          desc2: "업체의 목적에 부합하는",
          desc3: "맞춤 영상 제작",
          num: 0,
        },
        {
          img: require("@/assets/studio/insta.svg"),
          title: "촬영 공간/장비 대여",
          desc1: "100평 규모의",
          desc2: "스튜디오와 전문 촬영",
          desc3: "장비 대여",
          num: 1,
        },
        {
          img: require("@/assets/studio/personal.svg"),
          title: "교육",
          desc1: "1인 크리에이터",
          desc2: "전문 강사진의 교육",
          desc3: "자격증 발급",
          num: 2,
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
          num: 3,
        },
      ],
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const studio = gsap.timeline({ paused: true });
    const card = gsap.timeline({ paused: true });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".studio_section",
        scrub: true,
        onEnter: () => {
          studio.play();
        },
      },
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: ".Service-con",
        start: "top+=200px bottom",
        end: "+=50%",
        scrub: true,
        onEnter: () => {
          card.play();
        },
      },
    });
    studio.to(".Text-con", { duration: 1, bottom: 0, opacity: 1 }, "start");
    studio.to(
      ".Sevice-Title",
      { duration: 1, bottom: 0, opacity: 1 },
      "start+=.5"
    );

    card.to(".card0", { duration: 0.5, bottom: 0, opacity: 1 }, "start");
    card.to(".card1", { duration: 0.5, bottom: 0, opacity: 1 }, "start+=.2");
    card.to(".card2", { duration: 0.5, bottom: 0, opacity: 1 }, "start+=.4");
    card.to(".card3", { duration: 0.5, bottom: 0, opacity: 1 }, "start+=.6");
  },
  methods: {
    ServiceState(index) {
      this.serviceState = index;
      const border = document.querySelectorAll(".service-card");

      for (let i = 0; i < border.length; i++) {
        border[i].style.border = "solid 1px black";
        console.log(this.serviceState);
        if (this.serviceState === i) {
          border[this.serviceState].style.border = "solid 2px #805bea";
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
//PC XL
@media screen and (min-width: 1300px) {
  .studio_section {
    margin-top: 80px;
    .Text-con {
      margin: 100px auto 0px auto;
      .Title {
        font-size: 30px;
      }
      .subTitle {
        font-size: 20px;
        margin-top: 10px;
      }
    }
    .Service-con {
      margin: 100px auto 0px auto;

      .Sevice-Title {
        width: 1300px;
        margin-bottom: 50px;
        font-size: 30px;
      }
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
        font-size: 22px;
      }
      .subTitle {
        font-size: 19px;
        letter-spacing: -1.7px;
      }
    }
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .studio_section {
    margin-top: 70px;
    .Text-con {
      margin: 100px auto 0px auto;
      .Title {
        font-size: 30px;
      }
      .subTitle {
        font-size: 20px;
        margin-top: 10px;
      }
    }
    .Service-con {
      margin: 100px auto 0px auto;

      .Sevice-Title {
        width: 1080px;
        margin-bottom: 50px;
        font-size: 30px;
      }
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
  .studio_section {
    margin-top: 60px;
    .Text-con {
      margin: 80px auto 0px auto;
      .Title {
        font-size: 26px;
      }
      .subTitle {
        font-size: 18px;
        margin-top: 10px;
      }
    }
    .Service-con {
      margin: 80px auto 0px auto;

      .Sevice-Title {
        width: 760px;
        margin-bottom: 40px;
        font-size: 26px;
      }
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
  .studio_section {
    margin-top: 55px;
    .Text-con {
      margin: 80px auto 0px auto;
      .Title {
        font-size: 26px;
      }
      .subTitle {
        font-size: 18px;
        margin-top: 10px;
      }
    }
    .Service-con {
      margin: 80px auto 0px auto;

      .Sevice-Title {
        width: 640px;
        margin-bottom: 40px;
        font-size: 26px;
      }
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
  .studio_section {
    margin-top: 55px;
    .Text-con {
      margin: 70px auto 0px auto;
      padding: 0px 12px;
      .Title {
        font-size: 26px;
      }
      .subTitle {
        font-size: 18px;
        margin-top: 10px;
      }
    }
    .Service-con {
      margin: 60px auto 0px auto;

      .Sevice-Title {
        width: 100%;
        margin-bottom: 40px;
        font-size: 26px;
      }
    }
  }
  .Service-cardCon {
    width: calc(100% - 24px);
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

.studio_section {
  .Text-con {
    text-align: center;
    display: grid;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: -30px;
    opacity: 0;
    .Title {
      font-family: "Pretendard-Regular";
      font-weight: bold;
    }
    .subTitle {
      font-family: "Pretendard-Regular";
      font-weight: bold;
    }
  }
  .Service-con {
    display: grid;
    justify-content: center;
    .Sevice-Title {
      position: relative;
      bottom: -30px;
      opacity: 0;
      text-align: center;
      font-family: "Pretendard-Regular";
      font-weight: bold;
      background-position: center;
      background-image: url("@/assets/studio/titleLine.svg");
    }
    .card0,
    .card1,
    .card2,
    .card3 {
      position: relative;
      bottom: -30px;
      opacity: 0;
    }
    .Service-cardCon {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      margin: auto;
      .service-card {
        width: 25%;
        // height: 300px;
        // padding: 30px 10px;
        // margin: 12px;
        border: solid 1px black;
        text-align: center;
        cursor: pointer;
        .icon-con {
          // padding: 20px 0px;
          .icon {
            // width: 40px;
            // height: 40px;
          }
        }
        .Title {
          font-family: "Pretendard-Regular";
          // font-size: 20px;
          font-weight: bold;
        }
        .subTitle {
          font-family: "Pretendard-Regular";
          // font-size: 18px;
          color: #727272;
          // letter-spacing: -1.7px;
        }
      }
      .service-card:hover {
        border: solid 1px #805bea;
      }
    }
  }
}
.btn-box {
  margin: 0px auto 100px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .btn {
    width: 150px;
    height: 50px;
    border: solid 1px rgb(0, 0, 0);
    border-radius: 25px;
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
    border: solid 1px #805bea;
    box-shadow: 1px 1px 5px 1px whitesmoke;

    .btn-text {
      color: #805bea;
    }
  }
}
</style>
