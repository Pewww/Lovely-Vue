<template>
  <div>
    {{ resultValue }}
  </div>
</template>

<script>
export default {
  name: 'success',
  computed: {
    resultValue () {
      return [
        localStorage['AirGrade'] + '등급',
        localStorage['TotalPrice'] + '만원',
        localStorage['UserCount'] + '명',
        ('이름: ' + localStorage['UserName']),
        ('이용 여행사: ' + localStorage['UserAirplane']),
      ]
    }
  }
}
</script>

<style scoped>

</style>


