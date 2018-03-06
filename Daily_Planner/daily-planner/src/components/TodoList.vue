<template>
  <section>
    <transition-group name= "list" tag= "ul">
      <li v-for= "(todoItem, index) in propsdata" :key= "index" class= "shadow">
          <i class= "check-btn fa fa-check" aria-hidden= "true"></i>
          {{ todoItem }}
          <span class= "remove-btn" type="button" @click= "removeTodo(todoItem, index)">
            <i class= "fa fa-trash-o" aria-hidden= "true"></i>
          </span>
      </li>
    </transition-group>
  </section>
</template>

<script>
export default {
  name: 'todo-list',
  props: ['propsdata'],
  methods: {
    removeTodo (todoItem, index) {
      this.$emit('removeTodo', todoItem, index);
    }
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    text-align: left;
  }

  ul li {
    display: flex;
    align-items: center;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.3rem 0.5rem 0;
    padding: 0 0.9rem;
    background-color: #FFFFFF;
    border-radius: 5px;
  }

  .check-btn {
    line-height: 45px;
    color: #62ACDE;
    margin-right: 5px;
  }

  .remove-btn {
    margin-left: auto;
    color: #DE4343;
  }

  .list-move {
    transition: transform .8s;
  }

  .list-enter-active, .list-leave-active {
    transition: all .8s;
  }

  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px)
  }
 </style>

