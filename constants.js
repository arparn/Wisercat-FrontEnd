export const SORT_ORDER = Object.freeze({
	DESC: 'DESC',
	ASC: 'ASC',
})

export const FILTER_CRITERIA_TYPE = Object.freeze({
	AMOUNT: 'AMOUNT',
	STRING: 'STRING',
	DATE: 'DATE'
})

export const AMOUNT_COMPARATOR = Object.freeze({
	LESS: { value: 'LESS', text: 'less' },
	LESS_OR_EQUAL: { value: 'LESS_OR_EQUAL', text: 'less or equal' },
	GREATER: { value: 'GREATER', text: 'greater' },
	GREATER_OR_EQUAL: { value: 'GREATER_OR_EQUAL', text: 'greater or equal' },
	EQUAL: { value: 'EQUAL', text: 'equal' }
})

export const STRING_CRITERIA = Object.freeze({
	EQUALS: { value: 'EQUAL', text: 'equals' },
	CONTAINS: { value: 'CONTAINS', text: 'contains' },
	STARTS_WITH: { value: 'STARTS_WITH', text: 'starts with' },
	ENDS_WITH: { value: 'ENDS_WITH', text: 'ends with' }
})

export const DATE_CRITERIA = Object.freeze({
	FROM: { value: 'FROM', text: 'from' },
	TO: { value: 'TO', text: 'to' },
	ON: { value: 'ON', text: 'on' }
})

export const FILTER_TYPE = {
	PERSON: 'PERSON'
}
