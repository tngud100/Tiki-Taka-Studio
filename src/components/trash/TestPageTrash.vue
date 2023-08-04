<template>
  <Header />
  <section class="contact_section">
    <SubTitle
      :title-data="title"
      :sub-title-data="subTitle"
      :bg-image="bgImage"
    />
    <div class="title_con">
      <div class="title">
        <p>티키앤타카 스튜디오</p>
        <p>예약하기 폼</p>
      </div>
      <div class="sub_title">
        <span>아름다운 스튜디오 마음껏 사용하세요</span>
      </div>
    </div>
    <!-- <v-menu v-model="menu" :close-on-content-click="false">
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="date"
          label="Select Date"
          readonly
          v-bind="attrs"
          v-on="on"
        />
      </template>
      <v-date-picker v-model="pickedDate" @input="menu = false" />
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="menu = false">Cancel</v-btn>
        <v-btn color="primary" text @click="updateDate">OK</v-btn>
      </v-card-actions>
    </v-menu> -->
    <v-row justify="space-around">
      <v-date-picker
        title="Reservate date"
        elevation="4"
        v-model="date"
        @update:model-value="updateDate"
      >
      </v-date-picker>
    </v-row>
    <div class="d-flex justify-center mt-2">
      Date: {{ this.date || "No date" }}
    </div>
  </section>
  <FooterMain style="margin-top: 10%" />
</template>
<script>
import Header from "@/components/Header/HeaderSub.vue";
import FooterMain from "@/components/Footer/FooterMain.vue";

import SubTitle from "@/components/Header/SubTitle.vue";
export default {
  components: {
    SubTitle,
    Header,
    FooterMain,
  },
  data: () => ({
    title: "예약하기",
    subTitle: "Reseve",
    bgImage: [
      require("@/assets/banner/contact1920.svg"),
      require("@/assets/banner/contact1300.svg"),
      require("@/assets/banner/contact760.svg"),
    ],
    date: null,
    menu: false,
    pickedDate: null,
  }),
  mounted() {},

  methods: {
    updateDate() {
      console.log(this.date);
      if (this.date) {
        console.log(this.date[0]);
        const formattedDate = this.date[0].toISOString().split("T")[0]; // format the date as "YYYY-MM-DD"
        console.log(formattedDate);
      } else {
        console.log("The date is not defined or the array is empty");
      }
    },
    // updateDate() {
    //   console.log(this.date);
    // },
    removeDate() {
      this.date = null;
      console.log(this.date);
    },
  },
};
</script>
<style lang="scss" scoped>
.contact_section {
  .title_con {
    padding: 5% 12px 2% 12px;
    display: grid;
    justify-content: left;
    align-items: center;
    .title {
      color: rgb(0, 0, 0);
      font-family: "Pretendard-Regular";
      font-weight: bold;
    }
    .sub_title {
      color: rgb(94, 94, 94);
      font-family: "Pretendard-Regular";
      font-weight: bold;
      line-height: 45px;
    }
  }
}

// PC XL
@media screen and (min-width: 1300px) {
  .contact_section {
    margin-top: 80px;
  }
  .title_con {
    width: 1300px;
    padding: 5% 12px 2% 12px;
    margin: 0px auto;
  }
  .title {
    font-size: 46px;
    line-height: 60px;
  }

  .sub_title,
  .content {
    font-size: 20px;
    line-height: 45px;
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .contact_section {
    margin-top: 70px;
  }
  .title_con {
    width: 1080px;
    padding: 5% 12px 2% 12px;
    margin: 0px auto;
  }
  .title {
    font-size: 46px;
    line-height: 60px;
  }
  .sub_title .content {
    font-size: 20px;
    line-height: 45px;
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .contact_section {
    margin-top: 60px;
  }
  .title_con {
    width: 760px;
    padding: 5% 12px 2% 12px;
    margin: 0px auto;
  }
  .title {
    font-size: 36px;
    line-height: 45px;
  }
  .sub_title.content {
    font-size: 16px;
    line-height: 30px;
  }
}

// 테블릿
@media screen and (min-width: 600px) and (max-width: 759px) {
  .contact_section {
    margin-top: 55px;
  }
  .title_con {
    width: 640px;
    padding: 5% 12px 2% 12px;
    margin: 0px auto;
  }
  .title {
    font-size: 28px;
    line-height: 35px;
  }
  .sub_title.content {
    font-size: 16px;
    line-height: 25px;
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 600px) {
  .contact_section {
    margin-top: 50px;
  }
  .title_con {
    width: 320px;
    padding: 5% 12px 2% 12px;
    margin: 0px auto;
  }
  .title {
    font-size: 21px;
    line-height: 26px;
  }
  .sub_title.content {
    font-size: 14px;
    line-height: 25px;
  }
}
</style>
