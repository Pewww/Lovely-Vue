import Vue from 'vue'
import Vuex from 'vuex'
import Constant from '../Constant'
import _ from 'lodash'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentRegion: 'all',
    countries: [
      { no: 1, name: '미국', capital: '워싱턴 DC', region: 'America' },
      { no: 2, name: '영국', capital: '런던', region: 'Europe' },
      { no: 3, name: '중국', capital: '베이징', region: 'Asia' },
      { no: 4, name: '태국', capital: '방콕', region: 'Asia' },
      { no: 5, name: '모로코', capital: '라바트', region: 'Africa' },
      { no: 6, name: '라오스', capital: '비엔티안', region: 'Asia' },
      { no: 7, name: '베트남', capital: '하노이', region: 'Asia' },
      { no: 8, name: '피지', capital: '수바', region: 'Oceania' },
      { no: 9, name: '솔로몬 제도', capital: '호니아라', region: 'Oceania' },
      { no: 10, name: '자메이카', capital: '킹스턴', region: 'America' },
      { no: 11, name: '나미비아', capital: '빈트후크', region: 'Africa' },
      { no: 12, name: '동티모르', capital: '딜리', region: 'Asia' },
      { no: 13, name: '멕시코', capital: '멕시코시티', region: 'America' },
      { no: 14, name: '베네수엘라', capital: '카라카스', region: 'America' },
      { no: 15, name: '서사모아', capital: '아피아', region: 'Oceania' },
      { no: 16, name: '프랑스', capital: '파리', region: 'Europe' }
    ], // 전체 나라들의 리스트
  },
  getters: {
    countriesByRegion (state) {
      if (state.currentRegion === 'all') return state.countries;
      else return state.countries.filter(v => v.region === state.currentRegion);
    },
    regions (state) {
      let temp = state.countries.map(v => v.region);
      temp = _.uniq(temp);
      temp.unshift('all');

      return temp;
    },
    currentRegion (state) {
      return state.currentRegion;
    }
  },
  mutations: {
    [Constant.CHANGE_REGION]: (state, payload) => {
      state.currentRegion = payload.region;
      console.log(state.currentRegion);
    }
  }
});

export default store;
