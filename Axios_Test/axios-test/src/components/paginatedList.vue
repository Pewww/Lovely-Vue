<template>
  <div>
    <ul>
      <li v-for="(p, index) in paginatedData"
          :key="index"
      >
        {{ p.name }}
      </li>
    </ul>
    <button :disabled="pageNum === 0" @click="prevPage">
      이전
    </button>
    <button :disabled="pageNum >= pageCount - 1" @click="nextPage">
      다음
    </button>
    <br>
    <br>
    <br>
    <li v-for="(n, index) in pageCount" :key="n" class="lists" @click="movePage(index)">
      {{ n }}
    </li>
  </div>
</template>

<script>
export default {
  name: 'paginated-list',
  data () {
    return {
      pageNum: 0
    }
  },
  props: {
    listData: {
      type: Array,
      required: true
    },
    size: {
      type: Number,
      required: false,
      default: 10
    }
  },
  methods: {
    nextPage () {
      this.pageNum += 1;
    },
    prevPage () {
      this.pageNum -= 1;
    },
    movePage (idx) {
      this.pageNum = idx;
    }
  },
  computed: {
    pageCount () {
      let l = this.listData.length,
          s = this.size,
          result = Math.floor(l / s);
      
      if (l % s > 0) result += 1;

      return result;
    },
    paginatedData () {
      const start = this.pageNum * this.size,
            end = start + this.size;

      return this.listData.slice(start, end);
    }
  }
}
</script>

<style scoped>
  .lists {
    margin-right: 2rem;
    display: inline-block;
    list-style: none;
    cursor: pointer;
  }
</style>
