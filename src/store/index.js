import Vue from 'vue';
import Vuex from 'vuex';
import entries from '../content/index.js';

Vue.use(Vuex);

export default new Vuex.Store({
	state: () => ({
		entries
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
		removeEntry(state, index) {
			state.entries.splice(index, 1);
		}
	},
	actions: {
		buildEntry({ commit }, entry) {
			commit('setEntry', entry);
		},
		removeEntry({ commit }, entry) {
			let index = this.state.entries.indexOf(entry);
			commit('removeEntry', index);
		}
	}
});
