<template>
	<div id="user-profile">
		<div v-if="currentUser" class="current-user">
			<div class="user-img">
				<img src="../assets/rectangle2.png" alt="" />
			</div>
			<div class="info">
				<p class="user-name">{{ currentUser.name }}</p>
				<p class="info-data"><strong>email:</strong> {{ currentUser.email }}</p>
				<p class="info-data"><strong>phone:</strong> {{ currentUser.phone }}</p>
				<p class="info-data"><strong>О себе:</strong></p>
				<p class="about">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum
				</p>
			</div>
		</div>
		<div class="choose-employer" v-else>
			<p>Выберите сотрудника, чтобы посмотреть его профиль</p>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		currentUser() {
			return this.$store.state.currentUser
		},
	},
}
</script>

<style scoped lang="scss">
#user-profile {
	width: 66vw;

	.choose-employer {
		width: 100%;
		height: 45vw;
		display: flex;
		justify-content: center;
		align-items: center;

		p {
			font-size: 1.1vw;
			font-weight: 400;
			color: rgba(118, 120, 125, 1);
		}
	}

	.current-user {
		display: flex;

		.user-img {
			width: 30vw;
			height: 20vw;
			border: 0.1vw solid rgba(224, 224, 224, 1);
			margin: 2vw 3vw 0 2vw;

			img {
				width: 100%;
				height: 100%;
			}
		}

		.info {
			width: 30vw;
			height: 30vw;
			margin-top: 1vw;

			.user-name {
				font-size: 1.2vw;
				font-weight: 600;
				color: rgba(0, 0, 0, 1);
			}

			.info-data {
				font-size: 1.1vw;
				font-weight: 400;
				color: rgba(118, 120, 125, 1);

				strong {
					color: rgba(51, 51, 51, 1);
				}
			}

			.about {
				font-size: 1.1vw;
				font-weight: 400;
				color: rgba(118, 120, 125, 1);
				line-height: 1.3vw;
			}
		}
	}
}
</style>
