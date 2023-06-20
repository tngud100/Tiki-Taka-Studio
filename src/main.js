import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

import App from "./App.vue";
import store from "./store";
import router from "./router.js";

import Carousel3d from "vue3-carousel-3d";
import "vue3-carousel-3d/dist/index.css";

loadFonts();

createApp(App)
  .use(vuetify)
  .use(router)
  .use(store)
  .use(Carousel3d)
  .mount("#app");
