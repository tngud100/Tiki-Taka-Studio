<template>
  <div class="title-text">
    <span class="main-title">{{ titleData }}</span>
  </div>
</template>

<script>
export default {
  name: "SubTitle",
  props: {
    titleData: String,
  },
};
</script>

<style lang="scss" scoped>
.title-text {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  height: 200px;
  background-color: cadetblue;
  .main-title {
    font-family: "Pretendard-Regular";
    font-weight: bold;
    color: rgb(129, 129, 129);
  }
}

//PC XL
@media screen and (min-width: 1300px) {
  .main-title {
    font-size: 80px;
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .main-title {
    font-size: 72px;
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .main-title {
    font-size: 68px;
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .main-title {
    font-size: 60px;
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .main-title {
    font-size: 55px;
  }
}
</style>
