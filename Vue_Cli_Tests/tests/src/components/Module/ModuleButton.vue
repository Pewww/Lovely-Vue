<template>
  <div>
    <button :class="[$style.btn, $style.size]">모듈 버튼 테스트</button>
  </div>
</template>

<script>
export default {
  name: 'module-button',
  created () {
    console.log(this.$style);
  }
}
</script>

<style module>
  .btn {
    border: 0;
    background-color: purple;
    color: yellowgreen;
    cursor: pointer;
  }

  .size {
    width: 200px;
    height: 75px;
  }
</style>
