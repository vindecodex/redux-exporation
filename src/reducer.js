import * as actions from './actionTypes';

let id = 0;
const initialState = [];
export default function reducer(state = initialState,action) {
	switch(action.type) {
		case actions.TODO_ADDED:
			return [
				...state,
				{
					id: ++id,
					title: action.payload.title,
					status: true
				}
			];
		case actions.TODO_REMOVED:
			return state.filter(todo => todo.id !== action.payload.id);
		case actions.TODO_DONE:
			return state.map(todo => {
				if (todo.id === action.payload.id) {
					return {
						id: todo.id,
						title: todo.title,
						status: false
					};
				}
				return todo;
			});
		default:
			return state;
	}
}
