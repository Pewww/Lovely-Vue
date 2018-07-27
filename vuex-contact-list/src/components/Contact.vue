<template>
  <div>
    <search />
    <contact-list />
  </div>
</template>

<script>
import Search from './Search'
import ContactList from './ContactList'

export default {
  name: 'contact',
  components: {
    Search,
    ContactList
  }
}
</script>

