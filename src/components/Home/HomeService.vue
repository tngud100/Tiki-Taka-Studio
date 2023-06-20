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
        <div class="bg-icon1">
          <img :src="bgIcon[0].bg1" alt="backIcon1" />
        </div>
        <div class="bg-icon2">
          <img :src="bgIcon[0].bg2" alt="backIcon2" />
        </div>
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
          title: "교육",
          desc: "크리에이터",
          desc1: "전문 강사진의 교육",
          desc2: "자격증 발급",
        },
        {
          class: "advertise right",
          img: require("@/assets/service/test2.svg"),
          subtitle: "advertisement",
          title: "광고",
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
.service-section {
  display: grid;
  width: 100%;
  .title-con {
    position: relative;
    width: 1300px;
    margin: 50px auto 30px;
    .title-icon {
      position: absolute;
      top: -30px;
      left: -40px;
      z-index: -1;
    }
    .company {
      font-size: 18px;
      font-weight: bold;
      font-family: "Pretendard-Regular";
    }
    .title {
      font-size: 38px;
      font-weight: bold;
      font-family: "Pretendard-Regular";
      padding: 12px 0px;
    }
    .subTitle {
      font-size: 20px;
      font-family: "Pretendard-Regular";
    }
  }
  .container {
    position: relative;
    height: 920px;
    .container-bg {
      top: 5%;
      position: absolute;
      background-color: #f3f2ff;
      width: 100%;
      height: 100%;
      z-index: -1;
      .bg-icon1 {
        position: absolute;
        margin: auto;
        top: -60px;
        left: 210px;
      }
      .bg-icon2 {
        position: absolute;
        margin: auto;
        bottom: -60px;
        right: 210px;
      }
    }
    .service-container {
      width: 1300px;
      margin: auto;
      height: 100%;
      .card {
        width: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        .img-con {
          width: 20%;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .text-con {
          width: 50%;
          display: grid;
          .service-title {
            padding-bottom: 16px;
            line-height: 36px;
            .title {
              font-size: 26px;
              font-weight: bold;
              font-family: "Pretendard-Regular";
            }
            .subtitle {
              font-size: 20px;
              font-family: "Pretendard-Regular";
              color: #805bea;
            }
          }
        }
        .desc-con {
          line-height: 27px;
          .desc {
            font-size: 18px;
            font-family: "Pretendard-Regular";
          }
        }
      }
      .left {
        .text-con {
          justify-content: center;
          padding-left: 100px;
        }
      }
      .right {
        flex-direction: row-reverse;
        .text-con {
          justify-content: center;
          padding-right: 100px;
          text-align: right;
        }
      }
      .rental {
        top: -50px;
      }
      .education {
        top: -100px;
      }
      .advertise {
        top: -130px;
      }
    }
  }
}
</style>
