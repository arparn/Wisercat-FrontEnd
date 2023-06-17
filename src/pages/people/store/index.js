import { initialState } from './people.state'
import { getters } from './people.getters'
import { actions } from './people.actions'
import { mutations } from './people.mutations'

const state = { ...initialState() }

export const peopleModule = {
	namespaced: true,
	state,
	actions,
	mutations,
	getters,
}