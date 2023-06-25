import {DELETE_FILTER, FETCH_PEOPLE, FETCH_PEOPLE_FILTERS, SAVE_FILTER} from "./people.action-types";
import {peopleApi} from "./people.api";
import {SET_PEOPLE, SET_PEOPLE_FILTERS} from "./people.mutation-types";

export const actions = {
	async [FETCH_PEOPLE]({ commit, state }) {
		const people = await peopleApi.getPeople(state.peopleFilter)

		commit(SET_PEOPLE, people)
	},

	async [FETCH_PEOPLE_FILTERS]({commit}) {
		const peopleFilters = await peopleApi.getPeopleFilters()

		commit(SET_PEOPLE_FILTERS, peopleFilters)
	},

	async [SAVE_FILTER]({dispatch}, filter) {
		peopleApi
				.saveFilter(filter)
				.then(() => dispatch(FETCH_PEOPLE_FILTERS))
				.then(() => dispatch(FETCH_PEOPLE))
	},

	async [DELETE_FILTER]({dispatch}, {id}) {
		peopleApi
				.deleteFilter(id)
				.then(() => dispatch(FETCH_PEOPLE_FILTERS))
	}
}