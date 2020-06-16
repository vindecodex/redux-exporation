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
		onRequest: function(todo, action) {
			todo.loading = true;
		},
		requestReceived: function(todo, action) {
			todo.list = action.payload
			todo.loading = false;
		},
		requestFailed: function(todo, action) {
			todo.loading = false;
		},
		todoAdded: function(todo, action) {
		todo.list.push({
			id: ++id,
			title: action.payload.title,
			status: true
		});
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

export const { todoAdded, todoRemoved, todoDone, requestReceived, requestFailed, onRequest } = slice.actions;
export default slice.reducer;

export const loadTodos = () => apiRequestStarted({
	url: '/todos',
	onRequest: onRequest.type,
	onSuccess: requestReceived.type,
	onError: requestFailed.type
});

// Selector function
export const todoDoneSelector = state => state.entities.todos.filter(todo => !todo.status);
