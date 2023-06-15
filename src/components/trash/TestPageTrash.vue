<template>
  <section class="Intro-section">
    <HeaderTitle
      :title-data="title"
      :sub-title-data="subTitle"
      :bg-image="bgImage"
    />
    <div class="Text-con">
      <span class="sub-title">TNTStudio</span>
      <span class="title">About Us</span>
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
        <span class="title">MEMBER</span>
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
            <span class="name"
              ><p>{{ member.name }}</p></span
            >
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
          name: "정시후 Jung Si Hoo",
          src: require("@/assets/info/정시후 팀장.svg"),
          position: "운영 실무 팀장",
          spec: ["現 더크리에이터 대표이사", "現 TNT Studio 운영 실무 팀장"],
        },
        {
          name: "정시후  Jung Si Hoo",
          src: require("@/assets/info/정시후 팀장.svg"),
          position: "운영 실무 팀장",
          spec: ["現 더크리에이터 대표이사", "現 TNT Studio 운영 실무 팀장"],
        },
        {
          name: "정시후  Jung Si Hoo",
          src: require("@/assets/info/정시후 팀장.svg"),
          position: "운영 실무 팀장",
          spec: ["現 더크리에이터 대표이사", "現 TNT Studio 운영 실무 팀장"],
        },
        {
          name: "하채원 Ha Chea Won",
          src: require("@/assets/info/정시후 팀장.svg"),

          // src: require("@/assets/info/하채원 팀장.svg"),
          position: "B2G 총괄 팀장",
          spec: [
            "現 (주)HY미디어능력개발원 대표이사",
            "現 TNT Studio B2G 총괄 팀장",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.Intro-section {
  width: 100%;
  .Text-con {
    display: grid;
    justify-content: left;
    align-items: center;
    width: 1300px;
    margin: 100px auto 30px auto;
    .sub-title {
      font-size: 18px;
      font-family: "Pretendard-Regular";
      color: rgb(189, 189, 189);
      margin: 20px 15px 0px;
    }
    .title {
      font-size: 33px;
      font-family: "Pretendard-Regular";
      font-weight: bold;
      margin: 20px 15px;
    }
    .detail-about {
      font-size: 16px;
      font-family: "Pretendard-Regular";
      width: 500px;
      padding: 0px 15px;
      .detail-point {
        font-size: 18px;
        font-family: "Pretendard-Regular";
        font-weight: bold;
      }
    }
  }
  .ceo-container {
    width: 1300px;
    height: 600px;
    margin: 50px auto;
    padding: 15px;
    display: flex;
    position: relative;
    .intro-con {
      width: 400px;
      display: flex;
      justify-content: space-between;
      .title {
        font-size: 16px;
        font-family: "Pretendard-Regular";
        font-weight: bold;
      }
      .title-value {
        font-size: 16px;
        font-family: "Pretendard-Regular";
      }
    }
    .CeoImg-con {
      position: absolute;
      bottom: 0;
      right: 150px;
      padding: 12px;
      .ceo-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .member-container {
    width: 100%;
    .title-con {
      width: 1300px;
      display: flex;
      justify-content: center;
      margin: auto;
      align-items: center;
      background-image: url(@/assets/info/bgline.svg);
      background-position: center;
      .title {
        font-size: 33px;
        font-family: "Pretendard-Regular";
        font-weight: bold;
        margin: 20px 15px;
      }
    }
    .card-con {
      width: 1300px;
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
      margin: auto;
      align-items: center;
    }
    .card {
      width: calc(25% - 24px);
      height: 400px;
      margin: 12px;
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
        font-size: 16px;
        text-align: center;
      }
    }
  }
}
</style>
