import { createStore } from "vuex";
import allData from "./newsData";

const newsData = [...allData];

const newsStore = createStore({
  state: {
    newsData: newsData,
  },
  mutations: {},
  actions: {},
  getters: {
    newsData(state) {
      return state.newsData;
    },
    getHomeNewsData(state) {
      return state.newsData.slice(0, 6);
    },
  },
});

export default newsStore;
