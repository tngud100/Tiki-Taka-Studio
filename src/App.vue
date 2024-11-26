<template>
  <router-view></router-view>
  <PauseModal ref="globalModal"></PauseModal>
</template>

<script>
import PauseModal from "@/components/modal/PauseModal.vue";
export default {
  components: {
    PauseModal,
  },
  name: "App",
  mounted() {
    // 페이지 로드 시 모달을 표시
    // this.$refs.globalModal.openModal();
  },
};
</script>

<style>
@font-face {
  font-family: "Pretendard-Regular";
  src: url("@/assets/font/Pretendard-Regular.woff") format("woff");
  font-style: normal;
}
</style>
