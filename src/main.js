import './assets/common.css'

import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import axios from "axios"
import store from "./store/store"

const app = createApp(App);
app.config.globalProperties.axios = axios;
app.config.globalProperties.$serverUrl = 'http://localhost:8001/api'
app.use(router).use(store).use("./router/member.js").mount("#app");

