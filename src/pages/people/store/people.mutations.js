import {SET_PEOPLE} from "./people.mutation-types";

export const mutations = {

	[SET_PEOPLE](state, people) {
		state.people = people
	}

}