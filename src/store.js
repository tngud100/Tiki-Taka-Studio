import { createStore } from "vuex";

const store = createStore({
  state: {
    isVideoPlay: false,
  },
  mutations: {
    setVideoPlay(state, value) {
      state.isVideoPlay = value;
    },
  },
  actions: {
    setVideoPlay({ commit }, value) {
      commit("setVideoPlay", value);
    },
  },
  getters: {
    isVideoPlay: (state) => state.isVideoPlay,
  },
});

export default store;
