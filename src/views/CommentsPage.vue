<template>
	<div>
		<h3>掲示板に投稿する</h3>
		<div class="mb-3">
			<label for="name" class="form-label">ニックネーム</label>
			<input type="text" class="form-control" id="name" v-model="name" />
		</div>
		<div class="mb-3">
			<label for="comment" class="form-label">コメント</label>
			<textarea class="form-control" id="comment" v-model="comment" />
		</div>
		<div class="mb-3">
			<button class="btn btn-primary" @click="createComment">
				コメントをサーバに送る
			</button>
		</div>
		<h2>掲示板</h2>
		<div v-for="post in posts" :key="post.name">
			<div class="card">
				<div class="card-body">
					<h5 class="card-title">{{ post.fields.name.stringValue }}</h5>
					<p class="card-text">
						{{ post.fields.comment.stringValue }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'CommentsPage',
	data() {
		return {
			name: '',
			comment: '',
			posts: []
		};
	},
	computed: {
		idToken() {
			return this.$store.getters.idToken;
		}
	},
	async created() {
		const header = {
			headers: {
				Authorization: `Bearer ${this.idToken}`
			}
		};

		try {
			const response = await axios.get('/comments', header);
			this.posts = response.data.documents;
		} catch (error) {
			this.errorHandler(error);
		}
	},
	methods: {
		async createComment() {
			const data = {
				fields: {
					name: {
						stringValue: this.name
					},
					comment: {
						stringValue: this.comment
					}
				}
			};

			const header = {
				headers: {
					Authorization: `Bearer ${this.idToken}`
				}
			};

			try {
				const response = await axios.post('/comments', data, header);
				console.log(response);
			} catch (error) {
				this.errorHandler(error);
			}

			this.name = '';
			this.comment = '';
		},
		errorHandler(error) {
			if (error.response) {
				console.log(error.response.status);
				console.log(error.response.data);
				console.log(error.message);
			} else {
				console.log(error.message);
			}
		}
	}
};
</script>
