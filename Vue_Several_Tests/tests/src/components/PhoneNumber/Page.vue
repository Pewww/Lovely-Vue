<template>
  <div class="page">
    <page-header />
    <page-side />
    <div class="right-side">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import PageHeader from './PageHeader'
import PageSide from './PageSide'

export default {
  name: 'page',
  components: {
    PageHeader,
    PageSide
  }
}
</script>

<style>
.page {
  width: 100%;
  height: 100%;
}

.right-side {
  width: calc(100% - 300px);
  height: calc(100% - 250px);
  float: right;
}
</style>
