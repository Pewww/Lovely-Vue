import Vue from 'vue'
import Router from 'vue-router'
import ContactList from '@/components/ContactList/ContactList'
import Todo from '@/components/SimpleTodo/Todo'
import StyleModule from '@/components/Module/StyleModule'
import Slot from '@/components/Module/Slot'
import CountryRegion from '@/components/Country/CountryRegion'
import Contacts from '@/components/PhoneNumber/Contacts'
import ContactByNo from '@/components/PhoneNumber/ContactByNo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'contact-list',
      component: ContactList
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    },
    {
      path: '/module',
      name: 'module',
      component: StyleModule
    },
    {
      path: '/slot',
      name: 'slot',
      component: Slot
    },
    {
      path: '/region',
      name: 'country-region',
      component: CountryRegion
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts,
      children: [
        {
          path: ':no',
          name: 'contact-by-no',
          component: ContactByNo
        }
      ]
    }
  ]
})
