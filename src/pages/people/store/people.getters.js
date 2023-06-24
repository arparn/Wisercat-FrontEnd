export const getters = {

	getPeople(state) {
		return state.people
	},

	getFilter() {
		return this.state.peopleFilter
	}

}