import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';
import router from "./router";
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import materialKit from "./material-kit";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(materialKit);
app.mount("#app");
