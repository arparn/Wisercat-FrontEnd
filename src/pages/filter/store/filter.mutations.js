import {SET_PERSON} from "./filter.mutation-types";

export const mutations = {

	[SET_PERSON](state, person) {
		state.person = person
	}

}