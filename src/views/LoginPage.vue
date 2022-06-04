<template>
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

			<!-- <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div> -->
			<button class="w-100 btn btn-lg btn-primary" @click="login">
				ログイン
			</button>
			<p class="mt-5 mb-3 text-muted">&copy; 2021–2021</p>
		</div>
	</div>
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
	methods: {
		login() {
			this.$store.dispatch('login', {
				email: this.email,
				password: this.password
			});
			this.email = '';
			this.password = '';
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
