<template>
  <contact-form mode="update" :contact="contact" />
</template>

<script>
import ContactForm from './ContactForm'

export default {
  name: 'update-contact',
  components: {
    ContactForm
  },
  props: ['contact']
}
</script>

<style scoped>

</style>
