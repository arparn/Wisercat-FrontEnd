import {SORT_ORDER} from "../../../../constants.js";

export const initialPeopleFilter = () => ({
	keys: [],
	criteria: [],
	values: [],
	page: 0,
	pageSize: 2,
	sortOrder: SORT_ORDER.ASC,
	sortColumn: 'name',
})

export const initialState = () => ({

	peopleFilter: initialPeopleFilter(),
	people: [],
	existingFilters: []

})