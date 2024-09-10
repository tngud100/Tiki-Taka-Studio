<template>
  <section class="news9_section">
    <HeaderNav />
    <HeaderTitle :title-data="title" :bg-image="bgImage" />
    <div class="container">
      <div class="box">
        <div class="title_con">
          <p class="date_text">
            <span style="color: black">회사 소식 |</span> 작성 일자 : 2024-06-20
          </p>
          <span class="title_text">2024 하계 휴가 안내</span>
        </div>
        <div class="content_con">
          <div class="text">
            <p>안녕하세요, TNT studio입니다</p>
            <p>TNT studio를 찾아와주신 분들께 알려드립니다.</p>
            <p>
              길고 길었던 장마가 끝나고 서서히 더위가 기세를 찾아가는 여름을
              맞이하여 TNT studio에서도 다음과 같은 일정으로 하계휴가를
              실시합니다.
            </p>
            <p>7월 24일(수) ~ 7월 28일(일)</p>
            <br />
          </div>
          <div class="img_con">
            <div class="upper_box">
              <img
                class="news_img"
                :src="require('@/assets/news/news48.png')"
              />
              <p class="sub_imgtext">2024 하계 휴가 안내</p>
            </div>
          </div>
          <div class="text">
            <p>
              하계휴가 기간 업무가 일체 중단되며, 7월 29일(월)부터 순차적으로
              문의 등을 처리할 예정이므로 이 점에 유의하시어 주시길 바랍니다.
            </p>
            <p>여름 햇볕을 피해 재충전하고 다시 만나 뵈어요.</p>
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
