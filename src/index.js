import storeConfiguration from './store/storeConfiguration';
import { todoAdded, todoRemoved, todoDone, todoDoneSelector } from './store/todos';
import { userAdded } from './store/users';

const store = storeConfiguration();

const unsubscribe = store.subscribe(() => {
	console.log("Update!!!", store.getState());
})

// store.dispatch(todoAdded({ title: 'study react' }));
// store.dispatch(todoAdded({ title: 'study redux' }));
// store.dispatch(todoAdded({ title: 'study next' }));
// store.dispatch(todoAdded({ title: 'study anyhting' }));
// store.dispatch(userAdded({ name: 'vincent' }));
// store.dispatch(todoDone({ id: 2 }));
// store.dispatch(todoRemoved({ id: 1 }));
// console.log(todoDoneSelector(store.getState()));
store.dispatch((getState, dispatch) => {
	// example we have API CALL
	let apiResp = { title: 'My-Thunk' };
	// After we get the response we need to dispatch it
	dispatch(todoAdded(apiResp));
	});

