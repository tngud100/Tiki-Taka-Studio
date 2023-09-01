import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

import App from "./App.vue";
import store from "./store";
import router from "./router.js";

import Carousel3d from "vue3-carousel-3d";
import "vue3-carousel-3d/dist/index.css";

import axios from 'axios';
import config from '@/config.js';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? config.production.apiUrl : config.development.apiUrl,
});

loadFonts();

createApp(App)
  .use(vuetify)
  .use(router)
  .use(store)
  .use(Carousel3d)
  .mount("#app");

export { api };