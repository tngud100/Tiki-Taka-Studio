<template>
  <section class="news9_section">
    <HeaderNav />
    <HeaderTitle :title-data="title" :bg-image="bgImage" />
    <div class="container">
      <div class="box">
        <div class="title_con">
          <p class="date_text">
            <span style="color: black">회사 소식 |</span> 작성 일자 : 2024.10.24
          </p>
          <span class="title_text">2024 부산잡페스티벌 참가</span>
        </div>
        <div class="content_con">
          <div class="text">
            <p>
              저희 게임인스는 2024 부산잡페스티벌에 고용우수기업으로 참가하게
              되었습니다.<br />
              부산잡페스티벌은 매년 열리는 대규모 취업 박람회로, 지역 내 다양한
              기업과 구직자들이 한자리에 모여 서로의 필요를 충족시키는 중요한
              행사입니다. 이번 페스티벌은 부산 지역의 경제 활성화와 청년 일자리
              창출을 목표로 하며, 많은 기업들이 참여하여 인재를 모집하고,
              구직자들은 다양한 직무와 기업에 대한 정보를 얻을 수 있는 기회를
              제공합니다.<br />
              게임인스는 이번 행사에 참여함으로써, 앞으로도 지속적으로 인재
              양성과 고용 창출에 힘쓰며, 지역 사회와 함께 성장하는 기업이 되도록
              노력하겠습니다.
            </p>
          </div>
          <div class="img_con">
            <div class="upper_box">
              <img
                class="news_img"
                :src="require('@/assets/news/news50-1.png')"
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
