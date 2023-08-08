import { createStore } from "vuex";

const store = createStore({
  state: {
    videoIndex: 0,
    showModal: false,
    shortsVideoIndex: 0,
    shortsShowModal: false,
    // hostAddressName : "티키앤타카.com";
    hostAddressName: "티키타카.kr:81",
    room1: {
      title: '임시룸1',
      price: 64000,
      numPrice: 5500,
    },
  },
  mutations: {
    setVideoNumber(state, value) {
      state.videoIndex = value;
    },
    setShowModal(state, value) {
      state.showModal = value;
    },
    setShortsVideoNumber(state, value) {
      state.shortsVideoIndex = value;
    },
    setShortsShowModal(state, value) {
      state.shortsShowModal = value;
    },
  },
  actions: {
    setVideoNumber({ commit }, value) {
      commit("setVideoNumber", value);
    },
    setShowModal({ commit }, value) {
      commit("setShowModal", value);
    },
    setShortsVideoNumber({ commit }, value) {
      commit("setShortsVideoNumber", value);
    },
    setShortsShowModal({ commit }, value) {
      commit("setShortsShowModal", value);
    },
  },
  getters: {
    videoIndex: (state) => state.videoIndex,
    showModal: (state) => state.showModal,
    shortsVideoIndex: (state) => state.shortsVideoIndex,
    shortsShowModal: (state) => state.shortsShowModal,
    hostAddressName: (state) => state.hostAddressName,
    room1: (state) => state.room1,
  },
});



export default store;
