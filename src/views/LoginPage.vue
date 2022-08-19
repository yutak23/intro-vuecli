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
					<button
						v-if="isAuthenticated"
						class="btn btn-secondary"
						type="button"
						@click="logout"
					>
						ログアウト
					</button>
				</div>
			</div>
		</nav>
		<div class="container-sm main-area">
			<div class="text-center main">
				<div class="form-signin">
					<h1 class="h3 mb-3 fw-normal">ログイン</h1>

					<div class="form-floating">
						<input
							type="email"
							class="form-control"
							id="floatingInput"
							placeholder="name@example.com"
							v-model="email"
						/>
						<label for="floatingInput">メールアドレス</label>
					</div>
					<div class="form-floating">
						<input
							type="password"
							class="form-control"
							id="floatingPassword"
							placeholder="Password"
							v-model="password"
						/>
						<label for="floatingPassword">パスワード</label>
					</div>

					<button
						type="button"
						class="w-100 btn btn-lg btn-primary"
						@click="login"
					>
						ログイン
					</button>
					<p class="mt-5 mb-3 text-muted">&copy; 2021–2021</p>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	name: 'LoginPage',
	data() {
		return {
			email: '',
			password: ''
		};
	},
	computed: {
		isAuthenticated() {
			return this.$store.getters.idToken !== null;
		}
	},
	methods: {
		login() {
			this.$store.dispatch('login', {
				email: this.email,
				password: this.password
			});
			this.email = '';
			this.password = '';
		},
		logout() {
			this.$store.dispatch('logout');
		}
	}
};
</script>

<style scoped>
.main {
	display: flex;
	height: 100%;
	flex: auto;
	align-items: center;
	padding-top: 40px;
	padding-bottom: 40px;
}

.form-signin {
	width: 100%;
	max-width: 330px;
	padding: 15px;
	margin: auto;
}

.form-signin input[type='email'] {
	margin-bottom: -1px;
}

.form-signin input[type='password'] {
	margin-bottom: 10px;
}
</style>
