import Vue from 'vue'
import Router from 'vue-router'
import PhoneAddress from '@/components/PhoneAddress'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'phone-address',
      component: PhoneAddress
    }
  ]
})
