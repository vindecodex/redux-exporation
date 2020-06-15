import { createSlice } from '@reduxjs/toolkit';

let id = 0;
const initialState = [];

// With this method no need to create action creators
const slice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		todoAdded: function(todo, action) {
		todo.push({
			id: ++id,
			title: action.payload.title,
			status: true
		});
		},
		todoRemoved: function(todo, action) {
const stateIndex = todo.findIndex(todo => todo.id === action.payload.id);
		todo.splice(stateIndex,1);
		},
		todoDone: function(todo, action) {
const stateIndex = todo.findIndex(todo => todo.id === action.payload.id);
		todo[stateIndex].status = false;
		}
	}
});

export const { todoAdded, todoRemoved, todoDone } = slice.actions;
export default slice.reducer;
