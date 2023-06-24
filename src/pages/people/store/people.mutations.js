import {SET_FILTER, SET_PEOPLE, SET_PEOPLE_FILTERS} from "./people.mutation-types";

export const mutations = {

	[SET_PEOPLE](state, people) {
		state.people = people
	},

	[SET_FILTER](state, { filter }) {
		state.peopleFilter = { ...state.peopleFilter, ...filter }
	},

	[SET_PEOPLE_FILTERS](state, existingFilters) {
		state.existingFilters = existingFilters
	}

}