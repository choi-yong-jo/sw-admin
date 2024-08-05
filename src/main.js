import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import axios from "axios"

axios.defaults.baseURL = "http://10.4.20.181:8001";
const app = createApp(App);
app.config.globalProperties.axios = axios;
app.use(router).mount("#app");

