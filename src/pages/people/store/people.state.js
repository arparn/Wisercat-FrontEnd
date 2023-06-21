import {AMOUNT_COMPARATOR, SORT_ORDER} from "../../../../constants.js";

export const initialPeopleFilter = () => ({
	name: null,
	age: 23,
	ageComparator: AMOUNT_COMPARATOR.LESS_OR_EQUAL.value,
	page: 0,
	pageSize: 10,
	sortOrder: SORT_ORDER.ASC,
	sortColumn: 'birthDate',
})

export const initialState = () => ({

	peopleFilter: initialPeopleFilter(),
	people: []

})