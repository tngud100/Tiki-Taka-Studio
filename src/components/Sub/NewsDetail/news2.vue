<template>
  <section class="news_section">
    <HeaderNav />
    <HeaderTitle :title-data="title" :bg-image="bgImage" />
    <div class="container">
      <div class="box">
        <div class="title_con">
          <p class="date_text">
            <span style="color: black">회사 소식 |</span> 작성 일자 : 2023-07-21
          </p>
          <span class="title_text"> TNT Studio 스튜디오 7월 완공</span>
        </div>
        <div class="content_con">
          <div class="text">
            <p>안녕하세요, TNT Studio입니다.</p>
            <br />
            <p>
              2023년 7월 완공되는 TNT Studio 스튜디오는 부산/경남 거점 촬영
              스튜디오로, 100평 규모의 촬영 공간(호리존, 대형 크로마키존, 개인
              스튜디오, 편집실 등)과 장비를 갖추고 있으며, 합리적인 비용으로
              콘텐츠 제작 장소 문제를 해결할 수 있도록 공간대여 서비스를
              운영합니다. 또한 전문화된 프로세스의 광고 대행 서비스도
              제공합니다.
            </p>
            <br />
            <p>
              2024년 완공될 예정인, Arca(가칭)는 약 700명 규모의 초대형 종합
              콘텐츠 촬영 스튜디오로, 수영장, 공유주방, 바, 바비큐장 등 다양한
              콘셉트로 콘텐츠를 촬영할 수 있습니다.
            </p>
            <br />
            <p>
              위와 같은 콘텐츠 제작 지원과 함께, KBS 미디어가 발급하여 공신력
              있는 자격증을 HY미디어능력개발원과 협력하여 발급하고 있으며
              크리에이터 창·제작 등의 육성 시스템을 체계적·전문적으로
              운영합니다.
            </p>
            <br />
            <p>
              이외에도 더 좋은 콘텐츠를 개발하고 더 나은 서비스를 제공하기
              위하여 끊임없이 역량을 발전시키고, 지역사회와 상생하며 성장하는
              TNT Studio가 되겠습니다. 감사합니다.
            </p>
            <br />
          </div>
          <div class="img_con">
            <div class="upper_box">
              <!-- <img class="news_img" src="@/assets/news/news1.svg" /> -->
              <p class="sub_imgtext"></p>
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
