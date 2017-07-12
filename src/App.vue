<template>
	<div id="app">
		<app-header v-bind:title="title"></app-header>
    <router-view></router-view>
		<app-footer></app-footer>
	</div>
</template>

<script>

  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

  const locales = ['en', 'ru']

  export default {
    name: 'app',
    watch: {
      '$route' (to, from) {
        let locale = this.$route.params.locale
        let index = locales.indexOf(locale)
        if (locale.length === 2 && index !== -1) {
          this.$i18n.locale = locale
          console.log(locale)
        } else {
          this.$i18n.locale = 'en'
        }
      }
    },
    components: {
      'app-header': Header,
      'app-footer': Footer
    },
    data () {
      return {
        title: this.$t('message.title')
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

  * {
    outline: none !important;
  }

  .content {
    margin: 40px auto 0 auto;
  }
</style>
