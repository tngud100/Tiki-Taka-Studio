<template>
  <section class="Reservate-section">
    <!-- <HeaderTitle
      :title-data="title"
      :sub-title-data="subTitle"
      :bg-image="bgImage"
    /> -->
    <div class="Text-con">
      <p class="Title">스튜디오 예약 하기</p>
      <p class="subTitle">동의서 및 신청서를 다운받아 작성해 주세요</p>
    </div>
    <div class="download-box">
      <a
        class="download-link"
        v-for="file in file"
        :key="file"
        :href="file.URL"
        :download="file.name"
      >
        {{ file.name }}
      </a>
    </div>

    <div class="reservate-con">
      <div :class="'card' + index" v-for="(card, index) in rooms" :key="index">
        <router-link
          :to="'/reservate' + card.studioNum"
          style="text-decoration: none"
        >
          <div :class="'hover-filter' + index">
            <span class="hover-text">
              [ {{ card.numMin }}인 ]
              {{ card.title }}
            </span>
          </div>
          <div class="card-image">
            <img :class="'image' + index" :src="card.imageSrc" />
          </div>
          <div class="card-subText">
            <span class="creator-subscribe">
              촬영 또는 라이브 방송을 하기 위한 룸</span
            >
          </div>
          <div class="card-titleText">
            <span class="creator-name"
              >[{{ card.numMin }}인] {{ card.title }}</span
            >
            <span class="creator-name">{{ card.Price }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
// import HeaderTitle from "@/components/Header/SubTitle.vue";

import attach1 from "@/assets/fileDir/스튜디오 대관 신청서.hwpx";
import attach2 from "@/assets/fileDir/장비 대여 신청서.hwpx";
import attach3 from "@/assets/fileDir/개인정보 수집 동의서.hwpx";
import attach4 from "@/assets/fileDir/데이터 보관 활용 동의서.hwpx";

import { mapGetters } from "vuex";

export default {
  name: "ReservatePage",
  // components: {
  //   HeaderTitle,
  // },
  computed: {
    ...mapGetters("main", ["rooms"]),
  },
  data() {
    return {
      // title: "예약하기",
      // subTitle: "Reservate",
      bgImage: [
        require("@/assets/banner/event1920.svg"),
        require("@/assets/banner/event1300.svg"),
        require("@/assets/banner/event760.svg"),
      ],
      file: [
        {
          URL: attach1,
          name: "스튜디오 대관 신청서.hwpx",
        },
        {
          URL: attach2,
          name: "장비 대여 관리 대장.hwp",
        },
        {
          URL: attach3,
          name: "개인정보 수집 동의서.hwpx",
        },
        {
          URL: attach4,
          name: "데이터 보관 활용 동의서.hwpx",
        },
      ],

      // creatorCard: [
      //   {
      //     name: "[1인실] 임시룸1",
      //     name2: "12,000원",
      //     subscribe: "",
      //     imageSrc: require("@/assets/studio/studio1.svg"),
      //     num: 1,
      //   },
      //   {
      //     name: "[1인실] 임시룸2",
      //     name2: "14,000원",
      //     imageSrc: require("@/assets/studio/studio2.svg"),
      //     num: 2,
      //   },
      //   {
      //     name: "[2인실] 임시룸3",
      //     name2: "18,000원",
      //     imageSrc: require("@/assets/studio/studio3.svg"),
      //     num: 3,
      //   },
      //   {
      //     name: "[크로마키 룸] 임시룸4",
      //     name2: "16,000원",
      //     imageSrc: require("@/assets/studio/studio3.svg"),
      //     num: 4,
      //   },
      // ],
    };
  },

  mounted() {
    console.log(this.rooms);
  },
};
</script>

<style lang="scss" scoped>
.Reservate-section {
  .Text-con {
    text-align: center;
    display: grid;
    justify-content: center;
    align-items: center;
    position: relative;

    .Title {
      font-family: "Pretendard-Regular";
      font-weight: bold;
    }

    .subTitle {
      font-family: "Pretendard-Regular";
      font-weight: bold;
    }
  }

  .download-box {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: auto;
    font-family: "Pretendard";

    .download-link {
      padding: 10px 20px;
      margin: 10px;
      border: solid 1px rgb(214, 214, 214);
      border-radius: 30px;
      background-color: white;
      color: black;
      text-align: center;
      text-decoration: none;
      font-size: 16px;
      // transition: background-color 0.3s, transform 0.3s;
    }

    .download-link:hover {
      background-color: #0174f5;
      // transform: scale(1.05);
      color: white;
    }

    .download-link:active {
      background-color: #0174f5;
      color: white;
      transform: scale(1);
    }
  }

  .reservate-con {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin: auto;

    @for $i from 0 through 5 {
      .card#{$i} {
        overflow: hidden;
        background-color: white;
        color: black;
        position: relative;
      }

      .hover-filter#{$i} {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        opacity: 0;
        transition: all 0.5s ease;
        border-radius: 10px;
      }

      .image#{$i} {
        transform: scale(1.5);
        transition: all 0.5s ease;
      }

      .card#{$i}:hover {
        .hover-filter#{$i} {
          opacity: 1;
          background-color: rgba(0, 0, 0, 0.5);
          cursor: pointer;
        }

        .image#{$i} {
          transform: scale(2);
        }
      }
    }
  }

  .hover-text {
    font-family: "Pretendard";
    font-weight: bold;
    color: white;
  }

  .card-image {
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
    border-radius: 10px;
  }

  .card-titleText {
    display: grid;
    justify-content: left;
    align-items: center;
    padding: 0px 6px 12px 6px;

    .creator-name {
      font-family: "Pretendard";
      font-weight: bold;
      color: rgb(97, 97, 97);
    }
  }

  .card-subText {
    display: grid;
    justify-content: left;
    align-items: center;
    padding: 6px 6px 0px 6px;

    .creator-subscribe {
      font-family: "Pretendard";
      color: grey;
    }
  }
}

