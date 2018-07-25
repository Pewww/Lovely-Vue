<template>
  <div>
    <table>
      <thead>
        <th>번호</th>
        <th>국가명</th>
        <th>수도</th>
        <th>지역</th>
      </thead>
      <tbody>
        <tr v-for="c in countries" :key="c.no">
          <td>{{ c.no }}</td>
          <td>{{ c.name }}</td>
          <td>{{ c.capital }}</td>
          <td>{{ c.region }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'country-list',
  computed: mapGetters({
    countries: 'countriesByRegion'
  })
}
</script>

<style>
table {
  border-collapse: collapse;
}
</style>
