<template>
  <div>
    <input type="text" 
           v-model.trim="plan"
           placeholder="할 일을 입력해주세요."
           @keyup.enter="makePlan"
    >
  </div>
</template>

<script>
export default {
  name: 'todo-input',
  data () {
    return {
      plan: ''
    }
  },
  methods: {
    makePlan () {
      if (this.plan !== '') {
        this.$emit('addPlan', this.plan);
        this.initializeVal();
      } else {
        alert('계획을 입력해주세요.');
      }
    },
    initializeVal () {
      this.plan = '';
    }
  }
}
</script>

<style scoped>
  input {
    display: block;
    width: 80%;
    height: 2.6rem;
    margin: 0 auto;
    position: relative;
    top: 2rem;
    border: 0;
    border-bottom: 2px solid #F4586D;
  }
</style>


