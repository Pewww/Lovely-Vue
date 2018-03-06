<template>
  <div class= "clear-all-container">
    <span class= "clear-all-btn" @click= "clearTodo">
      Clear All
    </span>
  </div>
</template>

<script>
export default {
  name: 'todo-footer',
  methods: {
    clearTodo () {
      this.$emit('removeAll');
    }
  }
}
</script>

<style scoped>
  .clear-all-container {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin: 0 auto;
    margin-top: 0.5rem;
  }

  .clear-all-btn {
    color: #E20303;
    display: block;
  }
</style>

