// ENTITIES REDUCER
import { combineReducers } from 'redux';
import todosReducer from './todos';
import usersReducer from './users';

export default combineReducers({
	todos: todosReducer,
	users: usersReducer
});
