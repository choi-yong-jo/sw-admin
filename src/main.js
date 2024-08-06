import './assets/common.css'

import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import axios from "axios"

axios.defaults.baseURL = "http://localhost:8001/api";
const app = createApp(App);
app.config.globalProperties.axios = axios;
app.config.globalProperties.$serverUrl = '//localhost:8001/api'
app.use(router).mount("#app");

