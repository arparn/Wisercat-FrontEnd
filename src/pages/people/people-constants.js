import {AMOUNT_COMPARATOR, DATE_CRITERIA, FILTER_CRITERIA_TYPE, STRING_CRITERIA} from "../../../constants.js";

export const FILTER_TYPE_PERSON = Object.freeze({
	AGE: { value: 'age', text: 'AGE', criteria: AMOUNT_COMPARATOR, type: FILTER_CRITERIA_TYPE.AMOUNT},
	NAME: { value: 'name', text: 'NAME', criteria: STRING_CRITERIA, type: FILTER_CRITERIA_TYPE.STRING },
	SURNAME: { value: 'surname', text: 'SURNAME', criteria: STRING_CRITERIA, type: FILTER_CRITERIA_TYPE.STRING },
	DATE: { value: 'birthDate', text: 'DATE OF BIRTH', criteria: DATE_CRITERIA, type: FILTER_CRITERIA_TYPE.DATE }
})
