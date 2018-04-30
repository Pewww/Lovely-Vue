import Vue from 'vue'
import Router from 'vue-router'
import ContactList from '@/components/ContactList/ContactList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'contact-list',
      component: ContactList
    }
  ]
})
