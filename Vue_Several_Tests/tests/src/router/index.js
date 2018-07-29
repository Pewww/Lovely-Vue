import Vue from 'vue'
import Router from 'vue-router'
import ContactList from '@/components/ContactList/ContactList'
import Todo from '@/components/SimpleTodo/Todo'
import StyleModule from '@/components/Module/StyleModule'
import Slot from '@/components/Module/Slot'
import CountryRegion from '@/components/Country/CountryRegion'
import Contacts from '@/components/PhoneNumber/Contacts'
import ContactByNo from '@/components/PhoneNumber/ContactByNo'
import Page from '@/components/PhoneNumber/Page'
import PageShow from '@/components/PhoneNumber/PageShow'

Vue.use(Router)

function connectNo (route) {
  return { no: route.params.no };
}

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
          component: ContactByNo,
          props: connectNo // 지금은 단순한 params 정보이므로 true를 써도 무방하다.
          // 단순 params 정보가 아닌 query 정보 등이 속성에 부여되어야 한다면 라우트 정보를 함수 형태로 수정할 수 있다.
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/page',
      name: 'page',
      component: Page,
      children: [
        {
          path: ':no',
          name: 'page-show',
          component: PageShow
        }
      ]
    }
  ]
})
