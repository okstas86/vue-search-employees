import { createStore } from 'vuex'

const store = createStore({
	state: {
		currentUser: null,
		searchResults: [],
		loading: false,
		error: null,
		isNoResults: false,
	},
	mutations: {
		SET_CURRENT_USER(state, user) {
			state.currentUser = user
		},
		SET_SEARCH_RESULTS(state, results) {
			state.searchResults = results
		},
		SET_LOADING(state, value) {
			state.loading = value
		},
		SET_NO_RESULT(state, value) {
			state.isNoResults = value
		},
		SET_ERROR(state, error) {
			state.error = error
		},
		CLEAR_SEARCH_RESULTS(state) {
			state.searchResults = []
			state.isNoResults = false
		},
	},
	actions: {
		async fetchUsers({ commit }, query) {
			commit('SET_LOADING', true)

			try {
				const response = await fetch(
					`https://jsonplaceholder.typicode.com/users?${query}`
				)
				const data = await response.json()
				commit('SET_SEARCH_RESULTS', data)

				if (data.length === 0) {
					commit('SET_NO_RESULT', true)
				}

				commit('SET_LOADING', false)
				commit('SET_ERROR', null)
			} catch (error) {
				commit('SET_ERROR', 'Error fetching users')
				commit('SET_LOADING', false)
				console.error('Error fetching users', error)
			}
		},
		selectUser({ commit }, user) {
			commit('SET_CURRENT_USER', user)
		},
		clearSearchResults({ commit }) {
			commit('CLEAR_SEARCH_RESULTS')
		},
	},
	getters: {
		getSearchResults: state => state.searchResults,
	},
})

export default store
