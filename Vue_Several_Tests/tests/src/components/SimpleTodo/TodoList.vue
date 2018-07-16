<template>
  <div>
    <ul>
      <li v-for="(p, index) in plans"
          :key="index"
          @click="deleteIt(p, index)">
        {{ p }} <span>{{ index }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'todo-list',
  props: {
    plans: {
      type: Array
    }
  },
  methods: {
    deleteIt (val, idx) {
      this.$emit('deletePlan', val, idx);
    }
  }
}
</script>

<style scoped>
  ul {
    margin-top: 3rem;
  }

  ul li {
    width: 80%;
    height: 2.4rem;
    list-style: none;
    border-bottom: 1px solid #cccccc;
    margin: 0 auto;
    display: flex;
    align-items: center;
    position: relative;
    font-size: 0.85rem;
    cursor: pointer;
    transition: 0.4s;
  }

  ul li:hover {
    background-color: #f2f2f2;
  }

  ul li span {
    font-weight: bold;
    position: absolute;
    right: 10px;
  }
</style>


