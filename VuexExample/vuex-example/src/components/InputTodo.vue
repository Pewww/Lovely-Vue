<template>
  <div>
    <input type="text" 
           class="input" 
           id="task" 
           v-model.trim="todo" 
           placeholder="입력 후 엔터"
           @keyup.enter="addTodo"
    >
    <span class="add-btn" @click="addTodo">추 가</span>
  </div>
</template>

<script>
import Constant from '../constant'

export default {
  name: 'input-todo',
  data () {
    return {
      todo: ''
    }
  },
  methods: {
    addTodo () {
      this.$store.commit(Constant.ADD_TODO, { todo: this.todo });
      this.todo = '';
    }
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
  }

  .input {
    border: none;
    width: 75%;
    height: 35px;
    padding: 10px;
    float: left;
    font-size: 16px;
  }

  .add-btn {
    padding: 10px;
    width: 25%;
    height: 35px;
    background-color: #d9d9d9;
    color: #555;
    float: left;
    text-align: center;
    font-size: 13px;
    cursor: pointer;
    transition: 0.3s;
  }

  .add-btn:hover {
    background-color: #bbb;
  }
</style>


