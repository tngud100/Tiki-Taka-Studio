<template>
  <section class="education-section">
    <div class="title-con">
      <!-- <p class="kategori">교육 프로그램</p> -->
      <span class="prepare">준비중입니다</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "educationPage",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.education-section {
  .title-con {
    margin: 100px 0px;

    .kategori {
      text-align: center;
      font-family: "Pretendard-Regular";
      font-weight: bold;
      font-size: 30px;
      background-position: center;
      background-image: url("@/assets/studio/titleLine.svg");
    }
    .prepare {
      text-align: center;
      font-family: "Pretendard-Regular";
      font-weight: bold;
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 100px;
      color: #c1c1c1;
    }
  }
}
</style>
