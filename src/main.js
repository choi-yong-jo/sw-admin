import './assets/common.css'

import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import axios from "axios"

const app = createApp(App);
app.config.globalProperties.axios = axios;
app.config.globalProperties.$serverUrl = 'http://localhost:8001/api'
app.use(router).use("./router/member.js").mount("#app");

