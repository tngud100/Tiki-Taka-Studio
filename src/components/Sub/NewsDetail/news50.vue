<template>
  <section class="news9_section">
    <HeaderNav />
    <HeaderTitle :title-data="title" :bg-image="bgImage" />
    <div class="container">
      <div class="box">
        <div class="title_con">
          <p class="date_text">
            <span style="color: black">회사 소식 |</span> 작성 일자 : 2024.11.06
          </p>
          <span class="title_text"
            >게임인스, 인제대학교 AI융합대학과 MOU 체결로 협력 강화</span
          >
        </div>
        <div class="content_con">
          <div class="text">
            <p>
              게임인스는 인제대학교 AI융합대학과 업무협약(MOU)을 체결하여
              게임학과 및 디자인학과의 기반을 마련했습니다. 이번 협약을 통해 양
              기관은 인재 양성 및 첨단 기술 개발을 위한 공동 프로젝트를 추진하며
              상호 발전을 도모할 계획입니다. 게임인스는 인제대학교
              AI융합대학과의 협력을 통해 한 걸음 더 나아갈 것입니다. 앞으로도
              게임인스는 대학과의 지속적인 협력을 통해 AI 분야의 선두주자로
              성장하고, 사회적 가치를 창출하는 데 기여하고자 합니다.
            </p>
          </div>
          <div class="img_con">
            <div class="upper_box">
              <img
                class="news_img"
                :src="require('@/assets/news/news51-1.jpg')"
              />
              <p class="sub_imgtext">인제대학교 AI융합대학과 업무협약</p>
            </div>
            <div class="upper_box">
              <img
                class="news_img"
                :src="require('@/assets/news/news51-2.jpg')"
              />
              <p class="sub_imgtext">인제대학교 AI융합대학과 업무협약</p>
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
