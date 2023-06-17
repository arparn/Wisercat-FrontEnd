import {FETCH_PEOPLE} from "./people.action-types";
import {peopleApi} from "./people.api";
import {SET_PEOPLE} from "./people.mutation-types";

export const actions = {
	async [FETCH_PEOPLE]({ commit, state }) {
		const people = await peopleApi.getPeople(state.peopleFilter)

		commit(SET_PEOPLE, people)
	}
}