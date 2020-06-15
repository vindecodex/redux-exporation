import { createAction, createReducer } from '@reduxjs/toolkit';

// ACTION CREATORS
export const todoAdded = createAction('todoAdded');
export const todoRemoved = createAction('todoRemoved');
export const todoDone = createAction('todoDone');

// ONLY THE REDUCER SHOULD BE EXPORTED IN DEFAULT
// REDUCER
let id = 0;
const initialState = [];
// createReducer accepts two arguments 1: initial state 2: object
// key is the action creator type with a value of function the will manipulate the state
export default createReducer(initialState, {
	[todoAdded.type]: function(state, action) {
		state.push({
			id: ++id,
			title: action.payload.title,
			status: true
		})
	},
	[todoRemoved.type]: function(state, action) {
		const stateIndex = state.findIndex(todo => todo.id === action.payload.id)
		state.splice(stateIndex,1)
	},
	[todoDone.type]: function(state, action) {
		const stateIndex = state.findIndex(todo => todo.id === action.payload.id)
		state[stateIndex].status = false
	}
})
