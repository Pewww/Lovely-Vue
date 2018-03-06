<template>
  <div class= "input-box shadow">
    <input type= "text" 
           v-model= "newTodoItem"
           placeholder= "Type what you will do."
           @keyup.enter= "addTodo">

    <span class= "add-container" @click= "addTodo">
      <i class= "add-btn fa fa-plus" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'todo-input',
  data () {
    return {
      newTodoItem: ''
    }
  },
  methods: {
    addTodo () {
      if(this.newTodoItem !== "") {
        let itemVal = this.newTodoItem && this.newTodoItem.trim();
        this.$emit('addTodo', itemVal);
        this.clearInput();
      }
    },
    clearInput () {
      this.newTodoItem = '';
    }
  }
}
</script>

<style scoped>
  .input-box {
    background-color: #FFFFFF;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    margin: 0 0.5rem 0;
  }

  .input-box input {
    border-style: none;
    font-size: 0.92rem;
    position: relative;
    top: -1px;
    letter-spacing: 0.2px;
  }

  .add-container {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    width: 3rem;
    border-radius: 0 5px 5px 0;
    
  }

  .add-btn {
    color: #FFFFFF;
  }
</style>

