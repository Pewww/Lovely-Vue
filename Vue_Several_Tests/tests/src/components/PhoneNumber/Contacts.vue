<template>
  <div>
    <h1>연락처</h1>
    <div class="wrapper">
      <div v-for="c in contacts" :key="c.no" class="contacts">
        <!--<router-link :to="`/contacts/${c.no}`">
        <router-link :to="{ name: 'contact-by-no', params: { no: c.no }}">
          여기서 name은 router의 index.js에서 설정한 컴포넌트의 이름,
          params는 넘겨줄 parameters
          명명된 라우팅 방식
          {{ c.name }}
        </router-link>
        -->
        <span style="cursor:pointer" @click="navigate(c.no)">
          [ {{ c.name }} ]
        </span>
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
  methods: {
    navigate (to) {
      if (confirm('상세 정보를 보시겠습니까?')) {
        this.$router.push({
          name: 'contact-by-no',
          params: { no: to }
        }, () => {
          console.log(`/contacts${to} 로 이동 완료`);
        })
      } else {
        alert('취소되었습니다!');
      }
    }
  }
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
