import {AMOUNT_COMPARATOR, DATE_CRITERIA, STRING_CRITERIA} from "../../../constants.js";

export const FILTER_TYPE_PERSON = Object.freeze({
	AGE: { value: 'age', text: 'AGE', criteria: AMOUNT_COMPARATOR },
	NAME: { value: 'name', text: 'NAME', criteria: STRING_CRITERIA },
	SURNAME: { value: 'surname', text: 'SURNAME', criteria: STRING_CRITERIA },
	DATE: { value: 'birthDate', text: 'DATE OF BIRTH', criteria: DATE_CRITERIA }
})
