<template>
  <div>
    <input type="text"
           v-model.trim="inputVal"
           @keyup.enter="giveValue"
    >
  </div>
</template>

<script>
export default {
  name: 'contact-input',
  data () {
    return {
      inputVal: ''
    }
  },
  methods: {
    giveValue ({target}) {
      let getVal = target.value;

      if (getVal.length >= 2) {
        this.$emit('contactEvent', this.inputVal);
      } else {
        alert('2글자 이상 입력해주세요.');
      }
    }
  }
}
</script>

<style scoped>
  input {
    display: block;
  }
</style>


