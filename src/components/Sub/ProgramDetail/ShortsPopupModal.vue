<template>
  <div class="modal" v-show="shortsShowModal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <iframe
        class="youtubeVod"
        v-if="shortsShowModal"
        width="100%"
        height="100%"
        style="border-radius: 0px 0px 5px 5px"
        :src="videoUrl[this.shortsVideoIndex]"
        frameborder="0"
        allowfullscreen
        autoplay
      ></iframe>
      <div class="modal-btn">
        <div
          class="prev-btn"
          @click="modalBtn(this.shortsVideoIndex - 1)"
        ></div>
        <div
          class="next-btn"
          @click="modalBtn(this.shortsVideoIndex + 1)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ShortsPopupModal",
  computed: {
    ...mapGetters(["shortsVideoIndex", "shortsShowModal"]),
  },
  data() {
    return {
      videoUrl: [
        "https://www.youtube.com/embed/o8Tx_QmXqUM?autoplay=1&mute=1",
        "https://www.youtube.com/embed/s1ukR0f10Rw?autoplay=1&mute=1",
        "https://www.youtube.com/embed/Owg-zAX29AA?autoplay=1&mute=1",
        "https://www.youtube.com/embed/cXZHOG47V64?autoplay=1&mute=1",
        "https://www.youtube.com/embed/NNibiCTQ9Hc?autoplay=1&mute=1",
        "https://www.youtube.com/embed/Q_JlyamWRPc?autoplay=1&mute=1",
        "https://www.youtube.com/embed/yk3CzYScdmY?autoplay=1&mute=1",
        "https://www.youtube.com/embed/dTKreF9NYIs?autoplay=1&mute=1",
        "https://www.youtube.com/embed/bSuJ0tHCogk?autoplay=1&mute=1",
        "https://www.youtube.com/embed/521hmwl9HvE?autoplay=1&mute=1",
      ],
    };
  },
  methods: {
    ...mapActions(["setShortsShowModal", "setShortsVideoNumber"]),
    closeModal() {
      this.setShortsShowModal(false);
      document.body.classList.remove("modal-shorts-open");
    },
    modalBtn(index) {
      this.setShortsVideoNumber(index);
      const prev_btn = document.querySelector(".prev-btn");
      const next_btn = document.querySelector(".next-btn");

      if (index <= 0) {
        prev_btn.style.display = "none";
      } else if (index >= this.videoUrl.length - 1) {
        next_btn.style.display = "none";
      } else {
        prev_btn.style.display = "block";
        next_btn.style.display = "block";
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
//PC XL
@media screen and (min-width: 1300px) {
  .modal-content {
    margin: 7% auto;
    width: 400px;
    height: 711px;
    .modal-btn {
      .prev-btn {
        width: 40px;
        height: 24px;
        transform: rotate(90deg) translate3d(-405px, 60px, 0px);
      }
      .next-btn {
        width: 40px;
        height: 24px;
        transform: rotate(-90deg) translate3d(423px, 420px, 0px);
      }
    }
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .modal-content {
    margin: 12% auto;
    width: 300px;
    height: 533px;
    .modal-btn {
      .prev-btn {
        width: 40px;
        height: 24px;
        transform: rotate(90deg) translate3d(-305px, 60px, 0px);
      }
      .next-btn {
        width: 40px;
        height: 24px;
        transform: rotate(-90deg) translate3d(330px, 320px, 0px);
      }
    }
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .modal-content {
    margin: 15% auto;
    width: 250px;
    height: 444px;
    .modal-btn {
      .prev-btn {
        width: 40px;
        height: 24px;
        transform: rotate(90deg) translate3d(-265px, 60px, 0px);
      }
      .next-btn {
        width: 40px;
        height: 24px;
        transform: rotate(-90deg) translate3d(287px, 268px, 0px);
      }
    }
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .modal-content {
    margin: 15% auto;
    width: 350px;
    height: 622px;
    .modal-btn {
      .prev-btn {
        width: 40px;
        height: 24px;
        transform: rotate(90deg) translate3d(-355px, 60px, 0px);
      }
      .next-btn {
        width: 40px;
        height: 24px;
        transform: rotate(-90deg) translate3d(377px, 370px, 0px);
      }
    }
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .modal-content {
    margin: 30% auto;
    width: calc(100% - 125px) !important;
    // height: 60% !important;
    .youtubeVod {
      position: fixed;
      width: calc(100% - 125px) !important;
      height: calc(65%);
      margin-top: 42px;
      aspect-ratio: 9 / 16;
    }
    .modal-btn {
      position: absolute;
      display: flex;
      top: 50vh;
      width: 90vw;
      left: 4vw;
      justify-content: space-between;
      margin: auto;
      .prev-btn {
        transform: rotateZ(90deg);
        width: 40px;
        height: 24px;
      }
      .next-btn {
        transform: rotateZ(-90deg);
        width: 40px;
        height: 24px;
      }
    }
  }
}

.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  .modal-content {
    .modal-btn {
      .prev-btn {
        background-image: url("@/assets/btn/VodBtn.svg");
        background-repeat: no-repeat;
        background-size: cover;
        /* width: 35px; */
        width: 40px;
        height: 24px;
        /* height: 19px; */
        cursor: pointer;
      }
      .next-btn {
        background-image: url("@/assets/btn/VodBtn.svg");
        background-repeat: no-repeat;
        background-size: cover;
        width: 40px;
        height: 24px;
        cursor: pointer;
        position: relative;
      }
    }
  }
}

.close {
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  width: 100%;
  text-align: center;
  float: right;
  background-color: white;
  border-radius: 5px 5px 0px 0px;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
