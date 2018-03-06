<template>
  <div class= "input-box shadow">
    <input type= "text" 
           v-model= "newTodoItem"
           placeholder= "Type what you will do."
           @keyup.enter= "addTodo">

    <span class= "add-container" @click= "addTodo">
      <i class= "add-btn fa fa-plus" aria-hidden="true"></i>
    </span>

    <modal v-if= "showModal" @close= "showModal=false">
      <h3 slot= "header">경고</h3>
      <span slot= "footer" @click= "showModal=false">
        할 일을 입력해주세요.
        <i class=" close-modal-btn fa fa-times" aria-hidden= "true"></i>
      </span>
    </modal>
  </div>
</template>

<script>
import Modal from './Modal'

export default {
  name: 'todo-input',
  components: {
    Modal
  },
  data () {
    return {
      newTodoItem: '',
      showModal: false
    }
  },
  methods: {
    addTodo () {
      if(this.newTodoItem !== "") {
        let itemVal = this.newTodoItem && this.newTodoItem.trim();
        this.$emit('addTodo', itemVal);
        this.clearInput();
      }else {
        this.showModal = !this.showModal;
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

  .close-modal-btn {
    color: #62acde;
  }
</style>

