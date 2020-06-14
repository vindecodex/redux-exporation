import * as actions from './actionTypes';

export const todoAdded = title => ({
	type: actions.TODO_ADDED,
	payload: {
		title
	}
});

export const todoRemoved = id => ({
	type: actions.TODO_REMOVED,
	payload: {
		id
	}
});

export const todoDone = id => ({
	type: actions.TODO_DONE,
	payload: { id }
});
