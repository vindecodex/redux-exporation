import { createAction } from '@reduxjs/toolkit';

// ACTION CREATORS
export const todoAdded = createAction('todoAdded');
export const todoRemoved = createAction('todoRemoved');
export const todoDone = createAction('todoDone');

// ONLY THE REDUCER SHOULD BE EXPORTED IN DEFAULT
// REDUCER
let id = 0;
const initialState = [];
export default function reducer(state = initialState,action) {
	switch(action.type) {
		case todoAdded.type:
			return [
				...state,
				{
					id: ++id,
					title: action.payload.title,
					status: true
				}
			];
		case todoRemoved.type:
			return state.filter(todo => todo.id !== action.payload.id);
		case todoDone.type:
			return state.map(todo => 
				todo.id !== action.payload.id ? todo : {...todo, status: false}
			);
		default:
			return state;
	}
}
