<template>
  <div id="todo-cover">
    <todo-input @addPlan="addTodo"/>
    <todo-list :plans="planList" @deletePlan="planDone"/>
  </div>
</template>

<script>
import TodoInput from './TodoInput'
import TodoList from './TodoList'

export default {
  name: 'todo',
  components: {
    TodoInput,
    TodoList
  },
  data () {
    return {
      planList: []
    }
  },
  methods: {
    addTodo (val) {
      this.planList.push(val);
      // console.log(this.planList);
    },
    planDone (val, idx) {
      console.log(idx);
      this.planList.splice(idx, 1);
    }
  }
}
</script>

<style scoped>
  #todo-cover {
    width: 400px;
    height: 600px;
    margin: 150px auto;
    border-radius: 7.5px;
    box-shadow: 0 0 4px darkgray;
    overflow-y: auto;
  }
</style>
