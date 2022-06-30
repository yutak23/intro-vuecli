<template>
	<main>
		<nav class="navbar navbar-expand-sm navbar-light bg-light">
			<div class="container-fluid">
				<template v-if="isAuthenticated">
					<router-link class="navbar-brand" to="/"> 掲示板 </router-link>
				</template>
				<div class="navbar-brand" v-else>掲示板へようこそ</div>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="nav nav-pills me-auto">
						<template v-if="!isAuthenticated">
							<li class="nav-item">
								<router-link
									class="nav-link"
									to="/login"
									exact
									active-class="active"
								>
									ログイン
								</router-link>
							</li>
							<li class="nav-item">
								<router-link
									class="nav-link"
									to="/register"
									exact
									active-class="active"
								>
									登録
								</router-link>
							</li>
						</template>
					</ul>
					<button class="btn btn-secondary" type="button" @click="logout">
						ログアウト
					</button>
				</div>
			</div>
		</nav>
		<div class="container-sm main-area">
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
	</main>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import snakeCase from 'lodash/snakeCase';

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
		},
		isAuthenticated() {
			return this.idToken !== null;
		}
	},
	async created() {
		console.log(snakeCase('Foo Bar'));
		console.log(
			`日本語：${moment([2007, 0, 29]).locale('ja').fromNow()}`,
			`英語：${moment([2007, 0, 29]).locale('en').fromNow()}`
		);

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
		logout() {
			this.$store.dispatch('logout');
		},
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
