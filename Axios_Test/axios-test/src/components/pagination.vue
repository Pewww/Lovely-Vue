<template>
  <div>
    <paginated-list :list-data="pageData" />
    <input @keyup.enter="addData" type="text" placeholder="입력" v-model="inputData">
  </div>
</template>

<script>
import axios from 'axios';
import paginatedList from './paginatedList'

const uriData = 'http://sample.bmaster.kro.kr/contacts';

export default {
  name: 'pagination',
  components: {
    paginatedList
  },
  data () {
    return {
      pageData: [],
      inputData: '',
    }
  },
  methods: {
    addData () {
      axios.post(uriData, {
        name: this.inputData,
        tel: this.inputData,
        address: this.inputData
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
    }
  },
  updated () {
    axios.get(uriData)
    .then(response => {
      console.log(response);
      this.pageData = response.data.contacts
    })
    .catch(err => {
      console.log(err);
    });
  },
  mounted () {
    axios.get(uriData)
    .then(response => {
      this.pageData = response.data.contacts
    })
    .catch(err => {
      console.log(err);
    });
  }
}
</script>

<style>
  input {
    width: 20rem;
    height: 2.8rem;
    margin-top: 1.5rem;
  }
</style>


