import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: () => ({
		entries: []
	}),
	getters: {
		getAllEntries(state) {
			return state.entries;
		},
		getEntry: (state) => (id) => {
			return state.entries.filter((entry) => entry.id == id)[0];
		}
	},
	mutations: {
		setEntry(state, entry) {
			state.entries.push(entry);
		},
		removeEntry(state, entries) {
			state.entries = entries;
		}
	},
	actions: {
		buildEntry({ commit }, entry) {
			commit('setEntry', entry);
		},
		removeEntry({ commit }, state, id) {
			let filteredEntries = state.entry.filter((entry) => entry.id !== id);
			commit('removeNote', filteredEntries);
		}
	}
});
