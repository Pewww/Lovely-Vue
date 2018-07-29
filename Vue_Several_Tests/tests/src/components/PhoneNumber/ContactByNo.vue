<template>
  <div>
    <hr>
    <h2>연락처 상세</h2>
    <div>
      <table>
        <tbody>
          <tr>
            <td>일련번호</td>
            <td>{{ contact.no }}</td>
          </tr>
          <tr>
            <td>이름</td>
            <td>{{ contact.name }}</td>
          </tr>
          <tr>
            <td>전화</td>
            <td>{{ contact.tel }}</td>
          </tr>
          <tr>
            <td>주소</td>
            <td>{{ contact.address }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import contactList from '../../ContactList'

export default {
  name: 'contact-by-no',
  data () {
    return {
      contacts: contactList.contacts
    }
  },
  props: ['no'],
  computed: {
    contact () {
      let no = this.no;
      let arr = this.contacts.filter(v => v.no == no);

      return arr.length === 1 ? arr[0] : {};
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(to);
      console.log(from);
      this.no = to.params.no;
    }
  }
}
</script>
