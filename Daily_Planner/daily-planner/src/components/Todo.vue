<template>
  <div>
    <todo-header />
    <todo-input @addTodo= "addTodo"/>
    <todo-list :propsdata= "todoItems" @removeTodo= "removeTodo"/>
    <todo-footer @removeAll= "clearAll"/>
  </div>
</template>

<script>
import TodoHeader from './TodoHeader'
import TodoList from './TodoList'
import TodoInput from './TodoInput'
import TodoFooter from './TodoFooter'

export default {
  name: 'todo',
  props: ['propsdata'],
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  data () {
    return {
      todoItems: []
    }
  },
  methods: {
    addTodo (todoItem) {
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },
    clearAll () {
      localStorage.clear();
      this.todoItems = [];
    },
    removeTodo (todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    }
  },
  created () {
    if(localStorage.length > 0) {
      for(let i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  }
}
</script>

<style>
  
</style>


