import { createStore } from "vuex";

import { peopleModule } from "../pages/people";

export const configureStore = createStore({
	modules: {
		filterModule: peopleModule
	}
})