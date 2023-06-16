<template>
  <section class="advertise-section">
    <div class="title-con">
      <p class="kategori">광고</p>
      <span class="prepare">준비중입니다</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "advertisePage",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.advertise-section {
  .title-con {
    margin: 100px auto;

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
