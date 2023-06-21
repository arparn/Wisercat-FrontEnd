export const SORT_ORDER = Object.freeze({
	DESC: 'DESC',
	ASC: 'ASC',
})

export const AMOUNT_COMPARATOR = Object.freeze({
	LESS: { value: 'LESS', text: 'less' },
	LESS_OR_EQUAL: { value: 'LESS_OR_EQUAL', text: 'less or equal' },
	GREATER: { value: 'GREATER', text: 'greater' },
	GREATER_OR_EQUAL: { value: 'GREATER_OR_EQUAL', text: 'greater or equal' },
	EQUAL: { value: 'EQUAL', text: 'equal' }
})

export const STRING_CRITERIA = Object.freeze({
	EQUALS: { value: 'EQUALS', text: 'equals' },
	CONTAINS: { value: 'CONTAINS', text: 'contains' }
})

export const DATE_CRITERIA = Object.freeze({
	FROM: { value: 'FROM', text: 'from' },
	TO: { value: 'TO', text: 'to' },
	ON: { value: 'ON', text: 'on' }
})
