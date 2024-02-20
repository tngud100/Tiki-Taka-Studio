<template>
  <section class="news_section">
    <HeaderTitle
      :title-data="title"
      :sub-title-data="subTitle"
      :bg-image="bgImage"
    />
    <div class="table_con">
      <thead
        :headers="header"
        :items="desserts"
        style="display: flex; justify-content: center"
      >
        <tr>
          <!-- v-for="(title, index) in header"
          :key="index" -->
          <th class="table_header">
            <span class="num">번호</span>
            <span class="table_title">제목</span>
            <span class="table_date">작성일자</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="table_desserts" v-for="item in desserts" :key="item.num">
          <router-link :to="'/news' + item.num">
            <td class="desserts_align td_num">
              {{ item.num }}
            </td>

            <td
              class="desserts_align td_title"
              style="justify-content: left; padding-left: 3%"
            >
              {{ item.title }}
            </td>
            <td class="desserts_align td_date">
              {{ item.date }}
            </td>
          </router-link>
        </tr>
      </tbody>
    </div>
    <v-pagination
      v-model="page"
      :length="4"
      rounded="circle"
      style="margin-bottom: 30px"
    ></v-pagination>
    <!-- <div class="page_btn_box">
      <v-icon class="btn_left page_btn">mdi-chevron-left</v-icon>
      <span class="btn_num">1</span>
      <v-icon class="btn_right page_btn">mdi-chevron-right</v-icon>
    </div> -->
  </section>
</template>
<script>
import HeaderTitle from "@/components/Header/SubTitle.vue";

