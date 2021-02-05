import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Dashboard from '../views/Dashboard.vue';
import NewEntry from '../views/NewEntry.vue';
import NewBookmark from '../views/NewBookmark.vue';
import Bookmark from '../views/Bookmark.vue';
import NewNote from '../views/NewNote.vue';
import Note from '../views/Note.vue';
import NewList from '../views/NewList.vue';
import List from '../views/List.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: Dashboard,
		children: [
			{
				path: 'new',
				components: {
					new: NewEntry
				}
			},
			{
				path: 'note',
				components: {
					note: NewNote
				}
			},
			{
				path: 'note/:id',
				components: {
					note: Note
				}
			},
			{
				path: 'bookmark',
				components: {
					bookmark: NewBookmark
				}
			},
			{
				path: 'bookmark/:id',
				components: {
					bookmark: Bookmark
				}
			},
			{
				path: 'list',
				components: {
					list: NewList
				}
			},
			{
				path: 'list/:id',
				components: {
					list: List
				}
			}
		]
	}
];

const router = new VueRouter({
	routes,
	base: process.env.BASE_URL,
	mode: 'history'
});

export default router;
