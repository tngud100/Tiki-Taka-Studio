import { createStore } from "vuex";

const store = createStore({
  state: {
    videoIndex: 0,
    shortsVideoIndex: 0,
    shortsShowModal: false,
    // hostAddressName : "티키앤타카.com";
    hostAddressName: "http://티키타카.kr:81",
    rooms:[
      {
        title: '워터 스튜디오',
        price: 30000,
        numPrice: 5000,
        numMin: 2,
        numMax: 4,
        imageSrc: require("@/assets/studio/studio3.svg"),
        studioNum: 1,
      },
      {
        title: '솔로 스튜디오',
        price: 25000,
        numPrice: 5000,
        numMin: 1,
        numMax: 2,
        imageSrc: require("@/assets/studio/studio7.svg"),
        studioNum: 2,
      },
      {
        title: '하이브리드 스튜디오',
        price: 35000,
        numPrice: 5000,
        numMin: 3,
        numMax: 5,
        imageSrc: require("@/assets/studio/studio7.svg"),
        studioNum: 3,
      },
      {
        title: '듀오 스튜디오',
        price: 25000,
        numPrice: 5000,
        numMin: 1,
        numMax: 2,
        imageSrc: require("@/assets/studio/studio7.svg"),
        studioNum: 4,
      },
      {
        title: '화이트 스튜디오',
        price: 50000,
        numPrice: 5000,
        numMin: 5,
        numMax: 7,
        imageSrc: require("@/assets/studio/studio8.svg"),
        studioNum: 5,
      },
     {
        title: '그린 스튜디오',
        price: 100000,
        numPrice: 5000,
        numMin: 10,
        numMax: 15,
        imageSrc: require("@/assets/studio/studio8.svg"),
        studioNum: 6,
      },
    ],
    // room1: {
    //   title: '워터 스튜디오',
    //   price: 30000,
    //   numPrice: 5000,
    //   numMin: 2,
    //   numMax: 4,
    //   studioNum: 1,
    // },
    // room2: {
    //   title: '솔로 스튜디오',
    //   price: 25000,
    //   numPrice: 5000,
    //   numMin: 1,
    //   numMax: 2,
    //   studioNum: 2,
    // },
    // room3: {
    //   title: '하이브리드 스튜디오',
    //   price: 35000,
    //   numPrice: 5000,
    //   numMin: 3,
    //   numMax: 5,
    //   studioNum: 3,
    // },
    // room4: {
    //   title: '듀오 스튜디오',
    //   price: 25000,
    //   numPrice: 5000,
    //   numMin: 1,
    //   numMax: 2,
    //   studioNum: 4,
    // },
    // room5: {
    //   title: '화이트 스튜디오',
    //   price: 50000,
    //   numPrice: 5000,
    //   numMin: 5,
    //   numMax: 7,
    //   studioNum: 5,
    // },
    // room6: {
    //   title: '그린 스튜디오',
    //   price: 100000,
    //   numPrice: 5000,
    //   numMin: 10,
    //   numMax: 15,
    //   studioNum: 6,
    // },
  },
  mutations: {
    setShortsVideoNumber(state, value) {
      state.shortsVideoIndex = value;
    },
    setShortsShowModal(state, value) {
      state.shortsShowModal = value;
    },
  },
  actions: {
    setShortsVideoNumber({ commit }, value) {
      commit("setShortsVideoNumber", value);
    },
    setShortsShowModal({ commit }, value) {
      commit("setShortsShowModal", value);
    },
  },
  getters: {
    shortsVideoIndex: (state) => state.shortsVideoIndex,
    shortsShowModal: (state) => state.shortsShowModal,
    hostAddressName: (state) => state.hostAddressName,
    rooms: (state) => state.rooms,
    room1: (state) => state.rooms.room1,
  },
});



export default store;
