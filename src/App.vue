<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
	@import '../node_modules/bootstrap/dist/css/bootstrap.css';
	@import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';

	body {

	}

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>
