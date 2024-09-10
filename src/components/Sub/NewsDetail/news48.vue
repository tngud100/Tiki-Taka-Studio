<template>
  <section class="news9_section">
    <HeaderNav />
    <HeaderTitle :title-data="title" :bg-image="bgImage" />
    <div class="container">
      <div class="box">
        <div class="title_con">
          <p class="date_text">
            <span style="color: black">회사 소식 |</span> 작성 일자 : 2024.09.10
          </p>
          <span class="title_text">2024 부산장애인진로취업박람회</span>
        </div>
        <div class="content_con">
          <div class="text">
            <p>
              주)게임인스에서는 부산광역시와 부산광역시교육청이 주최하고,
              부산광역시장애인일자리 통합지원센터,부산광역시 교육청
              특수교육지원센터가 주관하는 <br />
              “2024 부산 장애인 진로,취업박람회”에 참여하여 일하려는 장애인의
              최적화된 채용, 장애학생의 적성에 적합한 <br />
              직업탐색과 진로설계의 기회를 제공하기 위한 금번 행사에
              참여하였습니다.
            </p>
          </div>
          <div class="img_con">
            <div class="upper_box">
              <img
                class="news_img"
                :src="require('@/assets/news/news49.jpg')"
              />
              <p class="sub_imgtext">2024 부산장애인진로취업박람회</p>
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
