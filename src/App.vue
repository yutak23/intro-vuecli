<template>
	<router-view></router-view>
</template>

<script>
export default {
	computed: {
		isAuthenticated() {
			return this.$store.getters.idToken !== null;
		}
	},
	methods: {
		logout() {
			this.$store.dispatch('logout');
		}
	}
};
</script>

<style>
main {
	height: 100%;
	display: flex;
	flex-direction: column;
}

.main-area {
	flex: auto;
}
</style>
