<template>
	<v-app>
		<v-app-bar app clipped-left>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title>
				APIの呼び出し時にリトライする（axios）
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn icon>
				<v-icon>mdi-heart</v-icon>
			</v-btn>
			<v-btn icon>
				<v-icon>mdi-magnify</v-icon>
			</v-btn>
			<v-menu left bottom>
				<template v-slot:activator="{ on, attrs }">
					<v-btn icon v-bind="attrs" v-on="on">
						<v-icon>mdi-dots-vertical</v-icon>
					</v-btn>
				</template>

				<v-list>
					<v-list-item v-for="n in 5" :key="n" @click="() => {}">
						<v-list-item-title>Option {{ n }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
		</v-app-bar>

		<v-navigation-drawer v-model="drawer" app clipped bottom>
			<v-list dense>
				<v-list-item-group>
					<v-list-item v-for="menu of dumyMenus" :key="menu">
						<v-list-item-title>{{ menu }}</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>

		<v-main>
			<v-container>
				<v-row>
					<v-col cols="12" sm="8" md="8" lg="8" xl="8">
						<v-card>
							<form action="/begin" method="GET">
								<v-card-title> Retryの検証 </v-card-title>
								<v-card-text>
									<v-text-field v-model="user.id" label="Id"></v-text-field>
									<v-text-field
										v-model="user.email"
										label="Email"
									></v-text-field>
									<v-text-field
										v-model="user.fullName"
										label="Fullname"
									></v-text-field>
								</v-card-text>
								<v-card-actions>
									<v-spacer></v-spacer>
									<v-btn color="primary" @click="get"> GET </v-btn>
									<v-btn color="primary" @click="patch"> PATCH </v-btn>
								</v-card-actions>
							</form>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</v-main>
		<v-footer app padless>
			<v-col class="text-center" cols="12">
				{{ new Date().getFullYear() }} —
				<strong>Retry when API call with axios</strong>
			</v-col>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	name: 'TestPage',
	data: () => ({
		id: 1,
		user: {},
		drawer: false,
		dumyMenus: ['Foo', 'Bar', 'Fizz', 'Buzz']
	}),
	created() {
		console.log(process.env.VUE_APP_HOGE);
	},
	methods: {
		async get() {
			try {
				const { data: user } = await this.$axios.get(`/user/${this.id}`);
				this.user = user;
			} catch (e) {
				console.error(e);
			}
		},
		async patch() {
			const { id, createdAt, updatedAt, ...patchUser } = this.user;
			try {
				const { data: user } = await this.$axios.patch(`/user/${this.id}`, {
					...patchUser
				});
				this.user = user;
			} catch (e) {
				console.error(e);
			}
		}
	}
};
</script>
