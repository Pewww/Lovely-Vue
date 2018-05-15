<template>
  <div class="container">
    <div class="form-group">
      <button @click="fetchContacts">1 페이지 연락처 조회</button>
    </div>
    <div class="form-group">
      <input type="text" v-model="name" placeholder="이름을 입력하세요.">
      <input type="text" v-model="tel" placeholder="전화번호를 입력하세요.">
      <input type="text" v-model="address" placeholder="주소를 입력하세요.">
      <button @click="addContact">연락처 1건 추가</button>
    </div>
    <div class="form-group">
      <input type="text" v-model="no">
      <button @click="fetchContactOne">연락처 1건 조회</button>
    </div>
    <div class="form-group">
      <input type="text" v-model="no">
      <input type="text" v-model="name" placeholder="이름을 입력하세요.">
      <input type="text" v-model="tel" placeholder="전화번호를 입력하세요.">
      <input type="text" v-model="address" placeholder="주소를 입력하세요.">
      <button @click="updateContact">수정</button>
    </div>
    <div class="form-group">
      <input type="text" v-model="no">
      <button @click="deleteContact">삭제</button>
    </div>
    <div class="form-group">
      <input type="text" v-model="no">
      <input type="file" ref="photofile" name="photo">
      <button @click="changePhoto">파일 변경</button>
    </div>
    <h2>JSON 출력</h2>
    <div id="result" class="container">
      <xmp>{{ result }}</xmp>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'axios-test',
  data () {
    return {
      no: 0,
      name: '',
      tel: '',
      address: '',
      result: null
    }
  },
  methods: {
    fetchContacts () {
      axios.get('/api/contacts', {
        params: {
          pageno: 1,
          pagesize: 5
        }
      })
      .then(response => {
        console.log(response);
        this.result = response.data;
      })
      .catch(err => {
        console.log(err);
      })
    },
    addContact () {
      axios.post('/api/contacts', {
        name: this.name,
        tel: this.tel,
        address: this.address
      })
      .then(response => {
        console.log(response);
        this.result = response.data;
        this.no = response.data.no;
      })
      .catch(err => {
        console.log(err);
      });
    },
    fetchContactOne () {
      axios.get(`/api/contacts/${this.no}`)
      .then(response => {
        this.result = response.data;
      })
      .catch(err => {
        console.log(err);
      })
    },
    updateContact () {
      axios.put(`/api/contacts/${this.no}`, {
        name: this.name,
        tel: this.tel,
        address: this.address
      })
      .then(response => {
        let datas = response.data;
        datas.name = this.name;
        datas.address = this.address;
        datas.tel - this.tel;
      })
      .catch(err => {
        console.log(err);
      });

      console.log('Clicked');
    },
    deleteContact () {
      axios.delete(`/api/contacts/${this.no}`)
      .then(response => {
        console.log(response);
        this.no = 0;
        this.result = response.data;
      })
      .catch(err => {
        console.log(err);
      })
    },
    changePhoto () {
      let data = new FormData();
      let file = this.$refs.photofile[0];
      data.append('photo', file);

      axios.post(`/api/contacts/${this.no}/photo`, data)
      .then(response => {
        console.log(response);
        this.result = response.data;
      })
      .catch(err => {
        console.log(err);
      });
    }
  }
}
</script>

<style scoped>
  .container {
    border: 1px solid gray;
    padding: 10px;
    margin-bottom: 10px;
    text-align: left;
  }

  #result {
    text-align: left;
    padding: 20px;
    border: 1px solid black;
  }

  .form-group {
    border: 1px dashed gray;
    padding: 5px 5px 5px 20px;
  }
</style>


