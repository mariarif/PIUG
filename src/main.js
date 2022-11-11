import { createApp } from 'vue';
// import Vue from 'vue';
// import Embed from 'v-video-embed';
import { createPinia } from 'pinia';
// import './assets/css/material-kit-pro.css';
// import './assets/css/material-kit-pro.min.css';
import './style.css';
import App from './App.vue';
import router from "./router";
import VueAnalytics from 'vue-analytics';
// import Embed from 'v-video-embed';
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/jquery-dynamic-content-menu.css';

// import materialKit from "./material-kit";
// useAttrs(Embed);
const app = createApp(App);
app.use(createPinia());
app.use(router);
// app.use(Embed);

// app.use(VueAnalytics,{id:'UA-248712059'});
// app.use(materialKit);
app.mount("#app");
