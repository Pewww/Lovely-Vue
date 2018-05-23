<template>
  <div>
    <ul id="todo-list">
      <li v-for="(a, index) in todoList"
          :key="index"
          :class="checked(a.done)"
          @click="doneToggle({ index: index })">
        <span>{{ a.todo }}</span>
        <span class="close" @click.stop="deleteTodo({ index: index })">&#x00D7;</span>
      </li>
    </ul>
  </div>
</template>

<script>
import Constant from '../constant'
import { mapState, mapMutations } from 'vuex'
import _ from 'lodash'

export default {
  name: 'list',
  computed: mapState(['todoList']),
  // 다른 이름으로 하고 싶을 경우
  // computed: mapState ({
  //    todoListEx: (state) => state.todoList
  // })
  methods: _.extend({
    checked (done) {
      if (done) return { checked: true };
      else return { checked: false };
    }
  },
  mapMutations([
    Constant.DELETE_TODO,
    Constant.DONE_TOGGLE 
  ]))
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  ul li {
    cursor: pointer;
    position: relative;
    padding: 8px 8px 8px 40px;
    background-color: #eee;
    font-size: 14px;
    transition: 0.2s;
  }

  ul li:hover {
    background-color: #ddd;
  }

  ul li.checked {
    background-color: #bbb;
    color: #fff;
    text-decoration: line-through;
  }

  ul li.checked::before {
    content: '';
    position: absolute;
    border-color: #fff;
    border-style: solid;
    border-width: 0px 1px 1px 0;
    top: 10px;
    left: 16px;
    transform: rotate(45deg);
    height: 8px;
    width: 8px;
  }

  .close {
    position: absolute;
    right: 0;
    top: 0;
    padding: 8px 12px;
  }

  .close:hover {
    background-color: #f44336;
    color: #fff;
  }
</style>


