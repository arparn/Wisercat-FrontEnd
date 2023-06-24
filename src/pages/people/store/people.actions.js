import {FETCH_PEOPLE, FETCH_PEOPLE_FILTERS} from "./people.action-types";
import {peopleApi} from "./people.api";
import {SET_PEOPLE, SET_PEOPLE_FILTERS} from "./people.mutation-types";
import {FILTER_TYPE_PERSON} from "../people-constants";

export const actions = {
	async [FETCH_PEOPLE]({ commit, state }) {
		const people = await peopleApi.getPeople(state.peopleFilter)

		commit(SET_PEOPLE, people)
	},

	async [FETCH_PEOPLE_FILTERS]({commit}) {
		const peopleFilters = await peopleApi.getPeopleFilters()

		commit(SET_PEOPLE_FILTERS, peopleFilters)
	}
}