<template>
	<div id="app">
		<app-header></app-header>
		<router-view></router-view>
		<app-footer></app-footer>
	</div>
</template>

<script>

  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'app',
    components: {
      'app-header': Header,
      'app-footer': Footer
    },
    data () {
      return {
      }
    }
  }
</script>

<style>
	@import '../node_modules/bootstrap/dist/css/bootstrap.css';
	@import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>
