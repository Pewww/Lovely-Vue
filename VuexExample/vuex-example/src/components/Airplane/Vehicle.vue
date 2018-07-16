<template>
  <div id="vehicle">
    <h1>여행 예약 시스템</h1>
    <ul>
      <li v-for="(v, index) in vehicles" 
          :key="index">
        <div class="vehicle-name">{{ v.name }}</div>
        <button name="button" @click="moveTo(index)">
          해당 예약 페이지로 이동
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'vehicle',
  data () {
    return {
      vehicles: [
        { name: 'Bus' },
        { name: 'Airplane' },
        { name: 'RentCar' }
      ]
    }
  },
  methods: {
    moveTo (idx) {
      if (idx === 0) {
        this.$router.push('/bus');
      } else if (idx === 1) {
        this.$router.push('/airplane');
      } else {
        this.$router.push('/rent-car');
      }
    }
  }
}
</script>

<style scoped>
  #vehicle {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  h1 {
    text-align: center;
    color: #454545;
  }

  ul {
    text-align: center;
  }

  ul li {
    list-style: none;
    width: 300px;
    height: 350px;
    box-shadow: 0 0 3px darkgray;
    display: inline-block;
    vertical-align: top;
    margin: 50px;
  }

  .vehicle-name {
    text-transform: uppercase;
    font-size: 1.5rem;
    color: #404040;
    padding-top: 7.5rem;
    font-weight: bold;
  }

  button {
    border: 0;
    width: 12rem;
    height: 2.8rem;
    border-radius: 50px;
    background-color: #666;
    color: #fff;
    font-size: 0.9rem;
    margin-top: 1rem;
    cursor: pointer;
  }
</style>

