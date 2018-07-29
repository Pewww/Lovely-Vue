<template>
  <div class="page-side">
    <ul>
      <li v-for="link in links" :key="link.no" @click="moveTo(link.no)">
        {{ link.no }} 번으로 이동
      </li>
    </ul>
  </div>
</template>

<script>
import Link from '../../links'

export default {
  name: 'page-side',
  data () {
    return {
      links: Link
    }
  },
  methods: {
    moveTo (to) {
      this.$router.push({
        name: 'page-show',
        params: { no: to }
      }, () => {
        console.log('Moved');
      })
    }
  }
}
</script>

<style scoped>
.page-side {
  width: 300px;
  height: calc(100% - 250px);
  float: left;
  background-color: aqua;
}

li {
  height: 150px;
  border: 1px solid gray;
  margin-bottom: 1rem;
  color: #404040;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
