import { initialState } from './filter.state'
import { getters } from './filter.getters'
import { actions } from './filter.actions'
import { mutations } from './filter.mutations'

const state = { ...initialState() }

export const filterModule = {
	namespaced: true,
	state,
	actions,
	mutations,
	getters,
}