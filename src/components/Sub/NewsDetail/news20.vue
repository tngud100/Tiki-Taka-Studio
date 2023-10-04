<template>
  <section class="news_section">
    <HeaderNav />
    <HeaderTitle :title-data="title" :bg-image="bgImage" />
    <div class="container">
      <div class="box">
        <div class="title_con">
          <p class="date_text">
            <span style="color: black">보도 자료 |</span> 작성 일자 : 2023-04-10
            17:21:45
          </p>
          <span class="title_text">
            (주)게임인스, 씀씀이가 바른 기업 가입
          </span>
        </div>
        <div class="content_con">
          <div class="img_con">
            <div class="upper_box">
              <img
                class="news_img"
                :src="require('@/assets/news/news20.svg')"
              /><br />
              <span class="sub_imgtext"
                >부산일보, ‘씀씀이가 바른기업’ 정기후원 캠페인</span
              >
            </div>
          </div>
          <div class="text">
            <p>
              (주)게임인스(대표 김웅겸/장영철)는 최근 대한적십자사 부산지사(회장
              서정의) ‘씀씀이가 바른기업’ 정기후원 캠페인에 참여해 지역사회를
              위한 나눔을 실천하기로 약속했다.
            </p>
            <p>
              부산 사상구에 위치한 게임인스는 2016년에 설립된 컴퓨터시스템 통합
              자문과 구축 서비스를 제공하고 각 분야의 전문가들의 축적된 경험과
              능력을 바탕으로 매년 성장 중인 인터넷 플랫폼 개발 전문 기업이다.
            </p>
            <p>
              게임인스 김웅겸 대표는 “혁신적 사고와 미래 지향 책임경영을 통해
              지역사회와 상생하며 함께 성장하는 마음으로 이번 나눔에 동참하게
              되었다”며 “적십자사 씀씀이가 바른기업을 통해 부산 지역 어려운
              이웃들에게 희망을 전하고싶다”고 말했다.
            </p>
            <p>
              ‘씀씀이가 바른기업’은 형편이 어려워 위기 상황에 놓인 가정을
              지원하기 위한 기업의 사회공헌 캠페인이며, 매월 20만 원 이상의
              정기후원으로 참여 가능하다. 후원금은 부산지역 취약계층 위기가정에
              대한 생계, 의료, 주거 지원 등 수혜자 맞춤형 복지사업에 사용된다.
            </p>
          </div>
          <span class="director">강성할 선임기자 shgang@busan.com</span>
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
