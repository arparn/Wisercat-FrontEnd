import {FETCH_PERSON} from "./filter.action-types";
import {filterApi} from "./filter.api";
import {SET_PERSON} from "./filter.mutation-types";

export const actions = {
	async [FETCH_PERSON]({ commit }) {
		const person = await filterApi.getPerson()

		commit(SET_PERSON, person)
	}
}