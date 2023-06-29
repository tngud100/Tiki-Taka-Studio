<template>
  <section class="news_section">
    <HeaderTitle
      :title-data="title"
      :sub-title-data="subTitle"
      :bg-image="bgImage"
    />
    <LongVod />
    <ShortVod />
  </section>
</template>
<script>
import HeaderTitle from "@/components/Header/SubTitle.vue";
import LongVod from "@/components/Sub/ProgramDetail/HomeLongVod.vue";
import ShortVod from "@/components/Sub/ProgramDetail/HomeShortVod.vue";
export default {
  name: "SubProgram",
  components: {
    HeaderTitle,
    LongVod,
    ShortVod,
  },
  data() {
    return {
      title: "프로그램",
      subTitle: "Program",
      bgImage: [
        require("@/assets/banner/contact1920.svg"),
        require("@/assets/banner/contact1300.svg"),
        require("@/assets/banner/contact760.svg"),
      ],
    };
  },
};
</script>

<style lang="scss" scope>
//PC XL
@media screen and (min-width: 1300px) {
  .news_section {
    margin-top: 80px;
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .news_section {
    margin-top: 70px;
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .news_section {
    margin-top: 60px;
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .news_section {
    margin-top: 55px;
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .news_section {
    margin-top: 50px;
  }
}
</style>
