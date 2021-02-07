import Vue from 'vue';
import Vuex from 'vuex';
import img from '../../public/profile.jpg';

Vue.use(Vuex);

export default new Vuex.Store({
	state: () => ({
		entries: [
			{
				id: '0',
				title: 'Front End Developer',
				body:
					'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
				image: img,
				type: 'note'
			},
			{
				id: '1',
				title: 'Vue Mixins',
				body: 'Mixins de Vue, muy utiles',
				link: 'https://vuejs.org/v2/guide/mixins.html',
				type: 'bookmark'
			},
			{ id: '2', title: 'Lista de compras', tasks: [ { text: 'manzanas' } ], type: 'list' }
		]
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
