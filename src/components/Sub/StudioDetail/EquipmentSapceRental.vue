<template>
  <!-- 임대비용 안내 -->
  <div class="Rental-con">
    <p class="Rental-Title">촬영 공간 및 장비 대여</p>
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
      <!-- 스튜디오 기본장비-->
      <table
        v-for="(equipment, index) in equipment"
        :key="index"
        :class="['tab' + index, { '--active': rentalState === index }]"
      >
        <thead>
          <th
            v-for="(thead, index) in equipment.thead"
            :key="index"
            :class="'thead' + index"
          >
            <span class="thead-text">{{ thead }}</span>
          </th>
        </thead>
        <tbody>
          <tr
            v-for="(tbody, index) in equipment.tbody"
            :key="index"
            class="tbody"
          >
            <td class="td0">{{ tbody.td1 }}</td>
            <td class="td1">{{ tbody.td2 }}</td>
            <td v-if="tbody.td3" class="td2">{{ tbody.td3 }}</td>
          </tr>
        </tbody>
      </table>
      <!-- 스튜디오 소개 -->
      <div
        class="Studio-con"
        style="display: none"
        :class="{ '--active': rentalState === 1 }"
      >
        <div class="instrument-con">
          <div
            v-for="(studio, index) in studioIntro"
            :key="index"
            class="instrument-wrap"
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ESR",
  data() {
    return {
      rentalState: 0,
      tabList: ["스튜디오 기본장비", "스튜디오 소개"],
      equipment: [
        {
          thead: ["종류", "세부항목"],
          tbody: [
            {
              td1: "촬영장비",
              td2: "소니 FX3, 렌즈 (Meike-프라임 50mm T2.1), 렌즈 (ZEISS-Batis 18mm f/2.8), 마이크 (NEUMANN KK184+KM), 마이크 (RODE VideoMic NTG), 캠코더 ( HXRNX5R 789419)",
            },
            {
              td1: "PC 장비",
              td2: "웹캠 (DSLR + 렌즈세트), 모니터 (32인치), PC (i9/DDR5 64G/M2 2TB/4090), PC (i7/DDR4 64G/M2 2TB/3060)",
            },
            {
              td1: "조명",
              td2: "면조명",
            },
            {
              td1: "악세사리",
              td2: "삼각대 (Marsace MT2542), 짐벌 (DJI RONIN SC 2 PRO), 짐벌 (DJI 오리지널 RSC 2), 조명 (파보튜브2), 드론 (DJI Mavic 3 매빅 프리미엄)",
            },
          ],
        },
        // {
        //   thead: ["장소", "N시간"],
        //   tbody: [
        //     {
        //       td1: "5층 대회의실",
        //       td2: "미정",
        //       // td3: "24만원",
        //     },
        //     {
        //       td1: "4층 소회의실",
        //       td2: "미정",
        //       // td3: "18만원",
        //     },
        //   ],
        // },
        // {
        //   thead: ["구분", "비용 안내"],
        //   tbody: [
        //     {
        //       td1: "양방향 운용(4시간)",
        //       td2: "미정",
        //     },
        //     {
        //       td1: "양방향 운용(1일)",
        //       td2: "미정",
        //     },
        //     {
        //       td1: "기획/연출/편집",
        //       td2: "미정",
        //     },
        //   ],
        // },
      ],
      studioIntro: [
        {
          instrument: [
            {
              src: require("@/assets/studio/studio1.svg"),
              title: "로비A",
            },
            {
              src: require("@/assets/studio/studio2.svg"),
              title: "로비B",
            },
            {
              src: require("@/assets/studio/studio3.svg"),
              title: "로비C",
            },
            {
              src: require("@/assets/studio/studio4.svg"),
              title: "드레스룸",
            },
            {
              src: require("@/assets/studio/studio5.svg"),
              title: "사무공간",
            },
            {
              src: require("@/assets/studio/studio6.svg"),
              title: "주방",
            },
            {
              src: require("@/assets/studio/studio7.svg"),
              title: "개인방송실",
            },
            {
              src: require("@/assets/studio/studio8.svg"),
              title: "크로마키실",
            },
            {
              src: require("@/assets/studio/studio9.svg"),
              title: "편집실",
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
  },
};
</script>

<style scoped lang="scss">
//PC XL
@media screen and (min-width: 1300px) {
  .Rental-con {
    margin: 100px auto 100px auto;
    .Rental-Title {
      width: 1300px;
      margin-bottom: 50px;
      font-size: 30px;
    }
    .tab-con {
      .tab {
        width: 1300px;
        .tab-list {
          width: 33%;
          padding: 18px;
          margin: 18px;
          .list-text {
            font-size: 20px;
          }
        }
      }
      table {
        width: 1300px;
        thead {
          .thead0 {
            width: 40%;
            padding: 10px;
            .thead-text {
              font-size: 16px;
            }
          }
          .thead1 {
            width: 60%;
            padding: 10px;
            .thead-text {
              font-size: 16px;
            }
          }
        }
        tbody {
          .td0 {
            width: 40%;
            line-height: 1.6;
            font-size: 15px;
          }
          .td1 {
            width: 60%;
            padding: 10px;
            line-height: 1.6;
            font-size: 15px;
          }
          .td2 {
            width: 60%;
            padding: 10px;
            line-height: 1.6;
            font-size: 15px;
          }
        }
      }
      .Studio-con {
        .instrument-con {
          width: 1300px;
          .instrument-card {
            width: calc(33% - 24px);
            margin: 12px;
            .img-con {
              height: 150px;
            }
            .instrument-text {
              padding: 20px;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .Rental-con {
    margin: 100px auto 100px auto;
    .Rental-Title {
      width: 1080px;
      margin-bottom: 50px;
      font-size: 30px;
    }
    .tab-con {
      .tab {
        width: 1080px;
        .tab-list {
          width: 33%;
          padding: 18px;
          margin: 18px;
          .list-text {
            font-size: 20px;
          }
        }
      }
      table {
        width: 1080px;
        thead {
          .thead0 {
            width: 40%;
            padding: 10px;
            .thead-text {
              font-size: 16px;
            }
          }
          .thead1 {
            width: 60%;
            padding: 10px;
            .thead-text {
              font-size: 16px;
            }
          }
        }
        tbody {
          .td0 {
            width: 40%;
            line-height: 1.6;
            font-size: 15px;
          }
          .td1 {
            width: 60%;
            padding: 10px;
            line-height: 1.6;
            font-size: 15px;
          }
          .td2 {
            width: 60%;
            padding: 10px;
            line-height: 1.6;
            font-size: 15px;
          }
        }
      }
      .Studio-con {
        .instrument-con {
          width: 1080px;
          .instrument-card {
            width: calc(33% - 24px);
            margin: 12px;
            .img-con {
              height: 150px;
            }
            .instrument-text {
              padding: 20px;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .Rental-con {
    margin: 80px auto;
    .Rental-Title {
      width: 760px;
      margin-bottom: 40px;
      font-size: 24px;
    }
    .tab-con {
      .tab {
        width: 760px;
        .tab-list {
          width: 33%;
          padding: 14px;
          margin: 18px;
          .list-text {
            font-size: 18px;
          }
        }
      }
      table {
        width: 760px;
        thead {
          .thead0 {
            width: 40%;
            padding: 10px;
            .thead-text {
              font-size: 15px;
            }
          }
          .thead1 {
            width: 60%;
            padding: 10px;
            .thead-text {
              font-size: 15px;
            }
          }
        }
        tbody {
          .td0 {
            width: 40%;
            line-height: 1.6;
            font-size: 15px;
          }
          .td1 {
            width: 60%;
            padding: 10px;
            line-height: 1.6;
            font-size: 15px;
          }
          .td2 {
            width: 60%;
            padding: 10px;
            line-height: 1.6;
            font-size: 15px;
          }
        }
      }
      .Studio-con {
        .instrument-con {
          width: 760px;
          .instrument-card {
            width: calc(33% - 24px);
            margin: 12px;
            .img-con {
              height: 150px;
            }
            .instrument-text {
              padding: 20px;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .Rental-con {
    margin: 80px auto;
    .Rental-Title {
      width: 640px;
      margin-bottom: 40px;
      font-size: 22px;
    }
    .tab-con {
      .tab {
        width: 640px;
        .tab-list {
          width: 33%;
          padding: 12px;
          margin: 16px;
          .list-text {
            font-size: 16px;
          }
        }
      }
      table {
        width: 640px;
        padding: 0px 12px;

        thead {
          .thead0 {
            width: 40%;
            padding: 10px;
            .thead-text {
              font-size: 15px;
            }
          }
          .thead1 {
            width: 60%;
            padding: 10px;
            .thead-text {
              font-size: 15px;
            }
          }
        }
        tbody {
          .td0 {
            width: 40%;
            line-height: 1.6;
            font-size: 14px;
          }
          .td1 {
            width: 60%;
            padding: 10px;
            line-height: 1.6;
            font-size: 15px;
          }
          .td2 {
            width: 60%;
            padding: 10px;
            line-height: 1.6;
            font-size: 15px;
          }
        }
      }
      .Studio-con {
        .instrument-con {
          width: 620px;
          .instrument-card {
            width: calc(50% - 24px);
            margin: 12px;
            .img-con {
              height: 150px;
            }
            .instrument-text {
              padding: 20px;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .Rental-con {
    margin: 60px auto;
    .Rental-Title {
      width: 100%;
      margin-bottom: 40px;
      font-size: 20px;
    }
    .tab-con {
      .tab {
        width: calc(100% - 12px);
        .tab-list {
          width: 33%;
          height: 75px;
          padding: 12px;
          margin: 16px;
          display: flex !important;
          align-items: center;
          justify-content: center;
          border-radius: 5px !important;
          .list-text {
            font-size: 14px;
          }
        }
      }
      table {
        width: calc(100% - 20px);
        padding: 0px 10px;

        thead {
          .thead0 {
            width: 40%;
            padding: 8px;
            .thead-text {
              font-size: 13px;
            }
          }
          .thead1 {
            width: 60%;
            padding: 10px;
            .thead-text {
              font-size: 13px;
            }
          }
        }
        tbody {
          .td0 {
            width: 40%;
            line-height: 1.6;
            font-size: 12px;
          }
          .td1 {
            width: 60%;
            padding: 10px;
            line-height: 1.6;
            font-size: 13px;
          }
          .td2 {
            width: 60%;
            padding: 10px;
            line-height: 1.6;
            font-size: 13px;
          }
        }
      }
      .Studio-con {
        .instrument-con {
          width: 100%;
          .instrument-card {
            width: calc(50% - 24px);
            margin: 12px;
            .img-con {
              height: 150px;
            }
            .instrument-text {
              padding: 20px;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}
.Rental-con {
  display: grid;
  justify-content: center;
  .Rental-Title {
    text-align: center;
    font-family: "Pretendard-Regular";
    font-weight: bold;
    background-position: center;
    background-image: url("@/assets/studio/titleLine.svg");
  }
  .tab-con {
    display: grid;
    .tab {
      // width: 1300px;
      display: flex;
      justify-content: center;
      align-items: center;
      .tab-list {
        // width: 33%;
        // padding: 18px;
        // margin: 18px;
        text-align: center;
        border: solid 1px #b89ffc;
        border-radius: 40px;
        box-sizing: border-box;
        cursor: pointer;
        .list-text {
          font-family: "Pretendard-Regular";
          // font-size: 20px;
          font-weight: bold;
        }
      }
      .--active {
        background-color: #805bea;
        color: white;
      }
    }

    table {
      // width: 1300px;
      margin: auto;
      margin-top: 50px;

      border-spacing: 0px;
      thead {
        display: table;
        width: 100%;
        background-color: #ffffff;
        border-top: solid 2px #805bea;
        border-bottom: solid 1px #c2c2c2;
        .thead0 {
          // width: 40%;
          // padding: 10px;
          border-right: solid 1px #c2c2c2;
          .thead-text {
            font-family: "Pretendard-Regular";
            // font-size: 16px;
            font-weight: bold;
          }
        }
        .thead1 {
          // width: 60%;
          // padding: 10px;
          // border-right: solid 1px #c2c2c2;
          .thead-text {
            font-family: "Pretendard-Regular";
            // font-size: 16px;
            font-weight: bold;
          }
        }
      }
      tbody {
        width: 100%;
        display: table;
        text-align: center;
        .td0 {
          // width: 40%;
          // padding: 10px;
          border-bottom: solid 1px #c2c2c2;
          border-right: solid 1px #c2c2c2;
          // line-height: 1.6;
          font-family: "Pretendard-Regular";
          // font-size: 15px;
        }
        .td1 {
          // width: 60%;
          // padding: 10px;
          border-bottom: solid 1px #c2c2c2;
          // border-right: solid 1px #c2c2c2;
          // line-height: 1.6;
          font-family: "Pretendard-Regular";
          // font-size: 15px;
        }
        .td2 {
          // width: 60%;
          // padding: 10px;
          // line-height: 1.6;
          border-bottom: solid 1px #c2c2c2;
          font-family: "Pretendard-Regular";
          // font-size: 15px;
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
      display: block !important;
    }
  }

  .Studio-con {
    display: grid;
    justify-content: center;
    margin: 50px auto 0px auto;

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
    .instrument-con {
      .instrument-wrap {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
      }
      .instrument-card {
        border: solid 1px #b9b9b9;
        border-radius: 5px;
        .img-con {
          width: 100%;
          .img {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        }
        .instrument-text {
          font-family: "Pretendard-Regular";
        }
      }
    }
  }
}
</style>
