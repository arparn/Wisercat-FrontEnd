import './assets/main.css'

import { ApiBackendService } from "./api";
import { createApp } from "vue";
import App from "./app.vue";
import { configureStore } from "./store";
import { router } from "./routes";
import { BootstrapVueNext } from "bootstrap-vue-next";

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import format from "date-fns/format";
import en from "date-fns/esm/locale/en-US";
import VueAxios from "vue-axios";
import axios from "axios";

const app = createApp(App)

app.use(configureStore)
app.use(router)
app.use(BootstrapVueNext)
app.use(VueAxios, axios)

// Global Filters

app.config.globalProperties.$filters = {
	formatDate(value) {
		// Example output June 1st 2001.
		return value ? format(new Date(value), 'MMMM do yyyy', { locale: en }) : ''
	},

	formatDateJava(value) {
		// Example output 31/12/1998.
		return value ? format(new Date(value), 'dd/MM/yyyy', { locale: en }) : ''
	}
}


export default app

ApiBackendService.init({serverUri: 'http://localhost:8080'})

app.mount('#app')
