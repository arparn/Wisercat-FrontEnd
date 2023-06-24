import {SET_FILTER, SET_PEOPLE} from "./people.mutation-types";

export const mutations = {

	[SET_PEOPLE](state, people) {
		state.people = people
	},

	[SET_FILTER](state, { filter }) {
		state.peopleFilter = { ...state.peopleFilter, ...filter }
	},

}