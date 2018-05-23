import Vue from 'vue'
import Vuex from 'vuex'
import constant from '../constant'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todoList: [
      { todo: '진영이랑 놀기', done: false },
      { todo: '근철이랑 사과 먹기', done: true },
      { todo: '오렌지 즙 짜기', done: false },
      { todo: '헬로 하기', done: false }
    ]
  },
  mutations: {
    [constant.ADD_TODO]: (state, payload) => {
      if (payload.todo !== '') {
        state.todoList.push({
          todo: payload.todo,
          done: false
        });
      }
    },
    [constant.DONE_TOGGLE]: (state, payload) => {
      state.todoList[payload.index].done = !state.todoList[payload.index].done;
    },
    [constant.DELETE_TODO]: (state, payload) => {
      state.todoList.splice(payload.index, 1);
    }
  }
});

export default store;

