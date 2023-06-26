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

<style lang="scss" scope></style>
