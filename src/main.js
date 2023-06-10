import './assets/main.css'

import { ApiBackendService } from "./api";
import { createApp } from "vue";
import App from "./app";
import { configureStore } from "./store";
import { router } from "./routes";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

ApiBackendService.init({serverUri: ''})

const app = createApp(App)

app.use(configureStore)
app.use(router)
// app.use(BootstrapVue)
// app.use(IconsPlugin)

app.mount('#app')

export default app
