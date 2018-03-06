<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    text-align: center;
    background-color: #F6F6F8;
  }

  #app > div {
    height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'ubuntu';
  }

  span {
    cursor: pointer;
  }

  input {
    border-style: groove;
    width: 200px;
  }

  button {
    border-style: groove;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, .03);
  }
</style>
