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
    
    
    equipments: {
      camera: [
        {
          name: 'SONY FX3',
          price: 13500,
          count: 1,
          equipmentNum: 1,
        },
        {
          name: 'SONY A7M IV',
          price: 10000,
          count: 2,
          equipmentNum: 2,
        },
        {
          name: 'SONY FE 70-200mm F2.8 GM',
          price: 6700,
          count: 1,
          equipmentNum: 3,
        },
        {
          name: 'SONY FE 24-70mm F2.8 GM',
          price: 6700,
          count: 1,
          equipmentNum: 4,
        },
        {
          name: 'SONY FE 85mm F1.4 GM',
          price: 5000,
          count: 1,
          equipmentNum: 5,
        },
        {
          name: '탐론 28-200mm F2.8-5.6 Di lll RXD A071 SONY FE마운트',
          price: 6700,
          count: 2,
          equipmentNum: 6,
        },
        {
          name: 'SONY NP-FZ100 배터리',
          price: 0,
          count: 3,
          equipmentNum: 7,
        },
        {
          name: 'SONY FZ100 상시전원 더미 배터리 어댑터',
          price: 0,
          count: 3,
          equipmentNum: 8,
        },
        {
          name: 'K&f Concept NANO-X Ultra slim MRC UV 렌즈 필터 67mm',
          price: 0,
          count: 2,
          equipmentNum: 9,
        },
        {
          name: 'K&f Concept NANO-X Ultra slim MRC UV 렌즈 필터 77mm',
          price: 0,
          count: 2,
          equipmentNum: 10,
        },
        {
          name: 'K&f Concept NANO-X Ultra slim MRC UV 렌즈 필터 82mm',
          price: 0,
          count: 1,
          equipmentNum: 11,
        },
        
        {
          name: '틸타 SONY FX3 케이지 베이직 키트 (TA-T13-A-B)',
          price: 10000,
          count: 1,
          equipmentNum: 13,
        },
        {
          name: '스몰리그 SR1989 삼각대 (헤드포함)',
          price: 5000,
          count: 3,
          equipmentNum: 14,
        },
        {
          name: 'DJI 로닌 RS3 프로 콤보 짐벌',
          price: 10000,
          count: 1,
          equipmentNum: 15,
        },
        
        
        
      ],
      monitor: [
        {
          name: 'ATOMOS 닌자 V 프리뷰모니터 프로 키트',
          price: 10000,
          count: 1,
          equipmentNum: 12,
        },
      ],
      MicAudio: [
        {
          name: 'RODE VIDEO MIC PRO PLUS',
          price: 3500,
          count: 1,
          equipmentNum: 16,
        },
        {
          name: 'SONY UWP-D21',
          price: 3500,
          count: 1,
          equipmentNum: 17,
        },
        {
          name: ' 코미카 4채널 무선마이크 BOOMX-U-QUA (송신기4, 수신기1)',
          price: 3500,
          count: 1,
          equipmentNum: 18,
        },
        {
          name: '베링거 FLOW8',
          price: 10000,
          count: 1,
          equipmentNum: 19,
        },
        {
          name: 'Blackmagic Design ATEM Mini Extremem SIO',
          price: 10000,
          count: 1,
          equipmentNum: 20,
        },
      ],
      LightSubFilm: [
        {
          name: '고프로 히어로11 블랙 올인원 패키지',
          price: 6700,
          count: 1,
          equipmentNum: 21,
        },
        {
          name: '닌라이트 파보튜브II 30X LED조명 2키트',
          price: 6700,
          count: 1,
          equipmentNum: 22,
        },
        {
          name: '닌라이트 파보튜브II 플로어스탠드',
          price: 3500,
          count: 2,
          equipmentNum: 23,
        },
      ],
    }
      

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
    equipments: (state) => state.equipments,
  },
});



export default store;