//PC XL
@media screen and (min-width: 1300px) {
  .reservate-con {
    padding-top: 16px;
    width: 1300px;

    @for $i from 0 through 5 {
      .card#{$i} {
        width: 30%;
        height: 100%; // 수정된 부분
        margin: 12px;
      }

      .hover-filter#{$i} {
        width: 100%;
        height: 250px;
        border-radius: 10px;
      }

      .image#{$i} {
        width: 450px;
        height: 250px;
      }
    }

    .hover-text {
      font-size: 1.625rem;
    }

    .creator-name {
      font-size: 1.125rem;
    }

    .creator-subscribe {
      font-size: 0.89rem;
    }
  }

  .Text-con {
    margin: 60px auto 30px auto;

    .Title {
      font-size: 30px;
    }

    .subTitle {
      font-size: 20px;
      margin-top: 10px;
    }
  }
}

// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .reservate-con {
    padding-top: 16px;
    width: 1080px;

    @for $i from 0 through 5 {
      .card#{$i} {
        width: 30%;
        height: 100%; // 수정된 부분
        margin: 12px;
      }

      .hover-filter#{$i} {
        width: 100%;
        height: 200px;
        border-radius: 10px;
      }

      .image#{$i} {
        width: 400px;
        height: 200px;
      }
    }

    .hover-text {
      font-size: 1.365rem;
    }

    .creator-name {
      font-size: 1rem;
    }

    .creator-subscribe {
      font-size: 0.89rem;
    }
  }

  .Text-con {
    margin: 60px auto 30px auto;

    .Title {
      font-size: 30px;
    }

    .subTitle {
      font-size: 20px;
      margin-top: 10px;
    }
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .reservate-con {
    padding-top: 16px;
    width: 760px;

    @for $i from 0 through 5 {
      .card#{$i} {
        width: calc(50% - 24px);
        height: 100%; // 수정된 부분
        margin: 12px;
      }

      .hover-filter#{$i} {
        width: 100%;
        height: 200px;
        border-radius: 10px;
      }

      .image#{$i} {
        width: 400px;
        height: 200px;
      }
    }

    .hover-text {
      font-size: 1.4rem;
    }

    .creator-name {
      font-size: 1.125rem;
    }

    .creator-subscribe {
      font-size: 0.89rem;
    }
  }

  .download-box {
    width: 760px;

    .download-link {
      width: calc(50% - 20px);
    }
  }

  .Text-con {
    margin: 50px auto 30px auto;

    .Title {
      font-size: 26px;
    }

    .subTitle {
      font-size: 18px;
      margin-top: 10px;
    }
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .reservate-con {
    padding-top: 16px;
    width: 640px;

    @for $i from 0 through 5 {
      .card#{$i} {
        width: calc(50% - 24px);
        height: 100%; // 수정된 부분
        margin: 12px;
      }

      .hover-filter#{$i} {
        width: 100%;
        height: 200px;
        border-radius: 10px;
      }

      .image#{$i} {
        width: 400px;
        height: 200px;
      }
    }

    .hover-text {
      font-size: 1.25rem;
    }

    .creator-name {
      font-size: 1rem;
    }

    .creator-subscribe {
      font-size: 0.89rem;
    }
  }

  .download-box {
    width: 640px;

    .download-link {
      width: calc(50% - 20px);
    }
  }

  .Text-con {
    margin: 40px auto 30px auto;

    .Title {
      font-size: 26px;
    }

    .subTitle {
      font-size: 18px;
      margin-top: 10px;
    }
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .reservate-con {
    padding-top: 16px;
    width: 100%;

    @for $i from 0 through 5 {
      .card#{$i} {
        width: calc(50% - 24px);
        height: 100%; // 수정된 부분
        margin: 12px;
      }

      .hover-filter#{$i} {
        width: 100%;
        height: 150px;
        border-radius: 10px;
      }

      .image#{$i} {
        height: 150px;
      }
    }

    .hover-text {
      font-size: 1rem;
      overflow: hidden;
      word-break: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    .creator-name {
      font-size: 1rem;
      overflow: hidden;
      word-break: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    .creator-subscribe {
      font-size: 0.8rem;
    }
  }

  .download-box {
    width: 100%;

    .download-link {
      width: calc(50% - 20px);
    }
  }

  .Text-con {
    margin: 30px auto 20px auto;
    padding: 0px 12px;

    .Title {
      font-size: 20px;
    }

    .subTitle {
      font-size: 18px;
      margin-top: 10px;
    }
  }
}
</style>
