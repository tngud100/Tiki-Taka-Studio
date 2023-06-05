<template>
  <section class="studio_section">
    <HeaderTitle :title-data="title" />
    <div class="Text-con">
      <p class="Title">실시간 / 녹화 방송제작</p>
      <p class="subTitle">당신의 컨텐츠가 만들어 지는곳</p>
    </div>
    <!-- 서비스 안내 -->
    <div class="Service-con">
      <p class="Sevice-Title">서비스 소개</p>
      <div class="Service-cardCon">
        <div v-for="(item, index) in service" :key="index" class="service-card">
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
    <!-- 임대비용 안내 -->
    <div class="Rental-con">
      <p class="Rental-Title">임대비용 안내</p>
      <div class="tab-con">
        <div class="tab">
          <div
            v-for="(item, index) in tabList"
            :key="index"
            class="tab-list"
            :class="{ '--active': rentalState === index }"
            @click="RentalState(index)"
          >
            <span class="list-text">{{ item }}</span>
          </div>
        </div>
        <table
          v-for="(table, index) in table"
          :key="index"
          :class="['tab' + index, { '--active': rentalState === index }]"
        >
          <thead>
            <th
              v-for="(thead, index) in table.thead"
              :key="index"
              :class="'thead' + index"
            >
              <span class="thead-text">{{ thead }}</span>
            </th>
          </thead>
          <tbody>
            <tr
              v-for="(tbody, index) in table.tbody"
              :key="index"
              class="tbody"
            >
              <td class="td0">{{ tbody.td1 }}</td>
              <td class="td1">{{ tbody.td2 }}</td>
              <td v-if="tbody.td3" class="td2">{{ tbody.td3 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- 스튜디오 소개 -->
    <!-- <div class="Studio-con">
      <p class="Studio-Title">스튜디오 소개</p>
      <div class="tab-con">
        <div class="tab">
          <div
            v-for="(item, index) in studioTab"
            :key="index"
            class="tab-list"
            @click="StudioState(index)"
          >
            <span class="list-text">{{ item }}</span>
          </div>
        </div>
      </div>
      <div class="intro-con">
        현재 스튜디오에 대한 사진 및 정보가 없으므로 개발 보류
        <div
          v-for="(studio, index) in studioIntro"
          :key="index"
          :class="['tab' + index, { '--active': studio === index }]"
        >
          <div
            v-for="(instrument, index) in studio.instrument"
            :key="index"
            class="instrument-card"
          >
            <div class="img-con">
              <img :src="instrument.src" class="img" />
            </div>
            <p class="instrument-text">{{ instrument.title }}</p>
          </div>
        </div>
      </div>
    </div> -->
  </section>
</template>

<script>
import HeaderTitle from "@/components/Header/SubTitle.vue";
export default {
  name: "SubStudio",
  components: {
    HeaderTitle,
  },
  data() {
    return {
      title: "스튜디오",
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
        {
          img: require("@/assets/studio/locate.svg"),
          title: "비대면 토탈솔루션",
          desc1: "비대면 방송",
          desc2: "타운홀 미팅",
          desc3: "비디오 컨퍼런스, 등",
        },
        {
          img: require("@/assets/studio/message.svg"),
          title: "실시간 스트리밍 서비스",
          desc1: "유튜브",
          desc2: "아프리카TV",
          desc3: "양방향 소통 가능",
        },
      ],
      tabList: ["스튜디오 기본장비", "회의실 임대", "스튜디오 임대"],
      table: [
        {
          thead: ["종류", "세부항목"],
          tbody: [
            {
              td1: "오디오",
              td2: "12채널 오디오 믹서 Focusrite 18i20 오디오 인터페이스 Mtrack 2x2 Cubase, Pro tools 프로그램",
            },
            {
              td1: "마이크",
              td2: "COMICA WIRELESS 5대 (CVM - WM100) 젠하이저 핸드마이크2대 (xsw2 835) 젠하이저 핀마이크 3대 (xsw2 me2)",
            },
            {
              td1: "카메라",
              td2: "Panasonic X2000 4K 3대 USB CAM 광각 PTZ CAM",
            },
            {
              td1: "조명",
              td2: "스탠드 조명 4대",
            },
          ],
        },
        {
          thead: ["장소", "1시간", "2시간"],
          tbody: [
            {
              td1: "2층 대회의실",
              td2: "4만원",
              td3: "24만원",
            },
            {
              td1: "1층 소회의실",
              td2: "3만원",
              td3: "18만원",
            },
          ],
        },
        {
          thead: ["구분", "비용 안내"],
          tbody: [
            {
              td1: "양방향 운용(4시간)",
              td2: "20만원",
            },
            {
              td1: "양방향 운용(1일)",
              td2: "35만원",
            },
            {
              td1: "기획/연출/편집",
              td2: "별도문의",
            },
          ],
        },
      ],
      studioTab: ["스튜디오", "장비", "스트리밍"],
      studioIntro: [
        {
          instrument: [
            {
              src: require("@/assets/studio/certification.svg"),
              title: "제1스튜디오(라이브방송)",
            },
            {
              src: require("@/assets/studio/certification.svg"),
              title: "제1스튜디오(라이브방송)",
            },
            {
              src: require("@/assets/studio/certification.svg"),
              title: "제1스튜디오(라이브방송)",
            },
            {
              src: require("@/assets/studio/certification.svg"),
              title: "제1스튜디오(라이브방송)",
            },
            {
              src: require("@/assets/studio/certification.svg"),
              title: "제1스튜디오(라이브방송)",
            },
            {
              src: require("@/assets/studio/certification.svg"),
              title: "제1스튜디오(라이브방송)",
            },
          ],
        },
      ],
    };
  },
  methods: {
    RentalState(index) {
      this.rentalState = index;
    },
    StudioState(index) {
      this.studioState = index;
    },
  },
};
</script>

<style scoped lang="scss">
//PC XL
@media screen and (min-width: 1300px) {
  .studio_section {
    margin-top: 75px;
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
}

.studio_section {
  width: 100%;
  .Text-con {
    width: 1300px;
    margin: 100px auto 0px auto;
    text-align: center;
    // display: grid;
    // justify-content: center;
    // align-items: center;
    .Title {
      font-family: "Pretendard-Regular";
      font-size: 30px;
      font-weight: bold;
    }
    .subTitle {
      font-family: "Pretendard-Regular";
      font-size: 20px;
      font-weight: bold;
      margin-top: 10px;
    }
  }
  .Service-con {
    display: grid;
    justify-content: center;
    margin: 100px auto 0px auto;

    .Sevice-Title {
      width: 1300px;
      margin-bottom: 50px;
      text-align: center;
      font-family: "Pretendard-Regular";
      font-size: 30px;
      font-weight: bold;
    }
    .Service-cardCon {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      .service-card {
        width: 25%;
        height: 300px;
        padding: 30px 10px;
        margin: 12px;
        border: solid 1px black;
        text-align: center;
        .icon-con {
          padding: 20px 0px;
          .icon {
            width: 40px;
            height: 40px;
          }
        }
        .Title {
          font-family: "Pretendard-Regular";
          font-size: 20px;
          font-weight: bold;
        }
        .subTitle {
          font-family: "Pretendard-Regular";
          font-size: 18px;
          color: #727272;
          letter-spacing: -1.7px;
          line-height: 23spx;
        }
      }
      .service-card:hover {
        border: solid 1px #805bea;
      }
    }
  }
  .Rental-con {
    display: grid;
    justify-content: center;
    margin: 100px auto 100px auto;
    .Rental-Title {
      width: 1300px;
      margin-bottom: 50px;
      text-align: center;
      font-family: "Pretendard-Regular";
      font-size: 30px;
      font-weight: bold;
    }
    .tab-con {
      display: grid;
      .tab {
        width: 1300px;
        display: flex;
        justify-content: center;
        align-items: center;
        .tab-list {
          width: 33%;
          padding: 18px;
          margin: 18px;
          text-align: center;
          border: solid 1px #b89ffc;
          border-radius: 40px;
          box-sizing: border-box;
          cursor: pointer;
          .list-text {
            font-family: "Pretendard-Regular";
            font-size: 20px;
            font-weight: bold;
          }
        }
        .--active {
          background-color: #805bea;
          color: white;
        }
      }

      table {
        width: 1300px;
        margin: auto;
        border-spacing: 0px;
        thead {
          display: table;
          width: 100%;
          background-color: #ffffff;
          border-top: solid 2px #805bea;
          border-bottom: solid 1px #c2c2c2;
          .thead0 {
            width: 40%;
            padding: 10px;
            border-right: solid 1px #c2c2c2;
            .thead-text {
              font-family: "Pretendard-Regular";
              font-size: 16px;
              font-weight: bold;
            }
          }
          .thead1 {
            width: 60%;
            padding: 10px;
            border-right: solid 1px #c2c2c2;
            .thead-text {
              font-family: "Pretendard-Regular";
              font-size: 16px;
              font-weight: bold;
            }
          }
        }
        tbody {
          width: 100%;
          display: table;
          text-align: center;
          .td0 {
            width: 40%;
            padding: 10px;
            border-bottom: solid 1px #c2c2c2;
            border-right: solid 1px #c2c2c2;
            line-height: 1.6;
            font-family: "Pretendard-Regular";
            font-size: 15px;
          }
          .td1 {
            width: 60%;
            padding: 10px;
            border-bottom: solid 1px #c2c2c2;
            border-right: solid 1px #c2c2c2;
            line-height: 1.6;
            font-family: "Pretendard-Regular";
            font-size: 15px;
          }
          .td2 {
            width: 60%;
            padding: 10px;
            line-height: 1.6;
            border-bottom: solid 1px #c2c2c2;
            font-family: "Pretendard-Regular";
            font-size: 15px;
          }
        }
      }
      @for $i from 0 through 2 {
        .tab#{$i} {
          display: none;
        }
        @if $i == 1 {
          .tab#{$i} {
            .thead#{$i} {
              width: 30%;
              padding: 10px;
            }
            .td#{$i} {
              width: 30%;
              padding: 10px;
            }
          }
        }
      }
      .--active {
        display: block;
      }
    }
  }

  .Studio-con {
    display: grid;
    justify-content: center;
    margin: 100px auto 0px auto;
    .Studio-Title {
      width: 1300px;
      margin-bottom: 50px;
      text-align: center;
      font-family: "Pretendard-Regular";
      font-size: 30px;
      font-weight: bold;
    }
    .tab-con {
      display: grid;
      .tab {
        width: 1300px;
        display: flex;
        justify-content: center;
        align-items: center;
        .tab-list {
          width: 33%;
          padding: 18px;
          margin: 18px;
          text-align: center;
          border: solid 1px black;
          border-radius: 40px;
          box-sizing: border-box;
          .list-text {
            font-family: "Pretendard-Regular";
            font-size: 20px;
            font-weight: bold;
          }
        }
      }
    }
    .intro-con {
      width: 1300px;
      margin-bottom: 100px;
      .tab0 {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .instrument-card {
          width: 30%;
          border: solid 1px #727272;
          margin: 12px;
          .img-con {
            width: 100%;
            height: 150px;
            // object-fit: cover;
          }
          .instrument-text {
            padding: 20px;
            border-top: solid 1px #727272;
            font-family: "Pretendard-Regular";
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
