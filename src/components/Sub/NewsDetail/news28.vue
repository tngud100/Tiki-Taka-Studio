<template>
  <section class="news_section">
    <HeaderNav />
    <HeaderTitle :title-data="title" :bg-image="bgImage" />
    <div class="container">
      <div class="box">
        <div class="title_con">
          <p class="date_text">
            <span style="color: black">회사 소식 |</span> 작성 일자 : 2023-07-25
          </p>
          <span class="title_text"> 게임인스 하계휴가 안내 </span>
        </div>
        <div class="content_con">
          <div class="text">
            <p style="margin-bottom: 20px; line-height: 24px">
              안녕하세요, (주)게임인스입니다
            </p>
            <p style="margin-bottom: 20px; line-height: 24px">
              (주)게임인스를 찾아와주신 분들께 알려드립니다.
            </p>
            <p style="margin-bottom: 20px; line-height: 24px">
              길고 길었던 장마가 끝나고 서서히 더위가 기세를 찾아가는 여름을
              맞이하여 ㈜게임인스에서도 다음과 같은 일정으로 하계휴가를
              실시합니다.
            </p>
            <p style="margin-bottom: 20px; line-height: 24px">
              7월 26일(수) ~ 7월 30일(일)
            </p>
            <br />
            <div class="img_con">
              <div class="upper_box">
              <img class="news_img" :src="require('@/assets/news/news28.svg')" />
                <!-- <img class="news_img" src="@/assets/news/news11.svg" />-->
                <p class="sub_imgtext">게임인스 하계휴가 안내 포스터</p>
              </div>
            </div>
            <br />
            <p style="margin-bottom: 20px; line-height: 24px">
              하계휴가 기간 업무가 일체 중단되며, 7월 31일(월)부터 순차적으로
              문의 등을 처리할 예정이므로 이 점에 유의하시어 주시길 바랍니다.
            </p>
            <p style="margin-bottom: 20px; line-height: 24px">
              여름 햇볕을 피해 재충전하고 다시 만나 뵈어요~!
            </p>
            <br />
            <p
              style="margin-bottom: 20px; line-height: 24px; font-weight: bold"
            >
              ※ 티키앤타카 또한 고객지원 업무가 운영하지 않습니다.
            </p>
            <p
              style="margin-bottom: 20px; line-height: 24px; font-weight: bold"
            >
              ※ 피파대낙닷컴, 피파대리닷컴은 하계휴가 동안 24시간 정상
              운영합니다
            </p>
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
