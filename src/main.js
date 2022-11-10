import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';
import router from "./router";
import VueAnalytics from 'vue-analytics';
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
// import materialKit from "./material-kit";

const app = createApp(App);
app.use(createPinia());
app.use(router);
// app.use(VueAnalytics,{id:'UA-248712059'});
// app.use(materialKit);
app.mount("#app");
