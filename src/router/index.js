import Vue from 'vue'
import Router from 'vue-router'
import Calculator from '@/components/Calculator.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'calculator',
      component: Calculator
    }
  ]
})