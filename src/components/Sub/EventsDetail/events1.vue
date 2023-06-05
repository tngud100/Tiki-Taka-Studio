<template>
  <section class="events_section">
    <HeaderNav />
    <HeaderTitle :title-data="title" />
    <div class="container">
      <div class="box">
        <div class="title_con">
          <p class="date_text">
            <span style="color: black">이벤트 |</span> 작성 일자 : 2023-06-10
          </p>
          <span class="title_text">
            [상시 이벤트] 티키앤타카 유튜브 채널 구독 이벤트 안내</span
          >
        </div>
        <div class="content_con">
          <div class="text">
            <p>안녕하세요, 즐거운 콘텐츠를 제작하는 TNT Studio입니다.</p>
            <p>TNT Studio에서 '티키앤타카' 유튜브 채널을 운영하고 있습니다.</p>
            <br />
            <p>
              ▶ 유튜브 채널 LINK :
              <a href="https://www.youtube.com/channel/UCHOvr9WQ0EFnaGlJMckKClA"
                >https://www.youtube.com/channel/UCHOvr9WQ0EFnaGlJMckKClA</a
              >
            </p>
            <br />
            <p>
              지난 4월 20일부터 25일에는 피파온라인 BJ와 프로게이머들과 함께
              TikiNTaka Super League Pre-season을 진행하였고,
            </p>
            <p>이번에는 저희 유튜브 채널 구독 이벤트를 진행합니다.</p>
            <p>
              또한 매주 피파의 모든 것을 알려주는 기획 콘텐츠 영상도 업로드되고
              있습니다.
            </p>
            <p>많은 분들의 관심과 구독 부탁 드립니다.</p>
            <br />
            <p>
              ▶ &lt; 티키앤타카 유튜브 채널 구독 이벤트 > 참여를 위한 네이버 폼
              LINK :
              <a href="https://naver.me/5YwdQMX5"> https://naver.me/5YwdQMX5</a>
            </p>
            <br />
            <p>※ 포인트 지급은 이벤트 참여일 기준 다음 영입일에 지급합니다.</p>
            <p>※ 해당 이벤트는 당사 사정에 따라 변동, 중지될 수 있습니다.</p>
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
          <router-link to="/Events">
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
      title: "이벤트",
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
@import "./detail_events_reactive.scss";
</style>
