export const getters = {

	getPeople(state) {
		return state.people
	},

	getFilter(state) {
		return state.peopleFilter
	},

	getExistingFilters(state) {
		return state.existingFilters;
	}
}