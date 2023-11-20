<template>
	<div id="app">
		<TheHeader />
		<div class="container">
			<TheSidebar />
			<UserProfile />
		</div>
	</div>
</template>

<script>
import UserProfile from './components/UserProfile.vue'
import TheSidebar from './components/TheSidebar.vue'
import TheHeader from './components/TheHeader.vue'

export default {
	name: 'App',
	components: {
		UserProfile,
		TheSidebar,
		TheHeader,
	},
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

#app {
	font-family: 'Montserrat', sans-serif;

	.container {
		display: flex;
		margin: 0 2vw;
		width: 90vw;
		min-height: 45vw;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		border-radius: 1vw;
	}
}
</style>
