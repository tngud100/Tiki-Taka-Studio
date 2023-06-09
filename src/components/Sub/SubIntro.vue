<template>
  <section class="Intro-section">
    <HeaderTitle
      :title-data="title"
      :sub-title-data="subTitle"
      :bg-image="bgImage"
    />
    <div class="Text-con">
      <span class="sub-title">TNTStudio</span>
      <span class="title">Our Company</span>
      <div class="detail-about">
        자체 제작 플랫폼과 유튜브 등 다양한 공간에서 핵심 주제에 관심을 가지고
        전문성을 두루 갖추어 시청자의 관점에서 보고 싶을 만한 콘텐츠를 제작하는
        <span class="detail-point">콘텐츠 제작 스튜디오</span>입니다.
      </div>
    </div>
    <div class="ceo-container">
      <div class="intro-con">
        <div class="title">
          <p>Company</p>
          <p>Founded in</p>
          <p>CEO</p>
          <p>Located in</p>
        </div>
        <div class="title-value">
          <p>TNTStudio</p>
          <p>2023.06.10.</p>
          <p>김웅겸</p>
          <p>부산 사상구 백양대로 684, 4~5층</p>
        </div>
      </div>
      <!-- <div class="ceo-spec">

      </div> -->
      <div class="CeoImg-con">
        <img :src="ceo" alt="ceo" class="ceo-img" />
      </div>
    </div>
    <div class="member-container">
      <div class="title-con">
        <span class="title">OUR MEMBERS</span>
      </div>
      <div class="card-con">
        <div
          :class="'member' + index + ' card'"
          v-for="(member, index) in members"
          :key="index"
        >
          <div class="img-con">
            <img class="card-img" :src="member.src" alt="member" />
          </div>
          <div class="text-con">
            <span class="name">{{ member.name }}</span>
            <span class="name-mobile">{{ member.mobileName }}</span
            ><br class="line-seperate" />
            <span class="position">{{ member.position }}</span>

            <p class="spec" v-for="(spec, index) in member.spec" :key="index">
              {{ spec }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeaderTitle from "@/components/Header/SubTitle.vue";

import { gsap, ScrollTrigger } from "gsap/all";

export default {
  name: "IntroPage",
  components: {
    HeaderTitle,
  },
  data() {
    return {
      title: "회사소개",
      subTitle: "Notify",
      bgImage: [
        require("@/assets/banner/event1920.svg"),
        require("@/assets/banner/event1300.svg"),
        require("@/assets/banner/event760.svg"),
      ],
      ceo: require("@/assets/info/ceo_img.svg"),
      members: [
        {
          name: "정시후 Si Hoo Jung",
          mobileName: "정시후",
          src: require("@/assets/info/readyImg.svg"),
          position: "운영 실무 팀장",
          spec: ["現 더크리에이터 대표이사", "現 TNT Studio 운영 실무 팀장"],
        },
        {
          name: "하채원 Chea Won Ha",
          mobileName: "하채원",
          src: require("@/assets/info/readyImg.svg"),

          // src: require("@/assets/info/하채원 팀장.svg"),
          position: "B2G 총괄 팀장",
          spec: [
            "現 (주)HY미디어능력개발원 대표이사",
            "現 TNT Studio B2G 총괄 팀장",
          ],
        },
        {
          name: "박제영 Jea Young Park",
          mobileName: "박제영",
          src: require("@/assets/info/readyImg.svg"),
          // position: "총괄 본부장",
          // spec: ["現 게임인스 본부장", ""],
        },
        {
          name: "김보경 Bo Kyeong Kim",
          mobileName: "김보경",
          src: require("@/assets/info/readyImg.svg"),
          // position: "총괄 과장",
          // spec: ["現 게임인스 총괄 과장", ""],
        },
      ],
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const Intro = gsap.timeline({ paused: true });
    const card = gsap.timeline({ paused: true });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".Intro-section",
        scrub: true,
        onEnter: () => {
          Intro.play();
        },
      },
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: ".card-con",
        start: "top+=100px bottom",
        end: "+=50%",
        scrub: true,
        onEnter: () => {
          card.play();
        },
      },
    });

    Intro.to(".sub-title", { duration: 0.5, bottom: 0, opacity: 1 }, "start");
    Intro.to(".title", { duration: 1, bottom: 0, opacity: 1 }, "start+=.1");
    Intro.to(
      ".detail-about",
      { duration: 1, bottom: 0, opacity: 1 },
      "start+=.5"
    );
    Intro.to(".intro-con", { duration: 1, left: 0, opacity: 1 }, "start+=.7");

    card.to(".member0", { duration: 1, bottom: 0, opacity: 1 }, "start");
    card.to(".member1", { duration: 1, bottom: 0, opacity: 1 }, "start+=.2");
    card.to(".member2", { duration: 1, bottom: 0, opacity: 1 }, "start+=.4");
    card.to(".member3", { duration: 1, bottom: 0, opacity: 1 }, "start+=.6");
  },
};
</script>

