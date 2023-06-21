import {AMOUNT_COMPARATOR, DATE_CRITERIA, STRING_CRITERIA} from "../../../constants.js";

export const FILTER_TYPE = Object.freeze({
	AGE: { value: 'AMOUNT', text: 'AGE', criteria: AMOUNT_COMPARATOR },
	NAME: { value: 'STRING', text: 'NAME', criteria: STRING_CRITERIA },
	SURNAME: { value: 'STRING', text: 'SURNAME', criteria: STRING_CRITERIA },
	DATE: { value: 'DATE', text: 'DATE OF BIRTH', criteria: DATE_CRITERIA }
})
