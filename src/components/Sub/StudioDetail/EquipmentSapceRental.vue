<template>
  <!-- 임대비용 안내 -->
  <div class="Rental-con">
    <!-- <p class="Rental-Title">촬영 공간 및 장비 대여</p> -->
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
      <!-- <div
        class="img-con"
        :class="['tab' + index, { '--active': rentalState === index }]"
      >
        <div class="instrument-con">
          <div
            v-for="(equipment, index) in equipmentImg"
            :key="index"
            class="instrument-wrap"
          >
            <div
              v-for="(instrument, index) in equipment.instrument"
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
      <swiper
        :navigation="true"
        :modules="modules"
        :style="{
          '--swiper-navigation-color': '#805bea',
          '--swiper-pagination-color': '#805bea',
        }"
        autoplay="2000"
        :class="['swiperCon', { '--active': rentalState === 0 }]"
        :breakpoints="{
          320: {
            slidesPerView: 2.2,
          },
          360: {
            slidesPerView: 3,
          },
          400: {
            slidesPerView: 3.3,
          },
          500: {
            slidesPerView: 3.5,
          },
          640: {
            slidesPerView: 3.7,
          },
          760: {
            slidesPerView: 4,
          },
          1080: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }"
      >
        <swiper-slide
          v-for="(item, index) in filteredItems"
          :key="index"
          class="swiper"
        >
          <div v-if="item.src" class="imgCon">
            <img class="img" :src="item.src" />
            <div class="textCon" style="text-align: center">
              <p class="subTitle">{{ item.name }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
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
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Navigation, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { mapGetters } from "vuex";
export default {
  name: "ESR",
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      rentalState: 0,
      modules: [FreeMode, Navigation, Scrollbar],
      tabList: ["스튜디오 기본장비", "스튜디오 소개"],
      equipment: [
        {
          thead: ["종류", "세부항목"],
          tbody: [
            {
              td1: "카메라",
              td2: "SONY FX3, SONY A7M IV, 렌즈 (SONY FE 70-200mm F2.8 GM), 렌즈 (SONY FE 24-70mm F2.8 GM), 렌즈 (SONY FE 85mm F1.4 GM), 렌즈 (탐론 28-200mm F2.8-5.6 Di III RXD A07 SONY FE마운트), 배터리 (SONY NP-FZ100), 배터리 (SONY FZ100 상시전원 더미 배터리 어댑터), 렌즈 필터(K&f Concept NANO-X Ultra slim MRC UV 렌즈 필터 67mm), 렌즈 필터 (K&f Concept NANO-X Ultra slim MRC UV 렌즈 필터 77mm), 렌즈 필터(K&f Concept NANO-X Ultra slim MRC UV 렌즈 필터 82mm), 키트 (틸타 SONY FX3 케이지 베이직 키트 (TA-T13-A-B)), 삼각대 (스몰리그 SR1989 삼각대 (헤드포함)), 짐벌(DJI 로닌 RS3 프로 콤보 짐벌)",
            },
            {
              td1: "모니터",
              td2: "ATOMOS 닌자 V 프리뷰모니터 프로 키트 ",
            },
            {
              td1: "마이크&오디오",
              td2: "RODE VIDEO MIC PRO PLUS, SONY UWP-D21, 코미카 4채널 무선마이크 BOOMX-U-QUA (송신기4, 수신기1), 베링거 FLOW8, Blackmagic Design ATEM Mini Extremem SIO",
            },
            {
              td1: "조명&촬영보조",
              td2: "고프로 히어로11 블랙 올인원 패키지, 난라이트 파보튜브II 30X LED조명 2키트, 난라이트 파보튜브II 플로어스탠드, 난라이트 FS-300B",
            },
          ],
        },
      ],

      studioIntro: [
        {
          instrument: [
            {
              src: require("@/assets/studio/라운지 (로비).png"),
              title: "라운지",
            },
            {
              src: require("@/assets/studio/라운지 (주방).png"),
              title: "키친 스튜디오",
            },
            {
              src: require("@/assets/studio/솔로 스튜디오_1.png"),
              title: "솔로 스튜디오",
            },
            {
              src: require("@/assets/studio/듀오_1.png"),
              title: "듀오 스튜디오",
            },
            {
              src: require("@/assets/studio/워터 외부.png"),
              title: "워터 스튜디오",
            },
            {
              src: require("@/assets/studio/하이브리드 스튜디오_1.png"),
              title: "하이브리드 스튜디오",
            },
            {
              src: require("@/assets/studio/화이트 스튜디오.png"),
              title: "화이트 스튜디오",
            },
            {
              src: require("@/assets/studio/그린 스튜디오.png"),
              title: "그린 스튜디오",
            },
            {
              src: require("@/assets/studio/파우더 룸(탈의실).png"),
              title: "파우더 룸(탈의실)",
            },
            {
              src: require("@/assets/studio/파우더 룸(화장대).png"),
              title: "파우더 룸(화장대)",
            },

            {
              src: require("@/assets/studio/샤워실 외부.png"),
              title: "샤워실",
            },
          ],
        },
      ],
      swiperNavigation: {
        nextEl: ".swiper-button-next", // 다음 버튼 클래스
        prevEl: ".swiper-button-prev", // 이전 버튼 클래스
      },
    };
  },
  computed: {
    ...mapGetters("main", ["equipments"]),
    filteredItems() {
      console.log(this.$store.state);
      console.log(this.equipments);
      const equipmentTypes = ["camera", "monitor", "MicAudio", "LightSubFilm"];
      let allEquipment = [];

      if (!this.equipments) return allEquipment; // 데이터가 없으면 빈 배열 반환

      equipmentTypes.forEach((type) => {
        if (this.equipments[type]) {
          // 데이터 유효성 확인
          allEquipment = allEquipment.concat(
            this.equipments[type].filter(
              (item) => item.src && item.src.trim() !== ""
            )
          );
        }
      });

      return allEquipment;
    },
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
      .swiperCon {
        width: 1300px;
        .img {
          width: 220px;
          height: 220px;
        }
      }
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
              height: 200px;
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
      .swiperCon {
        width: 1080px;
        .img {
          width: 160px;
          height: 160px;
        }
      }
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
      .swiperCon {
        width: 760px;
        .img {
          width: 120px;
          height: 120px;
        }
      }
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
      .swiperCon {
        width: 640px;
        .img {
          width: 120px;
          height: 120px;
        }
      }
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
      .swiperCon {
        width: calc(100% - 50px);
        .img {
          width: 80px;
          height: 80px;
        }
      }
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
    .swiperCon {
      display: none;
      border-radius: 5px;
      padding: 12px;
      margin-top: 30px;
      .swiper {
        align-self: center;
        .imgCon {
          text-align: center;
          width: 100%;
          aspect-ratio: 1/1;
          // .img {
          //   width: 220px;
          //   height: 220px;
          // }
        }
      }
    }
    .--active {
      display: block !important;
    }

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
</style>
