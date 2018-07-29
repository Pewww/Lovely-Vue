<template>
  <div>
    <ul>
      <li>{{ showLink.name }}</li>
      <li>{{ showLink.tel }}</li>
      <li>{{ showLink.address }}</li>
      <li>{{ showLink.paragraph }}</li>
    </ul>
  </div>
</template>

<script>
import Link from '../../links'

export default {
  name: 'page-show',
  data () {
    return {
      links: Link,
      no: ''
    }
  },
  created () {
    this.no = this.$route.params.no;
  },
  watch: {
    '$route' (to, from) {
      this.no = to.params.no;
    }
  },
  computed: {
    showLink () {
      let no = this.no;
      let computedArr = this.links.filter(v => v.no == no);

      return computedArr.length > 0 ? computedArr[0] : {};
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
  padding: 1rem;
}

li:first-of-type {
  font-size: 1.8rem;
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

li:nth-of-type(4) {
  text-indent: 4px;
}
</style>
