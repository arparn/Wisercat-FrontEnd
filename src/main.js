import './assets/main.css'

import { ApiBackendService } from "./api";
import { createApp } from "vue";
import App from "./app.vue";
import { configureStore } from "./store";
import { router } from "./routes";
import { BootstrapVueNext } from "bootstrap-vue-next";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)

app.use(configureStore)
app.use(router)
app.use(BootstrapVueNext)

app.mount('#app')

export default app

ApiBackendService.init({serverUri: 'http://localhost:8080'})