export default {
  name: "SubNews",
  components: {
    HeaderTitle,
  },

  data() {
    return {
      title: "회사소식",
      subTitle: "News",
      bgImage: [
        require("@/assets/banner/notify1920.svg"),
        require("@/assets/banner/notify1300.svg"),
        require("@/assets/banner/notify760.svg"),
      ],
      page: 1,
      header: ["번호", "제목", "작성일자"],
      dessertsData: [
        {
          num: "38",
          title: " 직접생산확인증명서",
          date: "2024.01.03",
        },
        {
          num: "37",
          title: " 가족친화인증서 취득",
          date: "2023.12.01",
        },
        {
          num: "36",
          title: " 2023년 여성 새로 일하기 센터 기업 협약",
          date: "2023.11.10",
        },
        {
          num: "35",
          title: " 2023년 동서대학교 취업박람회",
          date: "2023.11.08",
        },
        {
          num: "34",
          title: " 산학협력 체결서_정보영스피치",
          date: "2023.11.01",
        },
        {
          num: "33",
          title: " 2023년 기장군 일자리박람회",
          date: "2023.10.26",
        },
        {
          num: "32",
          title: " 2023년 연제구 일자리박람회",
          date: "2023.10.23",
        },
        {
          num: "31",
          title: " 사상여성인력개발센터 업무 협약",
          date: "2023.10.20",
        },
        {
          num: "30",
          title: " 대중문화예술기획업 등록 교육 이수",
          date: "2023.08.16",
        },
        {
          num: "29",
          title: " 비디오 생산 증명서 취득",
          date: "2023.08.08",
        },
        {
          num: "28",
          title: " (주)게임인스 하계휴가 안내",
          date: "2023.07.25",
        },
        {
          num: "27",
          title: " (주)게임인스 TNT Studio의 촬영 스튜디오 사상점 오픈",
          date: "2023.07.21",
        },
        {
          num: "26",
          title: " 일 생활균형 일촌기업 사업 참여",
          date: "2023.06.22",
        },
        {
          num: "25",
          title: "한국건강가정진흥원 교육 이수",
          date: "2023.05.30",
        },
        {
          num: "24",
          title: " 2차 법정의무교육 진행",
          date: "2023.05.03",
        },
        {
          num: "23",
          title: " 센텀직업전문학교_업무 협약",
          date: "2023.04.26",
        },
        {
          num: "22",
          title: " M아카데미컴퓨터아트학원_산학 컨소시엄 협력",
          date: "2023.04.12",
        },
        {
          num: "21",
          title: " 2차 직무능력향상 교육",
          date: "2023.04.11",
        },
        {
          num: "20",
          title: " [보도자료] (주)게임인스, 씀씀이가 바른 기업 가입",
          date: "2023.04.10",
        },
        {
          num: "19",
          title: "부산디자인진흥원 인력양성사업 협약",
          date: "2022.04.04",
        },
        {
          num: "18",
          title: "파란일자리(1유형) 지원 사업 선정 및 협약",
          date: "2023.03.01",
        },
        {
          num: "17",
          title: "부산인재개발원 실무인재 양성훈련 협약",
          date: "2023.02.23",
        },
        {
          num: "16",
          title: "1차 법정의무교육 진행",
          date: "2023.02.17",
        },
        {
          num: "15",
          title: "근로자 휴가지원 사업 참여",
          date: "2023.02.02",
        },
        {
          num: "14",
          title: "1차 직무능력향상 교육",
          date: "2023.01.17",
        },
        {
          num: "13",
          title: "소상공인IP역량강화 교육 수료",
          date: "2022.11.24",
        },
        {
          num: "12",
          title: "일생활 균형 캠페인 참여",
          date: "2022.11.14",
        },
        {
          num: "11",
          title: "창업 아카데미 교육 이수",
          date: "2022.11.11",
        },
        {
          num: "10",
          title: "2022 신라대학교 취업박람회",
          date: "2022.11.03",
        },
        {
          num: "9",
          title: " 청년 일자리 지원 사업 참여",
          date: "2022.11.02",
        },
        {
          num: "8",
          title: "(재)부산인재개발원 부산IT교육센터와의 협약 체결",
          date: "2022.10.27",
        },
        {
          num: "7",
          title: " 2022 서부산권 채용박람회",
          date: "2022.10.13",
        },
        {
          num: "6",
          title:
            " 한국산업안전보건공단_2022년 사무직 종사자의 안전관리 교육 이수",
          date: "2022.09.15",
        },
        {
          num: "5",
          title: " 청년내일채움공제 참여",
          date: "2022.08.31",
        },
        {
          num: "4",
          title: " 개인정보보호위원회_(신)개인정보보호법 교육 수료",
          date: "2022.08.31",
        },
        {
          num: "3",
          title: " 통신판매업 신고",
          date: "2022.04.07",
        },
        {
          num: "2",
          title: " 기업부설연구소 인정",
          date: "2022.08.31",
        },
        {
          num: "1",
          title: " 중소기업 인증",
          date: "2022.08.31",
        },
      ],

      // desserts: [
      //   {
      //     num: "2",
      //     title: "TNT Studio 스튜디오 7월 완공",
      //     date: "2023.07.21",
      //   },
      //   {
      //     num: "1",
      //     title: "TNT Studio Grand Opening",
      //     date: "2023.06.10",
      //   },
      // ],
    };
  },
  computed: {
    desserts() {
      // 현재 페이지에 해당하는 디저트 데이터를 반환합니다.
      const startIndex = (this.page - 1) * 10;
      const endIndex = startIndex + 10;
      return this.dessertsData.slice(startIndex, endIndex);
    },
  },
};
</script>
<style lang="scss" scoped>
.news_section {
  display: block;

  .title {
    display: flex;

    margin: auto;
    font-weight: bold;
    font-family: "Pretendard-Regular";
  }
}

.table_con {
  box-sizing: border-box;
  display: grid;
  position: relative;
  justify-content: center;
  padding-bottom: 30px;
  margin-top: 100px;
  .table_header {
    font-family: "Pretendard-Regular";
    display: flex;
    text-align: center;
    border-top: 1px solid #c4c4c4;
    // border-top: 2px solid #0174f5;
    border-bottom: 1px solid #c4c4c4;
    justify-content: space-between;
    align-items: center;
    .num {
      width: 15%;
    }
    .table_title {
      width: 70%;
    }
    .table_date {
      width: 15%;
    }
  }
  .table_desserts {
    display: table;
    text-align: center;
    border-bottom: 1px solid #e7e7e7;
    font-family: "Pretendard";
    width: 100%;
    .td_num {
      width: 15%;
    }
    .td_title {
      width: 70%;
    }
    .td_date {
      width: 15%;
    }
    .desserts_align {
      // display: -webkit-inline-box;
      // text-overflow: ellipsis;
      // word-break: break-word;
      // -webkit-box-orient: vertical;
      // -webkit-line-clamp: 1;
      // overflow: hidden;
      // align-self: center;

      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }
  .table_desserts:hover {
    background-color: #f1f1f1;
  }
}
.page_btn_box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 100px;
  .page_btn {
    margin: 0% 0.5%;
    cursor: pointer;
  }
  .btn_num {
    font-family: "Pretendard-Regular";
    color: #585050;
    font-weight: bold;
  }
}

