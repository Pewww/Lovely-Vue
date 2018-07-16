<template>
  <div id="airplane">
    <h1>비행기 예약</h1>
    <input type="text" placeholder="이름 입력"
           v-model.trim="name">
    <input type="text" placeholder="항공사 입력"
           v-model.trim="airplane">
    <button @click="submitUserInfo">
      등록
    </button>
    <template v-if="checkInfo">
    <input type="number" placeholder="등급 입력"
           v-model.trim="airGrade" min="1" max="3">
    <input type="number" placeholder="인원 수 입력"
           v-model.trim="userCount" min="1" max="100">
    <input type="text" placeholder="여행사 입력"
           v-model.trim="airCompany">
    <button @click="addAllInfo">
      예약
    </button>
    </template>
  </div>
</template>

<script>
export default {
  name: 'airplane',
  data () {
    return {
      checkInfo: false,
      name: '',
      airplane: '',
      airGrade: 3,
      userCount: 1,
      airCompany: '',
      airplanes: [
        {
          name: '대한항공',
          price: {
            first: 50,
            second: 30,
            third: 15
          }
        },
        {
          name: '아시아나',
          price: {
            first: 60,
            second: 25,
            third: 10
          }
        },
        {
          name: '세부',
          price: {
            first: 40,
            second: 30,
            third: 18
          }
        }
      ]
    }
  },
  methods: {
    submitUserInfo () {
      this.checkName();
      this.checkAir();
    },

    checkName () {
      let name = this.name;
      if (name !== '') {
        localStorage.setItem('UserName', name);
      }
    },

    checkAir () {
      let airplane = this.airplane;
      let airplanes = this.airplanes;

      if (airplane !== '') {
        airplanes.forEach(v => {
          if (airplane === v.name) {
            localStorage.setItem('UserAirplane', airplane);
            this.checkInfo = true;
            alert('정보 등록 성공!');
          }
        })
      } else {
        alert('정보를 입력해주세요.');
      }
    },

    addAllInfo () {
      let airplanes = this.airplanes;
      this.val = airplanes.filter(v => v.name === localStorage['UserAirplane'])[0];

      this.checkGrade();
      this.checkNumber();
      this.checkDC();

      alert('완료되었습니다!');

      // this.$router.push('/done');
    },
    
    checkGrade () {
      let airGrade = this.airGrade - 1;
      localStorage.setItem('AirGrade', airGrade);
    },

    checkNumber () {
      let airGrade = this.airGrade - 1;
      let personNum = this.userCount;
      let airText = '';

      if (airGrade === 0) airText = 'first';
      else if (airGrade === 1) airText = 'second';
      else if (airGrade === 2) airText = 'third';

      localStorage.setItem('UserCount', personNum);
      localStorage.setItem('AirPrice', parseInt(this.val.price[airText] * personNum));
    },

    checkDC () {
      const airs = ['대한항공-여행사', '아시아나-여행사', '세부-여행사'];
      let airComp = this.airCompany;

      if (airComp !== '') {
        airs.forEach(v => {
          if (v === airComp) {
            alert('10% 할인 되었습니다!');
            localStorage.setItem('DcValue', '10%');
            localStorage.setItem('TotalPrice', (localStorage['AirPrice'] * 0.9));
          }
        })
      }
    }
  }
}
</script>

<style scoped>
  h1 {
    text-align: center;
  }

  input {
    display: block;
    width: 20rem;
    height: 2.8rem;
    border: 1px solid #404040;
    border-radius: 5px;
    margin: 3rem auto;
    padding-left: 1rem;
    font-size: 0.95rem;
  }

  button {
    width: 10rem;
    height: 2.5rem;
    display: block;
    margin: 0 auto;
  }
</style>


