// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueI18n from 'vue-i18n'
import messages from './translations/messages.json'

Vue.use(BootstrapVue)
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  messages
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
