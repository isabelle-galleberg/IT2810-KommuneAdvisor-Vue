import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import naive from "naive-ui";
import router from "./router";
import "./assets/main.css";
import VueTablerIcons from "vue-tabler-icons";

const app = createApp(App);
const pinia = createPinia();

app.use(createPinia());
app.use(router);
app.use(pinia);
app.use(naive);
app.use(VueTablerIcons);

app.mount("#app");
