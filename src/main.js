import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from "./router";
import VueGtag from "vue-gtag";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/jquery-dynamic-content-menu.css';
import './style.css';
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(VueGtag, {
    config: { id: "UA-342769379" }
});
app.mount("#app");
