<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>번호</th><th>이름</th><th>전화번호</th><th>주소</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="c in contacts"
            :key="c.no">
          <td>{{ c.no }}</td>
          <td>{{ c.name }}</td>
          <td>{{ c.tel }}</td>
          <td>{{ c.address }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'contact-table',
  props: {
    contacts: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>


