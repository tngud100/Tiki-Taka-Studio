import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

import App from "./App.vue";
import "@/assets/font/font-global.css";

import vuex from "./vuex";
import router from "./router.js";

import Carousel3d from "vue3-carousel-3d";
import "vue3-carousel-3d/dist/index.css";

// import axios from 'axios';
// import config from '@/config.js';

// const api = axios.create({
//   // baseURL: process.env.NODE_ENV === 'production' ? config.production.apiUrl : config.development.apiUrl,
//   baseURL: config.production.apiUrl,
// });

loadFonts();

createApp(App).use(vuetify).use(router).use(vuex).use(Carousel3d).mount("#app");

// export { api };
