<template>
  <div class="modal" v-if="isVisible">
    <div class="modal-content">
      <div class="modal-header">
        <button class="close" @click="closeModal">&times;</button>
      </div>
      <div class="modal-body">
        <img class="logo" :src="logo" alt="logo" />
        <div class="sub-title">[공지] 스튜디오 보수 작업 안내</div>
        <div v-html="message" class="content-box"></div>
      </div>
      <div class="modal-footer">
        <!-- <button class="btn-close" @click="closeModal">닫기</button> -->
        <button class="btn-dont-show" @click="hideForToday">
          오늘 하루 보지 않기
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "모달 제목" },
    message: {
      type: String,
      default:
        "<p style='padding:4px'>안녕하세요, 고객 여러분.<br />더 나은 환경과 서비스를 위해 스튜디오 보수 작업을<br /> 진행하게 되어 잠시 영업을 중단합니다.</p><p style='padding:4px'>불편을 드려 죄송하며, 빠른 시일 내에 재개하도록<br /> 노력하겠습니다.</p><p style='padding:4px'>감사합니다.</p><p style='padding:4px'>문의 051-301-5908</p>",
    },
  },
  data() {
    return {
      isVisible: true, // 기본값 true로 설정
      logo: require("@/assets/header/logo.svg"),
    };
  },
  mounted() {
    const hideForToday = JSON.parse(localStorage.getItem("hideModalForToday"));
    if (hideForToday && new Date().getTime() < hideForToday.expiry) {
      this.isVisible = false;
    }
  },
  methods: {
    closeModal() {
      this.isVisible = false;
    },
    hideForToday() {
      const expiry = new Date().getTime() + 24 * 60 * 60 * 1000; // 현재 시간 + 24시간
      localStorage.setItem("hideModalForToday", JSON.stringify({ expiry }));
      this.closeModal();
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .modal-content {
    background: linear-gradient(
      90deg,
      #2b8eb0 0%,
      #3191a6 16%,
      #419b8d 42%,
      #5bab64 75%,
      #73b940 100%
    );
    // background: #fff;
    width: 400px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    animation: fadeIn 0.3s ease-in-out;

    .modal-header {
      display: flex;
      justify-content: right;
      align-items: center;

      h2 {
        margin: 0;
        font-size: 20px;
      }

      .close {
        background: none;
        border: none;
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        transition: color 0.2s;
        color: white;
        margin-right: 8px;

        &:hover {
          color: #805bea;
        }
      }
    }

    .modal-body {
      padding: 8px;
      font-size: 14px;
      color: white;
      text-align: center;
      .logo {
        width: 100px 100px;
      }
      .sub-title {
        font-size: 14px;
        font-weight: 400;
        padding: 4px;
        border-radius: 50px;
        background-color: #805bea;
        margin: 20px 50px 10px 50px;
      }
      .content-box {
        padding: 10px 40px 10px 40px;
        text-align: center;
      }
    }

    .modal-footer {
      width: 100%;
      font-size: 14px;

      .btn-dont-show {
        padding: 4px 8px;
        width: 100%;
        background-color: #9b9b9b;
        color: #fff;
        border: none;
        border-radius: 0px 0px 4px 4px;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background-color: white;
          color: black;
        }
      }
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
