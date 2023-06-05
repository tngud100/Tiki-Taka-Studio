<template>
  <section class="news_section">
    <HeaderNav />
    <HeaderTitle :title-data="title" />
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
            <p>안녕하세요,</p>
            <br />
            <p>2023년 6월 10일, TNT Studio가 그랜드 오픈을 하게 되었습니다!</p>
            <br />
            <p>
              TNT Studio에서는 창의력과 열정이 넘치는 컨텐츠를 제작하며, 다양한
              장르의 풍부한 프로그램을 통해 여러분에게 새로운 경험을 제공할
              것입니다.
            </p>
            <p>
              아티스트, 크리에이터, 그리고 팬들을 위한 이 공간이 여러분의 열정과
              창의력을 키우는데 도움이 되도록 최선을 다하겠습니다.
            </p>
            <br />
            <p>
              더불어, 저희는 '티키앤타카' 유튜브 채널과 커뮤니티를 운영하고
              있습니다.
            </p>
            <p>
              최신 소식, 이벤트, 콘텐츠를 보다 빠르게 접하실 수 있으니, 아직
              구독하지 않으셨다면 지금 바로 '티키앤타카' 유튜브 채널 구독과
              커뮤니티 가입을 해주세요!
            </p>
            <br />
            <p>
              TNT Studio가 여러분과 함께 성장하며, 인생의 소중한 순간들을
              기록하고 나누는 곳이 될 수 있도록 최선을 다하겠습니다.
            </p>
            <p>
              여러분의 관심과 사랑으로 TNT Studio의 새로운 시작을 응원해
              주시기를 부탁드립니다.
            </p>
            <br />
            <p>감사합니다.</p>
            <br />
            TNT Studio 팀 드림
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
