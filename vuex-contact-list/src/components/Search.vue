<template>
  <div>
    입력:
    <input type="text"
           v-model.trim="name"
           @keyup.enter="sendEvent"
           placeholder="두 글자 이상 입력"
    >
  </div>
</template>

<script>
import Constant from '../Constant'

export default {
  name: 'search',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    sendEvent ({ target }) {
      let val = target.value;
      if (val.length >= 2) {
        this.$store.dispatch(Constant.SHOW_CONTACT, { name: val });
        this.name = '';
      } else {
        alert('두 글자 이상 입력해주세요!');
      }
    }
  }
}
</script>
