import {SORT_ORDER} from "../../../store/constants";
import {AGE_COMPARATOR} from "../people-constants";

export const initialPeopleFilter = () => ({
	name: null,
	age: 22,
	ageComparator: AGE_COMPARATOR.EQUAL.value,
	page: 0,
	pageSize: 10,
	sortOrder: SORT_ORDER.DESC,
	sortColumn: 'age',
})

export const initialState = () => ({

	peopleFilter: initialPeopleFilter(),
	people: null

})