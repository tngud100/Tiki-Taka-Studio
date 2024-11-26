import { createStore } from "vuex";
import newsModule from "./newsStore"; // 뉴스 모듈
import mainModule from "./store"; // 메인 모듈

const store = createStore({
  modules: {
    main: mainModule,
    news: newsModule,
  },
});

export default store;
