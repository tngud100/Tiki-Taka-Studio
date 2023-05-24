import { createApp } from "vue";
import { createVuetify } from "vuetify";
import "vuetify/styles";

import App from "./App.vue";
import store from "./store";
import router from "./router.js";

const app = createApp(App);

const vuetify = createVuetify();

app.use(router);
app.use(store);
app.use(vuetify);

app.mount("#app");
