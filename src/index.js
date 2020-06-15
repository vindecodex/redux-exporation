import storeConfiguration from './store/storeConfiguration';

// ACTION CREATORS
import * as actions from './store/api';

// REDUCERS
import { todoAdded, todoRemoved, todoDone, todoDoneSelector } from './store/todos';
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
store.dispatch(actions.apiRequestStarted({
	url: '/todos',
	onSuccess: actions.apiRequestSuccess.type,
	onError: actions.apiRequestFailed.type
}))
