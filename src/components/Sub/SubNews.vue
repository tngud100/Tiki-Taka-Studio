<template>
  <section class="news_section">
    <HeaderTitle :title-data="title" />
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
      <tbody style="display: grid; justify-content: center">
        <tr class="table_desserts" v-for="item in desserts" :key="item.num">
          <router-link :to="'/news/' + item.num">
            <td class="desserts_align td_num">
              {{ item.num }}
            </td>
            <td
              class="desserts_align td_title"
              style="justify-content: left; padding-left: 5%"
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
    <div class="page_btn_box">
      <!-- <v-icon class="btn_left page_btn">mdi-chevron-left</v-icon> -->
      <span class="btn_num">1</span>
      <!-- <v-icon class="btn_right page_btn">mdi-chevron-right</v-icon> -->
    </div>
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
      header: ["번호", "제목", "작성일자"],
      desserts: [
        {
          num: "4",
          title: "티키앤 타카 방송국 서브페이지 컨텐츠",
          date: "2022.11.02",
        },
        {
          num: "3",
          title: "티키앤 타카 방송국 서브페이지 컨텐츠",
          date: "2022.10.27",
        },
        {
          num: "2",
          title: "티키앤 타카 방송국 서브페이지 컨텐츠",
          date: "2022.10.13",
        },
        {
          num: "1",
          title: "티키앤 타카 방송국 서브페이지 컨텐츠",
          date: "2022.08.31",
        },
      ],
    };
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
  padding-bottom: 2%;
  margin-top: 40px;
  .table_header {
    display: flex;
    text-align: center;
    border-top: 1px solid #c4c4c4;
    // border-top: 2px solid #0174f5;
    border-bottom: 1px solid #c4c4c4;
    justify-content: space-between;
    align-items: center;
  }
  .table_desserts {
    display: table;
    text-align: center;
    border-bottom: 1px solid #e7e7e7;
    font-family: "Pretendard-Regular";
    .desserts_align {
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
  margin-bottom: 5%;
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

// PC
@media screen and (min-width: 1300px) {
  .news_section {
    margin-top: 75px;
  }
  .title {
    font-size: 48px;
    padding-top: 5%;
    padding-bottom: 3%;
    width: 1300px;
  }

  .table_header {
    height: 60px;
    font-size: 16px;
    .num {
      width: 125px;
    }
    .table_title {
      width: 1000px;
    }
    .table_date {
      width: 175px;
    }
  }

  .table_desserts {
    font-size: 16px;
    .td_num {
      width: 125px;
      height: 50px;
    }
    .td_title {
      width: 1000px;
      height: 50px;
    }
    .td_date {
      width: 175px;
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
@media screen and (min-width: 760px) and (max-width: 1300px) {
  .news_section {
    margin-top: 75px;
  }
  .title {
    font-size: 36px;
    padding-top: 5%;
    padding-bottom: 3%;
    width: 760px;
  }

  .table_header {
    height: 45px;
    font-size: 14px;

    .num {
      width: 60.8px;
    }
    .table_title {
      width: 608px;
    }
    .table_date {
      width: 91.5px;
    }
  }

  .table_desserts {
    font-size: 14px;

    .td_num {
      width: 60.8px;
      height: 40px;
    }
    .td_title {
      width: 608px;
      height: 40px;
    }
    .td_date {
      width: 91.5px;
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
@media screen and (min-width: 640px) and (max-width: 759px) {
  .news_section {
    margin-top: 50px;
  }
  .title {
    font-size: 28px;
    padding-top: 5%;
    padding-bottom: 3%;
    width: 640px;
  }

  .table_header {
    height: 45px;
    font-size: 12px;

    .num {
      width: 51.2px;
    }
    .table_title {
      width: 512px;
    }
    .table_date {
      width: 76.8px;
    }
  }

  .table_desserts {
    font-size: 14px;

    .td_num {
      width: 51.2px;
      height: 40px;
    }
    .td_title {
      width: 512px;
      height: 40px;
    }
    .td_date {
      width: 76.8px;
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

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .news_section {
    margin-top: 50px;
  }
  .title {
    font-size: 20px;
    padding-top: 5%;
    padding-bottom: 3%;
    width: 320px;
  }

  .table_header {
    height: 30px;
    font-size: 8px;

    .num {
      width: 25.6px;
    }
    .table_title {
      width: 256px;
    }
    .table_date {
      width: 38.4px;
    }
  }

  .table_desserts {
    font-size: 8px;

    .td_num {
      width: 25.6px;
      height: 30px;
    }
    .td_title {
      width: 256px;
      height: 30px;
    }
    .td_date {
      width: 38.4px;
      height: 30px;
    }
  }
  .btn_num {
    font-size: 10px;
  }
  .page_btn {
    font-size: 12px;
  }
}
</style>
