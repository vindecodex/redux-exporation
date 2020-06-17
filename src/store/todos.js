import { createSlice } from '@reduxjs/toolkit';
import { apiRequestStarted } from './api';

let id = 0;

// With this method no need to create action creators
const slice = createSlice({
	name: "todo",
	initialState: {
		list: [],
		loading: false,
		lastFetch: []
	},
	reducers: {
		// with createSlice this action will be named space with todo/requestReceived
		requestReceived: function(todo, action) {
			todo.list = action.payload
		},
		todoAdded: function(todo, action) {
		todo.list.push({
			id: ++id,
			title: action.payload.title,
			status: true
		});
		},
		addTodo: function(todo, action) {
			todo.list.push(action.payload);
		},
		todoRemoved: function(todo, action) {
const stateIndex = todo.list.findIndex(todo => todo.id === action.payload.id);
		todo.list.splice(stateIndex,1);
		},
		todoDone: function(todo, action) {
const stateIndex = todo.list.findIndex(todo => todo.id === action.payload.id);
		todo.list[stateIndex].status = false;
		}
	}
});

export const { todoAdded, todoRemoved, addTodo, todoDone, requestReceived } = slice.actions;
export default slice.reducer;

export const addTodoServer = (todo) => apiRequestStarted({
	url: '/todos',
	method: 'post',
	onSuccess: addTodo.type,
	data: todo
});

export const loadTodos = () => apiRequestStarted({
	url: '/todos',
	onSuccess: requestReceived.type
});

// Selector function
export const todoDoneSelector = state => state.entities.todos.filter(todo => !todo.status);
