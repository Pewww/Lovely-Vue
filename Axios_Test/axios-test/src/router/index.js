import Vue from 'vue'
import Router from 'vue-router'
import AxiosTest from '@/components/AxiosTest'
import pagination from '@/components/pagination'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'axios-test',
      component: AxiosTest
    },
    {
      path: '/pagination',
      name: 'pagination',
      component: pagination
    }
  ]
})
