<template>
  <div>
    <p class="addnew">
      <button class="btn btn-primary" @click="addContact">
        새로운 연락처 추가하기
      </button>
    </p>
    <div id="example">
      <table id="list" class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>이름</th><th>전화번호</th><th>주소</th>
            <th>사진</th><th>편집/삭제</th>
          </tr>
        </thead>
        <tbody id="contacts">
          <tr v-for="(contact, index) in contactList.contacts"
              :key="index"
          >
            <td>{{ contact.name }}</td>
            <td>{{ contact.tel }}</td>
            <td>{{ contact.address }}</td>
            <td>
              <img :src="contact.photo"
                   alt="사진"
                   class="thumbnail"
                   @click="editPhoto(contact.no)"
              >
            </td>
            <td>
              <button class="btn btn-primary"
                      @click="editContact(contact.no)">
                편집
              </button>
              <button class="btn btn-primary"
                      @click="deleteContact(contact.no)">
                삭제
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import eventBus from '../EventBus'

export default {
  name: 'contact-list',
  props: ['contactList'],
  methods: {
    addContact () {
      eventBus.$emit('addContactForm');
    },

    editContact (no) {
      eventBus.$emit('editContactForm', no);
    },

    deleteContact (no) {
      if (confirm('정말로 삭제하시겠습니까?') === true) {
        eventBus.$emit('deleteContact', no);
      }
    },

    editPhoto (no) {
      eventBus.$emit('editPhoto', no);
    }
  }
}
</script>

<style scoped>
  .addnew {
    margin: 10px auto;
    max-width: 820px;
    min-width: 820px;
    padding: 40px 0 0 0;
    text-align: left;
  }

  #example {
    margin: 10px auto;
    max-width: 820px;
    min-width: 820px;
    padding: 0;
    position: relative;
    font-size: 13px;
  }

  #example .long {
    width: 100%;
  }

  #example .short {
    width: 50%;
  }

  #example input, textarea, select {
    box-sizing: border-box;
    border: 1px solid #bebebe;
    padding: 7px;
    margin: 0;
    outline: none;
  }

  #list {
    width: 800px;
    font-size: 13px;
  }

  #list thead tr {
    color: yellow;
    background-color: purple;
  }

  #list th:nth-child(5n+1), #list td:nth-child(5n+1) {
    width: 200px;
  }

  #list th:nth-child(5n+2), #list td:nth-child(5n+2) {
    width: 150px;
  }

  #list th:nth-child(5n+3), #list td:nth-child(5n+3) {
    width: 250px;
  }

  #list th:nth-child(5n+4), #list td:nth-child(5n+4) {
    width: 60px;
  }

  #list th:nth-child(5n), #list td:nth-child(5n) {
    width: 150px;
  }

  #list th {
    padding: 10px 5px;
  }

  #list tr {
    border-bottom: 1px solid;
  }

  #list td, #list th {
    text-align: center;
    vertical-align: middle;
  }

  img.thumbnail {
    width: 48px;
    height: 48px;
    margin-top: auto;
    margin-bottom: auto;
    display: block;
    cursor: pointer;
  }
</style>
