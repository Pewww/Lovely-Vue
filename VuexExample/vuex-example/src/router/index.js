import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/VuexTodo/TodoList'
import Vehicle from '@/components/Airplane/Vehicle'
import Bus from '@/components/Airplane/Bus'
import Airplane from '@/components/Airplane/Airplane'
import RentCar from '@/components/Airplane/RentCar'
import Success from '@/components/Airplane/Success'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todo-list',
      component: TodoList
    },
    {
      path: '/vehicle',
      name: 'vehicle',
      component: Vehicle
    },
    {
      path: '/airplane',
      name: 'airplane',
      component: Airplane
    },
    {
      path: '/rent-car',
      name: 'rent-car',
      component: RentCar
    },
    {
      path: '/bus',
      name: 'bus',
      component: Bus
    },
    {
      path: '/done',
      name: 'done',
      component: Success
    }
  ]
})
