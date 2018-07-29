<template>
  <div>
    <h1>연락처</h1>
    <div class="wrapper">
      <div v-for="c in contacts" :key="c.no" class="contacts">
        <!--<router-link :to="`/contacts/${c.no}`">-->
        <router-link :to="{ name: 'contact-by-no', params: { no: c.no }}">
          {{ c.name }}
        </router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import contactList from '../../ContactList'

export default {
  name: 'contacts',
  data () {
    return {
      contacts: contactList.contacts,
    }
  },
}
</script>

<style scoped>
.wrapper {
  width: 80%;
  height: 400px;
  border: 1px solid #404040;
}

.contacts {
  width: 40px;
  height: 40px;
  border: 1px solid gray;
  margin: 20px;
  display: inline-block;
}
</style>
