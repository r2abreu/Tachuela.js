export const fetchEntry = {
	methods: {
		obtainId() {
			let url = window.location.href;
			let id = url.slice(url.lastIndexOf('/') + 1);
			return id;
		},
		provideData() {
			this.id = this.obtainId();
			let entry = this.getEntry(this.id);
			this.title = entry.title;
			this.body = entry.body;
			this.image = entry.image;
			this.link = entry.link;
			this.tasks = entry.tasks;
		}
	}
};
