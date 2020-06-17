import storeConfiguration from './store/storeConfiguration';

// ACTION CREATORS
import * as actions from './store/api';

// REDUCERS
import { todoAdded, addTodoServer, todoRemoved, todoDone, todoDoneSelector, loadTodos } from './store/todos';
import { userAdded } from './store/users';

const store = storeConfiguration();

const unsubscribe = store.subscribe(() => {
	console.log("Update!!!", store.getState());
});

// store.dispatch(todoAdded({ title: 'study react' }));
// store.dispatch(todoAdded({ title: 'study redux' }));
// store.dispatch(todoAdded({ title: 'study next' }));
// store.dispatch(todoAdded({ title: 'study anyhting' }));
// store.dispatch(userAdded({ name: 'vincent' }));
// store.dispatch(todoDone({ id: 2 }));
// store.dispatch(todoRemoved({ id: 1 }));
// console.log(todoDoneSelector(store.getState()));
// store.dispatch((dispatch, getState) => {
	// example we have API CALL
	// let apiResp = { title: 'My-Thunk' };
	// After we get the response we need to dispatch it
	// dispatch(todoAdded(apiResp));
// });
store.dispatch(loadTodos());
store.dispatch(addTodoServer({
	id: 6,
	title: 'todo 6',
	status: true
}));

