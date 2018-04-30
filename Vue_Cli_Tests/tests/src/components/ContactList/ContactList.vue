<template>
  <div>
    <contact-input @contactEvent="getInputVal"/>
    <contact-table :contacts="contactList" />
  </div>
</template>

<script>
import axios from 'axios';
import ContactInput from './ContactInput'
import ContactTable from './ContactTable'

export default {
  name: 'contact-list',
  components: {
    ContactInput,
    ContactTable
  },
  data () {
    return {
      contactList: []
    }
  },
  methods: {
    getInputVal (val) {
      this.contactList = []; // 값을 초기화한 후 메소드 실행
      const URL = `http://sample.bmaster.kro.kr/contacts_long/search/${val}`;

      axios.get(URL)
      .then( response => {
        const data = response.data;
        const Default = [
          {no: 1, name: '1', tel: '1234', address: 'Hello'}
        ];

        this.contactList = data.length > 0 ? data : Default;
      })
      .catch( err => {
        console.log(err);
        alert(err);
      });
    }
  }
}
</script>

<style scoped>

</style>


