import {SORT_ORDER} from "../../../store/constants";
import {AGE_COMPARATOR} from "../people-constants";

export const initialPeopleFilter = () => ({
	name: null,
	age: 23,
	ageComparator: AGE_COMPARATOR.LESS_OR_EQUAL.value,
	page: 0,
	pageSize: 10,
	sortOrder: SORT_ORDER.ASC,
	sortColumn: 'birthDate',
})

export const initialState = () => ({

	peopleFilter: initialPeopleFilter(),
	people: []

})