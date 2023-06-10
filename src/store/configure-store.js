import { createStore } from "vuex";

import { filterModule } from "../pages/filter";

export const configureStore = createStore({
	modules: {
		filterModule
	}
})