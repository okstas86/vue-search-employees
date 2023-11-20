<template>
	<div id="slider">
		<div class="search-bar">
			<h4>Поиск сотрудников</h4>
			<input
				v-model="searchQuery"
				placeholder=" Введите id или имя"
				@keyup.enter="fetchUsers()"
				@input="handleSearch"
			/>
			<h4>Результаты</h4>
		</div>
		<p v-if="isVisible">Начните поиск</p>
		<p class="loading" v-if="loading">Loading...</p>
		<div v-if="isNoResults">
			<p>Ничего не найдено</p>
		</div>
		<div
			class="search-result"
			v-for="user in searchResults"
			:key="user.id"
			@click="selectUser(user)"
		>
			<div class="user-image">
				<img src="../assets/img.png" alt="" />
			</div>
			<div
				class="user-info"
				:class="{ 'selected-user-background': isSelected(user) }"
			>
				<p class="username">
					<strong>{{ user.username }}</strong>
				</p>
				<p class="userEmail" style="overflow: hidden; text-overflow: ellipsis">
					{{ user.email }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			searchQuery: '',
			isVisible: true,
			selectedUser: null,
		}
	},
	computed: {
		searchResults() {
			return this.$store.getters.getSearchResults
		},
		loading() {
			return this.$store.state.loading
		},
		isNoResults() {
			return this.$store.state.isNoResults
		},
	},
	methods: {
		handleSearch() {
			this.isVisible =
				this.searchQuery.trim() === '' && this.searchResults.length === 0
			this.$store.commit('SET_NO_RESULT', false)
		},

		async fetchUsers() {
			if (this.searchQuery.trim() !== '') {
				await this.$store.dispatch('fetchUsers', this.getFormattedQuery())
				this.isVisible = false
			} else {
				this.$store.dispatch('clearSearchResults')
				this.isVisible = false
			}
		},
		getFormattedQuery() {
			const inputArray = this.searchQuery.split(' ').filter(Boolean)

			if (inputArray.every(isNaN)) {
				return `username=${inputArray.join('&username=')}`
			} else {
				return `id=${inputArray.join('&id=')}`
			}
		},

		selectUser(user) {
			this.selectedUser = user
			this.$store.dispatch('selectUser', user)
		},
		isSelected(user) {
			return this.selectedUser && this.selectedUser.id === user.id
		},
	},
}
</script>

<style lang="scss" scoped>
#slider {
	width: 24vw;
	background-color: #fdfdfd;
	box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);

	.search-bar {
		margin: 5vw 2vw 0;

		input {
			font-size: 1.1vw;
			font-weight: 400;
			width: 20vw;
			height: 3.8vw;
			color: rgba(118, 120, 125, 1);
			border: none;
			box-shadow: 0 2px 10px rgba(233, 236, 239, 1);
			border-radius: 0.8vw;
			text-indent: 1vw;
		}

		h4,
		.loading {
			font-size: 1.3vw;
			font-weight: 600;
			color: rgba(51, 51, 51, 1);
		}
	}

	p {
		margin-left: 2vw;
		font-size: 1.1vw;
		font-weight: 400;
		color: rgba(118, 120, 125, 1);
	}

	.search-result {
		width: 20vw;
		height: 6vw;
		margin: 1vw 2vw;
		display: flex;
		box-shadow: 0 2px 10px rgba(233, 236, 239, 1);
		border-radius: 0.8vw;

		.user-image img {
			width: 7vw;
			height: 6vw;
		}

		.user-info {
			width: 13vw;

			.user-name {
				color: rgba(51, 51, 51, 1);
			}
		}
	}
}
.selected-user-background {
	background-color: rgba(224, 224, 224, 1);
}
</style>
