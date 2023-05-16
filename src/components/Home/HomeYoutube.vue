<template>
  <div id="app">
    <div class="card" @click="openModal">
      <h2>Click Youtube</h2>
    </div>

    <div class="modal" v-show="showModal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <iframe
          width="560"
          height="315"
          :src="videoUrl"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeYoutube",
  data() {
    return {
      showModal: false,
      videoUrl: "https://www.youtube.com/embed/Ka_NAJpiqhw",
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style lang="scss" scoped>
/* styles.css */
.card {
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  padding: 30px;
  cursor: pointer;
}

.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 0px 20px 20px 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 750px;
  max-height: 462px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  left: 18px;
  position: relative;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
