<template>
  <div class="modal" v-show="showModal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <iframe
        v-if="showModal"
        width="100%"
        height="100%"
        style="border-radius: 5px"
        :src="this.videoUrl[videoIndex]"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "YoutubePopupModal",
  computed: {
    ...mapGetters(["videoIndex", "showModal"]),
  },
  data() {
    return {
      videoUrl: [
        "https://www.youtube.com/embed/NIRhxNNKXdE",
        "https://www.youtube.com/embed/wh-DCVr1wOY",
        "https://www.youtube.com/embed/xJAKV0DVlWE",
        "https://www.youtube.com/embed/AUS7hVUMoKU",
        "https://www.youtube.com/embed/YCqp1kgJjXQ",
        "https://www.youtube.com/embed/HhBFwoWErlo",
        "https://www.youtube.com/embed/ibp7a5t9iJU",
      ],
    };
  },
  methods: {
    ...mapActions(["setShowModal"]),
    closeModal() {
      this.setShowModal(false); // use action to mutate the state
      document.body.classList.remove("modal-open");
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 760px) {
  .modal-content {
    margin: 10% auto;
    width: 750px;
    height: 462px;
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .modal-content {
    margin: 20% auto;
    width: 630px;
    height: 360px;
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .modal-content {
    margin: 30% auto;
    width: 320px;
    height: 180px;
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
    background-color: #fefefe;
    border: 1px solid #888;
    border-radius: 5px;

    max-width: 750px;
    max-height: 462px;
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
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
