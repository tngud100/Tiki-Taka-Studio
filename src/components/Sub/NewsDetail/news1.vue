<template>
  <section class="news_section">
    <HeaderNav />
    <HeaderTitle :title-data="title" :bg-image="bgImage" />
    <div class="container">
      <div class="box">
        <div class="title_con">
          <p class="date_text">
            <span style="color: black">회사 소식 |</span> 작성 일자 : 2023-06-10
          </p>
          <span class="title_text"> TNT Studio Grand Opening</span>
        </div>
        <div class="content_con">
          <div class="text">
            <p>안녕하세요, TNT Studio입니다.</p>
            <br />
            <p>
              TNT Studio는 시청자의 관점에서 보고 싶을 만한 콘텐츠를 제작하는
              스튜디오입니다.
            </p>
            <br />
            <span>
              <p>
                TNT Studio Youtube CH. 티키앤타카
                <a
                  href="https://www.youtube.com/channel/UCHOvr9WQ0EFnaGlJMckKClA"
                  >: 티키앤타카 유튜브 채널 바로가기</a
                >
              </p>
              <br />
              콘텐츠 제작만 아니라, 저희가 가진 인프라(콘텐츠 제작에 필요한
              시설(공간)과 최첨단 장비)를 공유해드리고 있습 니다.
            </span>
            <p>
              또한 장애인 및 청소년 등 콘텐츠 사업 분야에 관심이 있으신 분들을
              위한 프로그램을 운영하고 크리에이터 자격증 을 발급할 예정입니다
            </p>
            <br />
            <p>
              이외에도 더 좋은 콘텐츠를 개발하고 더 나은 서비스를 제공하기
              위하여 끊임없이 역량을 발전시키고, 지역사회와 상생하며 성장하는
              TNT Studio가 되겠습니다. 감사합니다.
            </p>
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
