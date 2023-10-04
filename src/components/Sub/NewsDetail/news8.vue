<template>
  <section class="news_section">
    <HeaderNav />
    <HeaderTitle :title-data="title" :bg-image="bgImage" />
    <div class="container">
      <div class="box">
        <div class="title_con">
          <p class="date_text">
            <span style="color: black">회사 소식 |</span> 작성 일자 : 2023-10-27
          </p>
          <span class="title_text">그린컴퓨터아카데미와의 산학협력 체결 </span>
        </div>
        <div class="content_con">
          <div class="text">
            2022년 10월 27일, 부산 사상구 소재 IT기업 (주)게임인스와
            (주)지아이티아카테미, 그린컴퓨터아카데미가 산업교육진흥 및
            인력양성을 목적으로 산학협력을 체결하였습니다.
          </div>
          <div class="img_con">
            <div class="upper_box">
              <img class="news_img" :src="require('@/assets/news/news8.svg')" />
              <p class="sub_imgtext">그린컴퓨터아카데미 산학협력 체결</p>
            </div>
          </div>
        </div>
        <hr style="color: rgb(151, 151, 151)" />
        <div class="btn_con">
          <router-link to="/News">
            <div class="back_btn"><span class="btn_text">목록으로</span></div>
          </router-link>
        </div>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import HeaderNav from "@/components/Header/HeaderSub.vue";
import HeaderTitle from "@/components/Header/SubTitle.vue";
import Footer from "@/components/Footer/FooterMain.vue";
export default {
  name: "NewsDetail1",
  data() {
    return {
      title: "회사소식",
      bgImage: [
        require("@/assets/banner/notify1920.svg"),
        require("@/assets/banner/notify1300.svg"),
        require("@/assets/banner/notify760.svg"),
      ],
    };
  },
  components: {
    HeaderNav,
    Footer,
    HeaderTitle,
  },
};
</script>


<style lang="scss" scoped>
@import "./detail_news_reactive.scss";
</style>
