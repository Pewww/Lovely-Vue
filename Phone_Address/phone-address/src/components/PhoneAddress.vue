<template>
  <div id="container">
    <div class="page-header">
      <h1 class="text-center">연락처 관리 어플리케이션</h1>
      <p>(Dynamic Components + EventBus + Axios)</p>
    </div>
    <component :is="currentView" :contact="contact"></component>
    <contact-list :contactList="contactList" />
    <paginate ref="pagebuttons"
              :page-count="totalpage"
              :page-range="7"
              :margin-pages="3"
              :click-handler="pageChanged"
              :prev-text="'이전'"
              :next-text="'다음'"
              :container-class="'pagination'"
              :page-class="'page-item'"
    >
    </paginate>
  </div>
</template>

<script>
import Vue from 'vue'
import ContactList from './ContactList'
import AddContact from './AddContact'
import UpdateContact from './UpdateContact'
import UpdatePhoto from './UpdatePhoto'

import CONF from '../Config'
import eventBus from '../EventBus'
import Paginate from 'vuejs-paginate'

export default {
  name: 'phone-address',
  components: {
    ContactList,
    AddContact,
    UpdateContact,
    UpdatePhoto,
    Paginate
  },
  data () {
    return {
      currentView: null,
      contact: {
        no: 0,
        name: '',
        tel: '',
        address: '',
        photo: ''
      },
      contactList: {
        pageno: 1,
        pagesize: CONF.PAGESIZE,
        totalcount: 0,
        contacts: []
      }
    }
  },
  mounted () {
    this.fetchContacts();
    eventBus.$on('cancel', () => {
      this.currentView = null;
    });

    eventBus.$on('addSubmit', (contact) => {
      this.currentView = null;
      this.addContact(contact);
    });

    eventBus.$on('updateSubmit', (contact) => {
      this.currentView = null;
      this.UpdateContact(contact);
    });

    eventBus.$on('addContactForm', () => {
      this.currentView = 'addContact';
    });

    eventBus.$on('editContactForm', (no) => {
      this.fetchContacts(no);
      this.currentView = 'updateContact';
    });

    eventBus.$on('deleteContact', (no) => {
      this.deleteContact(no);
    });

    eventBus.$on('editPhoto', (no, file) => {
      this.fetchContacts(no);
      this.currentView = 'updatePhoto';
    });

    eventBus.$on('updatePhoto', (no, file) => {
      if (typeof file !== 'undefined') {
        this.updatePhoto(no, file);
      }
      this.currentView = null;
    })
  },
  computed: {
    totalpage () {
      return Math.floor((this.contactList.totalcount - 1) / this.contactList.pagesize) + 1;
    }
  },
  methods: {
    pageChanged (page) {
      this.contactList.pageno = page;
      this.fetchContacts();
    },

    fetchContacts () {
      this.$http.get(CONF.FETCH, {
        params: {
          pageno: this.contactList.pageno,
          pagesize: this.contactList.pagesize
        }
      })
      .then(response => {
        this.contactList = response.data;
      })
      .catch(err => {
        console.log(err);
        this.contactList.contacts = []
      });
    },

    addContact (contact) {
      this.$http.post(CONF.ADD, contact)
      .then(response => {
        this.contactList.pageno = 1;
        this.fetchContacts();
      })
      .catch(err => {
        console.log(err);
      });
    },

    UpdateContact (contact) {
      this.$http.put(CONF.UPDATE.replace(`${no}`, contact.no), contact)
      .then(response => {
        this.fetchContacts();
      })
      .catch(err => {
        console.log(err);
      });
    },

    fetchContactOne (no) {
      this.$http.get(CONF.FETCH_ONE.replace(`${no}`, no))
      .then(response => {
        this.contact = response.data;
      })
      .catch(err => {
        console.log(err);
      });
    },

    deleteContact (no) {
      this.$http.delete(CONF.DELETE.replace(`${no}`, no))
      .then(response => {
        this.fetchContacts();
      })
      .catch(err => {
        console.log(err);
      });
    },

    updatePhoto (no, file) {
      let data = new FormData();
      data.append('photo', file);
      
      this.$http.post(CONF.UPDATE_PHOTO.replace(`${no}`, no), data)
      .then(response => {
        this.fetchContacts();
      })
      .catch(err => {
        console.log(err);
      });
    }
  },
  watch: {
    ['contactList.pageno'] () {
      this.$refs.pagebuttons.selected = this.contactList.pageno - 1;
    }
  }
}
</script>

<style scoped>
  @import url('https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css');

  #container {
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>


