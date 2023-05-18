import { createStore } from "vuex";

const store = createStore({
  state: {
    videoIndex: 0,
    showModal: false,
  },
  mutations: {
    setVideoNumber(state, value) {
      state.videoIndex = value;
    },
    setShowModal(state, value) {
      state.showModal = value;
    },
  },
  actions: {
    setVideoNumber({ commit }, value) {
      commit("setVideoNumber", value);
    },
    setShowModal({ commit }, value) {
      commit("setShowModal", value);
    },
  },
  getters: {
    videoIndex: (state) => state.videoIndex,
    showModal: (state) => state.showModal,
  },
});

export default store;
