// named past tense because actions already done
// ACTION TYPE
const TODO_ADDED = 'todoAdded';
const TODO_REMOVED = 'todoRemoved';
const TODO_DONE = 'todoDone';

// ACTION CREATORS
export const todoAdded = title => ({
	type: TODO_ADDED,
	payload: {
		title
	}
});

export const todoRemoved = id => ({
	type: TODO_REMOVED,
	payload: {
		id
	}
});

export const todoDone = id => ({
	type: TODO_DONE,
	payload: { id }
});

// ONLY THE REDUCER SHOULD BE EXPORTED IN DEFAULT
// REDUCER
let id = 0;
const initialState = [];
export default function reducer(state = initialState,action) {
	switch(action.type) {
		case TODO_ADDED:
			return [
				...state,
				{
					id: ++id,
					title: action.payload.title,
					status: true
				}
			];
		case TODO_REMOVED:
			return state.filter(todo => todo.id !== action.payload.id);
		case TODO_DONE:
			return state.map(todo => 
				todo.id !== action.payload.id ? todo : {...todo, status: false}
			);
		default:
			return state;
	}
}
