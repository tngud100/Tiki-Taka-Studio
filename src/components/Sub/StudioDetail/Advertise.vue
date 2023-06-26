<template>
  <section class="advertise-section">
    <div class="title-con">
      <p class="kategori">광고</p>
      <!-- <span class="prepare">준비중입니다</span> -->
    </div>
    <div class="table-con">
      <table v-for="(advertise, index) in advertise" :key="index" class="table">
        <thead>
          <th
            v-for="(thead, index) in advertise.thead"
            :key="index"
            :class="'thead thead' + index"
          >
            <span :class="'thead-text ' + index">{{ thead }}</span>
          </th>
        </thead>
        <tbody>
          <tr
            v-for="(tbody, index) in advertise.tbody"
            :key="index"
            class="tbody"
          >
            <!-- <span :class="'tbody-text td'" v-for="(text, index) in tbody" :key="index">text</span> -->
            <td class="tbody-text td0">{{ tbody.product }}</td>

            <td class="tbody-text td1">
              <span>{{ tbody.intro }}</span>
              <p v-if="tbody.intro1" class="'tbody-text td1' + index">
                {{ tbody.intro1 }}
              </p>
            </td>
            <td class="tbody-text td2">
              <span>{{ tbody.frequency }}</span>
              <p v-if="tbody.frequency1" class="body-text">
                {{ tbody.frequency1 }}
              </p>
            </td>
            <td class="tbody-text td3">{{ tbody.contract }}</td>
            <td class="tbody-text td4">{{ tbody.licence }}</td>
          </tr>
        </tbody>
      </table>
      <!-- 모바일 -->
      <table class="mobile-table">
        <th class="thead-text mobile-th">노출</th>
        <th class="thead-text mobile-th1">계약방식</th>
        <th class="thead-text mobile-th2">라이센스</th>
        <tr
          v-for="(tbody, index) in advertise[0].tbody"
          :key="index"
          class="tbody"
        >
          <td class="tbody-text mobile-td">
            <span>{{ tbody.frequency }}</span>
            <p v-if="tbody.frequency1" class="body-text">
              {{ tbody.frequency1 }}
            </p>
          </td>
          <td class="tbody-text mobile-td1">{{ tbody.contract }}</td>
          <td class="tbody-text mobile-td2">{{ tbody.licence }}</td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: "advertisePage",
  data() {
    return {
      advertise: [
        {
          thead: ["상품", "소개", "노출", "계약방식", "라이센스"],
          tbody: [
            {
              product: "단순 PPL",
              intro: "핵심 문구와 함께 제품 고정 노출",
              frequency: "30초 내외 설명",
              frequency1: "+단순 노출",
              contract: "영상당 비용",
              licence: "제공",
            },
            {
              product: "기획 PPL",
              intro: "호스트의 제품 사용",
              intro1: "+ 제품에 대한 깊이 있는 소개",
              frequency: "1분 내외 설명",
              frequency1: "+단순 노출",
              contract: "영상당 비용",
              licence: "제공",
            },
            {
              product: "라이브 PPL",
              intro: "",
              intro1: "",
              frequency: "",
              contract: "",
              licence: "",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
//PC XL
@media screen and (min-width: 1300px) {
  .advertise-section {
    .title-con {
      margin: 100px auto 0px auto;
      .kategori {
        font-size: 30px;
      }
    }
    .table-con {
      width: 1300px;
      margin: 100px auto;
      thead {
        .thead-text {
          font-size: 16px;
        }
      }
      tbody {
        .tbody-text {
          line-height: 1.6;
          font-size: 15px;
        }
      }
    }
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .advertise-section {
    .title-con {
      margin: 100px auto 0px auto;
      .kategori {
        font-size: 30px;
      }
    }
    .table-con {
      width: 1080px;
      margin: 100px auto;
      thead {
        .thead-text {
          font-size: 16px;
        }
      }
      tbody {
        .tbody-text {
          line-height: 1.6;
          font-size: 15px;
        }
      }
    }
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .advertise-section {
    .title-con {
      margin: 80px auto 0px auto;
      .kategori {
        font-size: 24px;
      }
    }
    .table-con {
      width: 760px;
      margin: 80px auto;
      thead {
        .thead-text {
          font-size: 15px;
        }
      }
      tbody {
        .tbody-text {
          line-height: 1.6;
          font-size: 15px;
        }
      }
    }
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .advertise-section {
    .title-con {
      margin: 40px auto 0px auto;
      .kategori {
        font-size: 24px;
      }
    }
    .table-con {
      width: 640px;
      margin: 40px auto;
      thead {
        .thead-text {
          font-size: 15px;
        }
      }
      tbody {
        .tbody-text {
          line-height: 1.6;
          font-size: 14px;
        }
      }
    }
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .advertise-section {
    .title-con {
      margin: 60px auto 0px auto;
      .kategori {
        font-size: 24px;
      }
    }
    .table-con {
      width: calc(100% - 12px);
      margin: 60px auto;
      thead {
        .thead-text {
          font-size: 15px;
        }
        .thead0 {
          width: 33% !important;
        }
        .thead1 {
          width: 66% !important;
          border-right: solid 0px #c2c2c2 !important;
        }
        .thead2,
        .thead3,
        .thead4 {
          display: none;
        }
      }
      tbody {
        height: 150px;
        .tbody-text {
          line-height: 1.6;
          font-size: 14px;
        }
        .td0 {
          width: 33% !important;
        }
        .td1 {
          width: 66% !important;

          border-right: solid 0px #c2c2c2 !important;
        }

        .td2,
        .td3,
        .td4 {
          display: none;
        }
      }
    }
    .mobile-table {
      display: table !important;
    }
  }
}

.advertise-section {
  .title-con {
    .kategori {
      text-align: center;
      font-family: "Pretendard-Regular";
      font-weight: bold;
      background-position: center;
      background-image: url("@/assets/studio/titleLine.svg");
    }
  }

  .table-con {
    border-spacing: 0px;
    table {
      width: 100%;
    }
    thead {
      display: table;
      width: 100%;
      background-color: whitesmoke;
      border-top: solid 2px #805bea;
      border-bottom: solid 1px #c2c2c2;
      border-spacing: 0px;
      .thead0 {
        width: 15%;
        padding: 10px;
        border-right: solid 1px #c2c2c2;
      }
      .thead1 {
        width: 35%;
        padding: 10px;
        border-right: solid 1px #c2c2c2;
      }
      .thead2 {
        width: 20%;
        padding: 10px;
        border-right: solid 1px #c2c2c2;
      }
      .thead3 {
        width: 15%;
        padding: 10px;
        border-right: solid 1px #c2c2c2;
      }
      .thead4 {
        width: 15%;
        padding: 10px;
      }
      .thead-text {
        font-family: "Pretendard-Regular";
        font-weight: bold;
      }
    }
    tbody {
      width: 100%;
      display: table;
      text-align: center;
      border-spacing: 0px;

      .td0 {
        width: 15%;
        padding: 10px;
        border-bottom: solid 1px #c2c2c2;
        border-right: solid 1px #c2c2c2;
      }
      .td1 {
        width: 35%;
        padding: 10px;
        border-bottom: solid 1px #c2c2c2;
        border-right: solid 1px #c2c2c2;
      }
      .td2 {
        width: 20%;
        padding: 10px;
        border-bottom: solid 1px #c2c2c2;
        border-right: solid 1px #c2c2c2;
      }
      .td3 {
        width: 15%;
        padding: 10px;
        border-bottom: solid 1px #c2c2c2;
        border-right: solid 1px #c2c2c2;
      }
      .td4 {
        width: 15%;
        padding: 10px;
        border-bottom: solid 1px #c2c2c2;
      }
      .tbody-text {
        font-family: "Pretendard-Regular";
      }
    }
    // 모바일 테이블
    .mobile-table {
      display: none;
      margin-top: 12px;
      border-spacing: 0px;
      border-top: solid 2px #805bea;
      text-align: center;

      .mobile-th,
      .mobile-th1 {
        border-right: solid 1px #c2c2c2;
      }
      .thead-text {
        width: 33%;
        padding: 10px;
        font-family: "Pretendard-Regular";
        font-size: 15px;
        border-bottom: solid 1px #c2c2c2;
        background-color: whitesmoke;
      }

      .mobile-td,
      .mobile-td1 {
        border-right: solid 1px #c2c2c2;
      }
      .tbody-text {
        width: 33%;
        height: 45px;
        padding: 10px;
        font-family: "Pretendard-Regular";
        font-size: 14px;
        border-bottom: solid 1px #c2c2c2;
      }
    }
  }
}
</style>
