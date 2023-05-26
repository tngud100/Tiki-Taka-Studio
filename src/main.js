import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

import App from "./App.vue";
import store from "./store";
import router from "./router.js";

loadFonts();

createApp(App).use(vuetify).use(router).use(store).mount("#app");
