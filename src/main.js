// import Vue from "vue";
import { createApp } from 'vue';
// import Vue from 'vue';
// import Embed from 'v-video-embed';
import { createPinia } from 'pinia';
//      // "vue3-video-play": "^1.3.1-beta.6" import LazyTube from "vue-lazytube";
// import './assets/css/material-kit-pro.css';
// import './assets/css/material-kit-pro.min.css';

import App from './App.vue';
import router from "./router";
import VueGtag from "vue-gtag";
// import VueAnalytics from 'vue-analytics';
// import Embed from 'v-video-embed';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/jquery-dynamic-content-menu.css';
// import vue3videoPlay from "vue3-video-play";
//import "vue3-video-play/dist/style.css";
import './style.css';
// import materialKit from "./material-kit";
// useAttrs(Embed);
const app = createApp(App);
app.use(createPinia());
app.use(router);
// app.use(VueGtag, {
//     config: { id: "UA-1234567-1" }
// });
// app.use(vue3videoPlay);
//app.use(LazyTube);
// app.use(Embed);

// app.use(VueAnalytics,{id:'UA-248712059'});
// app.use(materialKit);
app.mount("#app");