a {
  text-decoration: none;
  color: black;
  display: flex;
}

// PC XL
@media screen and (min-width: 1300px) {
  .news_section {
    margin-top: 80px;
  }
  .title {
    font-size: 48px;
    padding-top: 5%;
    padding-bottom: 3%;
    width: 1300px;
  }

  .table_header {
    width: 1300px;
    height: 60px;
    font-size: 16px;
  }

  .table_desserts {
    font-size: 16px;

    .td_num {
      height: 50px;
    }
    .td_title {
      height: 50px;
    }
    .td_date {
      height: 50px;
    }
  }
  .btn_num {
    font-size: 16px;
  }
  .page_btn {
    font-size: 20px;
  }
}
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .news_section {
    margin-top: 70px;
  }
  .title {
    font-size: 48px;
    padding-top: 5%;
    padding-bottom: 3%;
    width: 1080px;
  }

  .table_header {
    width: 1080px;
    height: 60px;
    font-size: 16px;
  }

  .table_desserts {
    font-size: 16px;
    .td_num {
      height: 50px;
    }
    .td_title {
      height: 50px;
    }
    .td_date {
      height: 50px;
    }
  }
  .btn_num {
    font-size: 16px;
  }
  .page_btn {
    font-size: 20px;
  }
}

// pc
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .news_section {
    margin-top: 60px;
  }
  .title {
    font-size: 36px;
    padding-top: 5%;
    padding-bottom: 3%;
    width: 760px;
  }
  .table_header {
    width: 760px;
    height: 45px;
    font-size: 14px;
  }

  .table_desserts {
    font-size: 14px;

    .td_num {
      height: 40px;
    }
    .td_title {
      height: 40px;
    }
    .td_date {
      height: 40px;
    }
  }
  .btn_num {
    font-size: 14px;
  }
  .page_btn {
    font-size: 18px;
  }
}
// 테블릿
// @media screen and (min-width: 640px) and (max-width: 759px) {
//   .news_section {
//     margin-top: 55px;
//   }
//   .title {
//     font-size: 28px;
//     padding-top: 5%;
//     padding-bottom: 3%;
//     width: 640px;
//   }

//   .table_header {
//     width: 640px;
//     height: 45px;
//     font-size: 12px;
//   }

//   .table_desserts {
//     font-size: 14px;

//     .td_num {
//       height: 40px;
//     }
//     .td_title {
//       height: 40px;
//     }
//     .td_date {
//       height: 40px;
//     }
//   }
//   .btn_num {
//     font-size: 14px;
//   }
//   .page_btn {
//     font-size: 18px;
//   }
// }

// 모바일
@media screen and (max-width: 760px) {
  .news_section {
    margin-top: 50px;
  }
  .title {
    font-size: 20px;
    padding-top: 5%;
    padding-bottom: 3%;
    width: calc(100vw - 40px);
  }

  .table_header {
    font-size: 16px;
    width: calc(100vw - 40px);
    .table_title {
      width: 60% !important;
      margin: 16px 0px;
      margin: 8px;
    }
    .table_date {
      width: 25% !important;
      margin: 16px 0px;
    }
  }

  .table_desserts {
    font-size: 16px;
    width: calc(100% - 40px) !important;
    margin: auto;
    .desserts_align {
      display: -webkit-inline-box !important;
      text-overflow: ellipsis;
      word-break: break-word;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      align-self: center;
    }
    .td_num {
      margin: 16px 0px;
      // height: 30px;
    }
    .td_title {
      width: 60% !important;
      margin: 16px 0px;
      text-align: left;

      // height: 30px;
    }
    .td_date {
      width: 25% !important;
      margin: 16px 0px;
      // height: 30px;
    }
  }
  .btn_num {
    font-size: 14px;
  }
  .page_btn {
    font-size: 12px;
  }
}
</style>
