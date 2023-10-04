<template>
  <section class="news_section">
    <HeaderNav />
    <HeaderTitle :title-data="title" :bg-image="bgImage" />
    <div class="container">
      <div class="box">
        <div class="title_con">
          <p class="date_text">
            <span style="color: black">회사 소식 |</span> 작성 일자 : 2023-11-02
          </p>
          <span class="title_text"
            >북부고용노동센터와 함께하는 청년 일자리 지원
          </span>
        </div>
        <div class="content_con">
          <div class="text">
            (주)게임인스는 2022년 11월 2일, 부산북부고용센터에서 주관하는 청년
            일자리 지원 기업으로 참석하였습니다.
          </div>
          <div class="img_con">
            <div class="upper_box">
              <img class="news_img" :src="require('@/assets/news/news9.svg')" />
              <p class="sub_imgtext">청년 일자리 지원 기업 참석</p>
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