<style lang="scss" scoped>
//PC XL
@media screen and (min-width: 1300px) {
  .Intro-section {
    margin-top: 80px;
    .Text-con {
      width: 1300px;
      margin: 100px auto 30px auto;
      .sub-title {
        font-size: 18px;
        margin: 20px 15px 0px;
      }
      .title {
        font-size: 33px;
        margin: 20px 15px;
      }
      .detail-about {
        font-size: 16px;
        padding: 0px 15px;
        width: 500px;

        .detail-point {
          font-size: 18px;
        }
      }
    }
  }
  .ceo-container {
    width: 1300px;
    height: 350px;
    margin: 50px auto;
    padding: 15px;
    .intro-con {
      width: 400px;
      .title {
        font-size: 16px;
      }
      .title-value {
        font-size: 16px;
      }
    }
    .CeoImg-con {
      top: -200px;
      right: 120px;
      padding: 12px;
      width: 37%;
    }
  }
  .member-container {
    .title-con {
      width: 1300px;
      .title {
        font-size: 33px;
        margin: 20px 15px;
      }
    }
    .card-con {
      width: 1300px;
      margin: 100px auto;
    }
    .card {
      width: calc(25% - 24px);
      margin: 12px;
      .img-con {
        height: 70%;
        width: 100%;
        .card-img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .text-con {
      .name {
        font-size: 18px;
        padding: 30px 0px 10px 0px;
      }
      .position {
        font-size: 16px;
        padding: 20px 0px;
      }
      .spec {
        font-size: 14px;
      }
    }
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .Intro-section {
    margin-top: 70px;
    .Text-con {
      width: 1080px;
      margin: 100px auto 30px auto;
      .sub-title {
        font-size: 18px;
        margin: 20px 15px 0px;
      }
      .title {
        font-size: 33px;
        margin: 20px 15px;
      }
      .detail-about {
        font-size: 16px;
        padding: 0px 15px;
        width: 500px;

        .detail-point {
          font-size: 18px;
        }
      }
    }
  }
  .ceo-container {
    width: 1080px;
    height: 350px;
    margin: 50px auto;
    padding: 15px;
    .intro-con {
      width: 400px;
      .title {
        font-size: 16px;
      }
      .title-value {
        font-size: 16px;
      }
    }
    .CeoImg-con {
      top: -200px;
      right: 0;
      padding: 12px;
      width: 45%;
    }
  }
  .member-container {
    .title-con {
      width: 1080px;
      .title {
        font-size: 33px;
        margin: 20px 15px;
      }
    }
    .card-con {
      width: 1080px;
      margin: 50px auto;
    }
    .card {
      width: calc(25% - 24px);
      margin: 12px;
      .img-con {
        height: 70%;
        width: 100%;
        .card-img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .text-con {
      .name {
        font-size: 18px;
        padding: 30px 0px 10px 0px;
      }
      .position {
        font-size: 16px;
        padding: 20px 0px;
      }
      .spec {
        font-size: 14px;
      }
    }
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .Intro-section {
    margin-top: 60px;
    .Text-con {
      width: 760px;
      margin: 50px auto 30px auto;
      .sub-title {
        font-size: 18px;
        margin: 20px 15px 0px;
      }
      .title {
        font-size: 26px;
        margin: 20px 15px;
      }
      .detail-about {
        font-size: 14px;
        padding: 0px 15px;
        width: 320px;

        .detail-point {
          font-size: 17px;
        }
      }
    }
  }
  .ceo-container {
    width: 760px;
    margin: 50px auto;
    padding: 15px;
    .intro-con {
      width: 345px;
      .title {
        font-size: 14px;
      }
      .title-value {
        font-size: 14px;
      }
    }
    .CeoImg-con {
      top: -250px;
      right: 0;
      padding: 12px;
      width: 45%;
    }
  }
  .member-container {
    .title-con {
      width: 760px;
      .title {
        font-size: 26px;
        margin: 20px 15px;
      }
    }
    .card-con {
      width: 760px;
      margin: 50px auto 100px;
    }
    .card {
      width: calc(25% - 12px);
      height: 285px;
      margin: 6px;
      .img-con {
        height: 70%;
        width: 100%;
        .card-img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .text-con {
      .name {
        font-size: 16px;
        padding: 30px 0px 10px 0px;
      }
      .position {
        font-size: 15px;
        padding: 20px 0px;
      }
      .spec {
        font-size: 13px;
      }
    }
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .Intro-section {
    margin-top: 55px;
    .Text-con {
      width: 640px;
      margin: 30px auto 0px auto;
      text-align: center;
      padding: 12px;
      .sub-title {
        font-size: 18px;
        margin: 10px 15px 0px;
      }
      .title {
        font-size: 26px;
        margin: 20px 15px;
      }
      .detail-about {
        font-size: 16px;
        padding: 0px 15px;
        width: 600px;

        .detail-point {
          font-size: 18px;
        }
      }
    }
  }
  .ceo-container {
    width: 640px;
    margin: 20px auto;
    padding: 15px;
    height: 650px;
    justify-content: center;

    .intro-con {
      width: 500px;
      .title {
        font-size: 18px;
        text-align: left;
        line-height: 42px;
      }
      .title-value {
        font-size: 18px;
        line-height: 42px;
      }
    }
    .CeoImg-con {
      bottom: -10px;
      right: 120px;
      padding: 12px;
      width: 60%;
    }
  }
  .member-container {
    .title-con {
      width: 640px;
      .title {
        font-size: 26px;
        margin: 20px 15px;
      }
    }
    .card-con {
      width: 640px;
      margin: 50px auto 75px;
      justify-content: center !important;
    }
    .card {
      width: calc(50% - 24px);
      margin: 6px;
      .img-con {
        height: 70%;
        width: 100%;
        .card-img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .text-con {
      padding-top: 6px !important;
      padding-bottom: 12px;
      .name {
        font-size: 16px;
        padding: 30px 0px 10px 0px;
      }
      .position {
        font-size: 15px;
        padding: 20px 0px;
      }
      .spec {
        font-size: 13px;
      }
    }
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .Intro-section {
    margin-top: 50px;
    .Text-con {
      width: calc(100% - 24px);
      margin: 30px auto 0px auto;
      justify-content: center !important;
      text-align: center;
      padding: 6px;
      .sub-title {
        font-size: 18px;
        margin: 10px 15px 0px;
        width: calc(100% - 24px);
      }
      .title {
        font-size: 26px;
        margin: 20px 15px;
        width: calc(100% - 24px);
      }
      .detail-about {
        font-size: 16px;
        padding: 0px 0px;
        margin: auto;

        width: 100%;
        .detail-point {
          font-size: 18px;
        }
      }
    }
  }
  .ceo-container {
    width: 320px;
    margin: 10px auto;
    padding: 8px;
    height: 570px;
    justify-content: center;

    .intro-con {
      width: calc(100%);

      .title {
        font-size: 16px;
        text-align: left;
        line-height: 42px;
      }
      .title-value {
        font-size: 16px;
        line-height: 42px;
      }
    }
    .CeoImg-con {
      bottom: 0px;
      right: 0px;
      padding: 12px;
      width: 100%;
    }
  }
  .member-container {
    .title-con {
      width: calc(100% - 24px);

      .title {
        font-size: 26px;
        margin: 20px 15px;
      }
    }
    .card-con {
      width: 100%;
      margin: 30px auto 55px;
      justify-content: center !important;
    }
    .card {
      width: calc(50% - 24px);
      margin: 6px;
      .img-con {
        height: 70%;
        width: 100%;
        .card-img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .text-con {
      padding-top: 6px !important;
      padding-bottom: 12px;
      height: 150px;
      .name {
        font-size: 16px;
        padding: 30px 0px 10px 0px;
        display: none;
      }
      .name-mobile {
        display: block !important;
      }
      .line-seperate {
        display: none !important;
      }
      .position {
        font-size: 15px;
        padding: 20px 0px;
      }
      .spec {
        font-size: 13px;
      }
    }
  }
}
.Intro-section {
  width: 100%;
  .Text-con {
    display: grid;
    justify-content: left;
    align-items: center;

    .sub-title {
      font-family: "Pretendard-Regular";
      color: rgb(189, 189, 189);
      position: relative;
      bottom: -15px;
      opacity: 0;
    }
    .title {
      font-family: "Pretendard-Regular";
      font-weight: bold;
      position: relative;
      bottom: -30px;
      opacity: 0;
    }
    .detail-about {
      font-family: "Pretendard-Regular";
      position: relative;
      bottom: -30px;
      opacity: 0;
      .detail-point {
        font-family: "Pretendard-Regular";
        font-weight: bold;
      }
    }
  }
  .ceo-container {
    display: flex;
    position: relative;
    .intro-con {
      display: flex;
      justify-content: space-between;
      position: relative;
      left: -30px;
      opacity: 0;
      .title {
        font-family: "Pretendard-Regular";
        font-weight: bold;
      }
      .title-value {
        font-family: "Pretendard-Regular";
      }
    }
    .CeoImg-con {
      position: absolute;
      // left: -30px;
      // opacity: 0;
      .ceo-img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
  .member-container {
    width: 100%;
    .title-con {
      display: flex;
      justify-content: center;
      margin: auto;
      align-items: center;
      background-image: url(@/assets/info/bgline.svg);
      background-position: center;
      .title {
        font-family: "Pretendard-Regular";
        font-weight: bold;
      }
    }
    .card-con {
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
      align-items: center;
      .member0,
      .member1,
      .member2,
      .member3 {
        position: relative;
        bottom: -45px;
        opacity: 0;
      }
    }
    .card {
      position: relative;
      .img-con {
        height: 70%;
        width: 100%;
        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }
      }
      .text-con {
        font-family: "Pretendard-Regular";
        text-align: center;
        position: relative;
        padding-top: 12px;
        .name {
          font-weight: bold;
          position: relative;
        }
        .name-mobile {
          font-weight: bold;
          position: relative;
          display: none;
        }
        .line-seperate {
          display: block;
        }
        .position {
          position: relative;
          font-size: 14px;
          padding: 20px 0px;
        }
        .spec {
          font-size: 11px;
        }
      }
    }
  }
}
</style>
