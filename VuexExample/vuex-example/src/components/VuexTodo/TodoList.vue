<template>
	<div>
		<div id="header" class="header">
			<h2>Todo List App</h2>
			<input-todo></input-todo>
		</div>
		<list></list>
	</div>
</template>

<script>
import InputTodo from './InputTodo'
import List from './List'

export default {
	name: 'todo-list',
	components: {
		InputTodo, 
		List
	}
}
</script>

<style scoped>
	* {
		box-sizing: border-box;
	}

	.header {
		background-color: purple;
		padding: 30px 30px;
		color: yellow;
		text-align: center;
	}

	.header:after {
		content: '';
		display: table;
		clear: both;
	}
</style>


