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
      title: "공지사항",
      subTitle: "Notify",
      bgImage: [
        require("@/assets/banner/notify1920.svg"),
        require("@/assets/banner/notify1300.svg"),
        require("@/assets/banner/notify760.svg"),
      ],
      header: ["번호", "제목", "작성일자"],
      desserts: [
        {
          num: "1",
          title: "TNT Studio Grand Opening",
          date: "2023.06.10",
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
  padding-bottom: 30px;
  margin-top: 100px;
  .table_header {
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
    font-family: "Pretendard-Regular";
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
    margin-top: 80px;
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
@media screen and (min-width: 640px) and (max-width: 759px) {
  .news_section {
    margin-top: 55px;
  }
  .title {
    font-size: 28px;
    padding-top: 5%;
    padding-bottom: 3%;
    width: 640px;
  }

  .table_header {
    width: 640px;
    height: 45px;
    font-size: 12px;
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

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
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
    height: 30px;
    font-size: 11px;
    width: calc(100vw - 40px);
    .table_title {
      width: 60% !important;
    }
    .table_date {
      width: 25% !important;
    }
  }

  .table_desserts {
    font-size: 11px;

    .td_num {
      height: 30px;
    }
    .td_title {
      width: 60% !important;
      height: 30px;
    }
    .td_date {
      width: 25% !important;
      height: 30px;
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
